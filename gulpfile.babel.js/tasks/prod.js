import buildcss from "../utils/buildcss";

const prod = done => buildcss("prod")(done);

prod.displayName = "prod";
prod.description = "Build fluxgrid CSS";
prod.flags = {
  "--split": "Split fluxgrid into individual breakpoints",
  "--debug": "Build debug CSS"
};

export default prod;
