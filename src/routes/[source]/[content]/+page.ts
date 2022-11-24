import type { PageLoad } from "./$types"
import { tryDeserialize } from "$lib/deser";
import { DefaultConfig } from "$lib/types";
import { upgradeVersion } from "$lib/versioning";

export const csr = import.meta.env.DEV;

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

  let config = tryDeserialize(serialized);
  if (config) {
    config = upgradeVersion(config);
  }

  let queryParams: Record<string, any> = {}
  for (const [key, value] of url.searchParams.entries()) {
    queryParams[key] = value
  }
  queryParams = upgradeVersion(queryParams)

  return {
    config: {
      ...DefaultConfig,
      ...config,
      ...queryParams,
    },
    url
  }
}
