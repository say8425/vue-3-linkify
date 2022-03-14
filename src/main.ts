import { App, Directive } from "@vue/runtime-core";
import linkifyStr from "linkify-string";
import { Options } from "linkifyjs";

const directive: Directive = {
  beforeMount(element: HTMLElement, binding) {
    const options = binding.value as Options;
    element.innerHTML = linkifyStr(element.innerHTML, options);
  },
  updated(element: HTMLElement, binding) {
    const options = binding.value as Options;
    element.innerHTML = linkifyStr(element.innerHTML, options);
  },
};

const mixin = {
  directives: { Linkify: directive },
};

const plugin = {
  install(app: App) {
    app.directive("linkify", directive);
  },
};

export { directive, mixin };
export default plugin;
