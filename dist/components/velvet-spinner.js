import templateOnlyComponent from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<svg\n  class={{-velvet/class-list\n    \"velvet-spinner\"\n    (concat \"velvet-spinner-\" (or @size \"md\"))\n  }}\n  fill=\"none\"\n  role=\"status\"\n  stroke=\"currentColor\"\n  stroke-width=\"10\"\n  viewBox=\"0 0 80 80\"\n  xmlns=\"http://www.w3.org/2000/svg\"\n  ...attributes\n>\n  <circle class=\"velvet-spinner-track\" cx=\"40\" cy=\"40\" r=\"35\"></circle>\n  <circle\n    class=\"velvet-spinner-line\"\n    cx=\"40\"\n    cy=\"40\"\n    r=\"35\"\n    stroke-dasharray=\"40, 160\"\n    stroke-linecap=\"round\"\n  ></circle>\n</svg>");

var velvetSpinner = setComponentTemplate(TEMPLATE, templateOnlyComponent());

export { velvetSpinner as default };
//# sourceMappingURL=velvet-spinner.js.map
