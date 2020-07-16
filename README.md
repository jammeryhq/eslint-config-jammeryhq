# eslint-config-jammeryhq

This monorepo contains the various ESLint configs for JammeryHQ.

## Usage

To install and use a config, simple run the below steps (using the `starters` config for example).


Install the package and dependencies:

```sh
yarn add -D eslint-config-jammeryhq-starters
```

Create a `.eslintrc.js` file, and add the config to `extends`:

```js
module.exports = {
  extends: ['jammeryhq-starters']
}
```

## Developing

This monorepo makes use of `lerna` and `yarn` workspaces to manage packages.
Simply edit the config files you want, then run `lerna publish` from the repository root to publish a new version.
