<template>
  <div class="tour">
    <div
      v-if="value"
      class="tour-overlay"
      @click="go"
      @touchmove.prevent="">
      <div class="tour-overlap" :style="tourStyle">
        <div class="tour-text" :class="position">
          <slot>
            <div class="tour-arrow" v-html="arrow"></div>
            <div>{{ text }}</div>
          </slot>
        </div>
      </div>
      <div
        class="tour-cancel"
        :class="cancelPosition"
        @click.stop="cancel">
        <slot name="cancel">
          <button class="tour-cancel-btn">cancel</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from './assets/arrow.svg';

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    arrow,
    step: 0,
    text: '',
    tourStyle: {},
    position: '',
    cancelPosition: '',
    preventScroll: false,
    lastY: 0
  }),

  watch: {
    value(show) {
      if (show) {
        this.step = 0;
        this.go(0);
      }
    }
  },

  methods: {
    go() {
      const stepIndex = this.step++;
      const step = this.steps[stepIndex];
      if (step) {
        this.$emit('step', step, stepIndex);
        const el = document.querySelector(step.el);
        if (el) {
          const rect = el.getBoundingClientRect();
          this.text = step.text;
          this.tourStyle = {
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            top: `${rect.top}px`,
            left: `${rect.left}px`
          };
          if (!step.position) {
            step.position = 'bottom';
          }
          this.position = step.position;
          this.cancelPosition = step.cancelPosition;
        } else {
          this.go();
        }
      } else {
        this.$emit('end');
        this.quit();
      }
    },
    cancel() {
      this.quit();
      this.$emit('cancel');
    },
    quit() {
      this.$emit('input', false);
    }
  }
};
</script>

<style lang="stylus">
vendor-prefixes = webkit ms official
@import '../node_modules/nib/index'

.tour
  $arrowWidth = (200px / 4)
  $arrowHeight = (260px / 4)

  & &-overlay
    fixed: top 0 bottom 0 left 0 right 0
    z-index: 999

  & &-overlap
    position: fixed
    transition: all .3s
    box-shadow: 0 0 0 9999px rgba(#000, .8)

  & &-arrow
    absolute: left 50%
    size: $arrowWidth $arrowHeight
    margin-left: ($arrowWidth / -2)

  & &-text
    position: absolute
    margin: ($arrowHeight - 8px) 5px
    padding: .5em
    border: 1px solid #fff
    border-radius: 1.5em
    color: #fff
    font-size: 18px
    white-space: nowrap
    &.top
      bottom: 100%
      .tour-arrow
        bottom: (0 - $arrowHeight + 8px)
        transform: rotate(180deg)
    &.bottom
      top: 100%
      .tour-arrow
        top: (0 - $arrowHeight + 8px)
    &.left
      left: 0
      .tour-arrow
        left: 0
        margin: 0
    &.right
      right: 0
      .tour-arrow
        left: auto
        margin: 0
        right: 0

  & &-cancel
    absolute: bottom 1em left 50%
    width: 30%
    margin-left: -15%
    &.top
      top: 1em
      bottom: auto
    &-btn
      display: block
      width: 100%
</style>
