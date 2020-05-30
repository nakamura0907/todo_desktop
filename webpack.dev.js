const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const electronIndex = common.findIndex(config => config.target === "electron-renderer")
const mainIndex = common.findIndex(config => config.target === "web");

const devConfig = {
    mode: "development"
};

const electron = merge(common[electronIndex]);
const main = merge(common[mainIndex], devConfig);

module.exports = [electron, main];