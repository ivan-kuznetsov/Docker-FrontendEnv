#!/bin/bash

PACKAGEJSON='../../../package.json'
WEBPACKCONFIG='../../../webpack.config.js'

if [ ! -f $PACKAGEJSON ]; then
   cp './package.json' $PACKAGEJSON
fi

if [ ! -f $WEBPACKCONFIG ]; then
   cp './webpack.config.js' $WEBPACKCONFIG
fi