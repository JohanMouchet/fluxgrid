import buildcss from "../utils/buildcss";

const prod = done => buildcss("prod")(done);

prod.displayName = "prod";
prod.description = "Build Fluxgrid CSS";
prod.flags = {
  "--debug": "Build debug CSS"
};

export default prod;
