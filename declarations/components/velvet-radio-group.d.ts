import Component from "@glimmer/component";
import type { WithBoundArgs } from "@glint/template";
import VelvetRadio, { type Size } from "./velvet-radio.ts";
interface VelvetRadioGroupSignature {
    Args: {
        isDisabled?: boolean;
        name?: string;
        onChange?: (value: unknown, event: Event) => void;
        size?: Size;
        value?: unknown;
    };
    Blocks: {
        default: [
            {
                Radio: WithBoundArgs<typeof VelvetRadio, "isDisabled" | "name" | "size" | "privateGroupValue" | "privateInGroup" | "privateOnChangeGroup">;
            }
        ];
    };
    Element: HTMLDivElement;
}
export default class VelvetRadioGroup extends Component<VelvetRadioGroupSignature> {
    uniqueName: string;
    VelvetRadio: typeof VelvetRadio;
}
export {};
//# sourceMappingURL=velvet-radio-group.d.ts.map