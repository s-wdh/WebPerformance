namespace Football {
    export abstract class Moveable {
        public position: Vector;
        public startPosition: Vector;

        constructor(_position: Vector) {
            this.position = _position.clone();
            this.startPosition = _position;
        }

        public abstract draw(): void;

        public abstract move(_position: Vector): void;
        
        public setBack(): void {
            this.position = this.startPosition;
        }
    }
} //namespace