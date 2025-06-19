![CI Validation](https://github.com/jayasimha3/PersonalWebsiteV2/actions/workflows/deploy.yaml/badge.svg?branch=main)

# Personal Website

This is a website about myself. The goal of this project was originally intended to further my web development skills using Angular (see [Personal Website V1](https://github.com/jayasimha3/PersonalWebsite)). I have since converted and updated the website to use newer versions of Bootstrap and a React backend instead of Angular, which you'll find in this repository.

Please note that as this is a portfolio like website, even though it is public, I will not accept contributions, and any pull requests will be rejected.

## Code

The following technologies were used:

- [React](https://github.com/facebook/react) - *Web App Framework*
- [Bootstrap](https://github.com/twbs) - *UI Elements*
- [auto-changelog](https://github.com/CookPete/auto-changelog) - *Generate Changelog*
- [NPM](https://github.com/npm) - *Package Manager*
- [GitHub Pages](https://pages.github.com/) - *Hosting*
- [Cloudflare](https://www.cloudflare.com/) - *Custom Domain*
- [next.js](https://github.com/vercel/next.js) - *React Framework, replaces Create React App*

The following was used in the initial React redesign, but is now deprecated and replaced with *next.js*:

- [Create React App](https://github.com/facebook/create-react-app) - *Create Starter App*

## Development

> [!Note]
> This repository is closed for public contributions as it's a personal website.

The following describes development tools, such as `npm` scripts, how the website is built, how to use `auto-changelog`, and how the website is deployed.

### Scripts

- `npm run start`: Equivalent to `next start`.
- `npm run build`: Equivalent to `react-scripts build`, and **builds the app for production** to the `out` folder.
- `npm run update-dependencies`: Equivalent to `npm update --save/--save-dev`, and **updates all dependencies** to their latest versions.
- `npm run version`: Runs `auto-changelog -p` for **generating a changelog**.
- `npm run dev`: Equivalent to `next dev --turbopack`, and starts a live webserver for development.
- `npm run lint`: Equivalent to `next lint`, and runs the linting service to find errors in the application. This is run by default during build.

### Build

1. Update dependencies if needed (`npm run update-dependencies`)
2. Install dependencies (`npm install`)
3. *For development* Start the live webserver (`npm run dev`)
4. *For production* Build the application (`npm run build`)

#### Development Build

To build a live development version of your app for testing and debugging, run `npm run dev` and navigate to http://localhost:3000.

### Tests

There are no unit tests at the moment, but these will be added after release.

### Deployment

Deployment is handled through the [Deploy](./.github/workflows/deploy.yaml) GitHub Action workflow. It deployes a github pages deployment and a private docker image.
