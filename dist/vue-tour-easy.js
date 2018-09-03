(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueTourEasy = factory());
}(this, (function () { 'use strict';

var arrow = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 260\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.902\" d=\"M158.959 32.234l37.565-29.285.817 48.28M2.98 257.016s145.208-115.474 93.913-186.79c-24.756-34.419-65.996-24.293-83.433-1.418C-3.977 91.682.96 142.39 48.713 146.207 141.01 153.586 196.524 2.95 196.524 2.95\"/></svg>";

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".tour .tour-overlay { position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 999; } .tour .tour-overlap { position: fixed; -webkit-transition: all 0.3s; -ms-transition: all 0.3s; transition: all 0.3s; -webkit-box-shadow: 0 0 0 9999px rgba(0,0,0,0.8); box-shadow: 0 0 0 9999px rgba(0,0,0,0.8); } .tour .tour-arrow { position: absolute; left: 50%; width: 50px; height: 65px; margin-left: -25px; } .tour .tour-text { position: absolute; margin: 57px 5px; padding: 0.5em; border: 1px solid #fff; border-radius: 1.5em; color: #fff; font-size: 18px; white-space: nowrap; } .tour .tour-text.top { bottom: 100%; } .tour .tour-text.top .tour-arrow { bottom: -57px; -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); } .tour .tour-text.bottom { top: 100%; } .tour .tour-text.bottom .tour-arrow { top: -57px; } .tour .tour-text.left { left: 0; } .tour .tour-text.left .tour-arrow { left: 0; margin: 0; } .tour .tour-text.right { right: 0; } .tour .tour-text.right .tour-arrow { left: auto; margin: 0; right: 0; } .tour .tour-cancel { position: absolute; bottom: 1em; left: 50%; width: 30%; margin-left: -15%; } .tour .tour-cancel.top { top: 1em; bottom: auto; } .tour .tour-cancel-btn { display: block; width: 100%; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var tour = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "tour" }, [_vm.value ? _c('div', { staticClass: "tour-overlay", on: { "click": _vm.go, "touchmove": function touchmove($event) {
          $event.preventDefault();
        } } }, [_c('div', { staticClass: "tour-overlap", style: _vm.tourStyle }, [_c('div', { staticClass: "tour-text", class: _vm.position }, [_vm._t("default", [_c('div', { staticClass: "tour-arrow", domProps: { "innerHTML": _vm._s(_vm.arrow) } }), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.text))])])], 2)]), _vm._v(" "), _c('div', { staticClass: "tour-cancel", class: _vm.cancelPosition, on: { "click": function click($event) {
          $event.stopPropagation();return _vm.cancel($event);
        } } }, [_vm._t("cancel", [_c('button', { staticClass: "tour-cancel-btn" }, [_vm._v("cancel")])])], 2)]) : _vm._e()]);
  }, staticRenderFns: [],
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

  data: function data() {
    return {
      arrow: arrow,
      step: 0,
      text: '',
      tourStyle: {},
      position: '',
      cancelPosition: '',
      preventScroll: false,
      lastY: 0
    };
  },

  watch: {
    value: function value(show) {
      if (show) {
        this.step = 0;
        this.go();
      }
    }
  },

  methods: {
    go: function go() {
      var stepIndex = this.step;
      var step = this.steps[stepIndex];
      if (step) {
        ++this.step;
        this.$emit('step', step, stepIndex);
        var el = document.querySelector(step.el);
        if (el) {
          var rect = el.getBoundingClientRect();
          this.text = step.text;
          this.tourStyle = {
            width: rect.width + 'px',
            height: rect.height + 'px',
            top: rect.top + 'px',
            left: rect.left + 'px'
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
    cancel: function cancel() {
      this.quit();
      this.$emit('cancel');
    },
    quit: function quit() {
      this.$emit('input', false);
    }
  }
};

return tour;

})));
