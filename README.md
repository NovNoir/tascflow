# Forms and workflow system: concept

An interactive concept for a forms and workflow system.

**View it:** https://novnoir.github.io/workflow-concept/

- **Process view** (`index.html`): the process (1. Lodgement, 2. Review and Decision, 3. Approval) plus a
  "Behind the scenes" lane for what the system does on its own. Click a step to see the components it uses; click a
  component to light up the steps that use it. "Lessons learned" lists problems to design out from the start.
- **Component list** (`components.html`): every component with what it does at each step, plus a Comment box and a
  Framework box for each. Entries save in your browser; Download CSV, Save backup and Load backup move them around.

There is no build step. The steps, components and lessons live in `components-data.js`, shared by both pages.
