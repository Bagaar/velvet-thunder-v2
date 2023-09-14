import { helper } from '@ember/component/helper';

var classList = helper(function velvetClassList(positional) {
  return positional.filter(Boolean).join(" ");
});

export { classList as default };
//# sourceMappingURL=class-list.js.map
