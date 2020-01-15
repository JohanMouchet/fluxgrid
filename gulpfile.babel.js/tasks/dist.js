import buildcss from "../utils/buildcss";

const dist = done => buildcss("dist")(done);

dist.displayName = "dist";
dist.description = "Build fluxgrid and debug CSS";

export default dist;
