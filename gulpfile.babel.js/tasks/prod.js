import { buildFlexboxgridMin } from '../utils/buildcss';

const prod = done => buildFlexboxgridMin(done);

prod.displayName = 'prod';
prod.description = 'Build flexboxgrid CSS';

export default prod;
