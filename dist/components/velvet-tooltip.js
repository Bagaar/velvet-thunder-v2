import { a as _applyDecoratedDescriptor, b as _initializerDefineProperty, _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import { assert } from '@ember/debug';
import { waitForPromise } from '@ember/test-waiters';
import { autoUpdate, computePosition, flip, offset } from '@floating-ui/dom';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import VelvetTooltipContent from './velvet-tooltip/content.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{! Needs https://github.com/embroider-build/embroider/pull/1367 to remove `@glint-nocheck`. }}\n\n<div class=\"velvet-tooltip\" ...attributes>\n  {{yield\n    (hash\n      Content=(component\n        (ensure-safe-component this.VelvetTooltipContent)\n        isShown=this.isShown\n        modifier=this.content\n      )\n      isShown=this.isShown\n      hide=this.hide\n      show=this.show\n      toggle=this.toggle\n      content=this.content\n      trigger=this.trigger\n    )\n  }}\n</div>");

var _class, _descriptor;
let VelvetTooltip = (_class = class VelvetTooltip extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "isShown", _descriptor, this);
    _defineProperty(this, "showTimeout", undefined);
    _defineProperty(this, "triggerElement", null);
    _defineProperty(this, "VelvetTooltipContent", VelvetTooltipContent);
    _defineProperty(this, "content", modifier(contentElement => {
      const {
        placement,
        strategy,
        triggerElement
      } = this;
      assert("[VelvetTooltip] Trigger element must be present.", triggerElement);

      // https://floating-ui.com/docs/computeposition#initial-layout:
      Object.assign(contentElement.style, {
        left: 0,
        position: strategy,
        top: 0
      });
      const updateFloating = async () => {
        const {
          x,
          y
        } = await computePosition(triggerElement, contentElement, {
          middleware: [flip(), offset(this.offset)],
          placement,
          strategy
        });
        Object.assign(contentElement.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      };
      const cleanupFloating = autoUpdate(triggerElement, contentElement, updateFloating);
      return cleanupFloating;
    }));
    _defineProperty(this, "trigger", modifier(triggerElement => {
      this.triggerElement = triggerElement;
      triggerElement.addEventListener("mouseenter", this.show);
      triggerElement.addEventListener("mouseleave", this.hide);
      return () => {
        triggerElement.removeEventListener("mouseenter", this.show);
        triggerElement.removeEventListener("mouseleave", this.hide);
      };
    }));
    _defineProperty(this, "hide", () => {
      clearTimeout(this.showTimeout);
      this.isShown = false;
    });
    _defineProperty(this, "show", () => {
      clearTimeout(this.showTimeout);
      return waitForPromise(new Promise(resolve => {
        this.showTimeout = setTimeout(() => {
          this.isShown = true;
          resolve();
        }, this.showDelay);
      }));
    });
    _defineProperty(this, "toggle", () => {
      if (this.isShown) {
        this.hide();
      } else {
        this.show();
      }
    });
  }
  get offset() {
    const {
      offset
    } = this.args;
    return typeof offset === "number" ? offset : 4;
  }
  get placement() {
    return this.args.placement || "top";
  }
  get showDelay() {
    const {
      showDelay
    } = this.args;
    return typeof showDelay === "number" ? showDelay : 400;
  }
  get strategy() {
    return this.args.strategy || "absolute";
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isShown", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
})), _class);
setComponentTemplate(TEMPLATE, VelvetTooltip);

export { VelvetTooltip as default };
//# sourceMappingURL=velvet-tooltip.js.map
