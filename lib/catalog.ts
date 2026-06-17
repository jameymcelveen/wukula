export const SHOP = {
  name: "Wukela's",
  fullName: "Wukela's House of Clocks",
  tagline: "Quality merchandise at affordable prices.",
  phoneDisplay: "(843) 665-8866",
  phoneHref: "tel:+18436658866",
  address: "403 2nd Loop Road, Florence, SC 29505",
  hours: "Monday to Saturday, around 10 to 6. Hours shift near the holidays, so please call ahead.",
  established: 1977,
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Wukela%27s+House+of+Clocks+403+2nd+Loop+Road+Florence+SC+29505",
}

export type Spec = { key: string; value: string }

export type Product = {
  id: string
  type: "product"
  name: string
  brand: string
  category: "Wall Clocks" | "Antique & Refurbished"
  description: string
  specs: Spec[]
  price: number
  originalPrice?: number
  tag: "Special Sale" | "Refurbished"
  image: string
  alt: string
}

export type Department = {
  id: string
  type: "department"
  name: string
  label: string
  category: "Home & Gifts" | "Christmas"
  blurb: string
  items: string[]
}

export type CatalogEntry = Product | Department

export const CATEGORIES = [
  "All",
  "Wall Clocks",
  "Antique & Refurbished",
  "Home & Gifts",
  "Christmas",
] as const

// Image sources: swap each placeholder for your own photo here.
const IMG_HOWARD_MILLER_WESTMINSTER =
  "/placeholder.svg?height=750&width=600"
const IMG_HERMLE_PEDIMENT = "/placeholder.svg?height=750&width=600"
const IMG_HERMLE_CONTEMPORARY = "/placeholder.svg?height=750&width=600"
const IMG_CALENDAR_REGULATOR = "/placeholder.svg?height=750&width=600"
const IMG_GERMAN_BOX_REGULATOR = "/placeholder.svg?height=750&width=600"

export const PRODUCTS: Product[] = [
  {
    id: "howard-miller-westminster-wall",
    type: "product",
    name: "Howard Miller Westminster Chime Wall Clock",
    brand: "Howard Miller",
    category: "Wall Clocks",
    description:
      "A clean, contemporary wall clock in a deep espresso finish. The crisp white dial and brushed silver bezel keep the look modern, while the Westminster chime and swinging pendulum carry the warmth of a traditional key-wound movement.",
    specs: [
      { key: "Movement", value: "Key-wound mechanical" },
      { key: "Chime", value: "Westminster, on the quarter hour" },
      { key: "Case", value: "Espresso-finished hardwood, glass door" },
      { key: "Pendulum", value: "Brushed metal bob" },
    ],
    originalPrice: 1641,
    price: 989,
    tag: "Special Sale",
    image: IMG_HOWARD_MILLER_WESTMINSTER,
    alt: "Howard Miller espresso wall clock with white dial and pendulum",
  },
  {
    id: "hermle-pediment-wall",
    type: "product",
    name: "Hermle Pediment Wall Clock",
    brand: "Hermle",
    category: "Wall Clocks",
    description:
      "Traditional craftsmanship from one of Germany's most respected clockmakers. A broken-arch pediment and turned finial crown the cherry case, with fluted columns framing an ornate two-tone dial.",
    specs: [
      { key: "Movement", value: "German-made mechanical, 8-day key-wound" },
      { key: "Chime", value: "Westminster" },
      { key: "Case", value: "Cherry finish, fluted columns, turned finial" },
      { key: "Dial", value: "Two-tone silver and brass" },
    ],
    originalPrice: 1167,
    price: 699,
    tag: "Special Sale",
    image: IMG_HERMLE_PEDIMENT,
    alt: "Hermle cherry wall clock with broken-arch pediment and ornate dial",
  },
  {
    id: "hermle-contemporary-westminster",
    type: "product",
    name: "Hermle Contemporary Westminster Wall Clock",
    brand: "Hermle",
    category: "Wall Clocks",
    description:
      "Made in Germany and built to be seen working. The full glass front shows the brass weights and pendulum in motion, while the eight-day Westminster movement marks every quarter hour. Modern lines over old-world mechanics.",
    specs: [
      { key: "Movement", value: "German-made mechanical, 8-day, weight-driven" },
      { key: "Chime", value: "Westminster" },
      { key: "Case", value: "Mahogany finish, full glass front" },
      { key: "Origin", value: "Made in Germany" },
    ],
    originalPrice: 1350,
    price: 899,
    tag: "Special Sale",
    image: IMG_HERMLE_CONTEMPORARY,
    alt: "Hermle contemporary mahogany wall clock with brass pendulum and weights",
  },
  {
    id: "calendar-regulator-wall",
    type: "product",
    name: "Calendar Regulator Wall Clock",
    brand: "Howard Miller",
    category: "Antique & Refurbished",
    description:
      "A refurbished schoolhouse regulator with a true calendar dial: the outer ring tracks the day of the month, 1 through 31, the way station and office clocks once did. Honest oak, fully serviced, ready for another lifetime on the wall.",
    specs: [
      { key: "Style", value: "Calendar regulator, schoolhouse" },
      { key: "Case", value: "Oak" },
      { key: "Condition", value: "Refurbished and serviced" },
      { key: "Warranty", value: "One year" },
    ],
    price: 699,
    tag: "Refurbished",
    image: IMG_CALENDAR_REGULATOR,
    alt: "Refurbished oak Howard Miller calendar regulator wall clock",
  },
  {
    id: "antique-german-box-regulator",
    type: "product",
    name: "Antique German Box Regulator",
    brand: "German, early 1900s",
    category: "Antique & Refurbished",
    description:
      "An early twentieth-century German wall clock in quarter-sawn oak, with a carved crest and beveled leaded glass. The silvered dial and case have been carefully restored and the movement fully serviced. A genuine antique, not a reproduction.",
    specs: [
      { key: "Era", value: "Circa 1900s to 1920s" },
      { key: "Origin", value: "Germany" },
      { key: "Case", value: "Quarter-sawn oak, carved crest, beveled glass" },
      { key: "Movement", value: "8-day mechanical, restored" },
      { key: "Warranty", value: "One year" },
    ],
    price: 799,
    tag: "Refurbished",
    image: IMG_GERMAN_BOX_REGULATOR,
    alt: "Antique German oak box regulator wall clock with beveled leaded glass",
  },
]

export const DEPARTMENTS: Department[] = [
  {
    id: "home-gifts",
    type: "department",
    name: "Home Decor & Gifts",
    label: "Department",
    category: "Home & Gifts",
    blurb:
      "The browsing half of the shop. Lamps and accents, jewelry, scarves and handbags, and the small dainty pieces that make a good gift. The selection turns over often, so it is best seen in person.",
    items: [
      "Home accessories & decor",
      "Jewelry, scarves & handbags",
      "Gifts for every occasion",
      "Interior decorating service",
    ],
  },
  {
    id: "christmas",
    type: "department",
    name: "The Christmas Department",
    label: "Year-round",
    category: "Christmas",
    blurb:
      "A full Christmas shop inside the store: trees, wreaths, garlands, and ornaments, plus a decorating service that will dress your home or business for the season. Open year-round, busiest from October on.",
    items: [
      "Christmas trees",
      "Wreaths & garlands",
      "Ornaments & collectibles",
      "Holiday decorating service",
    ],
  },
]

// All view order: five clocks first, then the two department cards.
export const CATALOG: CatalogEntry[] = [...PRODUCTS, ...DEPARTMENTS]

export function formatPrice(n: number) {
  return "$" + n.toLocaleString("en-US")
}
