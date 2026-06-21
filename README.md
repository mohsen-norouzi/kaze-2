# 1. Create project
bunx create-vite@latest finance-coach --template react
cd finance-coach

# 2. Install dependencies
bun install

# 3. Add Tailwind + Biome
bun add -d tailwindcss @tailwindcss/vite @biomejs/biome
bunx biome init

# In vite.config.js, add the Tailwind plugin:
import tailwindcss from '@tailwindcss/vite'
export default { plugins: [react(), tailwindcss()] }

# In index.css (or main CSS file), replace contents with:
@import "tailwindcss";

# 4. Remove ESLint
bun remove eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh globals
rm eslint.config.js

# 5. Update package.json scripts
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "format": "biome format --write .",
  "lint": "biome lint --write .",
  "check": "biome check --write ."
}

# 6. Add Three.js + React Three Fiber + Drei
bun add three @react-three/fiber @react-three/drei

# 7. Add GSAP
bun add gsap

# 8. Add Leva (debug controls UI)
bun add leva

# 9. Add r3f-perf (performance monitor)
bun add r3f-perf

# Drop <Perf /> inside your <Canvas> to activate:
import { Perf } from 'r3f-perf'
# <Canvas><Perf position="top-left" />{...}</Canvas>
# Remove before shipping — dev only