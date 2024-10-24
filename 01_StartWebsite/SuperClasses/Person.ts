namespace Football {
    export class Person extends Moveable {
        public color: string;

        constructor(_position: Vector) {
            super(_position);
            //this.speed = Math.random() * sprintSpeed;
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            //final form of person
            crc2.beginPath();
            crc2.moveTo(-6, 12);
            crc2.lineTo(6, 12);
            crc2.lineTo(6, -4);
            crc2.lineTo(8, 0);
            crc2.lineTo(12, -4);
            crc2.lineTo(8, -10);
            crc2.lineTo(4, -10);
            crc2.quadraticCurveTo(0, -6, -4, -10);
            crc2.lineTo(-8, -10);
            crc2.lineTo(-12, -4);
            crc2.lineTo(-8, 0);
            crc2.lineTo(-6, -4);
            crc2.lineTo(-6, -12);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();

            //cicrle person prototype
            /* crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.arc(0, 0, 12, 0, Math.PI * 2);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath(); */
            //see the radius of the person
            /* crc2.arc(0, 0, 154, 0, 2 * Math.PI);
            crc2.stroke(); */
            crc2.restore();
        }

        public move(_position: Vector): void {
            /* let offset: Vector = new Vector(0, 0);
            offset.x = _position.x * this.speed;
            offset.y = _position.y * this.speed;
            this.position.add(offset); */
        }
        
        public setBack(): void {
            super.setBack();
        }
    }
} //namespace