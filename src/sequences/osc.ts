import Sequence from "../sequence";

export default class Osc extends Sequence {
    setup(): void {
        return;
    }

    step(frameCount: number): void {
        this.path.segments.map((segment) => {
            segment.point.y = segment.point.y + (Math.random() - 0.5);
        });
        this.path.smooth({ type: "continuous" });
    }
}
