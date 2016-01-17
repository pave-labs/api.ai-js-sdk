#!/bin/bash

VERSION='0.0.1'

echo '/**
 * api.ai.js - Javascript SDK for api.ai
 * version '$VERSION'
 */' > target/header.js


echo 'js concat ...'

cat \
src/api.ai.js \
> target/api.ai.js





rm target/header.js