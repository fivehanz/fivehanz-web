

default: build
deps: deps-bun
dev: dev-all
deploy: deploy-api
test: test-all



dev-all:
	bun run dev

test-web:
	bun run nx run web:test

test-api:
	bun --bun run nx run api:test

test-all:
	bun run test

build:
	bun --bun run build -- -p web

deploy-api:
	bun run nx run api:deploy

deps-bun:
	bun i
