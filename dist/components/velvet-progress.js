import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class={{-velvet/class-list\n    \"velvet-progress\"\n    (concat \"velvet-progress-\" (or @size \"md\"))\n    (concat \"velvet-progress-\" (or @variant \"primary\"))\n  }}\n  aria-valuemax={{this.max}}\n  aria-valuemin={{this.min}}\n  aria-valuenow={{this.value}}\n  aria-valuetext={{@text}}\n  role=\"progressbar\"\n  ...attributes\n>\n  <div class=\"velvet-progress-line\" style={{this.lineStyle}}></div>\n</div>");

class VelvetProgress extends Component {
  get lineStyle() {
    const {
      max,
      min,
      value
    } = this;
    const progress = Math.floor((value - min) / (max - min) * 100);
    const progressClipped = Math.max(0, Math.min(100, progress));
    return htmlSafe(`width: ${progressClipped}%;`);
  }
  get max() {
    return typeof this.args.max === "number" ? this.args.max : 100;
  }
  get min() {
    return typeof this.args.min === "number" ? this.args.min : 0;
  }
  get value() {
    return typeof this.args.value === "number" ? this.args.value : 0;
  }
}
setComponentTemplate(TEMPLATE, VelvetProgress);

export { VelvetProgress as default };
//# sourceMappingURL=velvet-progress.js.map
