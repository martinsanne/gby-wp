# Commands

### Installation

```
yarn
```

### Run development server

```
yarn start
```

### Build

```
yarn build
```

### Serve the build

```
yarn serve
```

### Clear Gatsby cache

```
yarn clean
```

## Known issues

### White screen of death

After running `yarn build && yarn serve` you might get a white screen when running `yarn start`. Clear gatsby cache with `yarn clean` and then run `yarn start` again to resolve.

### Dev server failing

`TypeError: Cannot read property 'allWordpressPost' of undefined`

If you see the error above it is most likely a problem with the WordPress server timeout. This unfortunately happens on occasion, take a small break and try again :(

# Todos

### Launch

- [x] Close api.oyafestivalen.no/cms with htaccess
- [x] Pull api.oyafestivalen into staging
- [x] Netlify: Run build command to pull new data
- [x] Netlify: Point main domain to gby-oya

#### When domain is transfered to gatsby version

- [ ] Point api.oyafestivalen to www server

### Backend

- [ ] Activate new CMS in prod
- [ ] Add build hook to WordPress
- [ ] Replace potentially wrong urls (tornado-node, netlify etc)

### Frontend

- [ ] Global home url based on language (on main logo ie)
- [ ] Add polyfills

### Maybye later

- [ ] Run images static

### Backlog

- [x] Rename repository to gby-oya
- [x] News article sorting and loading articles per language
- [x] Add translations to categories in rest api
- [x] Replace all http:// with https:// in backend (remember to re-activate remove permalinks)
- [x] Implement latest changes to Gatsby configured CMS (rss feed images)
- [x] SEOHeaders not working
- [x] Change permalink structure to /posts/
- [x] Canonical urls
- [x] Canonical is wrong for translated pages
- [x] Add google analytics (and other trackers from todays site)
- [x] Netlify lambda (newsletter form)
- [x] Dates on posts must show actual date if more than X days ago
- [x] Add previews to posts and pages (http://localhost:8000/_preview/?id=24017&type=post&lang=nb)
- [x] Add favicon etc.
- [x] Sitemap + robots
- [x] Blacklist unused endpoints
- [x] Search page
