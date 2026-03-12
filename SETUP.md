# ⚠️ IMPORTANT — Read before starting

## The ONLY correct way to install this project:

### Step 1 — Delete your old project completely
```
# Windows: delete the folder in File Explorer
# OR in terminal:
rmdir /s /q viennavisitas
```

### Step 2 — Create a fresh folder and extract the zip into it
```
mkdir viennavisitas
cd viennavisitas
# Extract zip contents here
```

### Step 3 — Confirm you have NO old files
The folder should contain ONLY these top-level items:
- app/
- components/
- data/
- lib/
- public/
- jsconfig.json
- next.config.js
- package.json
- postcss.config.js
- tailwind.config.js

The components/layout/ folder must contain ONLY:
- Header.jsx
- Footer.jsx

❌ If you see MainLayout.jsx in components/layout/ — DELETE IT. It breaks routing.

### Step 4 — Install and run
```
npm install
cp .env.local.example .env.local
npm run dev
```

### Step 5 — Clear Next.js cache if you had a previous install
```
rmdir /s /q .next
npm run dev
```
