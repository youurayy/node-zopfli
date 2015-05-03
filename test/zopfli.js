/* jshint mocha: true */

'use strict';

var assert = require('chai').assert;
var Zopfli = require('../lib/zopfli');

describe('Zopfli', function() {
  describe('constructor', function() {

		it('should set deflate format if none given', function() {
			var zopfli = new Zopfli();
			assert.equal(zopfli.format, 'deflate');
		});

    it('should set defaults options', function() {
      var zopfli = new Zopfli('deflate');
      assert.equal(zopfli.options.verbose, false);
      assert.equal(zopfli.options.verbose_more, false);
      assert.equal(zopfli.options.numiterations, 15);
			assert.equal(zopfli.options.blocksplitting, true);
			assert.equal(zopfli.options.blocksplittinglast, false);
			assert.equal(zopfli.options.blocksplittingmax, 15);
    });

		it('should take given options', function() {
			var options = {
				verbose: true,
			  verbose_more: true,
			  numiterations: 30,
			  blocksplitting: false,
			  blocksplittinglast: true,
			  blocksplittingmax: 30
			};
      var zopfli = new Zopfli('deflate', options);
      assert.equal(zopfli.options.verbose, options.verbose);
      assert.equal(zopfli.options.verbose_more, options.verbose_more);
      assert.equal(zopfli.options.numiterations, options.numiterations);
			assert.equal(zopfli.options.blocksplitting, options.blocksplitting);
			assert.equal(zopfli.options.blocksplittinglast, options.blocksplittinglast);
			assert.equal(zopfli.options.blocksplittingmax, options.blocksplittingmax);
    });

		it('should inherits Transform', function() {
			var zopfli = new Zopfli('deflate');
			assert.instanceOf(zopfli, require('stream').Transform);
		});

  });
});
