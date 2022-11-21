import { tryDeserialize } from "$lib/deser";
import { DefaultConfig, type Config } from "$lib/types";
import type { PageLoad } from "./$types"
export const csr = false;

export const load: PageLoad = async ({ params, url }) => {

  const queryParams: Record<string, any> = {}
  for (const [key, value] of url.searchParams.entries()) {
    queryParams[key] = value
  }

  return {
    config: {
      ...DefaultConfig,
      ...tryDeserialize(params.content),
      ...queryParams,
    },
    url
  }
}
