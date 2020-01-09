import { watch, series } from "gulp";
import { config } from "../config";
import buildcss from "./buildcss";
import lintcss from "../tasks/lintcss";

const watcher = () => {
  watch(config.css.watch, series(buildcss("dev"), lintcss));
};

export default watcher;
