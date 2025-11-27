// import "./src/styles/global.css";
// import LogRocket from "logrocket";
const LogRocket = require("logrocket");

exports.onInitialClientRender = () => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    LogRocket.init("eu3rg7/redstone");
  }
};
