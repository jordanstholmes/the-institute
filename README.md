# The Institute
An MVP for the Chet Holmes Institute

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#development)

## Work in Progress
  * Refactor docker into its own directory
  * Refactor for modularity in directory structure, where files from different directories only interact with the index of another directory. (Files within a directory can interact directly with each other)
## Usage

> Run npm setup to create an env file.

## Requirements


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Running Webpack
First terminal window:
```sh
npm run build:dev
```

### Building/Running Docker Container
Second terminal window:
```sh
npm run docker:build
# Or below if docker image already built
npm run docker:run
```

### Production Build Under Construction...
Note: production build command is not currently fully built out.

## Server API

### GET video and quiz
  *

### PUT quiz answers
  *

