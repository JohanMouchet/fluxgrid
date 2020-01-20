import buildcss from "../utils/buildcss";

const dist = done => buildcss("dist")(done);

dist.displayName = "dist";
dist.description = "Build Fluxgrid and debug CSS";

export default dist;
