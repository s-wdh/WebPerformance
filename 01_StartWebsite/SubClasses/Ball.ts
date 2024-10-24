namespace Football {
    export class Ball extends Moveable {

        constructor(_position: Vector) {
            super(_position);
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.arc(0, 0, 5, 0, Math.PI * 2);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

        public move(_position: Vector): void {
            /* console.log(_precision);
            if (_position.x > this.position.x) {
                _position.x += _precision;
            } else {
                _position.x -= _precision;
            }
            if (_position.y > this.position.y) {
                _position.y += _precision;
            } else {
                _position.y -= _precision;
            } */
            let offset: Vector = Vector.getDifference(_position, this.position); 
            offset.scale(0.1);
            this.position.add(offset);

            //check if ball is shoot out of the field
            if (this.position.x < 35) {
                this.position.x = 35;
            }
            if (this.position.x == 35) {
                if (this.position.y < 247.4) {
                    this.position.y = 35;
                } else if (this.position.y > 298.6) {
                    this.position.y = 511;
                }
            }
            if (this.position.x > 770) {
                this.position.x = 770;
            }
            if (this.position.x == 770) {
                if (this.position.y < 247.4) {
                    this.position.y = 35;
                } else if (this.position.y > 298.6) {
                    this.position.y = 511;
                }
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