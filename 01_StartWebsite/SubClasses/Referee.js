"use strict";
var Football;
(function (Football) {
    class Referee extends Football.Person {
        constructor(_position) {
            super(_position);
            this.color = "#000000";
        }
        draw() {
            super.draw();
        }
        move(_position) {
            let offset = new Football.Vector(0, 0);
            if (_position.x <= 70) {
                offset.x = _position.x + 35;
            }
            else {
                offset.x = _position.x - 35;
            }
            if (_position.y <= 70) {
                offset.y = _position.y + 35;
            }
            else {
                offset.y = _position.y - 35;
            }
            this.position = offset;
        }
        setBack() {
            super.setBack();
        }
    }
    Football.Referee = Referee;
})(Football || (Football = {})); //namespace
//# sourceMappingURL=Referee.js.map