import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<label\n  class={{-velvet/class-list\n    \"velvet-radio\"\n    (concat \"velvet-radio-\" (or @size \"md\"))\n    (if @isDisabled \"velvet-radio-disabled\")\n  }}\n>\n  <input\n    checked={{this.isChecked}}\n    class=\"velvet-radio-input form-radio\"\n    disabled={{@isDisabled}}\n    name={{@name}}\n    type=\"radio\"\n    value={{this.valueAttr}}\n    {{on \"change\" this.changeHandler}}\n    ...attributes\n  />\n  {{yield}}\n</label>");

class VelvetRadio extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "changeHandler", event => {
      if (this.args.isDisabled === true) {
        return;
      }
      const {
        privateInGroup,
        onChange,
        privateOnChangeGroup,
        value
      } = this.args;
      if (privateInGroup && typeof privateOnChangeGroup === "function") {
        privateOnChangeGroup(value, event);
      } else if (typeof onChange === "function") {
        onChange(event.target.checked, event);
      }
    });
  }
  get isChecked() {
    const {
      privateInGroup,
      isChecked,
      privateGroupValue,
      value
    } = this.args;
    return privateInGroup ? value === privateGroupValue : isChecked;
  }
  get valueAttr() {
    const {
      value
    } = this.args;
    return value === undefined ? undefined : String(value);
  }
}
setComponentTemplate(TEMPLATE, VelvetRadio);

export { VelvetRadio as default };
//# sourceMappingURL=velvet-radio.js.map
