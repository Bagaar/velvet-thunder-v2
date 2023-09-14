import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<input\n  class={{-velvet/class-list\n    \"velvet-input\"\n    (concat \"velvet-input-\" (or @size \"md\"))\n    (concat \"velvet-input-\" (or @variant \"primary\"))\n    (if @isInvalid \"velvet-input-invalid\")\n    (if @isPill \"velvet-input-pill\")\n    (if @isDisabled \"velvet-input-disabled\")\n    \"form-input\"\n  }}\n  disabled={{@isDisabled}}\n  placeholder={{@placeholder}}\n  type={{or @type \"text\"}}\n  value={{@value}}\n  {{on \"change\" this.changeHandler}}\n  {{on \"input\" this.inputHandler}}\n  ...attributes\n/>");

class VelvetInput extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "changeHandler", event => {
      const {
        isDisabled,
        onChange
      } = this.args;
      if (typeof onChange !== "function" || isDisabled === true) {
        return;
      }
      onChange(event.target.value, event);
    });
    _defineProperty(this, "inputHandler", event => {
      const {
        isDisabled,
        onInput
      } = this.args;
      if (typeof onInput !== "function" || isDisabled === true) {
        return;
      }
      onInput(event.target.value, event);
    });
  }
}
setComponentTemplate(TEMPLATE, VelvetInput);

export { VelvetInput as default };
//# sourceMappingURL=velvet-input.js.map
