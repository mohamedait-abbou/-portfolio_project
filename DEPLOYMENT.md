# Deployment guide — from zero to a live site

This walks through exactly how this portfolio is published on GitHub Pages.
It assumes **no prior knowledge**. Every command is explained.

Live site: <https://mohamedait-abbou.github.io/-portfolio_project/>

---

## 0. The four pieces

| Piece | What it is | What it does here |
| --- | --- | --- |
| **Git** | Version control on your computer | Records changes and sends them to GitHub |
| **GitHub repository** | A project folder stored on GitHub | Holds the source code |
| **GitHub Actions** | GitHub's build robots | Runs lint + build and publishes the result |
| **GitHub Pages** | Free static hosting | Serves the finished files to the world |

The important idea: GitHub Pages does **not** run Next.js. It only serves
finished files. So the robot (`deploy.yml`) builds the site first, then uploads
the folder it produced (`out/`) to Pages.

```
your computer  →  git push  →  GitHub repo
                                   │
                                   ▼
                            GitHub Actions
                        npm ci → lint → build
                                   │
                                   ▼
                         out/ (HTML, CSS, JS, images)
                                   │
                                   ▼
                            GitHub Pages
                     username.github.io/repo/
```

---

## 1. Install the tools

You need **Node.js 22+**, **npm** (comes with Node) and **Git**.

Check what you already have:

```bash
node -v
npm -v
git --version
```

If a command is missing on Ubuntu/Debian:

```bash
sudo apt update
sudo apt install git
```

For Node, the easiest route is `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Close and reopen the terminal, then:

```bash
nvm install 22
nvm use 22
node -v      # should print v22.x.x
```

> Why 22? The GitHub workflow uses Node 22, and matching it locally avoids
> "works on my machine" surprises.

---

## 2. Run the site locally

```bash
cd /home/mhd/portfolio_project
npm install
npm run dev
```

- `cd` moves into the project folder.
- `npm install` downloads the libraries listed in `package.json` into
  `node_modules/`. It only needs to be done once (or after dependencies change).
- `npm run dev` starts the development server.

Open <http://localhost:3000> (or the Network URL it prints, e.g.
`http://192.168.0.109:3000`). Changes reload automatically.

Stop the server with `Ctrl+C`.

---

## 3. Test the real production build

Before publishing, always do what the robot will do:

```bash
npm run lint
BASE_PATH=/-portfolio_project npm run build
```

- `npm run lint` checks the code for mistakes and bad patterns.
- `npm run build` creates the static site inside `out/`.

### Why `BASE_PATH`?

GitHub Pages puts a **project** site under a subfolder:

```
https://mohamedait-abbou.github.io/-portfolio_project/
                                      └── this is the base path
```

Without the prefix, the browser would look for
`https://mohamedait-abbou.github.io/_next/...` (404).
With it, files resolve to
`https://mohamedait-abbou.github.io/-portfolio_project/_next/...` (200).

`next.config.ts` reads `BASE_PATH` and `src/lib/asset.ts` prefixes image paths.
If you rename the repository, this value must change in:

- `.github/workflows/deploy.yml`
- `README.md`
- any local build command

For a repository named `portfolio_project`, use `/portfolio_project` instead.

You can preview `out/` locally with any static server, for example:

```bash
npx serve out
```

---

## 4. Create the GitHub repository (browser, once)

1. Go to <https://github.com/new>.
2. **Repository name**: `-portfolio_project` (must match the workflow).
3. **Visibility**: Public. Free GitHub Pages needs a public repository.
4. Do **not** tick "Add a README", ".gitignore" or "license" — the project
   already has them, and an extra commit causes a conflict on the first push.

Then click **Create repository**.

---

## 5. Connect the local folder and push

### 5a. One-time Git identity

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

This name/email is written into every commit. Use the email tied to GitHub if
you want the commits linked to your profile (or the GitHub noreply address).

### 5b. SSH key (recommended, no password prompts)

Check whether you already have one:

```bash
ls ~/.ssh
```

If `id_ed25519` is missing:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Press Enter to accept the default path. A passphrase is optional but safer.

Copy the **public** key:

```bash
cat ~/.ssh/id_ed25519.pub
```

GitHub → **Settings → SSH and GPG keys → New SSH key** → paste → save.

Test it:

```bash
ssh -T git@github.com
```

Expected message: `Hi USERNAME! You've successfully authenticated...`
("GitHub does not provide shell access" is normal.)

### 5c. Initialize and push

```bash
cd /home/mhd/portfolio_project
git init -b main
git add -A
git commit -m "Initial commit"
git remote add origin git@github.com:mohamedait-abbou/-portfolio_project.git
git push -u origin main
```

Line by line:

| Command | Meaning |
| --- | --- |
| `git init -b main` | Start version control, default branch `main` |
| `git add -A` | Stage every file that is not ignored |
| `git commit -m "..."` | Save a snapshot with a message |
| `git remote add origin ...` | Remember where the GitHub repo is |
| `git push -u origin main` | Upload `main` and remember it as the default upstream |

