import Component from '@glimmer/component';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("<div\n  class={{-velvet/class-list\n    \"velvet-avatar\"\n    (concat \"velvet-avatar-\" (or @size \"md\"))\n    (concat \"velvet-avatar-\" (or @variant \"primary\"))\n    (if @isRound \"velvet-avatar-round\")\n  }}\n  ...attributes\n>\n  {{#if @src}}\n    <img alt={{@name}} class=\"velvet-avatar-image\" src={{@src}} />\n  {{else if @name}}\n    {{this.initials}}\n  {{else if @initials}}\n    {{@initials}}\n  {{else}}\n    ?\n  {{/if}}\n</div>");

class VelvetAvatar extends Component {
  get initials() {
    return (this.args.name || "").split(" ").slice(0, 2).map(name => name.charAt(0)).join("");
  }
}
setComponentTemplate(TEMPLATE, VelvetAvatar);

export { VelvetAvatar as default };
//# sourceMappingURL=velvet-avatar.js.map
