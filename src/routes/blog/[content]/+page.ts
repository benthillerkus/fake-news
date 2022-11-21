import { deserialize, tryDeserialize } from "$lib/deser";
import { DefaultArticleConfig, type ArticleConfig } from "$lib/types";
import type { PageLoad } from "./$types"
export const csr = false;

export const load: PageLoad = async ({ params, url }) => {
  return {
    ...DefaultArticleConfig,
    ...tryDeserialize(params.content),
    url
  }
}