import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<textarea\n  class={{-velvet/class-list\n    \"velvet-textarea\"\n    (concat \"velvet-textarea-\" (or @size \"md\"))\n    (concat \"velvet-textarea-\" (or @variant \"primary\"))\n    (if @isInvalid \"velvet-textarea-invalid\")\n    (if @isDisabled \"velvet-textarea-disabled\")\n    \"form-textarea\"\n  }}\n  disabled={{@isDisabled}}\n  placeholder={{@placeholder}}\n  value={{@value}}\n  {{on \"change\" this.changeHandler}}\n  {{on \"input\" this.inputHandler}}\n  ...attributes\n></textarea>");

class VelvetTextarea extends Component {
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
setComponentTemplate(TEMPLATE, VelvetTextarea);

export { VelvetTextarea as default };
//# sourceMappingURL=velvet-textarea.js.map
