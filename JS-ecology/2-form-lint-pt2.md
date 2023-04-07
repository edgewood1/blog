**node**

nvm use 16

**prettier**

.prettierrc

```js
{}
```

install prettier extension

open settings> format on save

require config prettier > prettierrc has to be in project

scripts

"Format": prettier --write |"src/**/**.{js, jsx}\""

complete intro to command line in linux

npm i -D prettier

**eslint**

npm install -D eslint@8.8.0 eslint-config-prettier@8.3.0

```bash
npm install eslint-plugin-react -D

```

.eslintrc.json

```
{
  "extends": [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended"
  ],
  "plugins": [
 
  ],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```



script

```
"lint": "eslint \"src/**/*.{js, jsx}\" --quiet"
```

**Git-ignore**

.gitignore

```
node_modules
.parcel-cache/
dist/
.env
.DS_Store
coverage/
.vscode/
```

**parcel**

```
npm install -D parcel@2.2.1
```

```
"scripts" {
  "dev": "parcel src/index.html"
}
```

