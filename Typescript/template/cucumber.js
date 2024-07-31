module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require ./features/**/*.ts",
    "--require ./features/*.ts",
    "--format @testevolve/testevolve-spark/dist/test-evolve/formatters/testevolveFormatter.js",
    "--publish-quiet"
  ].join(" "),
};
