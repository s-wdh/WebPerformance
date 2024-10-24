"use strict";
var Football;
(function (Football) {
    class LineJudge extends Football.Person {
        constructor(_position) {
            super(_position);
            this.color = "#000000";
        }
        draw() {
            super.draw();
        }
        move(_position) {
            let offset = new Football.Vector(0, 0);
            offset.x = _position.x;
            offset.y = this.position.y;
            this.position = offset;
        }
        setBack() {
            super.setBack();
        }
    }
    Football.LineJudge = LineJudge;
})(Football || (Football = {})); //namespace
//# sourceMappingURL=LineJudge.js.map