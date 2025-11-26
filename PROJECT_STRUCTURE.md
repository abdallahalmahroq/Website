# Project Structure Overview

## 📁 Directory Tree

```
Website/
│
├── 📄 index.html              # Main HTML file (loads components dynamically)
├── 📄 package.json            # Node.js dependencies and scripts (optional)
├── 📄 build.js                # CSS build script (optional)
├── 📄 .gitignore             # Git ignore rules
├── 📄 PROJECT_STRUCTURE.md   # This file
│
├── 📁 src/                    # Source files (modular structure)
│   │
│   ├── 📁 html/               # HTML components
│   │   └── 📁 components/    # Component HTML files
│   │       ├── laser-grid.html
│   │       ├── header.html
│   │       ├── welcome-section.html
│   │       ├── about-section.html
│   │       ├── home-page.html
│   │       ├── community-page.html
│   │       ├── events-page.html
│   │       ├── announcements-page.html
│   │       ├── contact-page.html
│   │       └── footer.html
│   │
│   ├── 📁 css/                # Stylesheets
│   │   ├── variables.css      # 🎨 Design system (colors, spacing, etc.)
│   │   ├── base.css           # 🔧 Base styles and utilities
│   │   ├── main.css           # 📦 Main stylesheet (imports all)
│   │   │
│   │   └── 📁 components/    # Component-specific styles
│   │       ├── header.css
│   │       ├── footer.css
│   │       ├── welcome-section.css
│   │       ├── about-section.css
│   │       ├── offerings.css
│   │       ├── pages.css
│   │       ├── buttons.css
│   │       └── laser-grid.css
│   │
│   └── 📁 js/                 # JavaScript modules
│       ├── main.js            # 🚀 Application entry point
│       │
│       └── 📁 modules/        # Feature modules
│           ├── navigation.js
│           ├── offerings.js
│           ├── laserGrid.js
│           └── laserAnimation.js
│
├── 📁 images/                 # Image assets
│   └── logo.png
│
└── 📁 dist/                   # Build output (generated)
    └── style.css              # Combined CSS (after build)
```

## 🔄 Data Flow

```
Runtime (No Build Required):
    index.html
        ↓
        ├─→ src/js/main.js
        │       ↓
        │       ├─→ modules/componentLoader.js (loads HTML components)
        │       ├─→ modules/navigation.js
        │       ├─→ modules/offerings.js
        │       ├─→ modules/laserGrid.js
        │       └─→ modules/laserAnimation.js
        │
        └─→ src/css/main.css
                ↓
                ├─→ variables.css
                ├─→ base.css
                └─→ components/*.css
```

## 👥 Team Collaboration Map

### Component Ownership (No Conflicts!)

Each developer can work on different components simultaneously:

| Component | HTML File | CSS File | JS Module | Developer |
|-----------|-----------|----------|-----------|-----------|
| Header | `header.html` | `header.css` | `navigation.js` | Assign |
| Footer | `footer.html` | `footer.css` | - | Assign |
| Welcome | `welcome-section.html` | `welcome-section.css` | `laserAnimation.js` | Assign |
| About | `about-section.html` | `about-section.css` | - | Assign |
| Offerings | `about-section.html` | `offerings.css` | `offerings.js` | Assign |
| Events Page | `events-page.html` | `pages.css` | - | Assign |
| Contact Page | `contact-page.html` | `pages.css` | - | Assign |
| Announcements | `announcements-page.html` | `pages.css` | - | Assign |
| Community | `community-page.html` | `pages.css` | - | Assign |

### Shared Files (Coordinate Changes)

⚠️ **These files require team coordination:**

- `src/css/variables.css` - Design system (discuss before changing)
- `src/css/base.css` - Base styles (discuss before changing)
- `src/js/main.js` - Only add imports here
- `index.html` - Only modify structure if adding new page

## 🎯 Component Isolation

Each component is **self-contained**:

```
Component: Header
├── HTML: src/html/components/header.html
├── Styles: src/css/components/header.css
└── Logic: src/js/modules/navigation.js (if needed)
```

**Benefits:**
- ✅ No file conflicts
- ✅ Easy to find code
- ✅ Simple to test
- ✅ Easy to maintain
- ✅ Clear ownership

## 📝 File Naming Conventions

### HTML Files
- **Format:** `kebab-case.html`
- **Examples:** `welcome-section.html`, `about-section.html`

### CSS Files
- **Format:** `kebab-case.css`
- **Examples:** `welcome-section.css`, `about-section.css`

### JavaScript Files
- **Format:** `camelCase.js` for modules
- **Examples:** `navigation.js`, `laserAnimation.js`

### Classes
- **Format:** `kebab-case`
- **Examples:** `.welcome-section`, `.offering-card`

## 🔧 Development Process

### No Build Required!
Components are loaded dynamically at runtime using JavaScript.

### Start Development Server
```bash
# Using npm (optional)
npm run dev

# Or use any static server:
# Python: python -m http.server 8080
# PHP: php -S localhost:8080
```

**Important:** You need a server (not file://) because:
- ES6 modules require HTTP/HTTPS
- Component loader uses fetch API

### Optional: CSS Build
```bash
npm run build
```
- Only combines CSS into `dist/style.css` (optional)
- HTML components load dynamically, no build needed

## 📊 File Overview

| Category | Files | Purpose |
|----------|-------|---------|
| HTML Components | 10 files | Modular HTML structure |
| CSS Components | 8 files | Modular styling |
| JS Modules | 4 files | Feature logic |
| Build Scripts | 1 file (optional) | CSS build only (optional) |
| Config | 2 files | Project setup |

## 🚀 Quick Reference

**Start Development:**
```bash
npm install
npm run dev
```

**Work on Component:**
1. Edit `src/html/components/[component].html`
2. Edit `src/css/components/[component].css`
3. Edit `src/js/modules/[module].js` (if needed)
4. Refresh browser (components load automatically)

**Add New Component:**
1. Create HTML: `src/html/components/my-component.html`
2. Create CSS: `src/css/components/my-component.css`
3. Import CSS in `src/css/main.css`
4. Create JS module if needed: `src/js/modules/myComponent.js`
5. Import JS in `src/js/main.js`
6. Add container div in `index.html`: `<div id="my-component-container"></div>`
7. Add loader call in `src/js/main.js`: `this.componentLoader.insertComponent('my-component-container', 'my-component')`

**Optional: Build CSS for Production:**
```bash
npm run build
```
(HTML components load dynamically, no build needed)

## 💡 Workflow Tips

1. **Edit components directly** in `src/html/components/`
2. **No build step needed** - components load automatically
3. **One component per developer** to avoid conflicts
4. **Test locally** before committing (use a server)
5. **Use CSS variables** from `variables.css`
6. **Refresh browser** to see HTML changes

---

**Last Updated:** 2024  
**Maintained By:** AiMinds Development Team
