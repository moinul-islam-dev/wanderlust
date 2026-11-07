---
description: Implement a task and record it in agents/commands/implemented.md
agent: build
---

Implement the requested task: $ARGUMENTS

Follow the project instructions in `AGENTS.md`:

1. Inspect only the files relevant to the task.
2. Preserve the existing architecture, patterns, and dependencies.
3. Make minimal, focused changes.
4. Do not modify unrelated files.

After implementation:

1. Run `npx biome check` on the changed files.
2. Run `npx tsc --noEmit`.
3. Run `npm run build` when the change affects the app.
4. Update `agents/commands/implemented.md` with a new entry containing:
   - Date
   - Task summary
   - Files changed
   - Verification performed
   - Any remaining issues

Never skip step 4. The implemented task is not complete until
`agents/commands/implemented.md` reflects the work.

