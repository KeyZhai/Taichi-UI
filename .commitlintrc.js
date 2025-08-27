export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档变更
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不是增加feature，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 打包
        'ci', // CI/CD
      ],
    ],
    'subject-max-length': [2, 'always', 100],
    'subject-case': [0], // 禁用主题大小写检查
  },
}
