import { App, Directive } from "@vue/runtime-core";
import linkifyHtml from "linkify-html";
import { Options } from "linkifyjs";
import xss, { IFilterXSSOptions } from "xss";

interface VueLinkifyOptions extends Options {
  xssOptions?: IFilterXSSOptions;
}

const linkify = (rawHtml: string, options: VueLinkifyOptions): string => {
  const sanitized = xss(rawHtml, options.xssOptions);
  return linkifyHtml(sanitized, options);
};

const directive: Directive = {
  beforeMount(element: HTMLElement, binding) {
    element.innerHTML = linkify(element.innerHTML, binding.value);
  },
  updated(element: HTMLElement, binding) {
    element.innerHTML = linkify(element.innerHTML, binding.value);
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
