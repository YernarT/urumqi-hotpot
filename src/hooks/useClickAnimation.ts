class Heart {
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  size: number;
  opacity: number;
  speed: number;
  directionX: number;
  directionY: number;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    const [minSize, maxSize] = [30, 60];
    this.size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    this.opacity = 1;
    this.speed = Math.random() * 2 + 1;
    // X 轴方向的随机速度
    this.directionX = (Math.random() - 0.5) * 2;
    // Y 轴方向的随机速度
    this.directionY = (Math.random() - 0.5) * 2;
  }

  /**
   * 绘制 小红心
   */
  draw() {
    this.ctx.beginPath();

    // 左半部分的心形曲线
    this.ctx.moveTo(this.x, this.y);
    this.ctx.bezierCurveTo(
      this.x - this.size * 0.7,
      this.y - this.size * 0.7,
      this.x - this.size * 1.3,
      this.y + this.size * 0.5,
      this.x,
      this.y + this.size
    );

    // 右半部分的心形曲线
    this.ctx.bezierCurveTo(
      this.x + this.size * 1.3,
      this.y + this.size * 0.5,
      this.x + this.size * 0.7,
      this.y - this.size * 0.7,
      this.x,
      this.y
    );

    // 红色，带透明度
    this.ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
    this.ctx.fill();
  }

  // 更新位置和透明度
  update() {
    this.x += this.directionX;
    this.y += this.directionY;
    // 渐变小
    this.size *= 0.98;
    // 渐变消失
    this.opacity -= 0.02;

    // 当透明度为 0 时，删除
    return this.opacity <= 0;
  }
}

export default function useClickAnimation(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const hearts: Heart[] = [];

  // 鼠标点击事件
  canvas.addEventListener("click", (e) => {
    hearts.push(new Heart(e.offsetX, e.offsetY, ctx));
  });

  // 动画循环
  function animate() {
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制 小红心
    for (let i = hearts.length - 1; i >= 0; i--) {
      const heart = hearts[i];
      heart.draw();

      // 更新小红心位置和透明度，并移除透明度为 0 的小红心
      heart.update() && hearts.splice(i, 1);
    }

    requestAnimationFrame(animate);
  }

  animate();
}
