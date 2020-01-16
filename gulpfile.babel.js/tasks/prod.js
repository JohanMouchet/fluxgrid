import buildcss from "../utils/buildcss";

const prod = done => buildcss("prod")(done);

prod.displayName = "prod";
prod.description = "Build flexgrid CSS";
prod.flags = {
  "--debug": "Build debug CSS"
};

export default prod;
