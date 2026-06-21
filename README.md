# 1. Create project
bunx create-vite@latest finance-coach --template react
cd finance-coach

# 2. Install dependencies
bun install

# 3. Add Tailwind + Biome
bun add -d tailwindcss @tailwindcss/vite @biomejs/biome
bunx biome init

# 4. Remove ESLint
bun remove eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh globals
rm eslint.config.js

# 5. Update package.json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "format": "biome format --write .",
  "lint": "biome lint --write .",
  "check": "biome check --write ."
},
