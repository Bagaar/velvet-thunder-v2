import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<label\n  class={{-velvet/class-list\n    \"velvet-checkbox\"\n    (concat \"velvet-checkbox-\" (or @size \"md\"))\n    (if @isDisabled \"velvet-checkbox-disabled\")\n  }}\n>\n  <input\n    checked={{if @privateInGroup this.isCheckedInGroup @isChecked}}\n    class=\"velvet-checkbox-input form-checkbox\"\n    disabled={{@isDisabled}}\n    indeterminate={{@isIndeterminate}}\n    name={{@name}}\n    type=\"checkbox\"\n    {{on \"change\" this.changeHandler}}\n    ...attributes\n  />\n  {{yield}}\n</label>");

class VelvetCheckbox extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "changeHandler", event => {
      if (this.args.isDisabled === true) {
        return;
      }
      const {
        checked
      } = event.target;
      const {
        privateInGroup,
        onChange,
        privateOnChangeGroup
      } = this.args;
      if (privateInGroup && typeof privateOnChangeGroup === "function") {
        const {
          groupValueAsArray,
          groupValueAsObject
        } = this;
        const {
          privateGroupValueIsObject,
          name
        } = this.args;
        let groupValue;
        if (privateGroupValueIsObject) {
          groupValue = {
            ...groupValueAsObject,
            [name]: checked
          };
        } else if (checked) {
          groupValue = [...groupValueAsArray, name];
        } else {
          groupValue = groupValueAsArray.filter(n => n !== name);
        }
        privateOnChangeGroup(groupValue, event);
      } else if (typeof onChange === "function") {
        onChange(checked, event);
      }
    });
  }
  get groupValueAsArray() {
    return this.args.privateGroupValue || [];
  }
  get groupValueAsObject() {
    return this.args.privateGroupValue || {};
  }
  get isCheckedInGroup() {
    const name = this.args.name;
    if (this.args.privateGroupValueIsObject) {
      return this.groupValueAsObject[name] === true;
    }
    return this.groupValueAsArray.includes(name);
  }
}
setComponentTemplate(TEMPLATE, VelvetCheckbox);

export { VelvetCheckbox as default };
//# sourceMappingURL=velvet-checkbox.js.map
