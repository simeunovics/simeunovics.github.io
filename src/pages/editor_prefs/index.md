---
path: '/editors-prefs'
title: 'Editor Preferences'
date: 2018-05-03
---

* [VS Code](#vs_code) |  [Sublime](#sublime)

### <a name="vs_code"></a> VS Code [preferences]

```json
{
  "editor.fontFamily": "Fira Code",
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "editor.lineHeight": 45,
  "editor.letterSpacing": 1.2,
  "editor.minimap.enabled": false,
  "editor.renderIndentGuides": false,
  "editor.lineNumbers": "off",
  "workbench.colorCustomizations": {
    "scrollbarSlider.background": "#9aa0",
    "scrollbarSlider.activeBackground": "#f000",
    "scrollbarSlider.hoverBackground": "#ff00"
  },
  "vim.insertModeKeyBindings": [
    {
      "before": ["j", "j"],
      "after": ["<Esc>"]
    }
  ],
  "workbench.startupEditor": "newUntitledFile",
  "zenMode.fullScreen": false,
  "vim.overrideCopy": false,
  "files.trimTrailingWhitespace": true,
  "editor.trimAutoWhitespace": true,
  "explorer.confirmDragAndDrop": false,
  "files.autoSave": "onWindowChange",
  "explorer.openEditors.visible": 0,
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.lineHeight": 1.6,
  "editor.parameterHints": false,
  "window.zoomLevel": 0,
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressResultsExplorerNotice": false,
    "suppressShowKeyBindingsNotice": true,
    "suppressUpdateNotice": false,
    "suppressWelcomeNotice": true
  },
  "python.disablePromptForFeatures": ["pylint"],
  "explorer.confirmDelete": false,
  "workbench.iconTheme": "eq-material-theme-icons",
  "prettier.trailingComma": "all",
  "gitlens.statusBar.enabled": false,
  "gitlens.currentLine.enabled": false,
  "gitlens.hovers.enabled": false,
  "gitlens.codeLens.authors.enabled": false,
  "gitlens.codeLens.recentChange.enabled": false,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/vendor/**": true,
    "**/var/**": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/var": true
  },
  "material-icon-theme.showUpdateMessage": false,
  "explorer.decorations.badges": false,
  "workbench.colorTheme": "Material Theme Palenight",
  "gitlens.keymap": "chorded",
  "workbench.editor.showTabs": false,
  "workbench.activityBar.visible": false,
  "editor.tabSize": 4,
  "editor.detectIndentation": false,
  "editor.cursorBlinking": "solid",
  "vim.cursorStylePerMode": {
    "normal": "underline",
    "insert": "line",
    "replace": "block-outline"
  },
  "prettier.tabWidth": 4,
  "prettier.singleQuote": true
}
```

##### VS Code [keybindings]

```json
[
  {
    "key": "alt+enter",
    "command": "editor.action.showContextMenu",
    "when": "editorTextFocus"
  },
  {
    "key": "shift+f10",
    "command": "-editor.action.showContextMenu",
    "when": "editorTextFocus"
  },
  {
    "key": "cmd+1",
    "command": "workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "cmd+b",
    "command": "-workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "alt+/",
    "command": "workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+`",
    "command": "-workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "shift+cmd+n",
    "command": "extension.advancedNewFile"
  },
  {
    "key": "alt+cmd+n",
    "command": "-extension.advancedNewFile"
  },
  {
    "key": "cmd+m",
    "command": "workbench.action.gotoSymbol"
  },
  {
    "key": "shift+cmd+o",
    "command": "-workbench.action.gotoSymbol"
  },
  {
    "key": "shift+cmd+m",
    "command": "workbench.action.showAllSymbols"
  },
  {
    "key": "cmd+t",
    "command": "-workbench.action.showAllSymbols"
  },
  {
    "key": "alt+cmd+l",
    "command": "editor.action.formatDocument",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+f",
    "command": "-editor.action.formatDocument",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "cmd+right",
    "command": "workbench.action.terminal.focusNext"
  },
  {
    "key": "cmd+left",
    "command": "workbench.action.terminal.focusPrevious"
  },
  {
    "key": "shift+cmd+1",
    "command": "workbench.action.focusFirstEditorGroup"
  },
  {
    "key": "cmd+1",
    "command": "-workbench.action.focusFirstEditorGroup"
  }
]
```

<br/>

#### <a name="sublime"></a> Sublime

```json
{
  "close_windows_when_empty": true,
  "color_scheme": "Packages/Material Theme/schemes/Material-Theme.tmTheme",
  "draw_indent_guides": false,
  "font_face": "Fira Mono for Powerline",
  "font_size": 17,
  "hot_exit": false,
  "ignored_packages": [],
  "line_numbers": false,
  "line_padding_bottom": 12,
  "line_padding_top": 12,
  "material_theme_small_tab": true,
  "open_files_in_new_window": false,
  "scroll_past_end": true,
  "theme": "Material-Theme.sublime-theme",
  "trim_trailing_white_space_on_save": false,
  "use_simple_full_screen": true,
  "vintage_start_in_command_mode": true,
  "word_wrap": false
}
```
