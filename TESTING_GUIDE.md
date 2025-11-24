# Testing the CI/CD Pipeline

This guide helps you verify that the Husky git hooks and CI/CD pipeline are working correctly.

## ✅ Quick Verification Checklist

### 1. Verify Husky Installation
```bash
# Check if hooks are installed
ls -la .husky/

# You should see:
# - pre-commit (executable)
# - pre-push (executable)
```

### 2. Test Pre-commit Hook

The pre-commit hook runs lint-staged, which automatically fixes linting and formatting issues on staged files.

**Test with intentional error:**

```bash
# Create a test file with formatting issues
echo "const x=1;const y=2;" > test-file.js

# Stage the file
git add test-file.js

# Try to commit (hook will auto-fix formatting)
git commit -m "test commit"

# The hook should:
# ✅ Auto-fix formatting
# ✅ Allow commit to proceed

# Clean up
git reset HEAD~1
rm test-file.js
```

### 3. Test Pre-push Hook

The pre-push hook runs type checking, linting, and tests before allowing a push.

**Test with passing code:**

```bash
# Make a small change
echo "// test comment" >> src/App.tsx

# Commit the change
git add src/App.tsx
git commit -m "test: add comment"

# Try to push (all checks should pass)
git push

# The hook should:
# ✅ Run type checking
# ✅ Run linting
# ✅ Run tests
# ✅ Allow push to proceed

# Clean up
git reset HEAD~1
git checkout src/App.tsx
```

**Test with failing code:**

```bash
# Create a file with TypeScript error
cat > src/test-error.ts << 'EOF'
const x: string = 123; // Type error
export default x;
EOF

# Commit the file
git add src/test-error.ts
git commit -m "test: intentional error"

# Try to push (should fail)
git push

# The hook should:
# ❌ Fail on type checking
# ❌ Block the push

# Clean up
git reset HEAD~1
rm src/test-error.ts
```

### 4. Test Individual Scripts

Run each script manually to ensure they work:

```bash
# Format check
npm run format:check
# Expected: ✅ All files formatted correctly

# Linting check
npm run lint:check
# Expected: ✅ No linting errors

# Type check
npm run type-check
# Expected: ✅ No type errors

# Tests
npm run test:ci
# Expected: ✅ All tests pass

# Build
npm run build
# Expected: ✅ Build succeeds
```

## 🚀 Testing GitHub Actions CI/CD

### 1. Push to GitHub

```bash
# Ensure you're on a branch
git checkout -b test-ci-pipeline

# Make a small change
echo "# CI/CD Test" >> README.md

# Commit and push
git add README.md
git commit -m "test: CI/CD pipeline"
git push origin test-ci-pipeline
```

### 2. Create Pull Request

1. Go to your GitHub repository
2. Create a Pull Request from `test-ci-pipeline` to `main`
3. Watch the CI/CD pipeline run

### 3. Verify Pipeline Steps

The pipeline should show:
- ✅ **Checkout code**
- ✅ **Setup Node.js**
- ✅ **Install dependencies**
- ✅ **Run Prettier format check**
- ✅ **Run ESLint**
- ✅ **Run TypeScript type check**
- ✅ **Run tests**
- ✅ **Build project**
- ✅ **All Checks Passed**

### 4. Test Pipeline Failure

**Create a PR with intentional errors:**

```bash
# Create a new branch
git checkout -b test-ci-failure

# Add a file with linting error
cat > src/bad-code.ts << 'EOF'
const unused_variable = 123;
export const test = () => {
  console.log("test")
}
EOF

# Commit and push
git add src/bad-code.ts
git commit -m "test: intentional linting error" --no-verify
git push origin test-ci-failure --no-verify
```

Create a PR and verify:
- ❌ **ESLint check fails**
- ❌ **Pipeline fails**
- ❌ **PR cannot be merged** (if branch protection is enabled)

## 🔧 Troubleshooting

### Hooks Not Running

**Problem:** Git hooks don't execute

**Solution:**
```bash
# Reinstall hooks
npm run prepare

# Make hooks executable
chmod +x .husky/pre-commit .husky/pre-push

# Verify Git version (requires 2.9+)
git --version
```

### Pre-commit Hook Fails

**Problem:** Pre-commit hook fails even with valid code

**Solution:**
```bash
# Check what's failing
npm run lint:check
npm run format:check

# Fix issues
npm run lint:fix
npm run format

# Try commit again
git commit -m "your message"
```

### Pre-push Hook Fails

**Problem:** Pre-push hook fails

**Solution:**
```bash
# Run checks individually to identify issue
npm run type-check
npm run lint:check
npm run test:ci

# Fix the failing check
# Then try push again
git push
```

### CI/CD Pipeline Fails

**Problem:** GitHub Actions pipeline fails

**Solution:**
```bash
# Run all checks locally first
npm run format:check
npm run lint:check
npm run type-check
npm run test:ci
npm run build

# Fix any failures
# Commit and push again
```

## 🎯 Expected Behavior

### ✅ Successful Workflow

1. **Developer writes code**
2. **Stages files:** `git add .`
3. **Commits:** `git commit -m "message"`
   - Pre-commit hook runs
   - Auto-fixes formatting/linting
   - Commit succeeds
4. **Pushes:** `git push`
   - Pre-push hook runs
   - Type check passes
   - Linting passes
   - Tests pass
   - Push succeeds
5. **Creates PR**
   - CI/CD pipeline runs
   - All checks pass
   - PR can be merged

### ❌ Failed Workflow

1. **Developer writes code with errors**
2. **Stages files:** `git add .`
3. **Commits:** `git commit -m "message"`
   - Pre-commit hook runs
   - Cannot auto-fix errors
   - **Commit blocked**
4. **Developer fixes errors**
5. **Commits again:** Succeeds
6. **Pushes:** `git push`
   - Pre-push hook runs
   - Tests fail
   - **Push blocked**
7. **Developer fixes tests**
8. **Pushes again:** Succeeds
9. **Creates PR**
   - CI/CD pipeline runs
   - All checks pass
   - PR can be merged

## 📊 Success Metrics

Your CI/CD setup is working correctly when:

- ✅ Pre-commit hook auto-fixes formatting issues
- ✅ Pre-commit hook blocks commits with unfixable errors
- ✅ Pre-push hook blocks pushes with type errors
- ✅ Pre-push hook blocks pushes with failing tests
- ✅ GitHub Actions runs on every PR
- ✅ GitHub Actions fails when code quality is poor
- ✅ GitHub Actions passes when code quality is good
- ✅ Team maintains consistent code quality

## 🔄 Bypassing Hooks (Emergency Only)

**⚠️ Warning:** Only use in emergencies!

```bash
# Skip pre-commit
git commit --no-verify -m "emergency fix"

# Skip pre-push
git push --no-verify
```

**Note:** Bypassing hooks may cause CI/CD pipeline failures!

## 📚 Additional Resources

- See `CI_CD_SETUP.md` for detailed configuration
- See `README.md` for project documentation
- Check `.husky/` directory for hook scripts
- Check `.github/workflows/ci.yml` for pipeline configuration
