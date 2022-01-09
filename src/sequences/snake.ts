import Sequence from "../sequence";
import paper from "paper";

export default class Snake extends Sequence {
    constructor() {
        super();
    }

    setup(): void {
        paper.view.onMouseMove = (event: any) => {
            this.path.firstSegment.point = event.point;
            for (var i = 0; i < this.points - 1; i++) {
                var segment = this.path.segments[i];
                var nextSegment = segment.next;
                var vector = segment.point.subtract(nextSegment.point);
                vector.length = this.length;
                nextSegment.point = segment.point.subtract(vector);
            }
            this.path.smooth({ type: "continuous" });
        };

        paper.view.onMouseDown = (_event: any) => {
            this.path.fullySelected = true;
            this.path.strokeColor = this.transparentColor;
        };

        paper.view.onMouseUp = (_event: any) => {
            this.path.fullySelected = false;
            this.path.strokeColor = this.originalColor;
        };
    }

    step(frameCount: number): void {
        return;
    }
}
