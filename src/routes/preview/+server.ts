import { ImageResponse } from "@vercel/og";
import type { RequestHandler } from "./$types";

export const config = {
  runtime: "experimental-edge"
}

export const GET: RequestHandler = () => {
  const resp = new ImageResponse(
    `
<div
  style={{
    fontSize: 128,
    background: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    }}
>
  Hello world!
</div>
  ` as any, { debug: true });

  return resp;
}