If GitHub asks for a password over HTTPS, it will reject it. Either use the SSH
remote shown above, or create a **Personal Access Token**:
GitHub → Settings → Developer settings → Personal access tokens → Fine-grained
tokens → repository access + **Contents: Read and write** → use the token as the
password.

### 5d. What must never be pushed

`.gitignore` already blocks:

```
node_modules/   downloaded libraries (huge, reproducible)
.next/          local build cache
out/            generated site (the robot rebuilds it)
.env*           secrets and local configuration
*.pem, keys
```

Rules:

- Never commit `.env`, tokens, passwords or private keys.
- A public repo makes **every committed file public**, including old commits.
- This project has no backend, no database and no analytics, so the live site
  has no server-side attack surface.
- Unused source images and an old font were removed from the repo and backed up
  outside it; only assets used by the site are tracked.

---

## 6. Turn on GitHub Pages (browser, once)

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

This step **cannot** be automated with the normal Actions token. Creating a
Pages site is an administration operation, and `GITHUB_TOKEN` is deliberately
not allowed to administer its own repository. Only the repository owner (or an
admin token) can do it.

If you skip this, the build job still passes but the deploy job fails with a
404 — that is the setting, not the code.

---

## 7. The workflow, line by line

File: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:
```

- Runs on every push to `main`.
- `workflow_dispatch` adds a **Run workflow** button in the Actions tab for
  manual re-deploys.

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

- `contents: read` — checkout the code.
- `pages: write` — publish to Pages.
- `id-token: write` — prove the deployment came from this workflow (OIDC).

```yaml
concurrency:
  group: pages
  cancel-in-progress: true
```

Only one deployment at a time; a newer push cancels the older run.

### Build job

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run build
        env:
          BASE_PATH: "/-portfolio_project"
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
```

| Step | What it does |
| --- | --- |
| `checkout` | Copies the repository onto the runner |
| `setup-node` | Installs Node 22 and caches npm downloads |
| `npm ci` | Clean install from `package-lock.json` (exact versions) |
| `npm run lint` | Fails the build on lint errors |
| `npm run build` | Produces `out/` with the correct base path |
| `upload-pages-artifact` | Packages `out/` for Pages |

### Deploy job

```yaml
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- `needs: build` — never deploy a failed build.
- `environment` exposes the live URL in the Actions summary.
- `deploy-pages` publishes the uploaded artifact.

---

## 8. What happens after `git push`

1. GitHub receives the new commit.
2. Actions starts the workflow (Actions tab).
3. `npm ci`, lint and build run on a fresh machine.
4. `out/` is uploaded.
5. Pages publishes it.
6. The live URL updates, usually in 1–3 minutes.

Watch progress: **Actions → Deploy to GitHub Pages**.

---

## 9. Verify the live site

Open <https://mohamedait-abbou.github.io/-portfolio_project/>.

Check:

- The page loads with styling (CSS found).
- Images appear (portrait, project screenshots).
- Navigation links scroll to sections.
- Mobile menu opens at a narrow width.
- Hard refresh (`Ctrl+Shift+R`) if you still see an old version.

### Common problems

| Symptom | Cause | Fix |
| --- | --- | --- |
| Deploy fails with 404 | Pages not enabled | Settings → Pages → Source: GitHub Actions |
| Page loads unstyled | Wrong `BASE_PATH` | Match the repository name exactly |
| Images 404 | Image path not prefixed | Use `asset()` from `src/lib/asset.ts` |
| `npm ci` fails | Missing/outdated lockfile | Run `npm install`, commit `package-lock.json` |
| Lint fails in Actions | Local lint not run | Run `npm run lint` before pushing |
| Old content | Browser or CDN cache | Hard refresh, wait for the run to finish |

---

## 10. Update the site later

```bash
git add -A
git commit -m "Describe what changed"
git push
```

That is the whole loop. No manual upload, no FTP, no server.

---

## 11. Optional: custom domain

1. Buy a domain (any registrar).
2. GitHub → Settings → Pages → **Custom domain** → enter it.
3. At the registrar, add a `CNAME` record pointing to
   `mohamedait-abbou.github.io`.
4. Wait for DNS, then enable **Enforce HTTPS**.

---

## 12. Security checklist

- [x] `.env*` ignored, no secrets in the repo.
- [x] No private keys, tokens or passwords committed.
- [x] No `node_modules/`, `.next/` or `out/` committed.
- [x] Only assets used by the site are tracked.
- [x] Production dependencies audit clean.
- [x] Static site: no forms, login, database or API.
- [x] External links use `rel="noreferrer noopener"`.
- [ ] Never paste a token into a file that Git tracks.
- [ ] Remember a public repo is public forever, including history.

---

## Quick reference

```bash
# local development
npm install
npm run dev

# production check
npm run lint
BASE_PATH=/-portfolio_project npm run build

# publish
git add -A
git commit -m "Update"
git push
```

Live: <https://mohamedait-abbou.github.io/-portfolio_project/>
