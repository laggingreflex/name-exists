const Path = require('path')
const fs = require('fs');
const { spawnSync } = require('child_process');

module.exports = nameExists;

function nameExists(config = {}) {
  if (typeof config === 'string') config = { name: config };
  if (!config.name) throw new Error('Need a name');
  const allPackageNames = getAllPackageNames(config);
  const strip = str => str.replace(/[-._]/g, '');
  const nameStripped = strip(config.name);
  for (const existing of allPackageNames) {
    if (nameStripped === strip(existing)) {
      throw new Error(`Similar package exists '${config.name}' ≈ '${existing}'`);
    }
  }
  return false
}

function getAllPackageNames(config = {}) {
  const now = +new Date;
  let lastUpdate = 0;
  try {
    lastUpdate = JSON.parse(fs.readFileSync(Path.join(__dirname, 'node_modules/.last-update'), 'utf8'));
  } catch (error) {}
  if (!(config.update === false || lastUpdate > now - (24 * 60 * 60 * 1000))) {
    console.log('Updating registry...');
    spawnSync('npm', ['update'], { cwd: __dirname, shell: true, stdio: 'inherit' });
    try {
      fs.writeFileSync(Path.join(__dirname, 'node_modules/.last-update'), now);
    } catch (error) {}
  }
  return require('all-the-package-names');
}
