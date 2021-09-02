# codemods


A collection of codemods for codemods.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add codemods
codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [structure](transforms/structure/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`