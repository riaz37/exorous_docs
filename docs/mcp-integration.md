# MCP Integration

Exorous fully supports the **Model Context Protocol (MCP)**, enabling it to connect to a vast ecosystem of third-party tools and data sources.

## What is MCP?

MCP is an open standard that allows AI agents to securely connect to external servers that provide tools, resources, and prompts. This means Exorous can integrate with tools like Google Drive, Slack, GitHub, or custom internal databases without needing built-in support for each one.

## Configuring MCP Servers

You can add MCP servers to Exorous by editing your `config.toml`:

```toml
[[mcp_servers]]
name = "my-custom-server"
transport = "stdio"
command = "node"
args = ["/path/to/server/index.js"]

[[mcp_servers]]
name = "docs-server"
transport = "http"
url = "https://mcp.exorous.ai/v1"
```

## Using MCP Tools

Once connected, Exorous will automatically discover and register all tools provided by the MCP servers. You can see these tools by running the `/mcp` command in the interactive UI.

Exorous will use these tools just like its built-in tools when they are relevant to a task.

---

> [!NOTE]
> Exorous supports both **stdio** (running a local process) and **HTTP/SSE** (connecting to a remote server) transports.
