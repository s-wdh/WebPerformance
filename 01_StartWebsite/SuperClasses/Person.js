"use strict";
var Football;
(function (Football) {
    class Person extends Football.Moveable {
        constructor(_position) {
            super(_position);
            //this.speed = Math.random() * sprintSpeed;
        }
        draw() {
            Football.crc2.save();
            Football.crc2.translate(this.position.x, this.position.y);
            //final form of person
            Football.crc2.beginPath();
            Football.crc2.moveTo(-6, 12);
            Football.crc2.lineTo(6, 12);
            Football.crc2.lineTo(6, -4);
            Football.crc2.lineTo(8, 0);
            Football.crc2.lineTo(12, -4);
            Football.crc2.lineTo(8, -10);
            Football.crc2.lineTo(4, -10);
            Football.crc2.quadraticCurveTo(0, -6, -4, -10);
            Football.crc2.lineTo(-8, -10);
            Football.crc2.lineTo(-12, -4);
            Football.crc2.lineTo(-8, 0);
            Football.crc2.lineTo(-6, -4);
            Football.crc2.lineTo(-6, -12);
            Football.crc2.fillStyle = this.color;
            Football.crc2.fill();
            Football.crc2.closePath();
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
            Football.crc2.restore();
        }
        move(_position) {
            /* let offset: Vector = new Vector(0, 0);
            offset.x = _position.x * this.speed;
            offset.y = _position.y * this.speed;
            this.position.add(offset); */
        }
        setBack() {
            super.setBack();
        }
    }
    Football.Person = Person;
})(Football || (Football = {})); //namespace
//# sourceMappingURL=Person.js.map