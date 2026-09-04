# Monitor Workspaces for Omarchy

Monitor-aware workspace feedback for the Omarchy top bar.

## The problem

Omarchy's built-in workspace widget marks Hyprland's globally focused workspace. On a multi-monitor setup, the same global marker appears in every monitor's bar.

For example, suppose a laptop display is showing workspace 1 and a second monitor is showing workspace 2. If focus is currently on workspace 2, both bars emphasize workspace 2. Looking at the laptop's bar therefore does not tell you that the workspace visible on that display is workspace 1.

## What this plugin changes

This plugin gives the two states separate meanings:

- The workspace currently displayed on a monitor uses Omarchy's active theme color in that monitor's bar.
- Hyprland's globally focused workspace retains Omarchy's existing special glyph.
- Occupied workspaces remain at full opacity.
- Empty, inactive workspaces remain dimmed.

Each bar instance identifies the screen that hosts it, finds the matching Hyprland monitor, and highlights only that monitor's `activeWorkspace`. Consequently, every monitor gets exactly one local active-workspace highlight instead of every bar showing the same set of monitor-active workspaces.

The plugin does not hardcode a highlight color. It uses the standard `WidgetButton.active` state, which inherits the bar's active color. The result follows the current Omarchy theme and stays visually homogeneous with the rest of the shell when themes change.

## Installation

Install and enable the plugin directly from GitHub:

```bash
omarchy plugin add https://github.com/dzanaga/omarchy-monitor-workspaces.git --enable
```

The plugin declares itself as a clone of `omarchy.workspaces`, allowing it to replace the built-in workspace widget while preserving its normal position and integration.

## Updating

```bash
omarchy plugin update io.github.dzanaga.monitor-workspaces
```

## Removal

```bash
omarchy plugin remove io.github.dzanaga.monitor-workspaces
```

Removing the plugin restores the built-in Omarchy workspace widget.

## Requirements

- Omarchy with the Quickshell-based shell plugin system
- Hyprland
- A Nerd Font compatible with Omarchy's built-in focused-workspace glyph

The monitor-aware behavior is most useful with two or more displays, but the widget also works on a single-monitor setup.

## Development

Validate a checkout with Omarchy's plugin validator:

```bash
omarchy plugin validate .
```

For local testing, install the checkout through Omarchy:

```bash
omarchy plugin add "$PWD" --enable
```

Plugin QML reloads automatically when files in the installed plugin directory change. If needed, restart the shell explicitly:

```bash
omarchy restart shell
```

## Attribution

This plugin is derived from Omarchy's built-in `omarchy.workspaces` widget and preserves its workspace listing, occupancy, focus, and click behavior. The monitor-local active-state behavior is the substantive modification.

Omarchy is available under the MIT License.

## License

MIT
