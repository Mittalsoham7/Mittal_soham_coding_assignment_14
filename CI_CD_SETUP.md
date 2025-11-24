# CI/CD Pipeline Setup with Husky

This project is configured with automated code quality checks using Husky git hooks and GitHub Actions CI/CD pipeline.

## 🎯 Overview

The CI/CD pipeline ensures code quality by running automated checks at two levels:

1. **Local Git Hooks** (via Husky) - Run before commits and pushes
2. **GitHub Actions** - Run on pull requests and pushes to main branches

## 🔧 Local Git Hooks (Husky)

### Pre-commit Hook

Runs automatically before each commit:

- ✅ **Lint-staged**: Runs ESLint and Prettier on staged files
- ✅ **Auto-fixes**: Automatically fixes linting and formatting issues when possible
- ❌ **Blocks commit**: If issues cannot be auto-fixed

### Pre-push Hook

Runs automatically before each push:

- ✅ **Type checking**: Validates TypeScript types
- ✅ **Linting**: Checks all files for linting errors (no auto-fix)
- ✅ **Tests**: Runs all unit tests
- ❌ **Blocks push**: If any check fails

## 🚀 GitHub Actions CI/CD Pipeline

The pipeline runs on:

- Pull requests to `main`, `master`, or `develop` branches
- Direct pushes to `main`, `master`, or `develop` branches

### Pipeline Jobs

#### 1. Code Quality Checks

- **Format Check**: Verifies code formatting with Prettier
- **Linting**: Checks code quality with ESLint (max 0 warnings)
- **Type Check**: Validates TypeScript types
- **Tests**: Runs all tests with coverage
- **Build**: Ensures the project builds successfully
- **Artifacts**: Uploads build artifacts and coverage reports

#### 2. Status Check

- Verifies all quality checks passed
- Fails the pipeline if any check fails

## 📝 Available NPM Scripts

```bash
# Development
npm start              # Start development server
npm run build          # Build for production

# Testing
npm test               # Run tests in watch mode
npm run test:ci        # Run tests once with coverage (for CI)

# Linting
npm run lint           # Check for linting errors
npm run lint:check     # Check for linting errors (CI mode, max 0 warnings)
npm run lint:fix       # Fix linting errors automatically

# Formatting
npm run format         # Format all files with Prettier
npm run format:check   # Check formatting without fixing (for CI)

# Type Checking
npm run type-check     # Run TypeScript compiler check

# Husky
npm run prepare        # Install Husky git hooks
```

## 🛠️ Setup Instructions

### Initial Setup

The hooks are automatically installed when you run:

```bash
npm install
```

### Manual Hook Installation

If hooks aren't working, reinstall them:

```bash
npm run prepare
```

### Verify Hook Installation

Check if hooks are executable:

```bash
ls -la .husky/
```

## ⚠️ Bypassing Hooks (Not Recommended)

In rare cases, you may need to bypass hooks:

```bash
# Skip pre-commit hook
git commit --no-verify -m "message"

# Skip pre-push hook
git push --no-verify
```

**Warning**: Bypassing hooks may cause CI/CD pipeline failures!

## 🔍 Troubleshooting

### Hooks Not Running

1. Ensure Husky is installed: `npm run prepare`
2. Check hook permissions: `chmod +x .husky/pre-commit .husky/pre-push`
3. Verify Git version: `git --version` (requires Git 2.9+)

### CI/CD Pipeline Failing

1. Run checks locally before pushing:
   ```bash
   npm run format:check
   npm run lint:check
   npm run type-check
   npm run test:ci
   npm run build
   ```
2. Fix any errors reported
3. Commit and push again

### Tests Failing in CI but Passing Locally

- Ensure you're using the same Node.js version (18.x)
- Check for environment-specific issues
- Review test coverage reports

## 📊 Code Coverage

Test coverage reports are:

- Generated locally in `coverage/` directory
- Uploaded to Codecov in CI/CD pipeline
- Available in GitHub Actions artifacts

## 🎨 Code Quality Standards

The pipeline enforces:

- **ESLint**: Code quality and best practices
- **Prettier**: Consistent code formatting
- **TypeScript**: Type safety
- **Tests**: Minimum test coverage
- **Build**: Successful production build

## 🔒 Branch Protection (Recommended)

To enforce CI/CD checks, configure branch protection rules in GitHub:

1. Go to Repository Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Select: "Code Quality Checks" and "All Checks Passed"
   - ✅ Require pull request reviews

## 📚 Additional Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)

## ✅ Success Indicators

Your CI/CD pipeline is working correctly when:

- ✅ Pre-commit hook formats and lints staged files
- ✅ Pre-push hook runs type checks and tests
- ✅ GitHub Actions pipeline shows green checkmarks
- ✅ All quality checks pass before merging PRs
- ✅ Code quality remains consistent across the team
