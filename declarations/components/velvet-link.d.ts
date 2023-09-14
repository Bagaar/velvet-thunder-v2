import Component from "@glimmer/component";
import { Link, type LinkManagerService } from "ember-link";
interface VelvetLinkSignature {
    Args: {
        isPill?: boolean;
        size?: "xs" | "sm" | "md" | "lg";
        to: string | Link;
        variant?: string | "primary";
    };
    Blocks: {
        default: [];
    };
    Element: HTMLAnchorElement;
}
export default class VelvetLink extends Component<VelvetLinkSignature> {
    linkManagerService: LinkManagerService;
    get link(): any;
}
export {};
//# sourceMappingURL=velvet-link.d.ts.map