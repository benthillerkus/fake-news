import pako from "pako";
import { base64EncArr } from "./base64";

export function serialize(obj: object) {
  const str = JSON.stringify(obj);
  const encoded = new TextEncoder().encode(str);
  const compressed = pako.deflate(encoded);
  const base64 = base64EncArr(compressed);
  const urisafe = encodeURIComponent(base64);
  return urisafe;
}

export function deserialize(str: string) {
  const base64 = decodeURIComponent(str);
  const compressed = Buffer.from(base64, "base64");
  const inflated = pako.inflate(compressed, { to: "string" });
  const deserialized = JSON.parse(inflated);
  return deserialized;
}

export function tryDeserialize(str: string | null) {
  if (str === null) {
    return {};
  }
  try {
    return deserialize(str);
  } catch (e) {
    return {};
  }
}