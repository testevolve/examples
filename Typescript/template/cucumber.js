module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require ./features/**/*.ts",
    "--require ./features/*.ts",
    "--format ./node_modules/@testevolve/testevolve-spark/dist/test-evolve/formatters/testevolveFormatter",
    "--publish-quiet"
  ].join(" "),
};
