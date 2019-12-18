declare var require: any;

const gulp = require('gulp');
const tasks = require('sbg-gulp-ng');

tasks.run(gulp, {
  ngVersion: 6,
  projectName: 'advisor_portal',
  hasFeatureToggle: false,
  hasAcceptanceTests: false,
  e2eTestProgress: '',
  unitTestWatch: '--watch=false',
  unitTestHeadless: '--browsers=ChromeHeadless',
  requiresMockServer: false
});
