import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import VelvetRadio from './velvet-radio.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class={{-velvet/class-list\n    \"velvet-radio-group\"\n    (concat \"velvet-radio-group-\" (or @size \"md\"))\n    (if @isDisabled \"velvet-radio-group-disabled\")\n  }}\n  role=\"group\"\n  ...attributes\n>\n  {{yield\n    (hash\n      Radio=(component\n        (ensure-safe-component this.VelvetRadio)\n        isDisabled=@isDisabled\n        name=(or @name this.uniqueName)\n        size=@size\n        privateGroupValue=@value\n        privateInGroup=true\n        privateOnChangeGroup=@onChange\n      )\n    )\n  }}\n</div>");

class VelvetRadioGroup extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "uniqueName", guidFor(this));
    _defineProperty(this, "VelvetRadio", VelvetRadio);
  }
}
setComponentTemplate(TEMPLATE, VelvetRadioGroup);

export { VelvetRadioGroup as default };
//# sourceMappingURL=velvet-radio-group.js.map
