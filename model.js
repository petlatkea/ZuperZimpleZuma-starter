import SimpleLinkedList from "./simplelinkedlist.js";

export {
    init,
    getFirstBall,
    getNextBall,
    getCannonBall,
    addRandomBall,
    dump,
    addBall,
    insertBallAfter,
    numberOfBalls,
    loadCannon,
    removeMatches,
    list,
};

const list = new SimpleLinkedList();

function init() {
    console.log("Model init");
}

function dump() {
    let node = list.head;
    let output = "";
    while (node != null) {
        output += '"' + node.data + node.id + '"';
        output += " -> ";

        node = node.next;
    }
    output += "null";
    console.log(output);
}

// **** WRAPPERS ****
function addRandomBall() {
    addBall(randomBall());
}

function addBall(ball) {
    return list.add(ball);
}

// TODO: Implement more functions
function getFirstBall() {
    return list.head;
}

function getNextBall(ball) {
    return ball.next;
}

function insertBallAfter(ball, node) {
    const newNode = list.insertAfter(ball, node);
    checkMatches(newNode);
    return newNode;
}

function numberOfBalls() {
    return list.size();
}

// **** CANNON ****
let cannonBall;

function loadCannon() {
    cannonBall = randomBall();
}

function getCannonBall() {
    return cannonBall;
}

// **** MATCHES ****

// TODO: Implement functions to find and remove matches
function checkMatches(node) {
    const matches = [node];

    // Find matches før node
    let lookat = node.prev;
    while (lookat && node.data == lookat.data) {
        matches.push(lookat);
        lookat = lookat.prev;
    }

    // If den vi kigger på er et match, push den til matches

    // find matches efter node
    lookat = node.next;
    while (lookat && node.data == lookat.data) {
        matches.push(lookat);
        lookat = lookat.next;
    }

    removeMatches(matches);
}

function removeMatches(matches) {
    console.log(matches);

    if (matches.length < 3) {
        console.log("Not enough matches to remove!");
        return;
    }

    for (const match of matches) {
        list.remove(match);
    }
}

// **** BALLS ****

const balls = ["🔴", "🔵", "🟡", "🟢"];

function randomBall() {
    return balls[Math.floor(Math.random() * balls.length)];
}

function red() {
    return balls[0];
}

function blue() {
    return balls[1];
}

function yellow() {
    return balls[2];
}

function green() {
    return balls[3];
}

// debugger;
