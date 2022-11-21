import { deserialize, tryDeserialize } from "$lib/deser"
import { DefaultPublicationConfig, type PublicationConfig } from "$lib/types"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ params }) => {
  return {
    ...DefaultPublicationConfig,
    ...tryDeserialize(params.content)
  }
}
