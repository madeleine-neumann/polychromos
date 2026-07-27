# Polychromos repo — working conventions

## No inline JavaScript in HTML files

Always put JS in its own file under `js/` and reference it with `<script src="./js/name.js"></script>`.
Never write logic inside a `<script>...</script>` block directly in an `.html` file — not even
"just this one small handler". This applies to new code and to edits of existing inline blocks:
extract them out as you touch them.

Shared snippets used by multiple pages already live in `js/theme-init.js` (head, blocking, sets
`data-theme` before paint), `js/nav-dropdown.js` (nav dropdown open/close behavior), and
`js/theme-toggle.js` (dark/light toggle button wiring). Reuse these rather than duplicating them
inline again.

Data files (`data/*.js`) and page-specific logic (`js/index.js`, `js/ohuhu.js`,
`js/matched-pencils.js`, `js/spectrum.js`, `js/prefill.js`) follow the same rule.
