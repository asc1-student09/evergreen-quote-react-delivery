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
`