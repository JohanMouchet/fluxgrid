import buildcss from '../utils/buildcss';

const dist = done => buildcss('dist')(done);

dist.displayName = 'dist';
dist.description = 'Build flexboxgrid, debug and split CSS';

export default dist;
