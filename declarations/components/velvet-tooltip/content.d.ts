import type { ModifierLike } from "@glint/template";
import type { ContentSignature } from "../velvet-dropdown.ts";
interface VelvetTooltipContentSignature {
    Args: {
        isShown: boolean;
        modifier: ModifierLike<ContentSignature>;
    };
    Blocks: {
        default: [];
    };
    Element: HTMLDivElement;
}
declare const _default: import("@ember/component/template-only").TemplateOnlyComponent<VelvetTooltipContentSignature>;
export default _default;
//# sourceMappingURL=content.d.ts.map