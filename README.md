# Fake News

## Todos

- [x] Editor
  - [ ] Improve mobile experience
- [ ] Add some sort of permanent storage mechanism
- [ ] Random generation for certain fields (generic tech blog name...)
- [x] Different Styles
  - [x] Add custom logos
  - [ ] Dark mode
- [x] Fix too short pages
- [x] Fix title spacing 
- [x] Share buttons
  - [x] Fix link vs button behaviour
  - [ ] Fix reset being shitty
   - [x] Push new history after reset to align content with URL
   - [ ] Can't reset colors to values on allowed in CSS
  - [ ] Add share buttons to pages
- [ ] Vercel OG
- [ ] Allow installation on non-origin paths
- [ ] Allow markdown
- [ ] Use Vercel caching
- [ ] Investigate brotli

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
