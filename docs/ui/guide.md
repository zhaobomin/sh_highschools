# UI Guide

## Goals
- Keep UI interaction consistent and reusable.
- Prefer shadcn/ui primitives and shared components over custom one-off markup.
- Ensure global styles remain predictable and controlled.
- See `docs/ai/rules.md` for AI change constraints.

## Component Layers
1) Base UI primitives (shadcn/ui)
- Location: `src/components/ui/*`
- Rules: Avoid changing component APIs unless explicitly approved.

2) Shared composites (cross-feature)
- Location: `src/components/Shared/*`
- Use when multiple pages share structure/behavior (headers, cards, filters, shells).

3) Feature components (domain-specific)
- Location: `src/features/<feature>/components/*` (Phase 1)
- Only used inside that feature and its pages.

## Page Composition Rules
- Pages in `src/pages/*` should be thin composition only.
- If a page repeats layout or patterns, extract to `src/components/Shared/*`.

## Header Usage Rules
- `PageHeader` is for page-level hero/summary sections (e.g., dashboards, landing sections).
- `SectionHeader` is for card/section titles inside a page.
- Avoid using `SectionHeader` as the page's top-level title.

## Style Rules
- Global tokens live in `src/index.css` (CSS variables and base layers).
- If adding new global component classes, document them here and keep naming consistent.
- Avoid ad-hoc inline styles when a shared utility or class exists.

## Form Baseline
- Prefer `FormSection` + `FormField` for all page forms.
- Use `FormSection`/`FormField` className props to extend layout instead of ad-hoc wrappers.
- Prefer `FormSection` `bodyClassName` over wrapping the fields in an extra div.

## State Baseline
- Prefer `LoadingStateCard`, `EmptyState`, `ErrorState` for page states.
- Use `className` props on state components to avoid additional wrappers.
- `ErrorStateCard` / `LoadingStateCard` accept `className` for layout tweaks.
- `EmptyState` supports `variant="compact"` to avoid inline `py-0` overrides.
- Prefer wrapping state blocks with `StateContainer` for consistent spacing.

## Card Baseline
- `ListCard` provides default border/shadow and padding.
- Use `size`/`stack` on `ListCard` instead of inline `p-*` or `space-y-*` where possible.
- `SectionCard` supports header/title/description className overrides for layout alignment.
- Prefer `SectionCard` title/description props over custom header markup when possible.

## Section Header Baseline
- `SectionHeader` supports icon/title/description/actions className overrides for fine-grained alignment.
- Use these props instead of adding wrapper divs around `SectionHeader`.

## Interaction Consistency
- Use existing patterns for:
  - Loading states: `src/components/Shared/states/LoadingSkeleton.tsx`
  - Error states: `src/components/Shared/states/ErrorState.tsx`
  - Layout shells: `src/components/Shared/AppShell.tsx`
  - Headers: `src/components/Shared/PageHeader.tsx`
  - Filters: `src/components/Shared/FilterBar.tsx`

## Checklist (Before New UI)
- Did you check `src/components/Shared/*` for a reusable component?
- Are you using `src/components/ui/*` primitives where possible?
- Is the global style footprint minimal and documented?
