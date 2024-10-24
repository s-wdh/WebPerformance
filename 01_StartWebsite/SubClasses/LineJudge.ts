namespace Football {
    export class LineJudge extends Person {

        constructor(_position: Vector) {
            super(_position);
            this.color = "#000000";
        }

        public draw(): void {
            super.draw();
        }

        public move(_position: Vector): void {
            let offset: Vector = new Vector(0, 0);
            offset.x = _position.x;
            offset.y = this.position.y;
            this.position = offset;
        }
        
        public setBack(): void {
            super.setBack();
        }
    }
} //namespace