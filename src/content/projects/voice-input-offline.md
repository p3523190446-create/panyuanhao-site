---
title: '《Voice Input》Windows 离线语音输入工具'
subtitle: '按住快捷键说话、松开自动识别并粘贴到任意输入框的纯本地桌面工具'
category: '开源工具'
featured: false
order: 13
period: '2026.08'
context: '个人开源效率工具（MIT License）'
role: '独立开发与 GitHub 开源维护'
status: '已开源可用'
summary: '基于 faster-whisper / Whisper 的 Windows 桌面离线语音输入工具，带桌面主窗口、系统托盘与图形化设置面板，支持任意编辑器与聊天窗一键语音上屏，全程零联网不上传语音。'
verification: '已在个人 Windows 10/11 环境日常高频使用并开源至 GitHub（MIT 协议）；仅面向 Windows 桌面端。'
stack:
  - 'Python + PowerShell'
  - 'Whisper / faster-whisper'
  - 'Windows 桌面托盘'
  - '纯离线语音识别'
repoUrl: 'https://github.com/p3523190446-create/voice-input'
---

## 背景与痛点

在写代码、记笔记或与 AI 长时间对话时，打字速度常常跟不上思考速度；而市面不少在线语音输入法需要把语音流上传到云端服务器，也未必顺手适配编程术语与桌面快捷键习惯。

## 核心做法与我的职责

- **按住说话、松开自动上屏**：通过全局热键监听，录音结束后在本地调用 `faster-whisper` 快速转写并自动粘贴至当前焦点输入框。
- **完整桌面软件形态**：提供主窗口、右下角托盘快捷开关与免改代码的图形化设置页。
- **100% 本地隐私安全**：无需 API Key，无需联网，语音数据从采集到识别全程留在本机。

## 实际成果

- 作为个人早期开源工具发布于 GitHub（MIT 协议），并在后续大量高频语音协作与文档撰写中持续发挥实际效率价值。

## 验证范围与边界

- **已验证**：个人 Windows 桌面环境长期日常运行验证。
- **未验证 / 边界**：暂未提供 macOS / Linux 跨平台安装包。
