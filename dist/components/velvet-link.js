import { a as _applyDecoratedDescriptor, b as _initializerDefineProperty } from '../_rollupPluginBabelHelpers-241f4bb8.js';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<a\n  class={{-velvet/class-list\n    \"velvet-link\"\n    (concat \"velvet-link-\" (or @size \"md\"))\n    (concat \"velvet-link-\" (or @variant \"primary\"))\n    (if @isPill \"velvet-link-pill\")\n  }}\n  href={{this.link.url}}\n  {{on \"click\" this.link.transitionTo}}\n  ...attributes\n>\n  {{yield}}\n</a>");

var _dec, _class, _descriptor;
let VelvetLink = (_dec = service("link-manager"), (_class = class VelvetLink extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "linkManagerService", _descriptor, this);
  }
  get link() {
    const {
      to
    } = this.args;
    if (typeof to === "string") {
      return this.linkManagerService.createLink(this.linkManagerService.getLinkParamsFromURL(to));
    }
    return to;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "linkManagerService", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
setComponentTemplate(TEMPLATE, VelvetLink);

export { VelvetLink as default };
//# sourceMappingURL=velvet-link.js.map
