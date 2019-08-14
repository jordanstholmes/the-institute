#!/bin/bash

# node ./database/seed/index.js | lzop -c > ./database/seed/seed.lzo && lzop -dc ./database/seed/seed.lzo > ./database/seed/seed.json

node ./database/seed/index.js | lzop -c > ./database/seed/seed.lzop