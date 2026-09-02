# Decision Memo: Prioritize Delivery Completion Over Optional Enhancements

**Date:** August 30, 2026
**Author:** Patricia Mengi
**Decision area:** Day 2 and Day 3 delivery scope tradeoff

## Context

During the capstone, the team was responsible for assembling a working React application, configuring it, integrating data loading, enabling CI, validating the production build, and delivering the solution through a pull request. Several optional enhancement activities were also available, including adding new coverage types, modifying components, and extending the CI workflow.

Given the limited delivery window and the requirement to complete all mandatory deliverables, a decision was required regarding whether to spend time on optional enhancements or focus on completing core delivery objectives.

## Options considered

1. **Option A: Complete only the required deliverables.**
   - Pros: Reduced risk, protected the delivery schedule, ensured all required deliverables could be completed and validated.
   - Cons: Less opportunity to explore additional technical challenges.

2. **Option B: Complete required deliverables and optional technical challenges.**
   - Pros: Increased hands-on technical experience and deeper understanding of the technology stack.
   - Cons: Increased risk of incomplete required deliverables, schedule pressure, and potential integration issues.

3. **Option C: Focus primarily on optional enhancements and defer documentation activities.**
   - Pros: Maximum technical experimentation.
   - Cons: High risk of missing required leadership deliverables and final presentation readiness.

## Recommendation

I selected Option A and prioritized completion of the required delivery scope. The team focused on assembling the provided solution components, applying configuration changes, resolving the TypeScript issue, implementing the data feed, integrating the hook and context provider, enabling CI, validating the production build, and successfully delivering the final solution through a pull request and merge process.

Optional challenges were intentionally deprioritized until all required work was complete.

## Why

The most important consideration was delivering a complete, working product that met all stated requirements by the scheduled deadline. A completed and validated delivery provides more value than partially completed enhancements that could jeopardize the overall outcome.

## What would change my mind

If additional time were available after all required deliverables were completed and validated, I would revisit optional enhancements to gain additional technical experience and explore further improvements to the application.

---

# Inject #1 Decision: ZIP-Code Request and Dependency Audit

## Context

During the afternoon of Day 2, Marketing requested that a ZIP-code field be added to the quote form to support a regional pricing A/B test. At the same time, a dependency audit identified a moderate-severity issue in a development-time build tool. The delivery goal remained unchanged: deliver an assembled, typed, data-loading application with a successful build and merge process.

## Options considered

### Option A: Add the ZIP-code field this week

**Pros**
- Supports Marketing's regional pricing initiative.
- Provides additional business value.

**Cons**
- Introduces new scope late in the delivery cycle.
- Requires additional validation and testing efforts.
- May impact delivery readiness and schedule commitments.

### Option B: Defer the ZIP-code field to a future iteration

**Pros**
- Protects the committed delivery goal.
- Maintains focus on completing required deliverables.
- Reduces schedule and quality risk.

**Cons**
- Delays Marketing's requested enhancement.

## Recommendation

I recommend deferring the ZIP-code enhancement to a future iteration. While the request appears simple, it introduces additional scope that could impact delivery readiness and the team's ability to achieve the committed delivery goal. If the enhancement is prioritized this week, time would need to be diverted from other planned activities.

## Dependency Audit Recommendation

I recommend proceeding with shipment this week. The dependency audit identified a moderate-severity issue in a development-time build tool that is not delivered to customers. The platform team has already scheduled the recommended upgrade for the next maintenance window, so the risk can be monitored while maintaining the current delivery schedule.

## Why

The priority remains delivering a complete, validated solution that satisfies the agreed-upon delivery objectives. Protecting the delivery commitment provides greater value than introducing additional scope late in the schedule.

## What would change my mind

If all planned delivery objectives were completed ahead of schedule and sufficient time remained for implementation, testing, and validation, I would revisit the ZIP-code enhancement request.

---

# Inject #2 Decision: Renters Pricing Incident and CI Failure

## Context

On Day 3, the team received reports of two issues requiring immediate attention. A customer reported receiving a renters quote of $8,950 per month for $25,000 of coverage, which Customer Success was able to reproduce. At the same time, the CI pipeline on the main branch began failing following a renters-rate hotfix due to a missing required asset file.

The primary question was whether to continue focusing on delivery and release activities or temporarily shift effort toward incident investigation and validation activities.

## Options considered

### Option A: Continue planned delivery activities

**Pros**
- Maintains project momentum.
- Preserves scheduled delivery activities.

**Cons**
- Customer-impacting issues may remain unresolved.
- Release readiness may be reduced if CI remains unhealthy.
- Increases risk of deploying with known concerns.

### Option B: Temporarily prioritize investigation and validation

**Pros**
- Addresses potential customer impact.
- Improves confidence in release readiness.
- Supports informed Go/No-Go decision making.

**Cons**
- Temporary shift away from planned delivery activities.
- Additional time spent on risk assessment and validation.

## Recommendation

I recommend Option B. Customer-facing issues and release validation concerns should be investigated before proceeding with release decisions. The team should prioritize understanding the pricing issue, validating configuration changes, reviewing CI failures, and communicating status to stakeholders.

## Why

Protecting customer experience and release quality takes priority over maintaining the original task sequence. A short delay to investigate potential customer impact is preferable to releasing functionality that may contain pricing or configuration issues.

## Outcome

The team created investigation, validation, and stakeholder communication work items, assessed release risk, and reviewed the impact of the incident scenarios. Following successful validation, CI review, and build verification, the project remained on track and ultimately achieved its delivery objectives.

## What would change my mind

If investigation activities revealed no customer impact and CI health could be immediately validated, the team could resume planned delivery activities without re-prioritization.