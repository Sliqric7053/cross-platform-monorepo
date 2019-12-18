/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        map: {
            "process": "github:jspm/nodelibs-process@0.1.2",
            "npm:@angular/common@4.4.4": {
                "@angular/core/testing": "npm:@angular/core@4.4.4/bundles/core-testing.umd"
            },
            "npm:@angular/compiler@4.4.4": {
                "@angular/core/testing": "npm:@angular/core@4.4.4/bundles/core-testing.umd"
            },
            "npm:@angular/forms@4.4.4": {
                "@angular/common/testing": "npm:@angular/common@4.4.4/bundles/common-testing.umd",
                "@angular/core/testing": "npm:@angular/core@4.4.4/bundles/core-testing.umd"
            },
            "npm:@angular/http@4.4.4": {
                "@angular/core/testing": "npm:@angular/core@4.4.4/bundles/core-testing.umd",
                "@angular/platform-browser/testing": "npm:@angular/platform-browser@4.4.4/bundles/platform-browser-testing.umd"
            },
            "npm:@angular/platform-browser@4.4.4": {
                "@angular/core/testing": "npm:@angular/core@4.4.4/bundles/core-testing.umd",
                "@angular/common/testing": "npm:@angular/common@4.4.4/bundles/common-testing.umd"
            },
            "npm:@angular/router@4.4.4": {
                '@angular/core/testing': 'npm:@angular/core@4.4.4/bundles/core-testing.umd',
                '@angular/common/testing': 'npm:@angular/common@4.4.4/bundles/common-testing.umd',
                '@angular/platform-browser/testing': 'npm:@angular/platform-browser@4.4.4/bundles/platform-browser-testing.umd'
            },
            "npm:@angular/platform-browser-dynamic@4.4.4": {
                "@angular/common/testing": "npm:@angular/common@4.4.4/bundles/common-testing.umd",
                "@angular/compiler/testing": "npm:@angular/compiler@4.4.4/bundles/compiler-testing.umd",
                "@angular/core/testing": "npm:@angular/core@4.4.4/bundles/core-testing.umd",
                "@angular/platform-browser/testing": "npm:@angular/platform-browser@4.4.4/bundles/platform-browser-testing.umd"
            }
        }
    });
})(this);

