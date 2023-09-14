import Component from "@glimmer/component";
import type { WithBoundArgs } from "@glint/template";
import VelvetSelectOption from "./velvet-select/option.ts";
interface VelvetSelectSignature {
    Args: {
        isDisabled?: boolean;
        isInvalid?: boolean;
        isPill?: boolean;
        onChange?: (selected: unknown, event: Event) => void;
        placeholder?: string;
        selected?: unknown;
        size?: "sm" | "md" | "lg";
        variant?: string | "primary";
    };
    Blocks: {
        default: [
            {
                Option: WithBoundArgs<typeof VelvetSelectOption, "privateOnCreate" | "privateOnDestroy" | "privateSelected">;
            }
        ];
    };
    Element: HTMLSelectElement;
}
export default class VelvetSelect extends Component<VelvetSelectSignature> {
    options: Map<any, any>;
    VelvetSelectOption: typeof VelvetSelectOption;
    get hasSelection(): boolean;
    get shouldDisplayPlaceholder(): boolean;
    changeHandler: (event: Event) => void;
    addOption: (id: string, value: unknown) => void;
    removeOption: (id: string) => void;
}
export {};
//# sourceMappingURL=velvet-select.d.ts.map