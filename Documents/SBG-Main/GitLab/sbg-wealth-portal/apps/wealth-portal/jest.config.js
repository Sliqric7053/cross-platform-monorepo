module.exports = {
  name: 'wealth-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/wealth-portal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
