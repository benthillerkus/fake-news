export type PublicationConfig = typeof DefaultPublicationConfig
export type ArticleConfig = typeof DefaultArticleConfig
export type ISODate = `${number}-${number}-${number}`

export const DefaultPublicationConfig: Record<string, string> = {
  siteName: "Jumping Hoops",
  siteDescription: "A blog on basketball and neoliberalism",
  favicon: "🏀",
  themeColor: "orange",
  backgroundColor: "antiquewhite",
}

export const DefaultArticleConfig: Record<string, string> = {
  title: "I was bullied in kindergarten. Now I teach pre-schoolers LISP",
  description: "Trauma is cyclical",
  author: "Paul G.",
  image: "https://images.unsplash.com/photo-1609741200064-2ef87d5eb200?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  imageAlt: "A clown",
  publishedAt: "2021-04-01" as ISODate,
}
