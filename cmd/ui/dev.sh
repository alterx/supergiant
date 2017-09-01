#!/bin/bash

cd cmd/ui/assets && yarn install && npm install && ng build --aot && cd ../../../

go-bindata -pkg ui -o bindata/ui/bindata.go cmd/ui/assets/dist/...

go run cmd/ui/server.go
