import { _ as _defineProperty } from '../../_rollupPluginBabelHelpers-241f4bb8.js';
import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<option selected={{this.isSelected}} value={{this.uniqueId}} ...attributes>\n  {{#if (has-block)}}\n    {{yield}}\n  {{else}}\n    {{this.valueAsString}}\n  {{/if}}\n</option>");

class VelvetSelectOption extends Component {
  get isSelected() {
    return this.args.value === this.args.privateSelected;
  }
  get valueAsString() {
    return String(this.args.value);
  }
  constructor(owner, args) {
    super(owner, args);
    _defineProperty(this, "uniqueId", guidFor(this));
    this.args.privateOnCreate(this.uniqueId, this.args.value);
  }
  willDestroy() {
    super.willDestroy();
    this.args.privateOnDestroy(this.uniqueId);
  }
}
setComponentTemplate(TEMPLATE, VelvetSelectOption);

export { VelvetSelectOption as default };
//# sourceMappingURL=option.js.map
