var ex_runtime = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    ChromeUtils.import(context.extension.rootURI.resolve(
        "experiments/fixCaching.jsm")).fixCaching(context.extension);
    // we only have a child implementation
    return {ex_runtime: {}};
  }
};