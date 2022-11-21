import { tryDeserialize } from "$lib/deser";
import { DefaultConfig, type Config } from "$lib/types";
import type { PageLoad } from "./$types"
export const csr = false;

export const load: PageLoad = async ({ params, url }) => {
  let serialized: string;
  switch (params.source) {
    case "web":
      const response = await fetch(decodeURI(params.content));
      serialized = await response.text();
      break;
    default:
      serialized = params.content;
      break;
  }

  const queryParams: Record<string, any> = {}
  for (const [key, value] of url.searchParams.entries()) {
    queryParams[key] = value
  }

  return {
    config: {
      ...DefaultConfig,
      ...tryDeserialize(serialized),
      ...queryParams,
    },
    url
  }
}
