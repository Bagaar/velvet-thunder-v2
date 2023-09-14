// Easily allow apps, which are not yet using strict mode templates, to consume your Glint types, by importing this file.
// Add all your components, helpers and modifiers to the template registry here, so apps don't have to do this.
// See https://typed-ember.gitbook.io/glint/environments/ember/authoring-addons

import type VelvetAvatar from "./components/velvet-avatar.ts";
import type VelvetButton from "./components/velvet-button.ts";
import type VelvetCheckbox from "./components/velvet-checkbox.ts";
import type VelvetCheckboxGroup from "./components/velvet-checkbox-group.ts";
import type VelvetDisclosureIcon from "./components/velvet-disclosure-icon.ts";
import type VelvetDropdown from "./components/velvet-dropdown.ts";
import type VelvetIconButton from "./components/velvet-icon-button.ts";
import type VelvetInput from "./components/velvet-input.ts";
import type VelvetLink from "./components/velvet-link.ts";
import type VelvetProgress from "./components/velvet-progress.ts";
import type VelvetRadio from "./components/velvet-radio.ts";
import type VelvetRadioGroup from "./components/velvet-radio-group.ts";
import type VelvetSelect from "./components/velvet-select.ts";
import type VelvetSpinner from "./components/velvet-spinner.ts";
import type VelvetSwitch from "./components/velvet-switch.ts";
import type VelvetTag from "./components/velvet-tag.ts";
import type VelvetTextarea from "./components/velvet-textarea.ts";
import type VelvetTooltip from "./components/velvet-tooltip.ts";

// Private:
import type VelvetClassListHelper from "./helpers/-velvet/class-list.ts";

export default interface Registry {
  VelvetAvatar: typeof VelvetAvatar;
  VelvetButton: typeof VelvetButton;
  VelvetCheckbox: typeof VelvetCheckbox;
  VelvetCheckboxGroup: typeof VelvetCheckboxGroup;
  VelvetDisclosureIcon: typeof VelvetDisclosureIcon;
  VelvetDropdown: typeof VelvetDropdown;
  VelvetIconButton: typeof VelvetIconButton;
  VelvetInput: typeof VelvetInput;
  VelvetLink: typeof VelvetLink;
  VelvetProgress: typeof VelvetProgress;
  VelvetRadio: typeof VelvetRadio;
  VelvetRadioGroup: typeof VelvetRadioGroup;
  VelvetSelect: typeof VelvetSelect;
  VelvetSpinner: typeof VelvetSpinner;
  VelvetSwitch: typeof VelvetSwitch;
  VelvetTag: typeof VelvetTag;
  VelvetTextarea: typeof VelvetTextarea;
  VelvetTooltip: typeof VelvetTooltip;

  // Private:
  "-velvet/class-list": typeof VelvetClassListHelper;
}
