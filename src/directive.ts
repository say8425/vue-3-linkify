import { Directive } from "@vue/runtime-core";

import linkify from "./linkify";

const directive: Directive = {
  beforeMount(element: HTMLElement, binding) {
    element.innerHTML = linkify(element.innerHTML, binding.value);
  },
  updated(element: HTMLElement, binding) {
    element.innerHTML = linkify(element.innerHTML, binding.value);
  },
};

export default directive;
