import yargs from 'yargs';

const PRODUCTION = yargs.argv.prod;

console.log('Environment:', PRODUCTION ? 'prod' : 'dev');

export { PRODUCTION };
