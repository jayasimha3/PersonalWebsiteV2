![CI Validation](https://github.com/jayasimha3/PersonalWebsiteV2/actions/workflows/ci-validation/badge.svg?branch=feature-1)

# Personal Website

This is a website about myself. The goal of this project was originally intended to further my web development skills using Angular (see [Personal Website V1](https://github.com/jayasimha3/PersonalWebsite)). I have since converted and updated the website to use newer versions of Bootstrap and a React backend instead of Angular, which you'll find in this repository.

Please note that as this is a portfolio like website, even though it is public, I will not accept contributions, and any pull requests will be rejected.

## Code

The following technologies were used:

- [React](https://github.com/facebook/react) - *Backend*
- [Create React App](https://github.com/facebook/create-react-app) - *Create Starter App*
- [Bootstrap](https://github.com/twbs) - *UI Elements*
- [auto-changelog](https://github.com/CookPete/auto-changelog) - *Generate Changelog*
- [NPM](https://github.com/npm) - *Package Manager*
- [GitHub Pages](https://pages.github.com/) - *Hosting*
- [Cloudflare](https://www.cloudflare.com/) - *Custom Domain*

## Development

> NOTE: This repository is closed for public contributions as it's a personal website.

The following describes development tools, such as `npm` scripts, how the website is built, how to use `auto-changelog`, and how the website is deployed.

### Scripts

- `npm run start`: Equivalent to `react-scripts start`, and **starts a local webserver** for development.
- `npm run build`: Equivalent to `react-scripts build`, and **builds the app for production** to the `build` folder.
- `npm run test`: Equivalent to `react-scripts test`, and **launches the test runner** for unit tests.
- `npm run eject`: Equivalent to `react-scripts eject`. *TODO: Consider removing*
- `npm run update-dependencies`: Equivalent to `npm update --save/--save-dev`, and **updates all dependencies** to their latest versions.
- `npm run version`: Runs `auto-changelog -p && git add CHANGELOG.md` for **generating a changelog**.

### Build

TODO: Write build instructions here.

### Tests

There are no unit tests at the moment, but these will be added after release.

### Deployment

TODO: Add deployment instructions here.