# Study Break Shelf

This is a remade static arcade launcher for GitHub Pages.

## Credit

Game embeds use 3kh0 Assets:

```text
https://gitlab.com/3kh0/3kh0-assets
```

The 3kh0 Assets README says the games may be used and asks for credit. This site credits 3kh0 in the sidebar and player header.

## How it works

The game cards are listed in `app.js`. Each card opens an iframe using the GitLab GitHack CDN pattern:

```text
https://gl.githack.com/3kh0/3kh0-assets/raw/main/GAME-FOLDER/index.html
```

This avoids uploading the entire assets repo, which is huge.

## Upload to GitHub Pages

Upload these files and folders:

```text
index.html
styles.css
app.js
README.md
assets/
```

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
