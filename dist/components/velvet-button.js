import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#let\n  (-velvet/class-list\n    \"velvet-button\"\n    (concat \"velvet-button-\" (or @size \"md\"))\n    (concat \"velvet-button-\" (or @variant \"primary\"))\n    (if @isPill \"velvet-button-pill\")\n    (if @isDisabled \"velvet-button-disabled\")\n  )\n  as |className|\n}}\n  {{#if @isRenderless}}\n    {{yield (hash class=className)}}\n  {{else}}\n    <button\n      class={{className}}\n      disabled={{@isDisabled}}\n      type={{or @type \"button\"}}\n      {{on \"click\" this.clickHandler}}\n      {{@privateDropdownTrigger}}\n      ...attributes\n    >\n      {{#if @isLoading}}\n        <VelvetSpinner />\n      {{/if}}\n      {{yield (hash class=className)}}\n      {{#if @isDisclosure}}\n        <VelvetDisclosureIcon class=\"velvet-button-disclosure-icon\" />\n      {{/if}}\n    </button>\n  {{/if}}\n{{/let}}");

class VelvetButton extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "clickHandler", event => {
      const {
        isDisabled,
        onClick
      } = this.args;
      if (typeof onClick !== "function" || isDisabled === true) {
        return;
      }
      onClick(event);
    });
  }
}
setComponentTemplate(TEMPLATE, VelvetButton);

export { VelvetButton as default };
//# sourceMappingURL=velvet-button.js.map
