# Documentation UHC NLD

Site de documentation construit avec [VitePress](https://vitepress.dev).

## Tester en local (optionnel)

Nécessite [Node.js](https://nodejs.org) installé :

```
npm install
npm run docs:dev
```

Puis ouvre l'URL affichée dans le terminal (généralement http://localhost:5173).

## Mettre en ligne avec GitHub Pages

1. Crée un nouveau dépôt sur GitHub (public), par exemple `uhc-nld-docs`.
2. Depuis ce dossier (`docs-site`), initialise et pousse le dépôt :
   ```
   git init
   git add .
   git commit -m "Documentation UHC NLD"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/<nom-du-repo>.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. Le site se déploie automatiquement à chaque `git push` (voir `.github/workflows/deploy.yml`).
5. L'URL sera `https://<ton-pseudo>.github.io/<nom-du-repo>/`.

⚠️ Si l'URL contient `/<nom-du-repo>/` (ce qui est le cas par défaut), ouvre `.vitepress/config.mts` et change :
```ts
base: '/',
```
en :
```ts
base: '/<nom-du-repo>/',
```
puis repousse (`git add . && git commit -m "fix base" && git push`).

## Nom de domaine personnalisé (optionnel)

Si tu veux un domaine du style `docs.tonsite.fr` :
1. Ajoute un enregistrement DNS de type `CNAME` chez ton registrar, pointant vers `<ton-pseudo>.github.io`.
2. Crée un fichier `docs-site/public/CNAME` contenant juste `docs.tonsite.fr`.
3. Configure le domaine dans GitHub : **Settings → Pages → Custom domain**.
4. Laisse `base: '/'` dans ce cas (pas de sous-dossier avec un domaine personnalisé).
