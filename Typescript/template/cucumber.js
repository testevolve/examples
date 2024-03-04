module.exports = {
  default: [
    "features/**/*.feature",
    "--require-module ts-node/register",
    "--require ./features/**/*.ts",
    "--require ./features/*.ts",
    "--require ./features/**/*.js",
    "--require ./features/*.js",
    "--format ./node_modules/@testevolve/testevolve-spark/dist/test-evolve/formatters/testevolveFormatter",
    "--publish-quiet"
  ].join(" "),
};
