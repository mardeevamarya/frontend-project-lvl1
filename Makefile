install: install-deps


install-deps:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run

start:
	node bin/brain-games.js

