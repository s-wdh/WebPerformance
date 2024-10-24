"use strict";
var Football;
(function (Football) {
    class Ball extends Football.Moveable {
        constructor(_position) {
            super(_position);
        }
        draw() {
            Football.crc2.save();
            Football.crc2.translate(this.position.x, this.position.y);
            Football.crc2.beginPath();
            Football.crc2.moveTo(0, 0);
            Football.crc2.arc(0, 0, 5, 0, Math.PI * 2);
            Football.crc2.fillStyle = "#000000";
            Football.crc2.fill();
            Football.crc2.closePath();
            Football.crc2.restore();
        }
        move(_position) {
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
            let offset = Football.Vector.getDifference(_position, this.position);
            offset.scale(0.1);
            this.position.add(offset);
            //check if ball is shoot out of the field
            if (this.position.x < 35) {
                this.position.x = 35;
            }
            if (this.position.x == 35) {
                if (this.position.y < 247.4) {
                    this.position.y = 35;
                }
                else if (this.position.y > 298.6) {
                    this.position.y = 511;
                }
            }
            if (this.position.x > 770) {
                this.position.x = 770;
            }
            if (this.position.x == 770) {
                if (this.position.y < 247.4) {
                    this.position.y = 35;
                }
                else if (this.position.y > 298.6) {
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
        setBack() {
            super.setBack();
        }
    }
    Football.Ball = Ball;
})(Football || (Football = {})); //namespace
//# sourceMappingURL=Ball.js.map