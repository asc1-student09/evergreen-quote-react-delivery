# Risk Register

| # | Risk | Owner | Likelihood (L/M/H) | Impact (L/M/H) | Mitigation | Trigger to escalate |
|---|---|---|---|---|---|---|
| R1 | The application runs in the dev server but fails TypeScript validation, resulting in a failed build or CI run. | Delivery Lead | M | H | Run `npm run type-check` after each assembly step and before every commit. | Type-check remains red after troubleshooting. |
| R2 | A provided component is wired incorrectly in `App.tsx`, causing runtime errors or blank screens. | Delivery Lead | M | H | Test the application after each component integration and validate expected functionality. | Application fails to render or produces console errors. |
| R3 | The recent quotes data feed (`quotes.json`) becomes unavailable or is incorrectly configured, preventing quote data from loading. | Delivery Lead | M | M | Verify the file exists in the `public` folder and test loading, error, and recovery scenarios. | Recent Quotes panel displays an error message during validation testing. |
| R4 | CI workflow fails because changes are merged without validating type-check or build status. | Delivery Lead | L | H | Require a successful GitHub Actions run before merging any pull request. | CI workflow returns a failed status. |
| R5 | Last-minute changes introduce defects that are not identified before the production build. | Delivery Lead | M | H | Run a full production build and verify application functionality before opening the PR. | `npm run build` fails or the application behaves unexpectedly after changes. |
| R6 | A moderate-severity vulnerability identified in a development-time dependency could delay delivery or require an unplanned upgrade effort. | Delivery Lead | M | M | Monitor the platform team's scheduled upgrade, track remediation status, and verify the dependency is updated during the next maintenance window. | Severity increases, additional vulnerabilities are identified, or the planned upgrade is delayed. |
| R7 | Configuration or rate changes introduce customer-facing pricing errors, resulting in incorrect premium calculations and potential customer impact. | Delivery Lead | M | H | Validate rate changes through testing, review quote calculation outputs, use TypeScript validation and CI checks, and verify expected pricing scenarios before release. | Customer reports unrealistic premium amounts or validation testing identifies pricing discrepancies. |

## How I'll use this register

I will review the risk register at the beginning and end of each working session and before any pull request is opened. The register will be shared with stakeholders and used during daily check-ins to identify new risks, monitor existing risks, and determine when escalation is required.

| R6 | A moderate-severity vulnerability identified in a development-time dependency could delay delivery or require an unplanned upgrade effort. | Delivery Lead | M | M | Monitor the platform team's scheduled upgrade, track remediation status, and verify the dependency is updated during the next maintenance window. | Severity increases, additional vulnerabilities are identified, or the planned upgrade is delayed. |