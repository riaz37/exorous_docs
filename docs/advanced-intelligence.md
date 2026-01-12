# Advanced Intelligence

Exorous features a state-of-the-art intelligence layer that allows it to reason about your codebase with unprecedented depth.

## Semantic Search (RAG)

Exorous uses **Retrieval-Augmented Generation** to find relevant code based on meaning, not just keywords.

- **Incremental Indexing**: Exorous automatically indexes your project in the background. Only changed files are re-indexed to ensure lightning-fast performance even on huge repositories.
- **AST-based Chunking**: Code is broken down into logical units (functions, classes) using Abstract Syntax Trees, providing high-fidelity search results.
- **`code_search` tool**: Use this tool to ask questions like "How is authentication handled?" or "Show me examples of database migrations."

## Codebase Knowledge Graph

Beyond search, Exorous builds a **Symbol Map** of your entire project.

- **Relationship Tracking**: It understands which functions call each other, which classes inherit from others, and how modules are imported.
- **Impact Analysis**: This allows Exorous to predict the side effects of a change. If you rename a function, Exorous "knows" exactly which files need to be updated.

## Long-Term Memory

Exorous remembers project-specific context so you don't have to repeat yourself.

- **Project Scope**: When you tell Exorous "Always use HSL for colors in this project," it stores this in its **Project Knowledge Store**.
- **Cross-Session Persistence**: These decisions are automatically loaded into the system prompt at the start of every session, ensuring consistency across the entire dev cycle.

### Using Memory

```bash
# Example directive
"Remember that we use snake_case for all internal utility functions."
```
Exorous will use the `memory` tool with `scope="project"` to persist this convention.
