"use strict";
var Football;
(function (Football) {
    class Field {
        constructor(_position) {
            this.position = _position.clone();
        }
        draw() {
            Football.crc2.save();
            Football.crc2.translate(this.position.x, this.position.y);
            Football.crc2.beginPath();
            Football.crc2.strokeStyle = "#ffffff";
            Football.crc2.lineWidth = 2;
            //outer line
            Football.crc2.strokeRect(0, 0, 735, 476);
            //corner lines
            Football.crc2.arc(0, 0, 7, 0, 0.5 * Math.PI);
            Football.crc2.moveTo(735, 0);
            Football.crc2.arc(735, 0, 7, 0.5 * Math.PI, 1 * Math.PI);
            Football.crc2.moveTo(735, 476);
            Football.crc2.arc(735, 476, 7, 1 * Math.PI, 1.5 * Math.PI);
            Football.crc2.moveTo(0, 476);
            Football.crc2.arc(0, 476, 7, 1.5 * Math.PI, 2 * Math.PI);
            Football.crc2.stroke();
            Football.crc2.closePath();
            //left side
            Football.crc2.beginPath();
            Football.crc2.strokeRect(0, 96.9, 115.5, 282.2);
            Football.crc2.strokeRect(0, 173.9, 38.5, 128.2);
            Football.crc2.strokeRect(0, 212.4, 21, 51.2);
            Football.crc2.moveTo(77, 238);
            Football.crc2.fillStyle = "#ffffff";
            Football.crc2.arc(77, 238, 4, 0, 2 * Math.PI);
            Football.crc2.fill();
            Football.crc2.closePath();
            Football.crc2.beginPath();
            Football.crc2.arc(77, 238, 64, 1.7 * Math.PI, 0.3 * Math.PI);
            Football.crc2.stroke();
            Football.crc2.closePath();
            //right side
            Football.crc2.beginPath();
            Football.crc2.strokeRect(735, 96.9, -115.5, 282.2);
            Football.crc2.strokeRect(735, 173.9, -38.5, 128.2);
            Football.crc2.strokeRect(735, 212.4, -21, 51.2);
            Football.crc2.moveTo(658, 238);
            Football.crc2.fillStyle = "#ffffff";
            Football.crc2.arc(658, 238, 4, 0, 2 * Math.PI);
            Football.crc2.fill();
            Football.crc2.closePath();
            Football.crc2.beginPath();
            Football.crc2.arc(658, 238, 64, 0.7 * Math.PI, 1.3 * Math.PI);
            Football.crc2.stroke();
            Football.crc2.closePath();
            //middle
            Football.crc2.beginPath();
            Football.crc2.fillStyle = "#025710";
            Football.crc2.lineWidth = 4;
            Football.crc2.arc(367.5, 238, 64, 0, 2 * Math.PI);
            Football.crc2.stroke();
            Football.crc2.fill();
            Football.crc2.closePath();
            Football.crc2.beginPath();
            Football.crc2.fillStyle = "#ffffff";
            Football.crc2.arc(367.5, 238, 6, 0, 2 * Math.PI);
            Football.crc2.fill();
            Football.crc2.closePath();
            Football.crc2.beginPath();
            Football.crc2.lineWidth = 2;
            Football.crc2.moveTo(367.5, 0);
            Football.crc2.lineTo(367.5, 476);
            Football.crc2.stroke();
            Football.crc2.closePath();
            Football.crc2.restore();
        }
    }
    Football.Field = Field;
})(Football || (Football = {}));
//# sourceMappingURL=Field.js.map