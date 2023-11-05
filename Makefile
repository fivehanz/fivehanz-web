default: build
deps: deps-bun
dev: dev-all
deploy: deploy-api
test: test-all



dev-all:
	npm run dev

dev-admin:
	npm run nx run admin:dev

test-web:
	npm run nx run web:test

test-api:
	npm run nx run api:test

test-all:
	npm run test

build:
	npm run build -- -p web, admin

deploy-api:
	npm run nx run api:deploy

deps-bun:
	npm i


upgrade:
	npx npm-check-updates -u && npm install
