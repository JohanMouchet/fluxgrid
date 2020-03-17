import buildcss from "../utils/buildcss";

const dist = done => buildcss("dist")(done);

dist.displayName = "dist";
dist.description = "Build Fluxgrid, debug and demo CSS";

export default dist;
