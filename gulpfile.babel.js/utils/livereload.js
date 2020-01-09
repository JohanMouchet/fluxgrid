import browserSync from "browser-sync";
import { dir, config } from "../config";

const server = browserSync.create();

const livereload = done => {
  server.init({
    server: {
      baseDir: "./"
    },
    files: [config.html.src, `${dir.dist}**/*`]
  });
  done();
};

export { server, livereload };
