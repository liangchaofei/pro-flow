<p align="center">
  <img width="160" src="https://gw.alipayobjects.com/mdn/rms_7d1485/afts/img/A*XDYxSJXBjjwAAAAAAAAAAAAAARQnAQ">
</p>
<h1 align="center">Kitchen Flow Editor</h1>

<div align="center">

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![Test CI status][test-ci]][test-ci-url] [![Deploy CI][release-ci]][release-ci-url] [![Coverage][coverage]][codecov-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/)

<!-- gitpod url -->

[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod
[gitpod-url]: https://gitpod.io/#https://github.com/ant-design/kitchen-flow-editor

<!-- umi url -->

[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg

<!-- npm url -->

[npm-image]: http://img.shields.io/npm/v/kitchen-flow-editor.svg?style=flat-square&color=deepgreen&label=latest
[npm-url]: http://npmjs.org/package/kitchen-flow-editor
[npm-size]: https://img.shields.io/bundlephobia/minzip/kitchen-flow-editor?color=deepgreen&label=gizpped%20size&style=flat-square
[npm-size-url]: https://packagephobia.com/result?p=kitchen-flow-editor

<!-- coverage -->

[coverage]: https://codecov.io/gh/@ant-design/kitchen-flow-editor/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/@ant-design/kitchen-flow-editor/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/@ant-design/kitchen-flow-editor/workflows/Test%20CI/badge.svg
[release-ci]: https://github.com/@ant-design/kitchen-flow-editor/workflows/Release%20CI/badge.svg
[test-ci-url]: https://github.com/@ant-design/kitchen-flow-editor/actions?query=workflow%3ATest%20CI
[release-ci-url]: https://github.com/@ant-design/kitchen-flow-editor/actions?query=workflow%3ARelease%20CI
[download-image]: https://img.shields.io/npm/dm/kitchen-flow-editor.svg?style=flat-square
[download-url]: https://npmjs.org/package/kitchen-flow-editor

## 简介

这是一个开发 npm 项目的模板，工程框架选型如下：

- 构建： father4
- 文档： dumi2
- CI: Github Action
- CD:
  - 文档发布: 使用 vercel 自动化触发文档站构建;
  - npm 发布: 使用 `semantic-release` 实现 npm 包的自动化发布;

## 快速上手

### 安装

推荐使用 `pnpm` 安装

```bash
pnpm i kitchen-flow-editor -S
```

### 使用

基于该仓库模板可以快速创建一个 npm 包的工程化脚手架。

## 使用介绍

### Step1. 使用该模板创建一个新的仓库

点击右上角 `use this template` -> `create a new reposity` 按钮，创建一个新的仓库。

### Step2. 初始化项目信息

使用编辑器全局替换 `kitchen-flow-editor` 为你的包名（例如 `antd-style`），执行 `pnpm i` 安装依赖。

### Step3. 开始开发

## 迭代记录

2022.12.17 - 基于蚂蚁研发技术栈配置完成最新的 npm 研发脚手架

详情：[CHANGELOG](./CHANGELOG.md)

## License

[MIT](./LICENSE)
