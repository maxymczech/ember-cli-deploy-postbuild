/*eslint-env node*/
'use strict';

var path = require('path');
const {exec} = require('child_process');

//const RSVP = require('rsvp');
const DeployPluginBase = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-postbuild',

  createDeployPlugin: function(options) {
    let DeployPlugin = DeployPluginBase.extend({
      name: options.name,

      defaultConfig: {
        outputPath: 'tmp' + path.sep + 'deploy-dist/sitemap.xml'
      },
      requiredConfig: [], // Example required config. Remove this;

      didBuild(/* context */) {
        const outputPath = this.readConfig('outputPath');
        exec('npm run postbuild')
      },
    });

    return new DeployPlugin();
  }
};
