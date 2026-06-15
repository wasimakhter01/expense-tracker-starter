# Deploy Skill

Deploy the app to staging by running tests, building a production bundle, and pushing to the staging environment.

## Steps

1. **Run tests** — execute `npm run lint` to catch errors. If lint fails, stop and report the errors to the user; do not proceed.

2. **Build production bundle** — run `npm run build`. If the build fails, stop and report the errors to the user; do not proceed.

3. **Push to staging** — run `npm run preview` to verify the production bundle locally, then push the `dist/` folder to the staging area using whatever deployment method is configured (e.g. `git push staging main`, rsync, or a deploy CLI). If no staging target is configured, inform the user and show them what was built.

4. **Report** — summarize what passed, what was deployed, and the staging URL if available.

## Rules

- Never skip lint or build steps even if the user asks.
- Never deploy if lint or build exits with a non-zero code.
- Keep output concise: show errors in full, suppress verbose success noise.
