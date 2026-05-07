# Deployment

`themanmohan.com` is hosted on **Cloudflare Pages**. Static Vite build, no servers, no AWS.

Migrated from AWS EC2 → Cloudflare Pages on **2026-05-07**. The previous setup (EC2 + nginx + Let's Encrypt + Route53) is fully decommissioned.

## Live URLs

- Production: https://themanmohan.com
- WWW: https://www.themanmohan.com (CNAME-equivalent to apex)
- Pages preview: https://manmohan-portfolio.pages.dev (always live, useful for debugging if the custom domain breaks)

## Stack

| Layer | Provider | Notes |
|---|---|---|
| Domain registrar | GoDaddy | Renewal happens here. Login at dcc.godaddy.com |
| DNS | Cloudflare (zone `themanmohan.com`) | Free plan |
| Hosting | Cloudflare Pages project `manmohan-portfolio` | Free tier — 500 builds/mo, unlimited bandwidth |
| Build | Vite (`npm run build` → `dist/`) | Triggered on every push to `main` |
| SSL | Cloudflare (universal SSL, auto-renewing) | No certbot, no manual renewal |

## How deploys work

1. Push to `main` on https://github.com/manmohan659/manmohan-portfolio
2. Cloudflare Pages webhook fires, clones the repo, runs `npm install` + `npm run build`
3. Output `dist/` is uploaded to Cloudflare's edge network
4. Live within ~1–2 minutes
5. Preview deploys are auto-created for every other branch/PR at `<branch>.manmohan-portfolio.pages.dev`

No manual `scp`, no SSH, no nginx reload. Just `git push`.

## Cloudflare Pages build config

Set in the Pages project dashboard (don't edit `wrangler.toml` — there isn't one, this is a pure static project):

- Production branch: `main`
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: (blank)
- Environment variables: none

## DNS records (Cloudflare zone `themanmohan.com`)

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | `@` (apex) | `manmohan-portfolio.pages.dev` | Proxied (orange) |
| CNAME | `www` | `manmohan-portfolio.pages.dev` | Proxied (orange) |

Cloudflare uses CNAME flattening so apex CNAME works (would not work on a vanilla DNS provider — that's why we don't use GoDaddy DNS or Route53 here).

## Nameservers (set at GoDaddy registrar)

```
mallory.ns.cloudflare.com
maxim.ns.cloudflare.com
```

These were assigned when the zone was created; they're stable per-zone. If you ever recreate the Cloudflare zone you'll get different ones.

## Account links

- Cloudflare account: `manmohan659@gmail.com`, account ID `cc4df76c687210be4baa1cdbbe2f2da3`
- Pages project URL: https://dash.cloudflare.com/cc4df76c687210be4baa1cdbbe2f2da3/pages/view/manmohan-portfolio
- DNS zone URL: https://dash.cloudflare.com/cc4df76c687210be4baa1cdbbe2f2da3/themanmohan.com
- GoDaddy domain: https://dcc.godaddy.com/control/portfolio (search `themanmohan.com`)

## Verifying things are healthy

```bash
# DNS resolves to Cloudflare anycast
dig @8.8.8.8 themanmohan.com +short
# → should return Cloudflare IPs (172.66.x.x range)

# NS still pointing at Cloudflare
dig @8.8.8.8 NS themanmohan.com +short
# → mallory.ns.cloudflare.com / maxim.ns.cloudflare.com

# Site responds
curl -sI https://themanmohan.com
# → HTTP/2 200, server: cloudflare
```

## What was decommissioned

The site previously ran on EC2 in the `manmohanusf` AWS account (962328867258). All the following were torn down or are pending teardown:

- EC2 instance `i-0096f9491bafdceea` (`themanmohan-portfolio`, t3.micro, us-west-2)
- Elastic IP `100.22.215.113` (alloc `eipalloc-067a06a329d66166a`)
- Security group `sg-06a5e3302d9e6da1b` (`portfolio-sg`)
- Two orphan Route53 hosted zones for `themanmohan.com` in `manmohanusf` (neither was authoritative — the actual authoritative zone was in a third AWS account that's no longer accessible). IDs: `Z05533453OP0F0DG893MW`, `Z0201386FJOTQTA65XI0`

The `gh-pages`-based deploy script in `package.json` (`predeploy`/`deploy`) is **legacy and unused** — Cloudflare ignores it. Safe to keep or delete.

## If something breaks

- **Site is down**: check the Pages project's latest build log. A failed build keeps the previous deploy live, so a "down" site usually means DNS, not build.
- **DNS broken**: confirm GoDaddy still has the 2 Cloudflare nameservers set (only those 2, no AWS leftovers).
- **SSL cert error**: Custom domain on the Pages project may have been removed; re-add `themanmohan.com` and `www.themanmohan.com` under Custom domains and wait ~1 min for re-issue.
- **Want to roll back a deploy**: Pages dashboard → Deployments → pick a previous successful build → "Rollback to this deployment".
