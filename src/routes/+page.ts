import { tryDeserialize } from "$lib/deser";
import { DefaultConfig } from "$lib/types";
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({
  url }) => {
  return {
    config: {
      ...DefaultConfig,
      ...tryDeserialize(url.searchParams.get("config")),
    },
    url
  }
};
