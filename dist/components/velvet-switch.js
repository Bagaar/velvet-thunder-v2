import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<label\n  class={{-velvet/class-list\n    \"velvet-switch\"\n    (concat \"velvet-switch-\" (or @size \"md\"))\n    (concat \"velvet-switch-\" (or @alignment \"left\"))\n    (if @isDisabled \"velvet-switch-disabled\")\n  }}\n>\n  <input\n    checked={{@isChecked}}\n    class=\"velvet-switch-input\"\n    disabled={{@isDisabled}}\n    type=\"checkbox\"\n    {{on \"change\" this.changeHandler}}\n    ...attributes\n  />\n  <div class=\"velvet-switch-track\">\n    <div class=\"velvet-switch-handle\"></div>\n  </div>\n  {{yield}}\n</label>");

class VelvetSwitch extends Component {
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
      onChange(event.target.checked, event);
    });
  }
}
setComponentTemplate(TEMPLATE, VelvetSwitch);

export { VelvetSwitch as default };
//# sourceMappingURL=velvet-switch.js.map
