import buildcss from "../utils/buildcss";

const dist = done => buildcss("dist")(done);

dist.displayName = "dist";
dist.description = "Build fluxgrid, debug and split CSS";

export default dist;
