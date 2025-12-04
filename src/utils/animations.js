// 动效系统 - 参考 ljystudio.com
// 包含：弹幕线源、鼠标跟随、Micro interaction、滑动堆叠效果

// 弹幕线源效果
export function initDanmakuLines() {
  const canvas = document.createElement('canvas');
  canvas.id = 'danmaku-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  canvas.style.opacity = '0.3';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const lines = [];
  const lineCount = 20;

  // 创建线条
  for (let i = 0; i < lineCount; i++) {
    lines.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 0.5 + 0.2,
      angle: Math.random() * Math.PI * 2,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach((line) => {
      // 更新位置
      line.x += Math.cos(line.angle) * line.speed;
      line.y += Math.sin(line.angle) * line.speed;

      // 边界检测
      if (line.x < 0) line.x = canvas.width;
      if (line.x > canvas.width) line.x = 0;
      if (line.y < 0) line.y = canvas.height;
      if (line.y > canvas.height) line.y = 0;

      // 绘制线条
      ctx.beginPath();
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(
        line.x + Math.cos(line.angle) * line.length,
        line.y + Math.sin(line.angle) * line.length
      );
      ctx.strokeStyle = line.color;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  // 清理函数
  return () => {
    cancelAnimationFrame(animationFrameId);
    canvas.remove();
    window.removeEventListener('resize', resizeCanvas);
  };
}

// 鼠标跟随效果
export function initMouseFollower() {
  const cursor = document.createElement('div');
  cursor.className = 'mouse-follower';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(248, 147, 147, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease-out;
    transform: translate(-50%, -50%);
    display: none;
  `;
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'mouse-follower-dot';
  cursorDot.style.cssText = `
    position: fixed;
    width: 6px;
    height: 6px;
    background: rgba(248, 147, 147, 0.8);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
    display: none;
  `;
  document.body.appendChild(cursorDot);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let dotX = 0;
  let dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
  });

  // 平滑跟随动画
  function animate() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    dotX += (mouseX - dotX) * 0.3;
    dotY += (mouseY - dotY) * 0.3;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';

    requestAnimationFrame(animate);
  }
  animate();

  // 交互元素悬停效果
  const interactiveElements = document.querySelectorAll('a, button, .card-surface, [data-interactive]');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.borderColor = 'rgba(248, 147, 147, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.borderColor = 'rgba(248, 147, 147, 0.5)';
    });
  });

  return () => {
    cursor.remove();
    cursorDot.remove();
  };
}

// Micro interaction - 元素交互动画
export function initMicroInteractions() {
  // 卡片悬停效果
  const cards = document.querySelectorAll('.card-surface, [data-card]');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
      this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // 按钮点击波纹效果
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, button');
  buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      if (!this.style.position || this.style.position === 'static') {
        this.style.position = 'relative';
      }
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // 添加波纹动画样式
  if (!document.getElementById('ripple-animation')) {
    const style = document.createElement('style');
    style.id = 'ripple-animation';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// 滑动堆叠效果
export function initScrollStacking() {
  const stackElements = document.querySelectorAll('[data-stack]');
  if (stackElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      const ratio = entry.intersectionRatio;
      const isVisible = entry.isIntersectionRatio > 0;

      if (isVisible) {
        // 根据滚动位置调整堆叠效果
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementCenter) / windowHeight));

        // 应用堆叠变换
        const scale = 0.8 + scrollProgress * 0.2;
        const translateY = (1 - scrollProgress) * 50;
        const opacity = 0.5 + scrollProgress * 0.5;
        const zIndex = Math.floor(scrollProgress * 10);

        element.style.transform = `translateY(${translateY}px) scale(${scale})`;
        element.style.opacity = opacity;
        element.style.zIndex = zIndex;
        element.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      }
    });
  }, observerOptions);

  stackElements.forEach((element) => {
    observer.observe(element);
  });

  // 滚动事件优化
  let ticking = false;
  function updateStacking() {
    stackElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));

        const scale = 0.85 + scrollProgress * 0.15;
        const translateY = (1 - scrollProgress) * 30;
        const opacity = 0.6 + scrollProgress * 0.4;
        const rotateX = (1 - scrollProgress) * 5;

        element.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
        element.style.opacity = opacity;
        element.style.willChange = 'transform, opacity';
      }
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateStacking);
      ticking = true;
    }
  });

  // 初始更新
  updateStacking();
}

// 初始化所有动效
export function initAllAnimations() {
  if (typeof window === 'undefined') return;

  const cleanupFunctions = [];

  // 只在桌面端启用某些动效
  if (window.innerWidth > 768) {
    cleanupFunctions.push(initDanmakuLines());
    cleanupFunctions.push(initMouseFollower());
  }

  initMicroInteractions();
  initScrollStacking();

  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup && cleanup());
  };
}

// 导出函数供外部使用

