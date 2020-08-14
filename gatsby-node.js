exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({ // Any change to entry, output, target, or resolveLoaders will be ignored.
      devtool: false,
      optimization:{
        namedModules: false,
        namedChunks: false,
        mangleWasmImports: true,
        removeAvailableModules: false,
        chunkIds: "size"
      }
    })
  }
}
