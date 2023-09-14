import templateOnlyComponent from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  fill=\"none\"\n  height=\"7\"\n  viewBox=\"0 0 10 7\"\n  width=\"10\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  ...attributes\n>\n  <path\n    d=\"M1.175 0.150024L5 3.97502L8.825 0.150024L10 1.33336L5 6.33336L0 1.33336L1.175 0.150024Z\"\n    fill=\"currentColor\"\n  ></path>\n</svg>");

var velvetDisclosureIcon = setComponentTemplate(TEMPLATE, templateOnlyComponent());

export { velvetDisclosureIcon as default };
//# sourceMappingURL=velvet-disclosure-icon.js.map
