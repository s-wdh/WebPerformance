namespace Football {
    export class Field {
        public position: Vector;

        constructor(_position: Vector) {
            this.position = _position.clone();
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.strokeStyle = "#ffffff";
            crc2.lineWidth = 2;
            //outer line
            crc2.strokeRect(0, 0, 735, 476);
            //corner lines
            crc2.arc(0, 0, 7, 0, 0.5 * Math.PI);
            crc2.moveTo(735, 0);
            crc2.arc(735, 0, 7, 0.5 * Math.PI, 1 * Math.PI);
            crc2.moveTo(735, 476);
            crc2.arc(735, 476, 7, 1 * Math.PI, 1.5 * Math.PI);
            crc2.moveTo(0, 476);
            crc2.arc(0, 476, 7, 1.5 * Math.PI, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            //left side
            crc2.beginPath();
            crc2.strokeRect(0, 96.9, 115.5, 282.2);
            crc2.strokeRect(0, 173.9, 38.5, 128.2);
            crc2.strokeRect(0, 212.4, 21, 51.2);
            crc2.moveTo(77, 238);
            crc2.fillStyle = "#ffffff";
            crc2.arc(77, 238, 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(77, 238, 64, 1.7 * Math.PI, 0.3 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            //right side
            crc2.beginPath();
            crc2.strokeRect(735, 96.9, -115.5, 282.2);
            crc2.strokeRect(735, 173.9, -38.5, 128.2);
            crc2.strokeRect(735, 212.4, -21, 51.2);
            crc2.moveTo(658, 238);
            crc2.fillStyle = "#ffffff";
            crc2.arc(658, 238, 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(658, 238, 64, 0.7 * Math.PI, 1.3 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            //middle
            crc2.beginPath();
            crc2.fillStyle = "#025710";
            crc2.lineWidth = 4;
            crc2.arc(367.5, 238, 64, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "#ffffff";
            crc2.arc(367.5, 238, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.lineWidth = 2;
            crc2.moveTo(367.5, 0);
            crc2.lineTo(367.5, 476);
            crc2.stroke();
            crc2.closePath();
            crc2.restore();
        }
    }
}