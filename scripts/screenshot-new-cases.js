const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const cases = [
  { id: 'web-case-6', url: 'https://pop-up-limited.github.io/web-case-6/', name: 'Web Case 6' },
  { id: 'aethelgard-website', url: 'https://pop-up-limited.github.io/aethelgard-website/', name: 'Aethelgard Architecture' }
];

const outputDir = path.join(__dirname, '../public/images/projects');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function takeScreenshot(caseItem) {
  let browser;
  try {
    console.log(`正在截图: ${caseItem.name} (${caseItem.url})...`);
    
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // 设置视口大小
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });
    
    // 访问页面并等待加载
    await page.goto(caseItem.url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // 等待页面完全加载
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // 截图
    const screenshotPath = path.join(outputDir, `${caseItem.id}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 1920,
        height: 1080
      }
    });
    
    console.log(`✓ 截图已保存: ${screenshotPath}`);
    
    await browser.close();
  } catch (error) {
    console.error(`✗ 截图失败 ${caseItem.name}:`, error.message);
    if (browser) {
      await browser.close();
    }
  }
}

async function main() {
  console.log('开始生成网站截图...\n');
  
  for (const caseItem of cases) {
    await takeScreenshot(caseItem);
    // 添加延迟避免请求过快
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n所有截图完成！');
}

main().catch(console.error);


