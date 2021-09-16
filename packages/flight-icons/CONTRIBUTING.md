# Flight-Icons "sync/build/release" scripts

A set of Node.js scripts developed to create a single pipeline for building and releasing the Flight iconset as a set of packages in different formats, that can be consumed by other tools and products.

---

## Usage

The pipeline can be run manually, on your local machine, or via GitHub actions.

There are three distinct steps in the process:

### Sync

The synchronization step is executed by the `/scripts/sync.ts` file. To run this script use the following command in your CLI:

```bash
yarn sync
```

This action will:

* Retrieve the assets metadata from Figma via REST API
* Export the assets as `.svg` files into `./src/svg`
* Generate the `catalog.json` file into `./src/`

### Build

The build step is executed by the `/scripts/build.ts` file. To run this script use the following command in your CLI:

```bash
yarn build
```

This action will:

* Optimize the SVG files
* Prepare a bundle with standalone SVGs
* Prepare a bundle with an SVG sprite
* Prepare a bundle with SVGs embedded in CSS/SCSS as data:image
* Update the SVG sprite and catalog.json files in the Ember addon folder

### Release

[TODO]

### Code check
You can also do some important sanity checks to the code via the commands:

```bash
# check type safety
yarn typecheck

# check code syntax
yarn lint
```

## Local development

To run the scripts locally, follow these steps.

### Setup

*Notice: [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/getting-started/install) needs to be installed on your local machine.*

First of all clone the repository:

```bash
git clone https://github.com/hashicorp/flight
```

Then install the project dependencies:

```bash
# go to the "scripts" folder
cd /[your-local-project-path]/flight-icons/scripts

# install node modules
yarn install
```

#### Figma Token

To access the Figma file via REST API is necessary to have [a special authentication token](https://www.figma.com/developers/api#access-tokens). This token is personal, should not be shared or committed to the repo.

To create your personal access token, open Figma and go into *Account > Personal access tokens* and create one for yourself.

Next, add a `.env` file in the `scripts` directory, to which you will add the variable:

`FIGMA_TOKEN=###`

where `###` is your personal access token. You can use the `.env.template` file you find in the repository as model, if you want.

**IMPORTANT**: the `.env` file is ignored by git, and should not be committed to the repository.

### Running the scripts

Finally, you can run the scripts commands via CLI:

```bash
# sync
yarn sync

# build
yarn build

# release
[TODO]
```

## Release

_NOTICE: with the recent changes to the project folder structure and sync/build scripts, these instructions are outdated._

```bash
cd flight-icons
```

- Bump the version number for the `flight-icons/package.json`.

After the change is merged to `main`, from the `flight-icons/` directory, run:

```bash
npm publish
```

You will need 2FA on your npm account to publish.

## GitHub action

Run the GitHub action `flight_compile` to execute the `sync → build → release` process.

All the updated assets and the generated bundles will be automatically committed to this repo, and the packages released to NPM.