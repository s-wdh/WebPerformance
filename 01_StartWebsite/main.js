"use strict";
var Football;
(function (Football) {
    /*
    Endabgabe Sommersemester 2021
    Fußball-Simulation
    Name: Sarah Weidenhiller
    Matrikelnummer: 263128
    */
    window.addEventListener("load", handleLoad);
    //save the people and the ball needed for the game
    let moveables = [];
    let ball;
    //save the values of the first team
    let nameTeam1 = "EIA";
    let colorTeam1 = "#ffff00";
    let minSpeed1 = 0.3;
    let maxSpeed1 = 0.5;
    let minPrecision1 = 50;
    let maxPrecision1 = 80;
    let goalsTeam1 = 0;
    //and for the second team as well
    let nameTeam2 = "DEL";
    let colorTeam2 = "#0000ff";
    let minSpeed2 = 0.3;
    let maxSpeed2 = 0.5;
    let minPrecision2 = 50;
    let maxPrecision2 = 80;
    let goalsTeam2 = 0;
    //other needed variables for the teams
    let positionsTeam1 = [new Football.Vector(49, 273), new Football.Vector(161, 273), new Football.Vector(161, 416), new Football.Vector(161, 126), new Football.Vector(376.5, 273), new Football.Vector(376.5, 493), new Football.Vector(376.5, 49), new Football.Vector(495, 168), new Football.Vector(495, 378), new Football.Vector(600, 245), new Football.Vector(600, 301)];
    let positionsTeam2 = [new Football.Vector(756, 273), new Football.Vector(644, 273), new Football.Vector(644, 416), new Football.Vector(644, 126), new Football.Vector(428.5, 273), new Football.Vector(428.5, 493), new Football.Vector(428.5, 49), new Football.Vector(275, 168), new Football.Vector(275, 378), new Football.Vector(205, 245), new Football.Vector(205, 301)];
    let jerseyNumber = 1;
    let addPlayer1;
    let addPlayer2;
    let addPl1 = false;
    let addPl2 = false;
    //and other variables
    let scoreFont;
    let startGameBtn;
    let game = false;
    let playerInfo;
    let playerInfoNum;
    let currentPlayerDiv;
    let currentPlayer;
    let clicked = true;
    let ballPosition;
    let imgData;
    let ballAnim;
    let gameUpdate;
    function handleLoad() {
        console.log("load");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Football.crc2 = canvas.getContext("2d");
        scoreFont = document.getElementById("scoreFont");
        playerInfo = document.getElementById("playerInfo");
        currentPlayerDiv = document.getElementById("currentPlayer");
        let form = document.getElementById("form");
        form.addEventListener("change", handleChange);
        drawField(canvas);
        createPeople();
        addPlayer1 = document.getElementById("addPlayer1");
        addPlayer2 = document.getElementById("addPlayer2");
        addPlayer1.addEventListener("click", addPlayer);
        addPlayer2.addEventListener("click", addPlayer);
        startGameBtn = document.getElementById("startGame");
        startGameBtn.addEventListener("click", startGame);
        canvas.addEventListener("click", handleClick);
    } //handleLoad
    function handleChange(_event) {
        let target = _event.target;
        switch (target.name) {
            //team 1
            case "name1": {
                nameTeam1 = target.value;
                if (!target.value) {
                    nameTeam1 = "EIA";
                }
                scoreFont.innerHTML = nameTeam1 + " " + goalsTeam1 + " : " + goalsTeam2 + " " + nameTeam2;
                break;
            }
            case "team1color":
                colorTeam1 = target.value;
                addPlayer1.style.backgroundColor = target.value;
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamOne) {
                        player.color = target.value;
                    }
                }
                Football.crc2.putImageData(imgData, 0, 0);
                for (let element of moveables) {
                    element.draw();
                }
                break;
            case "minSpeed1":
                minSpeed1 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamOne) {
                        player.speed = minSpeed1 + (Math.random() * (maxSpeed1 - minSpeed1));
                    }
                }
                break;
            case "maxSpeed1":
                maxSpeed1 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamOne) {
                        player.speed = minSpeed1 + (Math.random() * (maxSpeed1 - minSpeed1));
                    }
                }
                break;
            case "minPrecision1":
                minPrecision1 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamOne) {
                        player.precision = minPrecision1 + (Math.random() * (maxPrecision1 - minPrecision1));
                    }
                }
                break;
            case "maxPrecision1":
                maxPrecision1 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamOne) {
                        player.precision = minPrecision1 + (Math.random() * (maxPrecision1 - minPrecision1));
                    }
                }
                break;
            //team 2
            case "name2": {
                nameTeam2 = target.value;
                if (!target.value) {
                    nameTeam2 = "DEL";
                }
                scoreFont.innerHTML = nameTeam1 + " " + goalsTeam1 + " : " + goalsTeam2 + " " + nameTeam2;
                break;
            }
            case "team2color":
                colorTeam2 = target.value;
                addPlayer2.style.backgroundColor = target.value;
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamTwo) {
                        player.color = target.value;
                    }
                }
                Football.crc2.putImageData(imgData, 0, 0);
                for (let element of moveables) {
                    element.draw();
                }
                break;
            case "minSpeed2":
                minSpeed2 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamTwo) {
                        player.speed = minSpeed2 + (Math.random() * (maxSpeed2 - minSpeed2));
                    }
                }
                break;
            case "maxSpeed2":
                maxSpeed2 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamTwo) {
                        player.speed = minSpeed2 + (Math.random() * (maxSpeed2 - minSpeed2));
                    }
                }
                break;
            case "minPrecision2":
                minPrecision2 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamTwo) {
                        player.precision = minPrecision2 + (Math.random() * (maxPrecision2 - minPrecision2));
                    }
                }
                break;
            case "maxPrecision2":
                maxPrecision2 = parseFloat(target.value);
                for (let player of moveables) {
                    if (player instanceof Football.PlayerTeamTwo) {
                        player.precision = minPrecision2 + (Math.random() * (maxPrecision2 - minPrecision2));
                    }
                }
                break;
        }
    } //handleChange
    function drawField(_canvas) {
        console.log("background");
        Football.crc2.beginPath();
        Football.crc2.fillStyle = "#025710";
        Football.crc2.fillRect(0, 0, Football.crc2.canvas.width, Football.crc2.canvas.height);
        Football.crc2.closePath();
        Football.crc2.restore();
        let position = new Football.Vector(35, 35);
        let field = new Football.Field(position);
        field.draw();
        imgData = Football.crc2.getImageData(0, 0, Football.crc2.canvas.width, Football.crc2.canvas.height);
    } //drawField
    function createPeople() {
        // team 1
        for (let i = 0; i < 11; i++) {
            let position = positionsTeam1[i];
            let player = new Football.PlayerTeamOne(position, colorTeam1, minSpeed1, maxSpeed1, minPrecision1, maxPrecision1, jerseyNumber);
            player.draw();
            moveables.push(player);
            jerseyNumber += 1;
        }
        // team 2
        for (let i = 0; i < 11; i++) {
            let position = positionsTeam2[i];
            let player = new Football.PlayerTeamTwo(position, colorTeam2, minSpeed2, maxSpeed2, minPrecision2, maxPrecision2, jerseyNumber);
            player.draw();
            moveables.push(player);
            jerseyNumber += 1;
        }
        //upper line judge
        let positionLJ1 = new Football.Vector(402.5, 21);
        let lineJudge1 = new Football.LineJudge(positionLJ1);
        lineJudge1.draw();
        moveables.push(lineJudge1);
        //lower line judge
        let positionLJ2 = new Football.Vector(402.5, 525);
        let lineJudge2 = new Football.LineJudge(positionLJ2);
        lineJudge2.draw();
        moveables.push(lineJudge2);
        //referee
        let positionR = new Football.Vector(367.5, 238);
        let referee = new Football.Referee(positionR);
        referee.draw();
        moveables.push(referee);
        //...and most important the ball
        ballPosition = new Football.Vector(402.5, 273);
        ball = new Football.Ball(ballPosition);
        ball.draw();
        moveables.push(ball);
    } //createPeople
    function startGame() {
        if (game == false) {
            gameUpdate = setInterval(animatePlayers, 30);
            game = true;
        }
    } //startGame
    function handleClick(_event) {
        if (clicked == false && _event.shiftKey == false && _event.altKey == false && game == true) {
            //move the ball to the clicked positions
            ballPosition = new Football.Vector(_event.offsetX, _event.offsetY);
            let difference = Football.Vector.getDifference(ballPosition, ball.position);
            if (ballPosition.x > ball.position.x) {
                ballPosition.x += ((100 - currentPlayer.precision) * difference.length / 100);
            }
            else {
                ballPosition.x -= ((100 - currentPlayer.precision) * difference.length / 100);
            }
            if (ballPosition.y > ball.position.y) {
                ballPosition.y += ((100 - currentPlayer.precision) * difference.length / 100);
            }
            else {
                ballPosition.y -= ((100 - currentPlayer.precision) * difference.length / 100);
            }
            clicked = true;
            currentPlayerDiv.innerHTML = "Aktuell ist kein Spieler am Ball.";
            ballAnim = setInterval(animateBall, 30);
            gameUpdate = setInterval(animatePlayers, 30);
        }
        if (_event.shiftKey == true) {
            //display the information of this person
            for (let person of moveables) {
                if (person.position.x - 12 < _event.offsetX && person.position.x + 12 > _event.offsetX) {
                    if (person.position.y - 12 < _event.offsetY && person.position.y + 12 > _event.offsetY) {
                        if (person instanceof Football.Referee) {
                            playerInfo.innerHTML = " \nDies ist der Schiedsrichter";
                        }
                        else if (person instanceof Football.LineJudge) {
                            playerInfo.innerHTML = " \nDies ist ein Linienrichter";
                        }
                        else if (person instanceof Football.PlayerTeamOne) {
                            playerInfo.innerHTML = "Spieler aus Team " + nameTeam1.toUpperCase() + "\nTrikotnummer: " + person.jerseyNumber + "\nGeschwindigkeit: " + (person.speed * 35).toFixed(2) + "km/h\nPräzision: " + person.precision.toFixed(2) + "%";
                            playerInfoNum = moveables.indexOf(person);
                            let button = document.createElement("button");
                            button.innerHTML = "Spieler entfernen";
                            button.style.marginTop = "4px";
                            button.addEventListener("click", deletePlayer);
                            playerInfo.appendChild(button);
                        }
                        else if (person instanceof Football.PlayerTeamTwo) {
                            playerInfo.innerHTML = "Spieler aus Team " + nameTeam2.toUpperCase() + "\nTrikotnummer: " + person.jerseyNumber + "\nGeschwindigkeit: " + (person.speed * 35).toFixed(2) + "km/h\nPräzision: " + person.precision.toFixed(2) + "%";
                            playerInfoNum = moveables.indexOf(person);
                            let button = document.createElement("button");
                            button.innerHTML = "Spieler entfernen";
                            button.style.marginTop = "4px";
                            button.addEventListener("click", deletePlayer);
                            playerInfo.appendChild(button);
                        }
                    }
                }
            }
        }
        if (_event.altKey == true) {
            //add a new player
            if (_event.offsetX > 47 && _event.offsetX < 758 && _event.offsetY > 47 && _event.offsetY < 499) {
                if (addPl1 == true) {
                    let position = new Football.Vector(_event.offsetX, _event.offsetY);
                    let player = new Football.PlayerTeamOne(position, colorTeam1, minSpeed1, maxSpeed1, minPrecision1, maxPrecision1, jerseyNumber);
                    player.draw();
                    moveables.push(player);
                    jerseyNumber += 1;
                    addPl1 = false;
                    let infoText = document.getElementById("addPlayerInfo");
                    infoText.hidden = true;
                }
                else if (addPl2 == true) {
                    let position = new Football.Vector(_event.offsetX, _event.offsetY);
                    let player = new Football.PlayerTeamTwo(position, colorTeam2, minSpeed2, maxSpeed2, minPrecision2, maxPrecision2, jerseyNumber);
                    player.draw();
                    moveables.push(player);
                    jerseyNumber += 1;
                    addPl2 = false;
                    let infoText = document.getElementById("addPlayerInfo");
                    infoText.hidden = true;
                }
            }
            else {
                window.alert("Wähle die Stelle so, dass sich der Spieler komplett innerhalb des Spielfeldes befindet");
            }
        }
    } //handleClick
    function addPlayer(_event) {
        let target = _event.target;
        let id = target.getAttribute("id");
        let infoText = document.getElementById("addPlayerInfo");
        if (id == "addPlayer1") {
            addPl1 = true;
            infoText.hidden = false;
        }
        else if (id == "addPlayer2") {
            addPl2 = true;
            infoText.hidden = false;
        }
    } //addPlayer
    function deletePlayer() {
        console.log("delete player");
        moveables.splice(playerInfoNum, 1);
        playerInfo.innerHTML = "Klicke mit gehaltenener Shift-Taste auf eine Person, um Informationen zu dieser zu erhalten.";
        Football.crc2.putImageData(imgData, 0, 0);
        for (let element of moveables) {
            element.draw();
        }
    } //deletePlayer
    function animatePlayers() {
        for (let player of moveables) {
            if (player instanceof Football.PlayerTeamOne || player instanceof Football.PlayerTeamTwo) {
                let distance = Football.Vector.getDifference(player.startPosition, ball.position);
                if (distance.length > 160) {
                    player.move(player.startPosition);
                }
                else if (distance.length <= 160) {
                    player.move(ball.position);
                    playerAtBall(player);
                }
            }
        }
        Football.crc2.putImageData(imgData, 0, 0);
        for (let element of moveables) {
            element.draw();
        }
    } //animatePlayers
    function playerAtBall(_player) {
        let distance = Football.Vector.getDifference(_player.position, ball.position);
        if (distance.length <= 3) {
            if (_player instanceof Football.PlayerTeamOne) {
                currentPlayerDiv.innerHTML = "Aktuell am Ball:\nSpielernummer: " + _player.jerseyNumber + "\nvon Team: " + nameTeam1.toUpperCase();
                currentPlayer = _player;
            }
            else if (_player instanceof Football.PlayerTeamTwo) {
                currentPlayerDiv.innerHTML = "Aktuell am Ball:\nSpielernummer: " + _player.jerseyNumber + "\nvon Team: " + nameTeam2.toUpperCase();
                currentPlayer = _player;
            }
            clearInterval(gameUpdate);
            clicked = false;
        }
    } //playerAtBall
    function animateBall() {
        ball.move(ballPosition);
        animateReferees();
        let vector = Football.Vector.getDifference(ball.position, ballPosition);
        if (vector.length <= 1) {
            clearInterval(ballAnim);
            checkGoal();
        }
        else if (ball.position.x == 35 || ball.position.x == 770) {
            clearInterval(ballAnim);
            checkGoal();
        }
        else if (ball.position.y == 35 || ball.position.y == 511) {
            clearInterval(ballAnim);
            checkGoal();
        }
    } //animateBall
    function animateReferees() {
        for (let element of moveables) {
            if (element instanceof Football.LineJudge) {
                element.move(ball.position);
            }
            else if (element instanceof Football.Referee) {
                element.move(ball.position);
            }
        }
    } //animateReferees
    function checkGoal() {
        if (ball.position.x < 36) {
            if (ball.position.y > 247.4 && ball.position.y < 298.6) {
                console.log("left goal");
                goalsTeam2 += 1;
                scoreFont.innerHTML = nameTeam1 + " " + goalsTeam1 + " : " + goalsTeam2 + " " + nameTeam2;
                //game = false;
                /* clearInterval(gameUpdate);
                crc2.putImageData(imgData, 0, 0);
                for (let element of moveables) {
                    element.setBack();
                    element.draw();
                } */
            }
        }
        else if (ball.position.x > 734) {
            if (ball.position.y > 247.4 && ball.position.y < 298.6) {
                console.log("right goal");
                goalsTeam1 += 1;
                scoreFont.innerHTML = nameTeam1 + " " + goalsTeam1 + " : " + goalsTeam2 + " " + nameTeam2;
                /* game = false;
                clearInterval(gameUpdate);
                crc2.putImageData(imgData, 0, 0);
                for (let element of moveables) {
                    element.setBack();
                    element.draw();
                } */
            }
        }
        else {
            console.log("no goal");
        }
    } //checkGoal
})(Football || (Football = {})); //namespace
//# sourceMappingURL=main.js.map