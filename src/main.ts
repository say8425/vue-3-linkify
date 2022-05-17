import { App } from "@vue/runtime-core";

import directive from "./directive";
import mixin from "./mixin";

const plugin = {
  install(app: App) {
    app.directive("linkify", directive);
  },
};

export { directive, mixin };
export default plugin;
