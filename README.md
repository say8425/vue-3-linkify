# Vue 3 Linkify 

[![NPM](https://img.shields.io/npm/v/@say8425/vue-3-linkify?color=cb3837&logo=npm)](https://www.npmjs.com/package/vue-3-linkify)
[![Test](https://github.com/say8425/vue-3-linkify/actions/workflows/test.yml/badge.svg)](https://github.com/say8425/vue-3-linkify/actions/workflows/test.yml)
[![Release](https://github.com/say8425/vue-3-linkify/actions/workflows/release.yml/badge.svg)](https://github.com/say8425/vue-3-linkify/actions/workflows/release.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/say8425/vue-3-linkify/blob/master/LICENSE)

Vue 3 directive to turn URL and emails into anchor tag that use [Linkify.js](https://linkify.js.org/).

## Installation

```shell
npm install --save vue-3-linkify
```

```shell
yarn add vue-3-linkify
```

Recommended to use npm or yarn to install.

## Usage

### Register plugin

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import Vue3linkify from "vue-3-linkify";

const app = createApp(App);

app.use(Vue3linkify)
app.mount('#app')
```

### Use directive

```vue
<template>
  <div v-linkify>
    ...
  </div>
</template>
```
### Use directive with options

```vue
<template>
  <div v-linkify:options="{
    target: '_blank',
  }">
    ...
  </div>
</template>
```

You can use the [linkify options](https://linkify.js.org/docs/options.html).

### Add event listener

```vue
<template>
  <div v-linkify:options="{
    target: '_blank',
    attributes: {
      onclick: 'event.stopPropagation()',
    },
  }">
    ...
  </div>
</template>
```

Unfortunately, the [events option](https://linkify.js.org/docs/options.html#events) is not supported in linkify.js.
But you can add event listeners to [attributes options](https://linkify.js.org/docs/options.html#attributes) manually.

