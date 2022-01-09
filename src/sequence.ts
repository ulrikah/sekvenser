import paper from "paper";

class Sequence {
    // amount of points in the path
    points = 50;
    // distance between the points
    length = 3;
    originalColor = new paper.Color("#e4141b");
    transparentColor = new paper.Color("#e08285");

    path: paper.Path;
    start: paper.Point;
    canvas: HTMLCanvasElement;

    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 400;
        this.canvas.height = 300;
        paper.setup(this.canvas);
        this.path = new paper.Path({
            strokeColor: this.originalColor,
            strokeWidth: 5,
            strokeCap: "round",
        });
        this.start = new paper.Point(
            paper.view.center.x / 10,
            paper.view.center.y
        );
        for (let i = 0; i < this.points; i++) {
            this.path.add(this.start.add(new paper.Point(i * this.length, 0)));
        }
    }

    setup(): void {
        throw new Error("Method 'setup()' must be implemented.");
    }
    step(frameCount: number): void {
        throw new Error("Method 'step()' must be implemented.");
    }
}

export default Sequence;
