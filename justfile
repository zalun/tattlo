# Lint, format check and type check
check:
    pnpm biome check .
    pnpm tsc --noEmit

# Unit tests, then a build to prove every export entry compiles
test:
    pnpm vitest run
    pnpm tsdown
