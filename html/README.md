# 静态 HTML 网站

这是 Pop Up Limited 网站的纯 HTML/CSS/JS 静态版本。

## 文件结构

```
html/
├── index.html          # 首页
├── cases.html          # 案例库页面
├── services.html       # 服务方案页面
├── support.html        # 支持中心页面
├── css/
│   └── styles.css      # 全局样式文件
├── js/
│   ├── app.js          # 全局应用逻辑（语言切换、导航等）
│   ├── index.js        # 首页特定逻辑（图表、案例加载）
│   ├── cases.js        # 案例库页面逻辑
│   ├── services.js     # 服务页面逻辑
│   └── support.js      # 支持页面逻辑
├── data/
│   ├── cases.json      # 案例数据
│   ├── faqs.json       # FAQ 数据
│   └── translations.json # 翻译数据
└── partials/
    ├── navbar.html     # 导航栏片段
    └── footer.html     # 页脚片段
```

## 部署说明

1. 将所有文件上传到静态网站托管服务（如 GitHub Pages, Netlify, Vercel 等）
2. 确保所有路径使用相对路径或绝对路径（从根目录开始）
3. 确保 `/public` 目录中的图片资源可访问
4. 所有页面都使用相同的 CSS 和 JS 文件

## 功能特性

- ✅ 完全静态，无需服务器端渲染
- ✅ 支持中英文切换
- ✅ 响应式设计
- ✅ 深色模式支持（基于系统偏好）
- ✅ 图表可视化（使用 Chart.js）
- ✅ 所有功能和页面保持原样

## 注意事项

- 导航栏和页脚通过 JavaScript 动态加载
- 案例数据通过 JSON 文件加载
- 翻译数据通过 JSON 文件加载
- 图表使用 Chart.js CDN

