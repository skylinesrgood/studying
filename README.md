# Study Break Shelf

This is a remade static arcade launcher for GitHub Pages.

## Credit

Game embeds mainly use 3kh0 Assets:

```text
https://gitlab.com/3kh0/3kh0-assets
```

The 3kh0 Assets README says the games may be used and asks for credit. This site credits 3kh0 in the sidebar and player header.

Some games that fail through the 3kh0 CDN are launched from Forks N Frogz with permission/credit:

```text
https://github.com/geodmeeee/forksnspoons
```

## How it works

The game cards are listed in `app.js`. Each card opens an iframe using the GitLab GitHack CDN pattern:

```text
https://gl.githack.com/3kh0/3kh0-assets/raw/main/GAME-FOLDER/index.html
```

This avoids uploading the entire assets repo, which is huge.

Forks N Frogz entries use its GitHub Pages game folders:

```text
https://geodmeeee.github.io/forksnspoons/games/GAME-NAME/index.html
```

## Upload to GitHub Pages

Upload these files and folders:

```text
index.html
styles.css
app.js
README.md
assets/
```

The animated background loads Three.js and Vanta Clouds from public CDNs. If those scripts are blocked, the page falls back to a normal blue gradient background.

Then turn on GitHub Pages:

1. Open your repository settings.
2. Go to **Pages**.
3. Choose **Deploy from a branch**.
4. Pick `main` and `/root`.
5. Save.

## Add more games

Add another row to the `games` list in `app.js`:

```js
["Game Title", "folder-name-in-3kh0-assets", "Category"]
```

Only add games you have permission to use, and keep the credit visible.

## Why some games were removed

Some 3kh0 games do not work well through a GitHub Pages iframe/CDN launcher:

- Unity games can fail when `.unityweb` compression headers are not served exactly right.
- Some games try to download extra files in ways the CDN or browser blocks.
- Some Flash games need ActionScript 3 support, which Ruffle may not fully support yet.
- Some games load but stay black because their original folder expects a different host setup.

If a game works on the original host but not here, it may need local hosting of the full folder with correct headers instead of a simple iframe CDN link.
