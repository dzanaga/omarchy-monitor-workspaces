# Monitor Workspaces for Omarchy

Monitor-aware workspace feedback for the Omarchy top bar.

## Motivation

Omarchy's built-in workspace widget marks Hyprland's globally focused workspace. On a multi-monitor setup, the same global marker appears in every monitor's bar. I find it useful to know what workspace is currently displayed on each monitor, even when not focused. This allows me to move windows around more easily on the desired monitor.
With this plugin, Omarchy's active theme color is used by default to highlight the workspace associated with each monitor.
For example, the screenshot below shows a 2 monitor setup, monitor A (left) is in focus and hosts workspace 2; monitor B (right) is currently not in focus but shows that it's hosting workspace 1.

Quickshell 0.3.1 can retain stale `monitor.activeWorkspace` data after Hyprland moves a workspace between monitors, causing workspace indicators to highlight the wrong monitor until the user changes workspaces again. The plugin's monitor-state workaround listens for Hyprland's `moveworkspacev2` event and forces Quickshell to re-query Hyprland's monitor state immediately after the move. The behavior is tracked in [Omarchy issue #8364](https://github.com/basecamp/omarchy/issues/8364); the proposed Quickshell-side fix is available on the [`fix/hyprland-workspace-monitor-state`](https://github.com/dzanaga/quickshell/tree/fix/hyprland-workspace-monitor-state) branch for reference.

![Multi-monitor workspace overview](./preview.png)

(Apologies for the screenshot quality, quick and dirty pasting of randomly taken shots at different resolutions...)

## Installation

Install and enable the plugin directly from GitHub:

```bash
omarchy plugin add https://github.com/dzanaga/omarchy-monitor-workspaces.git --enable
```

The plugin declares itself as a clone of `omarchy.workspaces`, allowing it to replace the built-in workspace widget while preserving its normal position and integration.

## Configuration

Highlighting is enabled by default. Disable **Highlight displayed workspaces** in the widget's plugin settings to retain the stock workspace appearance while continuing to use the plugin's monitor-state workaround.

The same option can be configured directly on the widget entry in `~/.config/omarchy/shell.json`:

```json
{
  "id": "io.github.dzanaga.monitor-workspaces",
  "highlightDisplayedWorkspaces": false
}
```

Omit `highlightDisplayedWorkspaces`, or set it to `true`, to use the plugin's highlighted appearance.

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

## License

MIT
