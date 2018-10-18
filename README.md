# vue-tour-easy

[![Greenkeeper badge](https://badges.greenkeeper.io/Cweili/vue-tour-easy.svg)](https://greenkeeper.io/)

[![npm][npm-version]][npm]
[![npm][npm-size]][npm]
[![npm][npm-downloads]][npm]
[![npm][npm-license]][npm]


[![github][github-issues]][github]


Easy tour [Vue.js 2][vuejs] component.

## Installation

```shell
npm install vue-tour-easy --save
```

## Usage

```html
<template>
  <div>
    <div id="a"></div>
    <div class="b"></div>
    <tour v-model="show" :steps="steps"/>
  </div>
</template>

<script>
  import Tour from 'vue-tour-easy'

  export default {
    components: {
      Tour
    },

    data() {
      return {
        show: true,
        steps: [
          {
            el: '#a',
            text: 'First Step',
            position: 'top'
          },
          {
            el: '.b',
            text: 'Second Step',
            position: 'bottom right',
            cancelPosition: 'top'
          }
        ]
      }
    }
  }
</script>
```

## Properties

* `show`: `Boolean` Whether the tour shows
* `steps`: `Array`
  * `el`: `String` Selector of DOMElement
  * `text`: `Any` Text for step
  * `position`: `String` Text position, values `top` `bottom` `left` `right`
  * `cancelPosition`: Cancel button position, values `top` `bottom`

## Slots

### replace text

```html
<tour v-model="show" :steps="steps">
  <div>{{ steps[stepIndex].text }}</div>
</tour>
```

### replace cancel button

```html
<tour v-model="show" :steps="steps">
  <button slot="cancel">cancel</button>
</tour>
```

## Events

* `step`: When the steps change
* `end`: When the end of the tour
* `cancel`: When the tour is cancelled

[npm]: https://www.npmjs.com/package/vue-tour-easy
[npm-version]: https://img.shields.io/npm/v/vue-tour-easy.svg
[npm-size]: https://img.shields.io/bundlephobia/minzip/vue-tour-easy.svg
[npm-downloads]: https://img.shields.io/npm/dt/vue-tour-easy.svg
[npm-license]: https://img.shields.io/npm/l/vue-tour-easy.svg

[github]: https://github.com/Cweili/vue-tour-easy
[github-issues]: https://img.shields.io/github/issues/Cweili/vue-tour-easy.svg

[travis]: https://travis-ci.org/Cweili/vue-tour-easy
[travis-build]: https://img.shields.io/travis/Cweili/vue-tour-easy.svg

[codecov]: https://codecov.io/gh/Cweili/vue-tour-easy
[codecov-svg]: https://img.shields.io/codecov/c/github/Cweili/vue-tour-easy.svg


[vuejs]: https://vuejs.org/

[doc]: https://cweili.github.io/vue-tour-easy/
