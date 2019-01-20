#!/bin/bash

PACKAGEJSON='./package.json'
WEBPACKCONFIG='./webpack.config.js'

if [ ! -f $PACKAGEJSON ]; then
   cp './docker/frontend/nodejs/package.json' $PACKAGEJSON
fi

if [ ! -f $WEBPACKCONFIG ]; then
   cp -r './docker/frontend/nodejs/webpack.config' ./
fi