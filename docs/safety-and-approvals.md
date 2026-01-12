# Safety & Approvals

Exorous is designed with a "Safety First" mindset, giving you full control over what the agent can and cannot do.

## Your Safety is Priority

Exorous never takes an action without your approval by default.

- **Checkpoints**: Every session is backed up, allowing you to quickly roll back any changes you're not happy with.
- **Guardian Mode**: Exorous automatically detects and blocks potentially dangerous commands (like system-level deletions) and asks for extra confirmation.

## Approval Policies

You can configure how Exorous requests permission for mutating operations (like writing files or running shell commands) through the `approval_policy` setting in `config.toml`.

| Policy | Description |
| :--- | :--- |
| `on-request` | (Default) Exorous asks for permission before every mutating action. |
| `auto` | Exorous executes actions without asking, unless they are flagged as "dangerous". |
| `never` | Exorous will never execute mutating actions (read-only mode). |
| `yolo` | Exorous executes everything without asking. **Use with extreme caution!** |

## Dangerous Command Detection

Exorous automatically scans shell commands for potentially destructive patterns (e.g., `rm -rf /`, `mkfs`). If a command is flagged as dangerous, Exorous will **always** ask for your explicit confirmation, even if the policy is set to `auto`.

## Path-Based Safety

Exorous is restricted to working within the directories you specify. It will refuse to read or write files outside of its authorized workspace, protecting your system files and sensitive data.

## Interactive Review

For every tool call, Exorous provides a clear summary of:
- **What** it's about to do.
- **Why** it's doing it.
- **The exact parameters** (e.g., the diff of a file edit or the full shell command).

You can approve, reject with feedback, or even edit the proposed command before it runs.
