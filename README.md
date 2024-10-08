# core-beta

Rewritten version of the CTFd core theme to use Bootstrap 5, Alpine.js, and vite to improve upon the existing CTFd theme structure. 

## Updating

```bash
git remote add upstream git@github.com:CTFd/core-beta.git
git fetch upstream
git merge upstream/main
```

### Development

To test locally with live-reload, you need to run `yarn dev` inside the CTFd docker container.

Otherwise,

```bash
yarn install && yarn build
```

## Subtree Installation

### Add repo to themes folder

```
git subtree add --prefix CTFd/themes/core-beta git@github.com:CTFd/core-beta.git main --squash
```

### Pull latest changes to subtree
```
git subtree pull --prefix CTFd/themes/core-beta git@github.com:CTFd/core-beta.git main --squash
```

### Local Development

```bash
yarn install 
yarn dev # `yarn build` for a one time build
```
### Subtree Gotcha

Make sure to use Merge Commits when dealing with the subtree here. For some reason Github's squash and commit uses the wrong line ending which causes issues with the subtree script: https://stackoverflow.com/a/47190256. 

## Todo

- Document how we are using Vite
- Create a cookie cutter template package to use with Vite
