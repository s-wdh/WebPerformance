namespace Football {
    export class Referee extends Person {

        constructor(_position: Vector) {
            super(_position);
            this.color = "#000000";
        }

        public draw(): void {
            super.draw();
        }

        public move(_position: Vector): void {
            let offset: Vector = new Vector(0, 0);
            if (_position.x <= 70) {
                offset.x = _position.x + 35;
            } else {
                offset.x = _position.x - 35;
            }
            if (_position.y <= 70) {
                offset.y = _position.y + 35;
            } else {
               offset.y = _position.y - 35; 
            }
            this.position = offset;            
        }
        
        public setBack(): void {
            super.setBack();
        }
    }
} //namespace