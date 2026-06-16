interface WPCodeResponse {
  header: string
  body: string
  footer: string
}

let _cache: { data: WPCodeResponse; expiry: number } | null = null
const CACHE_TTL = 5 * 60 * 1000

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", async (html) => {
    const now = Date.now()

    if (!_cache || now > _cache.expiry) {
      try {
        const data = await $fetch<WPCodeResponse>(
          "https://api.ibc003myr.com/wp-json/site/v1/header-footer",
          { timeout: 3000 },
        )
        _cache = { data, expiry: now + CACHE_TTL }
      } catch {
        return
      }
    }

    const { data } = _cache
    if (data.header) html.head.push(data.header)
    if (data.body) html.bodyPrepend.push(data.body)
    if (data.footer) html.bodyAppend.push(data.footer)
  })
})
