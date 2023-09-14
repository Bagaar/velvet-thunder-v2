import templateOnlyComponent from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#if @isShown}}\n  <div class=\"velvet-tooltip-content\" {{@modifier}} ...attributes>\n    {{yield}}\n  </div>\n{{/if}}");

var VelvetTooltipContent = setComponentTemplate(TEMPLATE, templateOnlyComponent());

export { VelvetTooltipContent as default };
//# sourceMappingURL=content.js.map
