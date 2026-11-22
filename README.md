# 知行空间 · 独立静态公开展示站（开发阶段）

面向未来访客的个人作品与成长档案站，采用暖纸社论风格（Warm Parchment / Warm Obsidian 明暗模式），纯静态输出（`dist/`），零平台锁定、零私密数据库、可无缝迁移至任意个人域名与静态托管或自有服务器。

## 开源底座与本地字体

- 工程骨架基于 MIT 开源 Astro 模板 [`devaradise/devolio`](https://github.com/devaradise/devolio)（保留原始 `LICENCE`）精简改造。
- 本地打包开源字体：`@fontsource/newsreader`、`@fontsource/inter`、`@fontsource/jetbrains-mono`（纯离线可用，无外部字体 CDN 依赖）。
- 交互与动效采用原生 Web 能力贯通全站：Astro `<ClientRouter />` 页面过渡、顶部阅读进度细线、滚动渐现节奏、全量 13 项项目手风琴台账（支持 `/` 快捷检索）以及详情页原生 `<dialog>` 看图放大器。

## 本地运行与构建

```bash
npm install
npm run dev      # 本地开发预览
npm run build    # astro check 类型校验 + 生产构建到 dist/
npm run preview  # 本地预览生产构建产物
```

## 后续维护：如何新增一个项目

只需在 `src/content/projects/` 下新增一个 `.md` 文件（参照现有 13 篇 frontmatter 字段），重新运行 `npm run build` 即可自动生成台账条目与 `/projects/<文件名>/` 详情页。

## 后续部署到自有域名（阿里云 ESA Pages）

- 正式域名：`https://panyuanhao.com`（已于 `astro.config.mjs` 预设配置，ICP 备案完成后绑定上线）
- GitHub 仓库：`https://github.com/p3523190446-create/panyuanhao-site`（默认分支 `main`）
- 接入 **阿里云 ESA Pages** 时的构建参数：
  - 关联仓库与分支：`p3523190446-create/panyuanhao-site` / `main`
  - 包管理器：`npm`（基于 `package-lock.json`）
  - 构建命令：`npm run build`
  - 输出目录：`dist`

完成后，每次向 `main` 分支推送代码即可自动触发构建并同步更新到 `https://panyuanhao.com`。
