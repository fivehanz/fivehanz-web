

default:
deps: deps-bun
dev: dev-web
test: test-all


dev-api:
	
dev-web:
	bun run nx run web:serve

test-web:
	bun run nx run web:test

test-api:
	bun --bun run nx run api:test

test-all:
	bun run test

build:
	bun --bun run build

deps-bun:
	bun i
