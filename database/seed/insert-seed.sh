#!/bin/bash
lzop -dc ./database/seed/seed.lzop | node ./database/seed/insertSeed.js && echo 'insertion successful!'