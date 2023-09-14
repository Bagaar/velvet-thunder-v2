import { a as _applyDecoratedDescriptor, b as _initializerDefineProperty, _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import { assert } from '@ember/debug';
import { autoUpdate, computePosition, flip, offset } from '@floating-ui/dom';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';
import VelvetButton from './velvet-button.js';
import VelvetDropdownContent from './velvet-dropdown/content.js';
import VelvetIconButton from './velvet-icon-button.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{! Needs https://github.com/embroider-build/embroider/pull/1367 to remove `@glint-nocheck`. }}\n\n<div class=\"velvet-dropdown\" ...attributes>\n  {{yield\n    (hash\n      Button=(component\n        (ensure-safe-component this.VelvetButton)\n        isDisclosure=true\n        privateDropdownTrigger=this.trigger\n      )\n      Content=(component\n        (ensure-safe-component this.VelvetDropdownContent)\n        isShown=this.isShown\n        modifier=this.content\n      )\n      IconButton=(component\n        (ensure-safe-component this.VelvetIconButton)\n        privateDropdownTrigger=this.trigger\n      )\n      isShown=this.isShown\n      hide=this.hide\n      show=this.show\n      toggle=this.toggle\n      content=this.content\n      trigger=this.trigger\n    )\n  }}\n</div>");

var _class, _descriptor;
let VelvetDropdown = (_class = class VelvetDropdown extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "isShown", _descriptor, this);
    _defineProperty(this, "triggerElement", null);
    _defineProperty(this, "VelvetButton", VelvetButton);
    _defineProperty(this, "VelvetDropdownContent", VelvetDropdownContent);
    _defineProperty(this, "VelvetIconButton", VelvetIconButton);
    _defineProperty(this, "content", modifier(contentElement => {
      const {
        placement,
        strategy,
        triggerElement
      } = this;
      assert("[VelvetDropdown] Trigger element must be present.", triggerElement);

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
      const clickOutsideHandler = ({
        target
      }) => {
        if (target !== contentElement && target !== triggerElement && contentElement.contains(target) === false && triggerElement.contains(target) === false) {
          this.hide();
        }
      };
      const pressEscapeHandler = ({
        key
      }) => {
        if (key === "Escape") {
          this.hide();
        }
      };
      document.addEventListener("click", clickOutsideHandler);
      document.addEventListener("keydown", pressEscapeHandler);
      return () => {
        cleanupFloating();
        document.removeEventListener("click", clickOutsideHandler);
        document.removeEventListener("keydown", pressEscapeHandler);
      };
    }));
    _defineProperty(this, "trigger", modifier(triggerElement => {
      this.triggerElement = triggerElement;
      triggerElement.addEventListener("click", this.toggle);
      return () => triggerElement.removeEventListener("click", this.toggle);
    }));
    _defineProperty(this, "hide", () => {
      this.isShown = false;
    });
    _defineProperty(this, "show", () => {
      this.isShown = true;
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
    return this.args.placement || "bottom-start";
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
setComponentTemplate(TEMPLATE, VelvetDropdown);

export { VelvetDropdown as default };
//# sourceMappingURL=velvet-dropdown.js.map
