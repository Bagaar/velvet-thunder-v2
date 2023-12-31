import { service } from "@ember/service";
import Component from "@glimmer/component";
// @ts-expect-error TODO: `ember-link` module cannot be found.
import { Link, type LinkManagerService } from "ember-link";

interface VelvetLinkSignature {
  Args: {
    /// Indicate if the link is pill shaped.
    /// @default [false]
    isPill?: boolean;

    /// The size of the link.
    /// @default ["md"]
    size?: "xs" | "sm" | "md" | "lg";

    /// A valid route path or a custom `ember-link` `Link` instance.
    /// @default [undefined]
    to: string | Link;

    /// The appearance of the link.
    /// @default ["primary"]
    variant?: string | "primary";
  };
  Blocks: {
    default: [];
  };
  Element: HTMLAnchorElement;
}

export default class VelvetLink extends Component<VelvetLinkSignature> {
  @service("link-manager") declare linkManagerService: LinkManagerService;

  get link() {
    const { to } = this.args;

    if (typeof to === "string") {
      return this.linkManagerService.createLink(
        this.linkManagerService.getLinkParamsFromURL(to)
      );
    }

    return to;
  }
}
