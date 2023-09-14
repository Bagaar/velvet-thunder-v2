import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import VelvetCheckbox from './velvet-checkbox.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class={{-velvet/class-list\n    \"velvet-checkbox-group\"\n    (concat \"velvet-checkbox-group-\" (or @size \"md\"))\n    (if @isDisabled \"velvet-checkbox-group-disabled\")\n  }}\n  role=\"group\"\n  ...attributes\n>\n  {{yield\n    (hash\n      Checkbox=(component\n        (ensure-safe-component this.VelvetCheckbox)\n        isDisabled=@isDisabled\n        size=@size\n        privateGroupValue=@value\n        privateGroupValueIsObject=@valueIsObject\n        privateInGroup=true\n        privateOnChangeGroup=@onChange\n      )\n    )\n  }}\n</div>");

class VelvetCheckboxGroup extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "uniqueName", guidFor(this));
    _defineProperty(this, "VelvetCheckbox", VelvetCheckbox);
  }
}
setComponentTemplate(TEMPLATE, VelvetCheckboxGroup);

export { VelvetCheckboxGroup as default };
//# sourceMappingURL=velvet-checkbox-group.js.map
