/*eslint-env node*/
'use strict';

var path = require('path');
const { exec } = require('child_process');

//const RSVP = require('rsvp');
const DeployPluginBase = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-postbuild',

  createDeployPlugin: function(options) {
    let DeployPlugin = DeployPluginBase.extend({
      name: options.name,

      defaultConfig: {
        scripts: ['postbuild']
      },
      requiredConfig: [], // Example required config. Remove this;

      didBuild(/* context */) {
        const scripts = this.readConfig('scripts');
        if(Array.isArray(scripts)){
          scripts.forEach(script => {
            this.log(`Executing script: ${script}`);
            exec(`npm run ${script}`, {
              cwd: this.project.root
            });
          });
        }
      },
    });

    return new DeployPlugin();
  }
};
