import buildcss from '../utils/buildcss';

const prod = done => buildcss('prod')(done);

prod.displayName = 'prod';
prod.description = 'Build flexboxgrid CSS';
prod.flags = {
	'--split': 'Split flexboxgrid into individual breakpoints',
	'--debug': 'Build debug CSS',
};

export default prod;
