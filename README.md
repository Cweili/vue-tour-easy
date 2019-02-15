# vue-tour-easy

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]


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

[vuejs]: https://vuejs.org/

[doc]: https://cweili.github.io/vue-tour-easy/

[badge-version]: https://img.shields.io/npm/v/vue-tour-easy.svg
[badge-downloads]: https://img.shields.io/npm/dt/vue-tour-easy.svg
[npm]: https://www.npmjs.com/package/vue-tour-easy

[badge-size]: https://img.shields.io/bundlephobia/minzip/vue-tour-easy.svg
[bundlephobia]: https://bundlephobia.com/result?p=vue-tour-easy

[badge-license]: https://img.shields.io/npm/l/vue-tour-easy.svg
[license]: https://github.com/Cweili/vue-tour-easy/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/Cweili/vue-tour-easy.svg
[github]: https://github.com/Cweili/vue-tour-easy

[badge-build]: https://travis-ci.org/Cweili/vue-tour-easy.svg?branch=master
[travis]: https://travis-ci.org/Cweili/vue-tour-easy

[badge-coverage]: https://img.shields.io/codecov/c/github/Cweili/vue-tour-easy.svg
[codecov]: https://codecov.io/gh/Cweili/vue-tour-easy
