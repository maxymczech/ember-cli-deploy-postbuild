/*eslint-env node*/
'use strict';

const subject = require('../../index');
const assert  = require('../helpers/assert');

describe('Auto Sitemap plugin', function() {
  it('has a name', function() {
    let instance = subject.createDeployPlugin({
      name: 'auto-sitemap'
    });

    assert.equal(instance.name, 'auto-sitemap');
  });

  it('implements the correct hooks', function() {
    let plugin = subject.createDeployPlugin({
      name: 'auto-sitemap'
    });

    assert.isDefined(plugin.configure);
    assert.isFunction(plugin.configure);
  });
});
