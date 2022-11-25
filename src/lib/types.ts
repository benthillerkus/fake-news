export type Config = typeof DefaultConfig
export type ISODate = `${number}-${number}-${number}`

export const DefaultConfig: Record<string, string> = {
  version: "2",
  style: "Blog",
  siteName: "I love Horses!",
  siteDescription: "boys not allowed!!",
  icon: "🐎",
  themeColor: "pink",
  backgroundColor: "url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format,compress&fit=crop') repeat repeat",
  navFont: "Handwriting",
  titleFont: "Serif",
  bodyFont: "Mono",
  imageUrl: "https://images.unsplash.com/photo-1590396494304-bb9b9d248ff3?fit=crop&h=500&ar=1:1.1&crop=entropy&auto=compress,format",
  imageAlt: "A horse smiling at the camera. The picture has a warm tone.",
  title: "I have hacked my sister's webserver",
  description: "Now I can post whatever I want!",
  content: "",
  author: "Paul G.",
  publishedDate: "2012-06-13" as ISODate,
}

export const Help: Record<string, string> = {
  icon: "Try pasting a link to an image instead 😎",
  themeColor: "Most styles feed this into the CSS `background` property - so you can also add gradients or images if you want.",
  backgroundColor: "The automatic text color selection only works for hex codes",
  navFont: "You can use a custom font by overriding this field in the url -- e.g. `?navFont=Copperplate%20Gothhic`",
  content: "This is the main content of the page. It's written in Markdown, so you can use all the usual formatting tricks.",
}

export const Fonts = ["Serif", "Sans Serif", "Mono", "Handwriting"]
export const Themes = ["Blog", "News", "Aggregator"]
