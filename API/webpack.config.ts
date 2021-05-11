import { resolve } from "path";
import { Configuration } from "webpack";
import * as dotenv from "dotenv";

dotenv.config();

const config: Configuration = {
  mode: process.env.NODE_ENV === "dev" ? "development" : "production",
  entry: { 
    authorized: "./src/authorized.ts",
    open: "./src/open.ts", 
  },
    
  output: {
    filename: "[name]/app.js",
    libraryTarget: "commonjs2",
    path: resolve(__dirname, "lib")
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  target: "node"
};

export default config;