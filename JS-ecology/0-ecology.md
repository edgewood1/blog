🔧 Project Configuration Categories

(Outside of application logic)

⸻

✅ 1. Checkers (Code Quality & Style Enforcement)

These tools check your code for correctness, style, or consistency. They don’t change your code (unless auto-fix is enabled), but enforce rules.

File	Tool	Purpose
.eslintrc	ESLint	Lints JavaScript/TypeScript for bugs and code quality issues
.prettierrc	Prettier	Formats code for consistent style
.stylelintrc (optional)	Stylelint	Lints CSS or styled components

➡️ Think of these as “rule enforcers” — they check that your code meets team or industry standards.

⸻

⚙️ 2. Compilers & Transpilers

These convert your source code into a different form — for example, converting modern JavaScript or TypeScript into browser-compatible code.

File	Tool	Purpose
.babelrc	Babel	Transpiles modern JS (ES6+) to ES5
tsconfig.json	TypeScript	Compiles TypeScript into JavaScript

	•	Transpilers: Convert between versions of the same language (e.g. ES6 → ES5).
	•	Compilers: Convert from one language to another (e.g. TypeScript → JavaScript).

➡️ Category name: You can keep this as “Compilers & Transpilers”, since in JS projects, the terms often overlap.

⸻

📦 3. Dependency & Package Config

These files define your project’s metadata, dependencies, and available scripts.

File	Tool	Purpose
package.json	npm/yarn	Lists packages, scripts, and project info
package-lock.json / yarn.lock	npm/yarn	Locks down versions for repeatable installs

➡️ These belong to a “Package Management” category.

⸻

📦 4. Bundlers & Build Tools

These tools bundle and optimize your application source code and assets into files that can run in the browser.

File	Tool	Purpose
webpack.config.js	Webpack	Defines how modules are bundled
vite.config.js	Vite	Lightweight alternative to Webpack
next.config.js	Next.js	App-specific build and runtime behavior
rollup.config.js	Rollup	Used for bundling libraries (often ESM-based)

➡️ Category name: “Bundlers & Build Tools”
These tools control the build pipeline and how modules get resolved, transformed, and shipped.

⸻

🖼️ 5. HTML Entry Point / Static Template

These define the root HTML used to load the JavaScript app. Usually only relevant for projects not using server-side rendering.

File	Tool	Purpose
index.html	Vite/Webpack	HTML template for injecting the app bundle

➡️ Category name: “HTML Shell / Static Entry Point”

⸻

🌐 6. Dev Server / Runtime Environment Config

These configure local development servers, environment variables, and runtime behavior (not app logic itself).

File	Tool	Purpose
run-dev-server	(custom script)	Starts a dev server (e.g., Webpack, Vite)
vite.config.js	Vite	(also under bundlers — overlaps)
.env, .env.local	Env variables	Define runtime values like API keys, etc.

➡️ Category name: “Development Environment / Runtime Config”

⸻

✅ Summary of Categories

Category	What it includes
Checkers	Linting, formatting, code style rules
Compilers & Transpilers	Babel, TypeScript — turning one form of code into another
Package Management	package.json, lock files — project dependencies
Bundlers & Build Tools	Webpack, Vite, Rollup configs — for production builds
HTML Shell / Entry Point	Base HTML file that bootstraps the app
Dev Environment / Runtime	Dev server configs, env variables, runtime settings

