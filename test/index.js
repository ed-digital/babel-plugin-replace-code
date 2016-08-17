const assertTransform = require("assert-transform");
const babel = require("babel-core");
const path = require("path");

const BABEL_OPTIONS = {
  "presets": ["es2015"],
  "plugins": [
    [path.resolve(__dirname, "../lib/index.js"), {
      "process.env.NODE_ENV": "development"
    }]
  ]
};

describe("babel-plugin-transform-define", () => {
  before(function () {
    // TODO: WTF babel needs to warm up! This is Bullshit!
    this.timeout(10000); // eslint-disable-line
    babel.transform("const x = 1;", BABEL_OPTIONS);
  });

  it("should transform Member Expressions", () => {
    return assertTransform(
      path.join(__dirname, "./member-expression/actual.js"),
      path.join(__dirname, "./member-expression/expected.js"), BABEL_OPTIONS);
  });
});