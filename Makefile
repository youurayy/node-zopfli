REPORTER = spec

ifeq "$(OS)" "Windows_NT"
	BINPATH = node_modules\\.bin\\
	set NODE_ENV=test
else
	BINPATH = ./node_modules/.bin/
	export NODE_ENV=test
endif

test:
	@echo $(BINPATH)
	$(MAKE) lint
	$(BINPATH)mocha -b --require blanket --reporter $(REPORTER)

lint:
	$(BINPATH)jshint lib test

test-cov:
	$(MAKE) test REPORTER=spec
	$(MAKE) test REPORTER=html-cov 1> coverage.html

test-coveralls:
	$(MAKE) test REPORTER=spec
	$(MAKE) test REPORTER=mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js --verbose
	rm -rf lib-cov

clean:
	rm -rf ./lib/binding

.PHONY: test
