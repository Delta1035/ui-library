[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# pnpm

```sh
# 在 cli 包添加 core 包为依赖：
# --filter 指定在哪个包下执行 add 命令
# 加上 --workspace 就是从本地查找
```

## Commitizen

一个cli，交互式生成commit message,既然是cli 自然需要全局安装

```sh
npm i commitizen -g
cz
```

## cz-customizable（不支持esm配置文件，移除了）

cz-customizable是用来定制化Commitizen的工具，可以制定一份项目特有的提交格式，并在提交时生成符合规范的提交信息模板。

- 安装依赖

```sh
npm i cz-customizable -D

```

- 配置文件.cz-config.js

```javascript
module.exports = {
  allowBreakingChanges: ['feat', 'fix'],
  allowCustomScopes: true,
  scopes: [],
  types: [
    {
      name: '功能：新增功能，迭代项目需求 (feat)',
      value: 'feat'
    },
    {
      name: '修复：修复缺陷，修复上一版本存在问题 (fix)',
      value: 'fix'
    },
    {
      name: '文档：更新文档，仅改动文档不改动代码 (docs)',
      value: 'docs'
    },
    {
      name: '样式：变动格式，不影响代码逻辑 (style)',
      value: 'style'
    },
    {
      name: '重构：重构代码，非新增功能也非修改缺陷 (refactor)',
      value: 'refactor'
    },
    {
      name: '性能：优化性能，提高代码执行性能 (perf)',
      value: 'perf'
    },
    {
      name: '测试：新增测试，追加测试用例验证代码 (test)',
      value: 'test'
    },
    {
      name: '构建：更新构建，改动构建工具或外部依赖 (build)',
      value: 'build'
    },
    {
      name: '脚本：更新脚本，改动CI或执行脚本配置 (ci)',
      value: 'ci'
    },
    {
      name: '事务：变动事务，改动其他不影响代码的事务 (chore)',
      value: 'chore'
    },
    {
      name: '回滚：回滚版本，撤销某次代码提交 (revert)',
      value: 'revert'
    },
    {
      name: '合并：合并分支，合并分支代码到其他分支 (merge)',
      value: 'merge'
    },
    {
      name: '同步：同步分支，同步分支代码到其他分支 (sync)',
      value: 'sync'
    },
    {
      name: '改进：改进功能，升级当前功能模块 (impr)',
      value: 'impr'
    }
  ]
}
```

- 配置文件package.json

```json
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
  }
```

## eslint

- 安装

```sh
pnpm init @eslint/config@latest
# 交互式帮你生成配置文件
pnpm i eslint globals @eslint/js typescript-eslint -D -w
# 再workspace中直接安装会失败，所以自己安装
```

- 检查指定文件

```sh
npx eslint yourfile.js
```

- 配置文件

```javascript
export default [
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      'prefer-const': 'warn',
      'no-constant-binary-expression': 'error'
    }
  }
]
```

## prettier
