export type Config = typeof DefaultConfig
export type ISODate = `${number}-${number}-${number}`

export const DefaultConfig: Record<string, string> = {
  siteName: "Jumping Hoops",
  siteDescription: "A blog on basketball and neoliberalism",
  favicon: "🏀",
  themeColor: "orange",
  backgroundColor: "antiquewhite",
  navFont: "mono",
  bodyFont: "serif",
  titleFont: "sans-serif",
  title: "I was bullied in kindergarten. Now I teach pre-schoolers LISP",
  description: "Trauma is cyclical",
  author: "Paul G.",
  image: "https://images.unsplash.com/photo-1609741200064-2ef87d5eb200?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  imageAlt: "A clown",
  publishedAt: "2021-04-01" as ISODate,
}
