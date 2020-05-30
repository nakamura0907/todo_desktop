const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const BomPlugin = require("webpack-utf8-bom");


const electronIndex = common.findIndex(config => config.target === "electron-renderer")
const mainIndex = common.findIndex(config => config.target === "web");

const devConfig = {
    mode: "production",
    target: "electron-main",
    plugins: [
        new BomPlugin(true)
    ],
};

const electron = merge(common[electronIndex]);
const main = merge(common[mainIndex], devConfig);

module.exports = [electron, main];