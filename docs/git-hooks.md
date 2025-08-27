# Git Hooks 配置说明

本项目已配置 Husky 来自动运行 git hooks，确保代码质量和提交规范。

## 🚀 功能特性

### Pre-commit Hook (提交前)

- 自动运行 `lint-staged` 对暂存文件进行处理
- 对 `.js,.jsx,.ts,.tsx` 文件运行 ESLint 修复和 Prettier 格式化
- 对 `.json,.css,.scss,.md` 文件运行 Prettier 格式化

### Commit-msg Hook (提交信息)

- 使用 `commitlint` 检查提交信息格式
- 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范

## 📝 提交信息规范

支持的提交类型：

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档变更
- `style`: 代码格式(不影响代码运行的变动)
- `refactor`: 重构(既不是增加feature，也不是修复bug)
- `perf`: 性能优化
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回退
- `build`: 打包
- `ci`: CI/CD

### 提交信息格式示例：

```bash
feat: 添加新的日历组件
fix: 修复日期选择器的样式问题
docs: 更新README文档
style: 统一代码缩进格式
refactor: 重构组件目录结构
```

## 🛠️ 可用脚本

```bash
# 手动运行代码检查
pnpm lint

# 手动修复代码问题
pnpm lint:fix

# 手动格式化所有文件
pnpm format

# 测试 lint-staged (仅对暂存文件)
npx lint-staged
```

## ⚙️ 配置文件

- `.husky/pre-commit`: pre-commit hook 配置
- `.husky/commit-msg`: commit-msg hook 配置
- `.commitlintrc.js`: commitlint 配置
- `package.json` 中的 `lint-staged` 配置

## 🔧 如何跳过 hooks (不推荐)

如果在特殊情况下需要跳过 hooks：

```bash
# 跳过 pre-commit hook
git commit --no-verify -m "提交信息"

# 跳过 commit-msg hook
git commit --no-verify -m "提交信息"
```

**注意**: 除非在紧急情况下，否则不建议跳过 hooks。
