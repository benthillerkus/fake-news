<script lang="ts">
  import Check from "./Check.svelte";
  import pako from "pako";
  import "$lib/reset.css";
  import { base64EncArr } from "$lib/base64";
  import { deserialize, serialize } from "$lib/deser";
  const text = "Hello, world! 🏀🏀😋🤦‍♀️ üüüßßßß!";
  const jsonString = `{"text":"${text}","number":42,"boolean":true}`;

  const deserialized = JSON.parse(jsonString);
  const de_deserialized = JSON.stringify(deserialized);

  const asBytes = new TextEncoder().encode(de_deserialized);
  const de_asBytes = new TextDecoder().decode(asBytes);

  const deflated = pako.deflate(asBytes);
  const de_deflated = pako.inflate(deflated, { to: "string" });

  const base64 = base64EncArr(deflated);
  const de_base64 = Buffer.from(base64, "base64").toString("utf8");

  const uriencoded = encodeURIComponent(base64);
  const uriedecoded = decodeURIComponent(uriencoded);

  const base64decoded = Buffer.from(uriedecoded, "base64");
  const inflated = pako.inflate(base64decoded, { to: "string" });
</script>

<h1>{text}</h1>

<sample>{de_deserialized}</sample>
<Check condition={de_deserialized === jsonString} />
<br />
<sample>{de_asBytes}</sample>
<Check condition={de_asBytes === jsonString} />
<br />
<sample>{de_deflated}</sample>
<Check condition={de_deflated === jsonString} />
<br />
<sample>{de_base64}</sample>
<Check condition={de_base64 === de_deflated} />

<hr />

<table>
  <tr>
    <th>Step</th>
    <th>Data</th>
  </tr>
  <tr>
    <td>Data</td>
    <td>
      <sample>{deserialized}</sample>
    </td>
  </tr>
  <tr>
    <td>Serialize</td>
    <td>
      <sample>{de_deserialized}</sample>
    </td>
  </tr>
  <tr>
    <td>UTF-8</td>
    <td>
      <sample>{asBytes}</sample>
    </td>
  </tr>
  <tr>
    <td>Deflate</td>
    <td>
      <sample>{deflated}</sample>
    </td>
  </tr>
  <tr>
    <td>Base64</td>
    <td>
      <sample>{base64}</sample>
    </td>
  </tr>
  <tr>
    <td>URI Encode</td>
    <td>
      <sample>{uriencoded}</sample>
    </td>
  </tr>
  <tr>
    <td />
  </tr>
  <tr>
    <td>URI Decode</td>
    <td>
      <sample>{uriedecoded}</sample>
    </td>
  </tr>
  <tr>
    <td>Base64 Decode</td>
    <td>
      <sample>{base64decoded}</sample>
    </td>
  </tr>
  <tr>
    <td>Inflate</td>
    <td>
      <sample>{inflated}</sample>
    </td>
  </tr>
</table>

<hr />

<Check condition={deserialize(serialize({ key: "value" })).key === "value"} />
