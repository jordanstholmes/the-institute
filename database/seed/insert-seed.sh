#!/bin/bash
gzip -dc ./database/seed/seed.gz | node ./database/seed/insertSeed.js && echo 'insertion successful!'