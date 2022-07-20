# Vue 3 Linkify 

[![NPM](https://img.shields.io/npm/v/vue-3-linkify?color=cb3837&logo=npm)](https://www.npmjs.com/package/vue-3-linkify)
[![Test](https://github.com/say8425/vue-3-linkify/actions/workflows/test.yml/badge.svg)](https://github.com/say8425/vue-3-linkify/actions/workflows/test.yml)
[![Release](https://github.com/say8425/vue-3-linkify/actions/workflows/release.yml/badge.svg)](https://github.com/say8425/vue-3-linkify/actions/workflows/release.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/say8425/vue-3-linkify/blob/master/LICENSE)

Vue 3 directive to turn URL and emails into anchor tag that use [Linkify.js](https://linkify.js.org/).

[![Demo vue-3-linkify](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-3-linkify-demo-pizsri?eslint=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark)

## Installation

```shell
npm install --save vue-3-linkify
```

```shell
yarn add vue-3-linkify
```

Recommended to use npm or yarn to install.

## Usage

> **Warning**
> This Usage is for Version 2.
> If you want to use Version 1, please read the [Version 1 README.md](https://github.com/say8425/vue-3-linkify/tree/v1.1.0).

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

### Options

```vue
<template>
  <div v-linkify:options="{
    linkify: {
      target: '_blank',
    },
    xss: {
      whiteList: {
        a: ['href', 'title', 'target'],
      },
    }
  }">
    ...
  </div>
</template>
```

You can set options to customize the behavior.
There are two following options: Linkify and JS XSS.

#### Linkify

```vue
<template>
  <div v-linkify:options="{
    linkify: {
      target: '_blank',
    },
  }">
    ...
  </div>
</template>
```

You can use the following [linkify options](https://linkify.js.org/docs/options.html) with linkify key.

#### XSS

```vue
<template>
  <div v-linkify:options="{
    xss: {
      whiteList: {
        a: ['href', 'title', 'target'],
      },
    }
  }">
    ...
  </div>
</template>
```

[jsxss options](https://jsxss.com/en/options.html) with xss key.

#### Event listener

```vue
<template>
  <div v-linkify:options="{
    linkify: {
      attributes: {
        onclick: 'event.stopPropagation()',
      },  
    }
  }">
    ...
  </div>
</template>
```

Unfortunately, the [events option](https://linkify.js.org/docs/options.html#events) is not supported in linkify.js.
But you can add event listeners to [attributes options](https://linkify.js.org/docs/options.html#attributes) manually.
