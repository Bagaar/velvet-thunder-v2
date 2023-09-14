import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import VelvetSelectOption from './velvet-select/option.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! @glint-nocheck }}\n{{! Needs https://github.com/embroider-build/embroider/pull/1367 to remove `@glint-nocheck`. }}\n\n<select\n  class={{-velvet/class-list\n    \"velvet-select\"\n    (concat \"velvet-select-\" (or @size \"md\"))\n    (concat \"velvet-select-\" (or @variant \"primary\"))\n    (if @isInvalid \"velvet-select-invalid\")\n    (if @isPill \"velvet-select-pill\")\n    (if @isDisabled \"velvet-select-disabled\")\n    (if this.shouldDisplayPlaceholder \"velvet-select-placeholder\")\n    \"form-select\"\n  }}\n  disabled={{@isDisabled}}\n  {{on \"change\" this.changeHandler}}\n  ...attributes\n>\n  {{#if this.shouldDisplayPlaceholder}}\n    <option disabled selected={{true}}>\n      {{@placeholder}}\n    </option>\n  {{/if}}\n  {{yield\n    (hash\n      Option=(component\n        (ensure-safe-component this.VelvetSelectOption)\n        privateOnCreate=this.addOption\n        privateOnDestroy=this.removeOption\n        privateSelected=@selected\n      )\n    )\n  }}\n</select>");

class VelvetSelect extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "options", new Map());
    _defineProperty(this, "VelvetSelectOption", VelvetSelectOption);
    _defineProperty(this, "changeHandler", event => {
      const {
        isDisabled,
        onChange
      } = this.args;
      if (typeof onChange !== "function" || isDisabled === true) {
        return;
      }
      onChange(this.options.get(event.target.value), event);
    });
    _defineProperty(this, "addOption", (id, value) => {
      this.options.set(id, value);
    });
    _defineProperty(this, "removeOption", id => {
      this.options.delete(id);
    });
  }
  get hasSelection() {
    return this.args.selected !== undefined && this.args.selected !== null;
  }
  get shouldDisplayPlaceholder() {
    return Boolean(this.args.placeholder) && this.hasSelection === false;
  }
}
setComponentTemplate(TEMPLATE, VelvetSelect);

export { VelvetSelect as default };
//# sourceMappingURL=velvet-select.js.map
