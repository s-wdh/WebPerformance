"use strict";
var Football;
(function (Football) {
    class PlayerTeamOne extends Football.Person {
        constructor(_position, _color, _minSpeed, _maxSpeed, _minPrecision, _maxPrecision, _jerseyNumber) {
            super(_position);
            this.color = _color;
            this.speed = _minSpeed + (Math.random() * (_maxSpeed - _minSpeed));
            this.precision = _minPrecision + (Math.random() * (_maxPrecision - _minPrecision));
            this.jerseyNumber = _jerseyNumber;
        }
        draw() {
            super.draw();
        }
        move(_position) {
            let offset = Football.Vector.getDifference(_position, this.position);
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
        setBack() {
            super.setBack();
        }
    }
    Football.PlayerTeamOne = PlayerTeamOne;
})(Football || (Football = {})); //namespace
//# sourceMappingURL=PlayerTeamOne.js.map