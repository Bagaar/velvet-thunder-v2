import templateOnlyComponent from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class={{-velvet/class-list\n    \"velvet-tag\"\n    (concat \"velvet-tag-\" (or @size \"md\"))\n    (concat \"velvet-tag-\" (or @variant \"primary\"))\n    (if @isPill \"velvet-tag-pill\")\n  }}\n  ...attributes\n>\n  {{yield}}\n</div>");

var velvetTag = setComponentTemplate(TEMPLATE, templateOnlyComponent());

export { velvetTag as default };
//# sourceMappingURL=velvet-tag.js.map
