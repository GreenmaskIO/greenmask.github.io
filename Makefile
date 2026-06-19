.PHONY: install start build serve clear version

install:
	npm ci

start:
	npm run start

build:
	npm run build

serve:
	npm run serve

clear:
	npm run clear

# Usage: make version VERSION=0.3.0
version:
ifndef VERSION
	$(error VERSION is required. Usage: make version VERSION=0.3.0)
endif
	npm run docusaurus docs:version $(VERSION)
