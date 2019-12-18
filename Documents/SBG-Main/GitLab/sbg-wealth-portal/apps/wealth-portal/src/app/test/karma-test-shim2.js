/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
//jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

__karma__.loaded = function() {};

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return path.slice(-8) == '.spec.js';
}

function isBuiltFile(path) {
  var builtPath = '/base/target/development/app';
  return isJsFile(path) && path.substr(0, builtPath.length) == builtPath;
}

var allSpecFiles = window.__karma__.config.jspm.expandedFiles;

// Load our SystemJS configuration.

System.config({
  paths: {
    // paths serve as alias
    'npm:': 'target/development/jspm/npm/',
    'github:': 'target/development/jspm/github/'
  },
  map: {
    '@angular/core': 'npm:@angular/core@4.4.4/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@4.4.4/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@4.4.4/bundles/compiler.umd.js',
    '@angular/platform-browser':
      'npm:@angular/platform-browser@4.4.4/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'npm:@angular/platform-browser-dynamic@4.4.4/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router@4.4.4/bundles/router.umd.js',

    // angular testing umd bundles
    '@angular/core/testing':
      'npm:@angular/core@4.4.4/bundles/core-testing.umd.js',
    '@angular/common/testing':
      'npm:@angular/common@4.4.4/bundles/common-testing.umd.js',
    '@angular/compiler/testing':
      'npm:@angular/compiler@4.4.4/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing':
      'npm:@angular/platform-browser@4.4.4/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing':
      'npm:@angular/platform-browser-dynamic@4.4.4/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/router/testing':
      'npm:@angular/router@4.4.4/bundles/router-testing.umd.js',

    // other libraries
    rxjs: 'npm:rxjs@5.5.2'
  },
  packages: {
    app: {
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});

function importSystemJsExtras() {
  return System.import('src/client/config/jspm-config.extras.js').catch(
    function(reason) {
      console.log(reason);
    }
  );
}

importSystemJsExtras()
  .then(function() {
    return Promise.all([
      System.import('@angular/core/testing'),
      System.import('@angular/platform-browser-dynamic/testing'),
      System.import('@angular/common/testing'),
      System.import('@angular/compiler/testing'),
      System.import('@angular/platform-browser/testing')
    ]);
  })
  .then(function(providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];
    testing.TestBed.initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );
  })
  .then(function() {
    // Finally, load all spec files.
    // This will run the tests directly.
    return Promise.all(
      allSpecFiles.map(function(moduleName) {
        return System.import(moduleName);
      })
    );
  })
  .then(__karma__.start, __karma__.error);
