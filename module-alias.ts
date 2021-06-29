const moduleAlias = require('module-alias')

/**
 * Register module alias for shorter import statement
 */
function registerAlias() {
  const alias = "@src";
  const target = `${__dirname}/src`;
  console.info(`⚡️[server]: Adding import alias: ${alias} target: ${target}`);
  moduleAlias.addAlias(alias, target);
}

registerAlias();