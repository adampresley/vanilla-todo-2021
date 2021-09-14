.DEFAULT_GOAL := help
.PHONY: help setup build

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: ## Setup dependencies
	npm install -g esbuild

build: ## Build the application into the "build" directory
	find . -type f -not -path "./.undodir/*" -not -path "./build/*" -name "*.js" ! -name "*.min.*" | xargs esbuild --minify --outdir=build --allow-overwrite
	find . -type f -not -path "./.undodir/*" -not -path "./build/*" -name "*.css" ! -name "*.min.*" | xargs esbuild --minify --outdir=build --allow-overwrite
	mkdir -p ./build/static/css
	mkdir -p ./build/static/images
	cp ./index.html ./build/
	cp ./static/images/logo.png ./build/static/images/logo.png
	mv ./build/styles.css ./build/static/css/styles.css

