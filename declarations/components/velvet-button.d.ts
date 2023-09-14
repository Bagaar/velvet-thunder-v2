import Component from "@glimmer/component";
import type { ModifierLike } from "@glint/template";
import type { TriggerSignature } from "./velvet-dropdown.ts";
interface VelvetButtonSignature {
    Args: {
        isDisabled?: boolean;
        isDisclosure?: boolean;
        isLoading?: boolean;
        isPill?: boolean;
        isRenderless?: boolean;
        onClick?: (event: MouseEvent) => void;
        size?: "xs" | "sm" | "md" | "lg";
        type?: "button" | "reset" | "submit";
        variant?: string | "primary";
        privateDropdownTrigger?: ModifierLike<TriggerSignature>;
    };
    Blocks: {
        default: [{
            class: string;
        }];
    };
    Element: HTMLButtonElement;
}
export default class VelvetButton extends Component<VelvetButtonSignature> {
    clickHandler: (event: MouseEvent) => void;
}
export {};
//# sourceMappingURL=velvet-button.d.ts.map