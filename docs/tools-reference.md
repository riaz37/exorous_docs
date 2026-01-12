# Tools Reference

Exorous is equipped with a versatile suite of tools to interact with your environment.

## File Operations

- **`read_file`**: Read the contents of a file at a specific path.
- **`write_file`**: Create or overwrite files with new content.
- **`edit_file`**: Apply precise, chunk-based edits to existing files using a diff-like format.

## Navigation & Search

- **`list_dir`**: Explore directory structures and see file sizes.
- **`glob_search`**: Find files matching a specific pattern (e.g., `**/*.py`).
- **`grep`**: Perform deep searches across multiple files using regex.
- **`code_search`**: Semantic search across the indexed codebase.

## System & Web

- **`shell`**: Execute safe shell commands with full output capture.
- **`web_search`**: Search the web for documentation or external knowledge.
- **`web_fetch`**: Retrieve and parse content from specific URLs into clean markdown.

## Management

- **`memory`**: Store and retrieve information for the user or the project.
- **`todo`**: Manage a persistent checklist of tasks within a session.

---

> [!TIP]
> Exorous also supports **MCP (Model Context Protocol)**, allowing you to connect to external tool servers for even more capabilities.
