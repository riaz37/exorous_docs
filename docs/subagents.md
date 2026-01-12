# Subagents

For complex tasks that require deep focus or specialized knowledge, Exorous can spawn **Subagents**.

## What are Subagents?

Subagents are independent agent sessions that take on a specific sub-task. They have their own system instructions, tool access, and token limits. This "divide and conquer" approach helps Exorous maintain precision on large projects.

## Built-in Subagents

Exorous comes with several pre-configured subagents:

### 🕵️ Codebase Investigator
Specialized in navigating and understanding large, unfamiliar codebases. It is equipped with advanced search and graph tools but has restricted write access.

### 🔍 Code Reviewer
Focused on analyzing diffs and providing high-quality feedback based on best practices and your project's specific conventions.

## How it Works

When you ask Exorous a broad question like "How does the entire networking layer work?", it might choose to spawn an Investigator subagent to do the heavy lifting. Once the subagent is done, it reports its findings back to the main agent.

---

> [!TIP]
> Subagents are a great way to handle "exploratory" work without cluttering the main conversation's context.
