export type Config = typeof DefaultConfig
export type ISODate = `${number}-${number}-${number}`

export const DefaultConfig: Record<string, string> = {
  style: "blog" as "blog" | "newspaper",
  siteName: "I love Horses!",
  siteDescription: "🐎 boys not allowed!!",
  favicon: "🌸",
  themeColor: "pink",
  backgroundColor: "url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format,compress&fit=crop') repeat repeat",
  navFont: "Handwriting",
  titleFont: "Serif",
  bodyFont: "Mono",
  imageUrl: "https://images.unsplash.com/photo-1590396494304-bb9b9d248ff3?fit=crop&ar=1:1.1&crop=entropy&auto=compress,format",
  imageAlt: "A horse smiling at the camera. The picture has a warm tone.",
  title: "I have hacked my sister's webserver",
  description: "Now I can post whatever I want!",
  content: "",
  author: "Paul G.",
  publishedDate: "2012-06-13" as ISODate,
}

export const Fonts = ["Serif", "Sans Serif", "Mono", "Handwriting"]