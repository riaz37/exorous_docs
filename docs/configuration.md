# Configuration

Exorous is highly customizable, allowing you to tailor its behavior to your specific project needs.

## The `config.toml` File

Exorous stores its configuration in `~/.exorous/config.toml` (Global) and `.ai-agent/config.toml` (Project-specific). Project-level settings take precedence.

### Core Settings

```toml
# The model to use
model_name = "anthropic/claude-3-5-sonnet"

# Temperature for the LLM
temperature = 0.0

# How much context to keep before compression (in tokens)
max_context_tokens = 40000

# The default approval policy
approval_policy = "on-request"
```

### Environment Variables

You can also use environment variables to override settings or provide API keys:

- `EXOROUS_API_KEY`: Your primary LLM provider key.
- `EXOROUS_MODEL`: The model name.
- `EXOROUS_CWD`: Set the default working directory.

## Personalization

Make Exorous work exactly how you like by tailoring its instructions and behavior.

- **Project Conventions**: Set rules for indentation, file naming, or architectural patterns in your `config.toml`.
- **Personal Preferences**: Define your favorite LLM models and interaction style.
- **Scoped Knowledge**: Use the `memory` tool to store project-specific notes that the agent will automatically load at the start of every session.

## Custom Instructions

You can provide global or project-specific instructions to Exorous:

- **User Instructions**: Tell Exorous about your preferences ("Always use tab for indentation", "Follow the Airbnb style guide").
- **Developer Instructions**: Technical guidelines ("We use FastAPI for all microservices", "Database migrations must be handled via Alembic").

## Tool Allowlisting

Limit the tools Exorous has access to for specific projects:

```toml
[tools]
allowlist = ["read_file", "write_file", "grep", "code_search"]
# If allowlist is empty, all built-in tools are enabled.
```
