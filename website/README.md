# UnEarth website

Static marketing site for `unearthphotos.app`, designed to deploy with GitHub Pages.

## Preview locally

```sh
python3 -m http.server 8000 --directory website
```

Open <http://localhost:8000>.

## Deploy

The `pages.yml` workflow uploads this directory and deploys it to GitHub Pages on pushes to `main`. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**. The included `CNAME` configures `unearthphotos.app`; point the domain's DNS records to GitHub Pages separately, then enable **Enforce HTTPS** after the certificate is issued.

The beta contact currently uses `hello@unearthphotos.app`. Confirm that mailbox or forwarding exists before launch.

## Brand assets

`assets/unearth-photos-wordmark.png` is a transparent-margin crop of the founder-supplied pixel-perfect PNG from `unearth-photos-logo-packet.tar.gz`. The artwork itself is unchanged. The app icon remains the favicon and supporting product mark; the wordmark is used in the centered header and footer.
