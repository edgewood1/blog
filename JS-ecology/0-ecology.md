🔧 Project Configuration Categories

(Outside of application logic)

⸻

✅ 1. Checkers (Code Quality & Style Enforcement)

These tools check your code for correctness, style, or consistency. They don’t change your code (unless auto-fix is enabled), but enforce rules.

- ESLint: Lints JavaScript/TypeScript for bugs and code quality issues (.eslintrc)
- Prettier: Formats code for consistent style (.prettierrc)
- Stylelint: Lints CSS or styled components (.stylelintrc)

➡️ Think of these as “rule enforcers” — they check that your code meets team or industry standards.

⸻

⚙️ 2. Compilers & Transpilers

These convert your source code into a different form — for example, converting modern JavaScript or TypeScript into browser-compatible code.


- Babel: 	Transpiles modern JS (ES6+) to ES5 (.babelrc)
- TypeScript: 	Compiles TypeScript into JavaScript	(tsconfig.json	)

	•	Transpilers: Convert between versions of the same language (e.g. ES6 → ES5).
	•	Compilers: Convert from one language to another (e.g. TypeScript → JavaScript).

➡️ Category name: You can keep this as “Compilers & Transpilers”, since in JS projects, the terms often overlap.

⸻

📦 3. Dependency & Package Config

These files define your project’s metadata, dependencies, and available scripts.


package.json: Lists packages, scripts, and project info
package-lock.json: Locks down versions for repeatable installs

➡️ These belong to a “Package Management” category.

⸻

📦 4. Bundlers & Build Tools

These tools bundle and optimize your application source code and assets into files that can run in the browser.


Webpack	Defines how modules are bundled / webpack.config.js	
Vite	Lightweight alternative to Webpack / vite.config.js	
Next.js	App-specific build and runtime behavior / next.config.js	
Rollup	Used for bundling libraries (often ESM-based) / rollup.config.js	

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

run-dev-server	(custom script)	Starts a dev server (e.g., Webpack, Vite)
vite.config.js	Vite	(also under bundlers — overlaps)
.env, .env.local	Env variables	Define runtime values like API keys, etc.

