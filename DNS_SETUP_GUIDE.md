# DNS 配置指南 - popup.limited

## 需要配置的 DNS 记录

### 1. A 记录（根域名 @）
在 DNS 管理面板中，为根域名 `@` 添加以下 4 条 A 记录：

| Host | Type | Value | TTL |
|------|------|-------|-----|
| `@` | A | `185.199.108.153` | 30 mins |
| `@` | A | `185.199.109.153` | 30 mins |
| `@` | A | `185.199.110.153` | 30 mins |
| `@` | A | `185.199.111.153` | 30 mins |

**重要：** 删除所有指向其他 IP 的 A 记录（如 `31.43.160.6`, `31.43.161.6`）

### 2. CNAME 记录（www 子域名）
为 `www` 子域名添加 CNAME 记录：

| Host | Type | Value | TTL |
|------|------|-------|-----|
| `www` | CNAME | `pop-up-limited.github.io` | 30 mins |

**重要：** 删除指向 `sites.framer.app.` 的 CNAME 记录

### 3. 保留的记录（如果需要）
- MX 记录（邮件）：可以保留现有的 Zoho Mail 配置
- TXT 记录（SPF、验证等）：可以保留

## 配置步骤

1. 登录 Squarespace DNS 管理面板
2. 找到 `popup.limited` 的 DNS 设置（不是 `product-photo-generator.com`）
3. 删除错误的 A 记录（31.43.160.6, 31.43.161.6）
4. 添加上述 4 条 GitHub Pages A 记录
5. 删除或更新 www 的 CNAME 记录
6. 保存更改

## 验证 DNS 配置

配置完成后，等待 5-30 分钟让 DNS 传播，然后运行以下命令验证：

```bash
# 检查 A 记录
dig +short popup.limited A

# 应该返回：
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# 检查 CNAME 记录
dig +short www.popup.limited CNAME

# 应该返回：
# pop-up-limited.github.io.
```

## 常见问题

**Q: 为什么需要 4 条 A 记录？**
A: GitHub Pages 使用多个 IP 地址来实现负载均衡和高可用性。

**Q: DNS 更新需要多长时间？**
A: 通常 5-30 分钟，但可能需要最多 48 小时才能全球生效。

**Q: 如何知道 DNS 已经更新？**
A: 使用 `dig` 或在线工具（如 https://dnschecker.org）检查全球 DNS 解析。

