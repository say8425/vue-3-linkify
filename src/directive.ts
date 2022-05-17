import { Directive, DirectiveBinding } from "@vue/runtime-core";
import { Options } from "linkifyjs";
import { IFilterXSSOptions } from "xss";

import linkify from "./linkify";

const directive: Directive = {
  beforeMount(
    element: HTMLElement,
    binding?: DirectiveBinding<{ linkify?: Options; xss?: IFilterXSSOptions }>,
  ) {
    const options = binding?.value;
    const linkifyOptions = options?.linkify;
    const xssOptions = options?.xss;

    element.innerHTML = linkify(element.innerHTML, linkifyOptions, xssOptions);
  },
  updated(
    element: HTMLElement,
    binding?: DirectiveBinding<{ linkify?: Options; xss?: IFilterXSSOptions }>,
  ) {
    const options = binding?.value;
    const linkifyOptions = options?.linkify;
    const xssOptions = options?.xss;

    element.innerHTML = linkify(element.innerHTML, linkifyOptions, xssOptions);
  },
};

export default directive;
