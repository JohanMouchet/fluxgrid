import buildcss from '../utils/buildcss';

const prod = done => buildcss('prod')(done);

prod.displayName = 'prod';
prod.description = 'Build flexboxgrid CSS';
prod.flags = { '--debug': 'Build debug CSS' };
prod.flags = { '--split': 'Split flexboxgrid into individual breakpoints' };

export default prod;
