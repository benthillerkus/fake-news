import { deserialize } from "$lib/deser";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const page = url.searchParams.get("url")!;
  const config = page.replace(url.origin + "/blog/", "");
  const deserialized = deserialize(config);

  const maxwidth = url.searchParams.get("maxwidth");
  const maxheight = url.searchParams.get("maxheight");
  const format = url.searchParams.get("format");

  return json({
    version: "1.0",
    type: "link",
    author_name: deserialized.author,
    cache_age: 86400,
    provider_name: deserialized.siteName,
    provider_url: url.origin,
    thumbnail_url: deserialized.imageUrl || deserialized.image,
  })
}
