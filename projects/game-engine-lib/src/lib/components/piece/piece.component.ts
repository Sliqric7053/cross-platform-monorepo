import { COLORS, SHAPES, COLORSLIGHTER, COLORSDARKER } from "../../constants";

export interface IPiece {
  x: number;
  y: number;
  color: string;
  shape: number[][];
}

export class Piece implements IPiece {
  x: number;
  y: number;
  color: string;
  colorLighter: string;
  colorDarker: string;
  shape: number[][];

  constructor(private ctx: CanvasRenderingContext2D) {
    this.spawn();
  }

  spawn() {
    const typeId = this.randomizeTetrominoType(COLORS.length - 1);
    this.shape = SHAPES[typeId];
    this.color = COLORS[typeId];
    this.colorLighter = COLORSLIGHTER[typeId];
    this.colorDarker = COLORSDARKER[typeId];
    this.x = typeId === 4 ? 4 : 3;
    this.y = 0;
  }

  private add3D(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    //Darker Color
    ctx.fillStyle = this.colorDarker;
    // Vertical
    ctx.fillRect(x + 0.9, y, 0.1, 1);
    // Horizontal
    ctx.fillRect(x, y + 0.9, 1, 0.1);

    //Darker Color - Inner
    // Vertical
    ctx.fillRect(x + 0.65, y + 0.3, 0.05, 0.3);
    // Horizontal
    ctx.fillRect(x + 0.3, y + 0.6, 0.4, 0.05);

    // Lighter Color - Outer
    ctx.fillStyle = this.colorLighter;

    // Lighter Color - Inner
    // Vertical
    ctx.fillRect(x + 0.3, y + 0.3, 0.05, 0.3);
    // Horizontal
    ctx.fillRect(x + 0.3, y + 0.3, 0.4, 0.05);

    // Lighter Color - Outer
    // Vertical
    ctx.fillRect(x, y, 0.05, 1);
    ctx.fillRect(x, y, 0.1, 0.95);
    // Horizontal
    ctx.fillRect(x, y, 1, 0.05);
    ctx.fillRect(x, y, 0.95, 0.1);
  }

  private addNextShadow(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
  ): void {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 1.025, 1.025);
  }

  draw() {
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = this.color;
          const currentX = this.x + x;
          const currentY = this.y + y;
          this.ctx.fillRect(currentX, currentY, 1, 1);
          this.add3D(this.ctx, currentX, currentY);
        }
      });
    });
  }

  drawNext(ctxNext: CanvasRenderingContext2D) {
    ctxNext.clearRect(0, 0, ctxNext.canvas.width, ctxNext.canvas.height);
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.addNextShadow(ctxNext, x, y);
        }
      });
    });

    ctxNext.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          ctxNext.fillStyle = this.color;
          const currentX = x + 0.025;
          const currentY = y + 0.025;
          ctxNext.fillRect(currentX, currentY, 1 - 0.025, 1 - 0.025);
          this.add3D(ctxNext, currentX, currentY);
        }
      });
    });
  }

  move(p: IPiece) {
    this.x = p.x;
    this.y = p.y;
    this.shape = p.shape;
  }

  randomizeTetrominoType(noOfTypes: number): number {
    return Math.floor(Math.random() * noOfTypes + 1);
  }
}
