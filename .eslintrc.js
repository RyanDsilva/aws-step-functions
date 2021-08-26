module.exports = {
  "env": {
    "node": true,
    "es6": true,
  },
  "extends": "airbnb-base",
  "rules": {
    "linebreak-style": "off",
    "max-len": ["error", { "code": 120 }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
  }
};
