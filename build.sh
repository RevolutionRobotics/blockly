#!/bin/sh
rm -rf build
mkdir build
python build.py $1
cp blockly_compressed.js build
cp blocks_compressed.js build
cp python_compressed.js build
cp webview.html build
cp style.css build
cp -R toolbox build
cp -R msg build
cp -R media build
