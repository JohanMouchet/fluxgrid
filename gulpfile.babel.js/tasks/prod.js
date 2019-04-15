import { series } from 'gulp';
import clean from '../utils/clean';
import buildcss from './buildcss';

const prod = done => series(clean, buildcss)(done);

prod.description = 'Clean destination folder and compile SASS';
prod.flags = { '--prod': 'Build using the prod environment' };
prod.displayName = 'prod';

export default prod;
