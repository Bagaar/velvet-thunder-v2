import { Placement, Strategy } from "@floating-ui/dom";
import Component from "@glimmer/component";
import type { ModifierLike, WithBoundArgs } from "@glint/template";
import VelvetTooltipContent from "./velvet-tooltip/content.ts";
interface VelvetTooltipSignature {
    Args: {
        offset?: number;
        placement?: Placement;
        showDelay?: number;
        strategy?: Strategy;
    };
    Blocks: {
        default: [
            {
                Content: WithBoundArgs<typeof VelvetTooltipContent, "isShown" | "modifier">;
                isShown: boolean;
                hide: () => void;
                show: () => void;
                toggle: () => void;
                content: ModifierLike<ContentSignature>;
                trigger: ModifierLike<TriggerSignature>;
            }
        ];
    };
    Element: HTMLDivElement;
}
export interface ContentSignature {
    Element: HTMLElement;
}
export interface TriggerSignature {
    Element: HTMLElement;
}
export default class VelvetTooltip extends Component<VelvetTooltipSignature> {
    isShown: boolean;
    showTimeout: number | undefined;
    triggerElement: HTMLElement | null;
    VelvetTooltipContent: typeof VelvetTooltipContent;
    get offset(): number;
    get placement(): Placement;
    get showDelay(): number;
    get strategy(): Strategy;
    content: import("ember-modifier").FunctionBasedModifier<{
        Element: HTMLElement;
        Args: {
            Named: import("ember-modifier/-private/signature.js").EmptyObject;
            Positional: [];
        };
    }>;
    trigger: import("ember-modifier").FunctionBasedModifier<{
        Element: HTMLElement;
        Args: {
            Named: import("ember-modifier/-private/signature.js").EmptyObject;
            Positional: [];
        };
    }>;
    hide: () => void;
    show: () => Promise<void>;
    toggle: () => void;
}
export {};
//# sourceMappingURL=velvet-tooltip.d.ts.map