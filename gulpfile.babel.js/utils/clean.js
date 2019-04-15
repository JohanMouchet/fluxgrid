import { dir } from '../config';
import del from 'del';

const clean = () => del([dir.dist]);

export default clean;
