#!/bin/sh
rm -rf ~/.vscode/extensions/vscode-vercel-theme
(cd ../ && cp -r ./vscode-vercel-theme ~/.vscode/extensions/vscode-vercel-theme)
