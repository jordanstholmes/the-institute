#!/bin/bash

node ./database/seed/index.js | gzip -c > ./database/seed/seed.gz