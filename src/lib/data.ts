export type Product = {
  id: string;
  name: string;
  zh: string;
  price: string;
  emotion: string;
  note: string;
  ritual: string[];
  hue: string;
};

export const products: Product[] = [
  {
    id: "moon-axis",
    name: "Moon Axis",
    zh: "月之轴",
    price: "$168",
    emotion: "Alignment",
    note: "A quiet object for returning scattered attention to one central line.",
    ritual: ["Place at eye level", "Follow the edge of light", "Name one feeling without repair"],
    hue: "#d8cfc3",
  },
  {
    id: "lantern-breath",
    name: "Lantern Breath",
    zh: "灯息",
    price: "$148",
    emotion: "Breath",
    note: "A warm pulse for rooms that need a softer rhythm.",
    ritual: ["Light the form", "Observe breath", "Let the room answer slowly"],
    hue: "#cdbb9d",
  },
  {
    id: "shell-silence",
    name: "Shell Silence",
    zh: "贝壳静默",
    price: "$132",
    emotion: "Silence",
    note: "A palm-scale vessel for holding the moment before language.",
    ritual: ["Hold with both hands", "Listen for texture", "Release the first thought"],
    hue: "#e5ddd0",
  },
  {
    id: "window-memory",
    name: "Window Memory",
    zh: "窗之忆",
    price: "$188",
    emotion: "Memory",
    note: "A refractive frame for meeting the image beneath the image.",
    ritual: ["Stand near morning light", "Trace the inner border", "Choose what remains"],
    hue: "#c9c1b5",
  },
  {
    id: "lotus-void",
    name: "Lotus Void",
    zh: "莲之空",
    price: "$216",
    emotion: "Void",
    note: "A sculptural pause for letting excess meaning fall away.",
    ritual: ["Clear the surface", "Count seven slow breaths", "Let absence become spacious"],
    hue: "#ddd4c8",
  },
  {
    id: "ruyi-flow",
    name: "Ruyi Flow",
    zh: "如意流",
    price: "$196",
    emotion: "Flow",
    note: "A continuous contour for restoring ease to decision and movement.",
    ritual: ["Move the object once", "Follow the curve", "Act from the calmest point"],
    hue: "#cbbfae",
  },
  {
    id: "twin-presence",
    name: "Twin Presence",
    zh: "双临",
    price: "$248",
    emotion: "Presence",
    note: "A paired form for rooms, partners, and the self that witnesses itself.",
    ritual: ["Set the pair apart", "Close the distance by one breath", "Notice what softens"],
    hue: "#e1d7ca",
  },
];

export const journalEntries = [
  {
    title: "Silence Is Not Empty",
    emotion_tag: "Presence",
    mood_level: 4,
    date: "2026-07-05",
    content:
      "A daily note on how luxury can shift from acquisition to attention, from object to ritual.",
  },
  {
    title: "The Room Learns Your Breath",
    emotion_tag: "Breath",
    mood_level: 3,
    date: "2026-06-28",
    content:
      "Ambient product systems become meaningful when they slow the nervous system without announcing themselves.",
  },
  {
    title: "Commerce After Urgency",
    emotion_tag: "Clarity",
    mood_level: 5,
    date: "2026-06-20",
    content:
      "The next luxury platform does not push conversion. It builds enough trust for the customer to arrive.",
  },
];

export const navItems = [
  { href: "/story", label: "STORY" },
  { href: "/ritual", label: "RITUAL" },
  { href: "/collection", label: "COLLECTION" },
  { href: "/journal", label: "JOURNAL" },
  { href: "/pitch", label: "PITCH" },
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id) ?? products[0];
}
