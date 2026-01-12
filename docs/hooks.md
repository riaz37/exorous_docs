# Hooks System

The Hooks system allows you to automate workflows and extend Exorous's behavior by running custom scripts at specific points in its lifecycle.

## Available Hooks

Exorous provides hooks for the following events:

- **`on_session_start`**: Run a script when Exorous starts.
- **`on_session_finish`**: Run a script when the agent finishes its objective.
- **`before_tool_call`**: Execute logic before a specific tool (or any tool) is run.
- **`after_tool_call`**: Execute logic after a tool call completes.
- **`on_error`**: Trigger automation when the agent encounters an unexpected error.

## Example Usage

You can configure hooks in your `config.toml`:

```toml
[[hooks]]
event = "on_session_start"
command = "npm install"
description = "Ensure dependencies are up to date"

[[hooks]]
event = "after_tool_call"
tool_name = "write_file"
command = "npx prettier --write {path}"
description = "Auto-format modified files"
```

## Placeholders

Hooks support dynamic placeholders that are replaced with real values at runtime:
- `{path}`: The path of the file being modified.
- `{output}`: The output of a tool call.
- `{error}`: The error message if a tool failed.

The Hooks system makes it easy to integrate Exorous with your existing CI/CD pipelines, linters, and custom automation scripts.
