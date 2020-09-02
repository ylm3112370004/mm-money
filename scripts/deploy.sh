#!/usr/bin/env bash

npm run build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:ylm3112370004/mm-money-website.git &&
git push -u origin master -f
cd -