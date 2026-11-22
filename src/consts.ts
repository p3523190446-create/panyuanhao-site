export const SITE_TITLE = '知行空间 · 潘元昊';
export const SITE_TAGLINE = '把想法，落在真实现场';
export const SITE_DESCRIPTION =
  '潘元昊（广东技术师范大学 2026 级智能科学与技术）的个人项目档案与成长轨迹，聚焦嵌入式硬件、边缘 AI 与工程交付闭环。';

export const AUTHOR = {
  name: '潘元昊',
  brand: '知行空间',
  school: '广东技术师范大学 · 2026 级智能科学与技术',
  location: '大湾区（广州 / 佛山）',
  direction: '智能硬件全栈与前线交付（FDE）方向',
  githubUrl: 'https://github.com/p3523190446-create',
  githubHandle: 'p3523190446-create',
  emailNote: '公开邮箱：待确认后补充'
};

export const HONORS = [
  {
    date: '2026.10 — 2026.11',
    title: '“挑战杯”院赛一等奖（晋级校赛）',
    projectSlug: 'frameshield',
    projectTitle: '《帧序智护》边缘视觉时效防错系统',
    note: '本人单人独立研发并完成答辩材料；属院赛已公布获奖结果并晋级校赛。'
  }
];

export const MILESTONES = [
  {
    period: '2026.11',
    title: '《微匠智契 CraftPact AI》v5.0 封版与公网验证',
    status: '在线可体验',
    projectSlug: 'craftpact-ai',
    detail: '完成防篡改契约数据包、平滑签名与移动端长图适配，已通过桌面与窄屏浏览器实测并发布演示页。'
  },
  {
    period: '2026.11',
    title: '《鸿语知境》三大服务场景闭环与真机联调',
    status: '校赛路演完成',
    projectSlug: 'hongyu-zhijing',
    detail: '复用《知行回路》实车底座完成实训室值守、展厅导览与居家照护三场景重构及真机语音图文播报联调。'
  },
  {
    period: '2026.11',
    title: '《青囊智巡 CareLens》本地审计与防 SSRF 闭环',
    status: '本地实测通过（未云部署）',
    projectSlug: 'carelens-ict',
    detail: '完成静态解析、渲染审计与回归测试（12→0）及安全拦截校验；仍待云端试跑与正式报名提交。'
  },
  {
    period: '2026.10 — 2026.11',
    title: '《知行回路》全向智能车实车与控制 App 交付',
    status: '实车与源码已交付',
    projectSlug: 'zhixing-loop',
    detail: '完成 CH32V307 麦轮闭环驱动、五维传感接入、1500+ 行源码与 0.29.0 控制终端交付；云台动态跟随待复测。'
  },
  {
    period: '2026.10',
    title: '《小车调试助手》与《Voice Input》开源发布',
    status: 'GitHub 已公开',
    projectSlug: 'car-debug-assistant',
    detail: '在 GitHub 开源教学实验小车排查工具与 Windows 本地离线语音输入工具（MIT 协议）。'
  },
  {
    period: '2026.10',
    title: '《帧序智护》获挑战杯院赛一等奖并晋级校赛',
    status: '已获奖项',
    projectSlug: 'frameshield',
    detail: '针对视觉延迟造成的“看旧图撞墙”隐患，提出画面时间戳绑定与迟帧自动撤回保护机制。'
  }
];
