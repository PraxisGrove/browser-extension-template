# Browser Extension Template

A WXT, React, and TypeScript starter for serious browser extension products.

It includes a popup, a thin options page, a background service worker, a content
script, typed messaging, typed storage, Vitest, and Biome.

## Project Shape

```txt
entrypoints/
  background.ts          # Background service worker
  content.ts             # Minimal-permission content script example
  options/               # Thin settings page
  popup/                 # Popup UI
lib/
  messaging/             # Typed runtime messages
  storage/               # Typed settings storage
```

## Permissions

The template defaults to minimal permissions. The content script only matches:

```ts
['https://example.com/*']
```

Change `entrypoints/content.ts` when your extension needs a real host. Avoid
`<all_urls>` or broad `http://*/*` / `https://*/*` matches unless the product
really requires full-site access.

## Scripts

```bash
pnpm install
pnpm dev
pnpm compile
pnpm test
pnpm check
pnpm build
pnpm zip
```

Use `pnpm dev:firefox`, `pnpm build:firefox`, or `pnpm zip:firefox` when targeting Firefox.

## Before Shipping

- Update `name`, `description`, and `version` in `package.json` and
  `wxt.config.ts`.
- Replace the icons in `public/icon/`.
- Review content script matches and any future permissions.
- Run `pnpm compile`, `pnpm test`, `pnpm check`, and `pnpm build`.
- Use `pnpm zip` for Chrome/Edge and `pnpm zip:firefox` for Firefox.
