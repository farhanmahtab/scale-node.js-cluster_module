# Commands

## run the server

node index.js

## run the cluster server

node primary.js

## run the loadtest

npx loadtest -n 100000 -c 10000 -k http://localhost:5000/test
npx loadtest -n 100000 -c 2500 -k http://localhost:5000/test
npx loadtest -n 100000 -c 1000 -k http://localhost:5000/test

n:number of total request
c:number of concurrent request per second

## Using pm2

npx pm2 start index.js -i 0

## For EADDRINUSE error

lsof -i tcp:5000
kill $(lsof -t -i:5000)
kill -9 [PID]
kill -9 $(lsof -t -i:5000)

alias kill3000="fuser -k -n tcp 3000"

## For detailed guide

Read:https://docs.google.com/document/d/1bGCTj6u-4ajnqovRUwyHTIwskwnajmfsKVhfIj3OggM/edit?usp=sharing
