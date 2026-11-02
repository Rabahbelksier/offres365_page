---
name: Replit npm firewall behavior
description: Registry behavior observed when resolving this project's optional Tailwind platform packages.
---

**Rule:** A 404 for the optional `@tailwindcss/oxide-wasm32-wasi` artifact during `npm update --package-lock-only` does not prove the Linux dependency install will fail.

**Why:** The lock-only update attempted to fetch a non-Linux optional artifact through Replit's package firewall, while a normal `npm ci` succeeded after the blocked pinned dependency was updated.

**How to apply:** Avoid repeating the same lock-only update with flag variations. Check the exact blocked package, use a compatible version within its declared range when appropriate, then test with the normal install command. Never bypass the package firewall.
