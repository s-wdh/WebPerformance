"use strict";
var Football;
(function (Football) {
    class Moveable {
        constructor(_position) {
            this.position = _position.clone();
            this.startPosition = _position;
        }
        setBack() {
            this.position = this.startPosition;
        }
    }
    Football.Moveable = Moveable;
})(Football || (Football = {})); //namespace
//# sourceMappingURL=Moveable.js.map