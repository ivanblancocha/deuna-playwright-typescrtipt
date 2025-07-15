# deuna-playwright-typescrtipt

Basic Playwright project for skills validations

# Pre-requisites
NodeJs
Typescript
Playwright

# Install
Execute on the project root 
```bash
npm install
```

Install playwright browsers
```
npx playwright install
```

# Design Pattern
POM (Page Object Model)

# Folder structure
- /tests -> Test files
- /pages -> Web page representations and web elements repository
- /utils -> Necessary classes for doing no-related test case actions 
- /data -> Data files for test cases

# Test Run
Run headed mode
```
npm run test:chrome:headed
```

Run headless mode
```
npm run test:chrome:headless
```

