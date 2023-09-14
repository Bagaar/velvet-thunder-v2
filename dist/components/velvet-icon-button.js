import { _ as _defineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#let\n  (-velvet/class-list\n    \"velvet-icon-button\"\n    (concat \"velvet-icon-button-\" (or @size \"md\"))\n    (concat \"velvet-icon-button-\" (or @variant \"primary\"))\n    (if @isRound \"velvet-icon-button-round\")\n    (if @isDisabled \"velvet-icon-button-disabled\")\n  )\n  as |className|\n}}\n  {{#if @isRenderless}}\n    {{yield (hash class=className)}}\n  {{else}}\n    <button\n      class={{className}}\n      disabled={{@isDisabled}}\n      type={{or @type \"button\"}}\n      {{on \"click\" this.clickHandler}}\n      {{@privateDropdownTrigger}}\n      ...attributes\n    >\n      {{#if @isLoading}}\n        <VelvetSpinner />\n      {{else if @isDisclosure}}\n        <VelvetDisclosureIcon class=\"velvet-icon-button-disclosure-icon\" />\n      {{else}}\n        {{yield (hash class=className)}}\n      {{/if}}\n    </button>\n  {{/if}}\n{{/let}}");

class VelvetIconButton extends Component {
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
setComponentTemplate(TEMPLATE, VelvetIconButton);

export { VelvetIconButton as default };
//# sourceMappingURL=velvet-icon-button.js.map
