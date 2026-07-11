export type NavLeaf = { label: string; path: string; keywords?: string[] };
export type NavGroup = { label: string; children: NavLeaf[] };
export type NavItem =
  | { type: "link"; label: string; path: string; keywords?: string[] }
  | { type: "group"; label: string; children: NavLeaf[] };

export const NAV_MENU: NavItem[] = [
  { type: "link", label: "Home", path: "/", keywords: ["home", "start"] },
  {
    type: "group",
    label: "Kitchens",
    children: [
      { label: "Modular Kitchen", path: "/kitchens/modular-kitchen", keywords: ["modular", "kitchen"] },
      { label: "Classic Kitchen", path: "/kitchens/classic-kitchen", keywords: ["classic", "kitchen"] },
      { label: "Modern Kitchen", path: "/kitchens/modern-kitchen", keywords: ["modern", "kitchen"] },
    ],
  },
  {
    type: "group",
    label: "Wardrobes",
    children: [
      { label: "Wardrobe", path: "/wardrobes/wardrobe", keywords: ["wardrobe"] },
      { label: "Classic Wardrobe", path: "/wardrobes/classic-wardrobe", keywords: ["classic", "wardrobe"] },
      { label: "Aluminium Wardrobe", path: "/wardrobes/aluminium-wardrobe", keywords: ["aluminium", "aluminum", "wardrobe"] },
      { label: "Walk-in Closet", path: "/wardrobes/walk-in-closet", keywords: ["walk-in", "closet", "walkin"] },
    ],
  },
  {
    type: "group",
    label: "Doors",
    children: [
      { label: "Main Doors", path: "/doors/main-doors", keywords: ["main", "door", "entrance"] },
      { label: "Bed & Bathroom Doors", path: "/doors/bed-bathroom-doors", keywords: ["bed", "bathroom", "door"] },
      { label: "Engineered Doors", path: "/doors/engineered-doors", keywords: ["engineered", "door"] },
      { label: "Sliding Doors", path: "/doors/sliding-doors", keywords: ["sliding", "door"] },
    ],
  },
  {
    type: "group",
    label: "Interiors",
    children: [
      { label: "Media Walls", path: "/interiors/media-walls", keywords: ["media", "tv", "wall"] },
      { label: "Feature Walls", path: "/interiors/feature-walls", keywords: ["feature", "wall"] },
      { label: "Bed Walls", path: "/interiors/bed-walls", keywords: ["bed", "wall", "headboard"] },
      { label: "Wooden Flooring", path: "/interiors/wooden-flooring", keywords: ["wood", "floor", "wooden", "flooring"] },
    ],
  },
  {
    type: "group",
    label: "Home Furnitures",
    children: [
      { label: "Laminated Furnitures", path: "/home-furnitures/laminated", keywords: ["laminated", "furniture"] },
      { label: "Cushion Furnitures", path: "/home-furnitures/cushion", keywords: ["cushion", "sofa", "furniture"] },
      { label: "Wooden Furnitures", path: "/home-furnitures/wooden", keywords: ["wooden", "wood", "furniture"] },
    ],
  },
  {
    type: "group",
    label: "Kitchen Appliances",
    children: [
      { label: "Vatti", path: "/kitchen-appliances/vatti", keywords: ["vatti", "appliance"] },
      { label: "Fotile", path: "/kitchen-appliances/fotile", keywords: ["fotile", "appliance"] },
      { label: "Robam", path: "/kitchen-appliances/robam", keywords: ["robam", "appliance"] },
      { label: "Bosch", path: "/kitchen-appliances/bosch", keywords: ["bosch", "appliance"] },
    ],
  },
  { type: "link", label: "Kitchen Accessories", path: "/kitchen-accessories", keywords: ["kitchen", "accessories"] },
  { type: "link", label: "Wardrobe Accessories", path: "/wardrobe-accessories", keywords: ["wardrobe", "accessories"] },
  { type: "link", label: "About Us", path: "/about", keywords: ["about", "us", "company", "story"] },
  { type: "link", label: "Contact Us", path: "/contact", keywords: ["contact", "us", "phone", "email"] },
];

export type SearchEntry = { label: string; path: string; category?: string; haystack: string };

export const SEARCH_INDEX: SearchEntry[] = NAV_MENU.flatMap((item) => {
  if (item.type === "link") {
    return [{
      label: item.label,
      path: item.path,
      haystack: [item.label, ...(item.keywords ?? [])].join(" ").toLowerCase(),
    }];
  }
  return item.children.map((c) => ({
    label: c.label,
    path: c.path,
    category: item.label,
    haystack: [c.label, item.label, ...(c.keywords ?? [])].join(" ").toLowerCase(),
  }));
}).concat([
  { label: "About", path: "/about", haystack: "about company story" },
  { label: "Services", path: "/services", haystack: "services offerings" },
  { label: "Projects", path: "/projects", haystack: "projects portfolio gallery" },
  { label: "FAQ", path: "/faq", haystack: "faq frequently asked questions" },
  { label: "Contact", path: "/contact", haystack: "contact phone email location" },
  { label: "Book Consultation", path: "/book", haystack: "book consultation appointment meeting" },
]);

export function searchNav(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/);
  return SEARCH_INDEX
    .map((entry) => {
      let score = 0;
      for (const t of tokens) {
        if (entry.haystack.includes(t)) score += 1;
        if (entry.label.toLowerCase().startsWith(t)) score += 2;
      }
      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.entry);
}
