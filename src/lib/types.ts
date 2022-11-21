export type Config = typeof DefaultConfig
export type ISODate = `${number}-${number}-${number}`

export const DefaultConfig: Record<string, string> = {
  siteName: "Jumping Hoops",
  siteDescription: "A blog on basketball and neoliberalism",
  favicon: "🏀",
  themeColor: "#FE6262",
  backgroundColor: "#D6D6D6",
  navFont: "mono",
  bodyFont: "serif",
  titleFont: "sans-serif",
  image: "https://images.unsplash.com/photo-1609741200064-2ef87d5eb200?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  imageAlt: "A clown amongst stormtroopers",
  title: "I was bullied in kindergarten. Now I teach pre-schoolers LISP",
  description: "Trauma is cyclical",
  content: "",
  author: "Paul G.",
  publishedDate: "2021-04-01" as ISODate,
}
