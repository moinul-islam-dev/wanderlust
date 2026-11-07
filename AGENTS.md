<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.



# Project Instructions

## 1. Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Biome
- shadcn/ui
- React Hot Toast
- Better Auth
- src/ directory structure

## 2. Token Efficiency

- Never scan the entire project.
- Never read all files in src/.
- Inspect only files relevant to the current task.
- Read package.json when dependency information is needed.
- Do not repeatedly read files already inspected.
- Never dump entire files in responses.
- Avoid unnecessary explanations and repeated summaries.
- Do not use subagents for simple tasks.
- Do not run unnecessary terminal commands.
- Prefer targeted grep and file searches.
- Never read any .env file.

## 3. Development Workflow

Before implementing:

1. Understand the requested feature.
2. Inspect only relevant files.
3. Identify existing patterns and dependencies.
4. Create a short implementation plan for complex tasks.
5. Ask questions if essential requirements are unclear.

During implementation:

1. Preserve the existing architecture.
2. Reuse existing components and utilities.
3. Avoid unnecessary dependencies.
4. Make minimal, focused changes.
5. Do not rewrite unrelated files.
6. Do not introduce unnecessary abstractions.

After implementation:

1. Run Biome checks on changed files.
2. Run TypeScript checks when relevant.
3. Fix errors introduced by your changes.
4. Report modified files and verification results.

## 4. Next.js Rules

- Use App Router.
- Keep code inside src/.
- Prefer Server Components by default.
- Use "use client" only when necessary.
- Use Server Actions when appropriate.
- Use Route Handlers for API endpoints when appropriate.
- Follow Next.js caching and data-fetching conventions.
- Avoid unnecessary client-side fetching.
- Keep server-only logic out of client components.

## 5. React Rules

- Prefer reusable components.
- Use custom hooks for reusable stateful logic.
- Avoid prop drilling when Context is justified.
- Avoid unnecessary useEffect.
- Use proper TypeScript types.
- Never use any unless absolutely unavoidable.

## 6. Tailwind CSS

- Use Tailwind utility classes.
- Follow existing design conventions.
- Avoid unnecessary inline styles.
- Avoid duplicate utility classes.
- Keep responsive design consistent.


## 7. shadcn/ui

- Reuse existing components from src/components/ui/.
- Do not recreate components that already exist.
- Follow the project's existing component patterns.
- Add new shadcn components only when needed.
- Always prefer installing the complete parent component using the shadcn CLI.
- Do not install individual child components separately when they are already included in the parent component.
- Install the parent component and its required dependencies together.
- Only install individual subcomponents when the parent component is unavailable or explicitly requested.
- Avoid unnecessary installations, duplicate files, and repeated registry lookups.



## 8. Biome

- Use Biome for formatting and linting.
- Follow existing biome.json configuration.
- Do not introduce ESLint or Prettier unless requested.

## 9. Better Auth

- Follow the existing Better Auth configuration.
- Keep authentication logic on the server where appropriate.
- Never expose secret keys or credentials.
- Never read .env files.
- Never invent environment variable names or values.
- If configuration is needed, ask for variable NAMES only.

## 10. React Hot Toast

- Use react-hot-toast for notifications.
- Reuse the existing Toaster configuration.
- Avoid duplicate success/error notifications.

## 11. Code Quality

- Write production-conscious code.
- Handle loading, error and empty states.
- Validate external input.
- Avoid unnecessary dependencies.
- Maintain accessibility.
- Follow existing naming conventions.

## 12. Git Safety

- Never commit or push without permission.
- Never overwrite unrelated user changes.
- Never delete files without permission.

## 13. Response Format

Keep responses concise.

Report:
- What changed.
- Which files changed.
- Verification performed.
- Any remaining issues.

Do not claim tests passed unless they actually ran.


<!-- END:nextjs-agent-rules -->
