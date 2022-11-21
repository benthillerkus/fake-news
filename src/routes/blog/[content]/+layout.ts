import { tryDeserialize } from "$lib/deser"
import { DefaultPublicationConfig, type PublicationConfig } from "$lib/types"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ params, url }) => {

  const queryParams: Record<string, any> = {}
  for (const [key, value] of url.searchParams.entries()) {
    queryParams[key] = value
  }

  return {
    ...DefaultPublicationConfig,
    ...tryDeserialize(params.content),
    ...url.searchParams.entries,
    ...queryParams
  }
}
