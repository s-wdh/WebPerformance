namespace Football {
    export class PlayerTeamOne extends Person {
        public speed: number;
        public precision: number;
        public jerseyNumber: number;

        constructor(_position: Vector, _color: string, _minSpeed: number, _maxSpeed: number, _minPrecision: number, _maxPrecision: number, _jerseyNumber: number) {
            super(_position);
            this.color = _color;
            this.speed = _minSpeed + (Math.random() * (_maxSpeed - _minSpeed));
            this.precision = _minPrecision + (Math.random() * (_maxPrecision - _minPrecision));
            this.jerseyNumber = _jerseyNumber;
        }

        public draw(): void {
            super.draw();
        }

        public move(_position: Vector): void {
            let offset: Vector = Vector.getDifference(_position, this.position);
            offset.scale(this.speed / 10);
            this.position.add(offset);

            if (this.position.x < 35) {
                this.position.x = 35;
            }
            if (this.position.x > 770) {
                this.position.x = 770;
            }
            if (this.position.y < 35) {
                this.position.y = 35;
            }
            if (this.position.y > 511) {
                this.position.y = 511;
            }
        }
        
        public setBack(): void {
            super.setBack();
        }
    }
} //namespace