# 静态网站部署指南

## 已完成的工作

✅ 所有页面已转换为纯 HTML/CSS/JS
✅ 所有功能保持原样
✅ 支持中英文切换
✅ 响应式设计
✅ 深色模式支持
✅ 图表可视化（Chart.js）

## 文件结构

```
html/
├── index.html              # 首页
├── cases.html              # 案例库页面
├── services.html           # 服务方案页面
├── support.html            # 支持中心页面
├── css/
│   └── styles.css          # 全局样式（从 Tailwind 转换）
├── js/
│   ├── app.js              # 全局应用逻辑
│   ├── index.js            # 首页逻辑（图表、案例）
│   ├── cases.js            # 案例库逻辑
│   ├── services.js         # 服务页面逻辑
│   └── support.js          # 支持页面逻辑
├── data/
│   ├── cases.json          # 案例数据
│   ├── faqs.json           # FAQ 数据
│   └── translations.json   # 翻译数据
└── partials/
    ├── navbar.html         # 导航栏片段
    └── footer.html         # 页脚片段
```

## 部署步骤

### 1. 准备资源文件

确保以下资源文件可访问：
- `/images/logo.svg`
- `/images/projects/*.png` (所有案例图片)
- `/wechat-qr-popup-service.png`
- `/favicon.svg`

### 2. 部署到静态托管

#### GitHub Pages
1. 将 `html/` 目录内容上传到仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择主分支作为源

#### Netlify
1. 将 `html/` 目录内容拖拽到 Netlify
2. 或连接 GitHub 仓库自动部署

#### Vercel
1. 将 `html/` 目录内容上传
2. 运行 `vercel` 命令部署

### 3. 路径配置

确保所有路径使用绝对路径（从根目录开始）：
- CSS: `/css/styles.css`
- JS: `/js/app.js`
- 图片: `/images/logo.svg`
- 数据: `/data/cases.json`

### 4. 测试

部署后测试以下功能：
- ✅ 页面加载正常
- ✅ 导航栏和页脚正常显示
- ✅ 语言切换功能正常
- ✅ 案例筛选功能正常
- ✅ 图表正常显示
- ✅ 联系客服弹窗正常
- ✅ 响应式布局正常

## 注意事项

1. **路径问题**：如果部署在子目录，需要修改所有路径为相对路径或添加 base path
2. **CORS 问题**：如果从不同域加载数据，可能需要配置 CORS
3. **图片路径**：确保所有图片路径正确
4. **Chart.js**：使用 CDN 版本，确保网络可访问

## 功能说明

### 语言切换
- 使用 localStorage 存储语言偏好
- 支持 URL 参数 `?lang=en` 或 `?lang=zh`
- 所有文本通过 `data-i18n` 属性自动更新

### 动态内容加载
- 导航栏和页脚通过 JavaScript 动态加载
- 案例数据从 JSON 文件加载
- FAQ 数据从 JSON 文件加载

### 图表
- 使用 Chart.js CDN
- 支持语言切换时更新图表标签
- 自动响应式调整

## 维护

如需更新内容：
1. 修改对应的 JSON 数据文件
2. 修改 HTML 文件中的静态内容
3. 修改 CSS 文件调整样式
4. 修改 JS 文件调整功能

所有文件都是纯静态的，无需编译或构建步骤。

