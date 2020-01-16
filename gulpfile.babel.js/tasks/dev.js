import { series } from "gulp";
import { livereload } from "../utils/livereload";
import watcher from "../utils/watcher";
import buildcss from "../utils/buildcss";

const dev = done => series(buildcss("dev"), livereload, watcher)(done);

dev.displayName = "dev";
dev.description =
  "Build flexgrid (un-minified), debug and demo CSS, start a browserSync server and watcher";

export default dev;
