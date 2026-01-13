export default defineEventHandler(async (event) => {
  const res = await $fetch.raw(
    "https://ibc003mys.com/inc/securitycode.php?width=100&height=30&characters=4",
    {
      headers: {
        Cookie: "PHPSESSID=c1a6b4ced1273fedfc4d24abe0473ea5",
        // other headers you need
      },
      responseType: "arrayBuffer", // keep binary data intact
    }
  );

  setHeader(
    event,
    "Content-Type",
    res.headers.get("content-type") || "image/png"
  );
  return Buffer.from(res._data as any); // send image data back to browser
});
