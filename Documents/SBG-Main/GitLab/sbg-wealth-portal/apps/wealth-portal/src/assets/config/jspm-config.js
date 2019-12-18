System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm/github/*",
    "npm:*": "jspm/npm/*"
  },

  packages: {
    "app": {
      "main": "boot"
    }
  },

  map: {
    "-": "npm:babel-core@5.8.38",
    "--runtime": "npm:babel-runtime@5.8.38",
    "@angular/animations": "npm:@angular/animations@4.4.4",
    "@angular/animations/browser": "npm:@angular/animations@4.4.4/bundles/animations-browser.umd.js",
    "@angular/cdk": "npm:@angular/cdk@2.0.0-beta.12",
    "@angular/cdk/a11y": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-a11y.umd.js",
    "@angular/cdk/bidi": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-bidi.umd.js",
    "@angular/cdk/coercion": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-coercion.umd.js",
    "@angular/cdk/collections": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-collections.umd.js",
    "@angular/cdk/keycodes": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-layout.umd.js",
    "@angular/cdk/layout": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-keycodes.umd.js",
    "@angular/cdk/observers": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-observers.umd.js",
    "@angular/cdk/overlay": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-overlay.umd.js",
    "@angular/cdk/platform": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-platform.umd.js",
    "@angular/cdk/portal": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-portal.umd.js",
    "@angular/cdk/rxjs": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-rxjs.umd.js",
    "@angular/cdk/scrolling": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-scrolling.umd.js",
    "@angular/cdk/stepper": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-stepper.umd.js",
    "@angular/cdk/table": "npm:@angular/cdk@2.0.0-beta.12/bundles/cdk-table.umd.js",
    "@angular/common": "npm:@angular/common@4.4.4",
    "@angular/common/testing": "npm:@angular/common@4.4.4/bundles/common-testing.umd",
    "@angular/compiler": "npm:@angular/compiler@4.4.4",
    "@angular/compiler/testing": "npm:@angular/compiler@4.4.4/bundles/compiler-testing.umd",
    "@angular/core": "npm:@angular/core@4.4.4",
    "@angular/core/testing": "npm:@angular/core@4.4.4/bundles/core-testing.umd",
    "@angular/forms": "npm:@angular/forms@4.4.4",
    "@angular/forms/testing": "npm:@angular/forms@4.4.4/bundles/forms-testing.umd",
    "@angular/http": "npm:@angular/http@4.4.4",
    "@angular/http/testing": "npm:@angular/http@4.4.4/bundles/http-testing.umd",
    "@angular/material": "npm:@angular/material@2.0.0-beta.12",
    "@angular/platform-browser": "npm:@angular/platform-browser@4.4.4",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@4.4.4",
    "@angular/platform-browser-dynamic/testing": "npm:@angular/platform-browser-dynamic@4.4.4/bundles/platform-browser-testing.umd",
    "@angular/platform-browser/animations": "npm:@angular/platform-browser@4.4.4/bundles/platform-browser-animations.umd",
    "@angular/platform-browser/testing": "npm:@angular/platform-browser@4.4.5/bundles/platform-browser-testing.umd",
    "@angular/router": "npm:@angular/router@4.4.4",
    "@angular/router/testing": "npm:@angular/router@4.4.4/bundles/router-testing.umd",
    "@angular2-mdl-ext/popover": "npm:@angular2-mdl-ext/popover@0.6.0",
    "@angular2-mdl-ext/select": "npm:@angular2-mdl-ext/select@0.10.3",
    "@ng-idle/core": "npm:@ng-idle/core@2.0.0-beta.12",
    "@ngrx/core": "npm:@ngrx/core@1.2.0",
    "@ngrx/effects": "npm:@ngrx/effects@2.0.5",
    "@ngrx/effects/testing": "npm:@ngrx/effects@2.0.5/bundles/effects-testing.umd",
    "@ngrx/router-store": "npm:@ngrx/router-store@1.2.6",
    "@ngrx/store": "npm:@ngrx/store@2.2.3",
    "@ngrx/store-devtools": "npm:@ngrx/store-devtools@3.2.4",
    "@ngrx/store-log-monitor": "npm:@ngrx/store-log-monitor@3.0.2",
    "@ngx-translate/core": "npm:@ngx-translate/core@6.0.1",
    "@ngx-translate/http-loader": "npm:@ngx-translate/http-loader@0.0.3",
    "angular2-highcharts": "npm:angular2-highcharts@0.5.5",
    "angular2-moment": "npm:angular2-moment@1.4.0",
    "angular2-text-mask": "npm:angular2-text-mask@8.0.4",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "canvg": "npm:canvg@0.0.8",
    "clean-css": "npm:clean-css@3.4.28",
    "core-js": "npm:core-js@2.5.1",
    "css": "github:systemjs/plugin-css@0.1.36",
    "dialog-polyfill": "npm:dialog-polyfill@0.4.9",
    "dom-to-image": "npm:dom-to-image@2.6.0",
    "es6-shim": "github:es-shims/es6-shim@0.35.1",
    "hammerjs": "npm:hammerjs@2.0.8",
    "highcharts": "npm:highcharts@5.0.12",
    "html2canvas": "npm:html2canvas@0.5.0-beta4",
    "html2canvas-proxy": "npm:html2canvas-proxy@0.0.5",
    "json": "github:systemjs/plugin-json@0.1.2",
    "jspdf": "npm:jspdf@1.3.5",
    "moment": "npm:moment@2.19.2",
    "ng2-cookies": "npm:ng2-cookies@1.0.12",
    "ng2-currency-mask": "npm:ng2-currency-mask@4.4.1",
    "ngrx-store-freeze": "npm:ngrx-store-freeze@0.1.9",
    "ngrx-store-logger": "npm:ngrx-store-logger@0.1.8",
    "path-to-regexp": "npm:path-to-regexp@1.7.0",
    "reflect-metadata": "npm:reflect-metadata@0.1.10",
    "reselect": "npm:reselect@2.5.4",
    "rxjs": "npm:rxjs@5.5.2",
    "sbg-angular2-highcharts": "npm:sbg-angular2-highcharts@0.5.5",
    "sbg-button-ng": "npm:sbg-button-ng@1.0.6",
    "sbg-expansion-panel": "npm:sbg-expansion-panel@1.0.4",
    "sbg-loader": "npm:sbg-loader@1.0.7",
    "sbg-render-complete-ng": "npm:sbg-render-complete-ng@1.0.1",
    "sbg-table": "npm:sbg-table@1.0.14",
    "sbgTableExternal.module": "/app/goal-setter/sbgTableExternal.module.js",
    "scss": "github:theefer/plugin-sass@master",
    "text": "github:systemjs/plugin-text@0.0.2",
    "text-mask-addons": "npm:text-mask-addons@3.7.1",
    "ts": "github:frankwallis/plugin-typescript@7.1.1",
    "zone.js": "npm:zone.js@0.8.18",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.12.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.4.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:theefer/plugin-sass@master": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "sass.js": "npm:sass.js@0.9.13"
    },
    "npm:@angular/animations@4.4.4": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/cdk@2.0.0-beta.12": {
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/common@4.4.4": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/compiler@4.4.4": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/core@2.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.5.2",
      "zone.js": "npm:zone.js@0.7.8"
    },
    "npm:@angular/core@4.4.4": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.5.2",
      "tslib": "npm:tslib@1.8.0",
      "zone.js": "npm:zone.js@0.8.18"
    },
    "npm:@angular/forms@4.4.4": {
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.4.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/http@4.4.4": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.4.4",
      "rxjs": "npm:rxjs@5.5.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/material@2.0.0-beta.12": {
      "@angular/cdk": "npm:@angular/cdk@2.0.0-beta.12",
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/platform-browser-dynamic@4.4.4": {
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/compiler": "npm:@angular/compiler@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.4.4",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/platform-browser@4.4.4": {
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular/router@4.4.4": {
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4",
      "@angular/platform-browser": "npm:@angular/platform-browser@4.4.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.5.2",
      "tslib": "npm:tslib@1.8.0"
    },
    "npm:@angular2-mdl-ext/popover@0.6.0": {
      "angular2-mdl": "npm:angular2-mdl@2.13.2"
    },
    "npm:@angular2-mdl-ext/select@0.10.3": {
      "@angular2-mdl-ext/popover": "npm:@angular2-mdl-ext/popover@0.6.0",
      "angular2-mdl": "npm:angular2-mdl@2.13.2"
    },
    "npm:@ng-idle/core@2.0.0-beta.12": {
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4"
    },
    "npm:@ngrx/core@1.2.0": {
      "rxjs": "npm:rxjs@5.5.2"
    },
    "npm:@ngrx/effects@2.0.5": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "@ngrx/store": "npm:@ngrx/store@2.2.3",
      "rxjs": "npm:rxjs@5.5.2"
    },
    "npm:@ngrx/router-store@1.2.6": {
      "@angular/common": "npm:@angular/common@4.4.4",
      "@angular/core": "npm:@angular/core@4.4.4",
      "@angular/router": "npm:@angular/router@4.4.4",
      "@ngrx/core": "npm:@ngrx/core@1.2.0",
      "@ngrx/store": "npm:@ngrx/store@2.2.3",
      "rxjs": "npm:rxjs@5.5.2"
    },
    "npm:@ngrx/store-devtools@3.2.4": {
      "@ngrx/store": "npm:@ngrx/store@2.2.3",
      "rxjs": "npm:rxjs@5.5.2"
    },
    "npm:@ngrx/store-log-monitor@3.0.2": {
      "@angular/core": "npm:@angular/core@2.4.10",
      "@ngrx/store": "npm:@ngrx/store@2.2.3",
      "@ngrx/store-devtools": "npm:@ngrx/store-devtools@3.2.4",
      "rxjs": "npm:rxjs@5.5.2"
    },
    "npm:@ngrx/store@2.2.3": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "@ngrx/core": "npm:@ngrx/core@1.2.0",
      "rxjs": "npm:rxjs@5.5.2"
    },
    "npm:@ngx-translate/core@6.0.1": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@ngx-translate/http-loader@0.0.3": {
      "@angular/http": "npm:@angular/http@4.4.4",
      "@ngx-translate/core": "npm:@ngx-translate/core@6.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@types/highcharts@4.2.57": {
      "@types/geojson": "npm:@types/geojson@1.0.6"
    },
    "npm:accepts@1.3.4": {
      "mime-types": "npm:mime-types@2.1.17",
      "negotiator": "npm:negotiator@0.6.1"
    },
    "npm:adler32cs@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:ajv@5.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "co": "npm:co@4.6.0",
      "fast-deep-equal": "npm:fast-deep-equal@1.0.0",
      "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-schema-traverse": "npm:json-schema-traverse@0.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2-highcharts@0.5.5": {
      "@types/highcharts": "npm:@types/highcharts@4.2.57",
      "highcharts": "npm:highcharts@5.0.12"
    },
    "npm:angular2-moment@1.4.0": {
      "@angular/core": "npm:@angular/core@4.4.4",
      "moment": "npm:moment@2.19.2"
    },
    "npm:angular2-text-mask@8.0.4": {
      "text-mask-core": "npm:text-mask-core@5.0.1"
    },
    "npm:asn1.js@4.9.2": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:asynckit@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:aws-sign2@0.7.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "tweetnacl": "npm:tweetnacl@0.14.5"
    },
    "npm:body-parser@1.18.2": {
      "bytes": "npm:bytes@3.0.0",
      "content-type": "npm:content-type@1.0.4",
      "debug": "npm:debug@2.6.9",
      "depd": "npm:depd@1.1.1",
      "http-errors": "npm:http-errors@1.6.2",
      "iconv-lite": "npm:iconv-lite@0.4.19",
      "on-finished": "npm:on-finished@2.3.0",
      "qs": "npm:qs@6.5.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "raw-body": "npm:raw-body@2.3.2",
      "type-is": "npm:type-is@1.6.15",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:boom@4.3.1": {
      "hoek": "npm:hoek@4.2.0"
    },
    "npm:boom@5.2.0": {
      "hoek": "npm:hoek@4.2.0"
    },
    "npm:browserify-aes@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.1.1",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:canvas@1.6.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.8.0",
      "parse-css-font": "npm:parse-css-font@2.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "units-css": "npm:units-css@0.4.0"
    },
    "npm:canvg@0.0.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "canvas": "npm:canvas@1.6.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "rgbcolor": "npm:rgbcolor@0.0.6",
      "stackblur": "npm:stackblur@0.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xmldom": "npm:xmldom@0.1.27"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.28": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:content-disposition@0.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@2.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:cors@2.8.4": {
      "object-assign": "npm:object-assign@4.1.1",
      "vary": "npm:vary@1.1.2"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.9"
    },
    "npm:create-hmac@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.9"
    },
    "npm:cryptiles@3.1.2": {
      "boom": "npm:boom@5.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.12.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.14",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.5",
      "randomfill": "npm:randomfill@1.0.3"
    },
    "npm:css-font-size-keywords@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-font-stretch-keywords@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-font-style-keywords@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-font-weight-keywords@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-global-keywords@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-list-helpers@1.0.1": {
      "tcomb": "npm:tcomb@2.7.0"
    },
    "npm:css-system-font-keywords@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dashdash@1.14.1": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.6.9": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.1.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.1",
      "randombytes": "npm:randombytes@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dom-to-image@2.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.1"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:etag@1.8.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:evp_bytestokey@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "md5.js": "npm:md5.js@1.3.4",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:express@4.16.2": {
      "accepts": "npm:accepts@1.3.4",
      "array-flatten": "npm:array-flatten@1.1.1",
      "body-parser": "npm:body-parser@1.18.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "content-disposition": "npm:content-disposition@0.5.2",
      "content-type": "npm:content-type@1.0.4",
      "cookie": "npm:cookie@0.3.1",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.6.9",
      "depd": "npm:depd@1.1.1",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.8.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@1.1.0",
      "fresh": "npm:fresh@0.5.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.1",
      "methods": "npm:methods@1.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "proxy-addr": "npm:proxy-addr@2.0.2",
      "qs": "npm:qs@6.5.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "send": "npm:send@0.16.1",
      "serve-static": "npm:serve-static@1.13.1",
      "setprototypeof": "npm:setprototypeof@1.1.0",
      "statuses": "npm:statuses@1.3.1",
      "type-is": "npm:type-is@1.6.15",
      "utils-merge": "npm:utils-merge@1.0.1",
      "vary": "npm:vary@1.1.2"
    },
    "npm:extsprintf@1.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fast-deep-equal@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:fast-json-stable-stringify@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:finalhandler@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@2.6.9",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "statuses": "npm:statuses@1.3.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@2.3.1": {
      "asynckit": "npm:asynckit@0.4.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.17",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:getpass@0.1.7": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hammerjs@2.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:har-schema@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:har-validator@5.0.3": {
      "ajv": "npm:ajv@5.3.0",
      "har-schema": "npm:har-schema@2.0.0"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash-base@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.3": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:hawk@6.0.2": {
      "boom": "npm:boom@4.3.1",
      "cryptiles": "npm:cryptiles@3.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@4.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@2.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:highcharts@5.0.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:hoek@4.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:html2canvas-proxy@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cors": "npm:cors@2.8.4",
      "express": "npm:express@4.16.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@2.4.2",
      "request": "npm:request@2.83.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:html2canvas@0.5.0-beta4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:http-errors@1.6.2": {
      "depd": "npm:depd@1.1.1",
      "inherits": "npm:inherits@2.0.3",
      "setprototypeof": "npm:setprototypeof@1.0.3",
      "statuses": "npm:statuses@1.3.1"
    },
    "npm:http-signature@1.2.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.4.1",
      "sshpk": "npm:sshpk@1.13.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:json-schema-traverse@0.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jspdf@1.3.5": {
      "adler32cs": "npm:adler32cs@0.0.1",
      "cf-blob.js": "npm:cf-blob.js@0.0.1",
      "file-saver": "npm:file-saver@1.3.3"
    },
    "npm:jsprim@1.4.1": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "extsprintf": "npm:extsprintf@1.3.0",
      "json-schema": "npm:json-schema@0.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.10.0"
    },
    "npm:md5.js@1.3.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@3.0.4",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:miller-rabin@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:mime-db@1.30.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.17": {
      "mime-db": "npm:mime-db@1.30.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:nan@2.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ngrx-store-freeze@0.1.9": {
      "@ngrx/store": "npm:@ngrx/store@2.2.3",
      "deep-freeze-strict": "npm:deep-freeze-strict@1.1.1"
    },
    "npm:ngrx-store-logger@0.1.8": {
      "@ngrx/store": "npm:@ngrx/store@2.2.3"
    },
    "npm:oauth-sign@0.8.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.2",
      "browserify-aes": "npm:browserify-aes@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.14",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parse-css-font@2.0.2": {
      "css-font-size-keywords": "npm:css-font-size-keywords@1.0.0",
      "css-font-stretch-keywords": "npm:css-font-stretch-keywords@1.0.1",
      "css-font-style-keywords": "npm:css-font-style-keywords@1.0.1",
      "css-font-weight-keywords": "npm:css-font-weight-keywords@1.0.0",
      "css-global-keywords": "npm:css-global-keywords@1.0.1",
      "css-list-helpers": "npm:css-list-helpers@1.0.1",
      "css-system-font-keywords": "npm:css-system-font-keywords@1.0.0",
      "tcomb": "npm:tcomb@2.7.0",
      "unquote": "npm:unquote@1.1.0"
    },
    "npm:parseurl@1.3.2": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-to-regexp@1.7.0": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:pbkdf2@3.0.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.9"
    },
    "npm:performance-now@2.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:proxy-addr@2.0.2": {
      "forwarded": "npm:forwarded@0.1.2",
      "ipaddr.js": "npm:ipaddr.js@1.5.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:randomfill@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "randombytes": "npm:randombytes@2.0.5",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:raw-body@2.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "bytes": "npm:bytes@3.0.0",
      "http-errors": "npm:http-errors@1.6.2",
      "iconv-lite": "npm:iconv-lite@0.4.19",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.0.3",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:request@2.83.0": {
      "aws-sign2": "npm:aws-sign2@0.7.0",
      "aws4": "npm:aws4@1.6.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "caseless": "npm:caseless@0.12.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.1",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.3.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@5.0.3",
      "hawk": "npm:hawk@6.0.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.2.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.17",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "performance-now": "npm:performance-now@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.5.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.3",
      "tunnel-agent": "npm:tunnel-agent@0.6.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uuid": "npm:uuid@3.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:rgbcolor@0.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:rxjs@5.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sass.js@0.9.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sbg-angular2-highcharts@0.5.5": {
      "@types/highcharts": "npm:@types/highcharts@4.2.57",
      "highcharts": "npm:highcharts@5.0.12"
    },
    "npm:sbg-button-ng@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sbg-render-complete-ng": "npm:sbg-render-complete-ng@1.0.1"
    },
    "npm:sbg-loader@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sbg-render-complete-ng": "npm:sbg-render-complete-ng@1.0.1"
    },
    "npm:sbg-table@1.0.14": {
      "sbg-button-ng": "npm:sbg-button-ng@1.0.6",
      "sbg-expansion-panel": "npm:sbg-expansion-panel@1.0.4",
      "sbg-loader": "npm:sbg-loader@1.0.7",
      "sbg-render-complete-ng": "npm:sbg-render-complete-ng@1.0.1"
    },
    "npm:send@0.16.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@2.6.9",
      "depd": "npm:depd@1.1.1",
      "destroy": "npm:destroy@1.0.4",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.8.1",
      "fresh": "npm:fresh@0.5.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.6.2",
      "mime": "npm:mime@1.4.1",
      "ms": "npm:ms@2.0.0",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "statuses": "npm:statuses@1.3.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:serve-static@1.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.16.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:sntp@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@4.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sshpk@1.13.1": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@1.0.0",
      "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.14.1",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "getpass": "npm:getpass@0.1.7",
      "jsbn": "npm:jsbn@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.14.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:statuses@1.3.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tcomb@2.7.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:text-mask-addons@3.7.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:text-mask-core@5.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:tough-cookie@2.3.3": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "npm:punycode@1.4.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-is@1.6.15": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.17"
    },
    "npm:units-css@0.4.0": {
      "isnumeric": "npm:isnumeric@0.2.0",
      "viewport-dimensions": "npm:viewport-dimensions@0.2.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@3.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:verror@1.10.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "extsprintf": "npm:extsprintf@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xmldom@0.1.27": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zone.js@0.7.8": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0"
    },
    "npm:zone.js@0.8.18": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0"
    }
  }
});
