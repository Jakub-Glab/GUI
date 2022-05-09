var client = new Paho.MQTT.Client("localhost", 8083, "BrowserClient");
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({ onSuccess: onConnect });

function onConnect() {
    console.log("Connected");
}

// called when a message arrives
function onMessageArrived(message) {

}

function send(topic, payload) {
    let message = new Paho.MQTT.Message(payload);
    message.destinationName = topic;
    client.send(message);
}


function sendMMG() {

    let json = {
        interface: "mmg"
    }
    let message = new Paho.MQTT.Message(JSON.stringify(json));
    message.destinationName = "interfaces/use";
    client.send(message);
}

function sendEMG() {

    let json = {
        interface: "emg"
    }
    let message = new Paho.MQTT.Message(JSON.stringify(json));
    message.destinationName = "interfaces/use";
    client.send(message);
}

function Record() {
    document.getElementById("Record").style.backgroundColor = "green";
    document.getElementById("Finish").style.backgroundColor = "";
    send('command/startRecording', '');
}

function Finish() {
    document.getElementById("Finish").style.backgroundColor = "Orange";
    document.getElementById("Record").style.backgroundColor = "";
    send('command/finishLearn', '');
}

function StartData() {
    document.getElementById("StartData").style.backgroundColor = "green";
    document.getElementById("StopData").style.backgroundColor = "";
    sendSensorStart();
}

function StopData() {
    document.getElementById("StartData").style.backgroundColor = "";
    document.getElementById("StopData").style.backgroundColor = "Orange";
    sendSensorStop();
}

function CPipeline() {
    document.getElementById("CPipeline").style.backgroundColor = "Purple";
    cp();
}

function SPipeline() {
    document.getElementById("SPipeline").style.backgroundColor = "Green";
    start();
}

function idle1() {

    document.getElementById("idle1").style.backgroundColor = "green";
    document.getElementById("fist").style.backgroundColor = "";
    document.getElementById("flexion").style.backgroundColor = "";
    document.getElementById("extension").style.backgroundColor = "";
    document.getElementById("pinch2").style.backgroundColor = "";
    document.getElementById("pinch3").style.backgroundColor = "";
    document.getElementById("pinch4").style.backgroundColor = "";
    document.getElementById("pinch5").style.backgroundColor = "";

    let image = document.getElementById("image");
    image.src = "../img/idle.png";

    send('command/gesture', 'idle')
}

function fist() {

    document.getElementById("idle1").style.backgroundColor = "";
    document.getElementById("fist").style.backgroundColor = "green";
    document.getElementById("flexion").style.backgroundColor = "";
    document.getElementById("extension").style.backgroundColor = "";
    document.getElementById("pinch2").style.backgroundColor = "";
    document.getElementById("pinch3").style.backgroundColor = "";
    document.getElementById("pinch4").style.backgroundColor = "";
    document.getElementById("pinch5").style.backgroundColor = "";

    let image = document.getElementById("image");
    image.src = "../img/fist.png";
    send('command/gesture', 'fist')
}

function flexion() {

    document.getElementById("idle1").style.backgroundColor = "";
    document.getElementById("fist").style.backgroundColor = "";
    document.getElementById("flexion").style.backgroundColor = "green";
    document.getElementById("extension").style.backgroundColor = "";
    document.getElementById("pinch2").style.backgroundColor = "";
    document.getElementById("pinch3").style.backgroundColor = "";
    document.getElementById("pinch4").style.backgroundColor = "";
    document.getElementById("pinch5").style.backgroundColor = "";

    let image = document.getElementById("image");
    image.src = "../img/flexion.png";
    send('command/gesture', 'flexion')
}

function extension() {

    document.getElementById("idle1").style.backgroundColor = "";
    document.getElementById("fist").style.backgroundColor = "";
    document.getElementById("flexion").style.backgroundColor = "";
    document.getElementById("extension").style.backgroundColor = "green";
    document.getElementById("pinch2").style.backgroundColor = "";
    document.getElementById("pinch3").style.backgroundColor = "";
    document.getElementById("pinch4").style.backgroundColor = "";
    document.getElementById("pinch5").style.backgroundColor = "";

    let image = document.getElementById("image");
    image.src = "../img/extension.png";
    send('command/gesture', 'extension')
}

function pinch2() {

    document.getElementById("idle1").style.backgroundColor = "";
    document.getElementById("fist").style.backgroundColor = "";
    document.getElementById("flexion").style.backgroundColor = "";
    document.getElementById("extension").style.backgroundColor = "";
    document.getElementById("pinch2").style.backgroundColor = "green";
    document.getElementById("pinch3").style.backgroundColor = "";
    document.getElementById("pinch4").style.backgroundColor = "";
    document.getElementById("pinch5").style.backgroundColor = "";

    let image = document.getElementById("image");
    image.src = "../img/index.png";
    send('command/gesture', 'pinch_thumb-index')
}

function pinch3() {

    document.getElementById("idle1").style.backgroundColor = "";
    document.getElementById("fist").style.backgroundColor = "";
    document.getElementById("flexion").style.backgroundColor = "";
    document.getElementById("extension").style.backgroundColor = "";
    document.getElementById("pinch2").style.backgroundColor = "";
    document.getElementById("pinch3").style.backgroundColor = "green";
    document.getElementById("pinch4").style.backgroundColor = "";
    document.getElementById("pinch5").style.backgroundColor = "";

    let image = document.getElementById("image");
    image.src = "../img/middle.png";
    send('command/gesture', 'pinch_thumb-middle')
}

function pinch4() {

    document.getElementById("idle1").style.backgroundColor = "";
    document.getElementById("fist").style.backgroundColor = "";
    document.getElementById("flexion").style.backgroundColor = "";
    document.getElementById("extension").style.backgroundColor = "";
    document.getElementById("pinch2").style.backgroundColor = "";
    document.getElementById("pinch3").style.backgroundColor = "";
    document.getElementById("pinch4").style.backgroundColor = "green";
    document.getElementById("pinch5").style.backgroundColor = "";

    let image = document.getElementById("image");
    image.src = "../img/pinky.png";
    send('command/gesture', 'pinch_thumb-ring')
}

function pinch5() {

    document.getElementById("idle1").style.backgroundColor = "";
    document.getElementById("fist").style.backgroundColor = "";
    document.getElementById("flexion").style.backgroundColor = "";
    document.getElementById("extension").style.backgroundColor = "";
    document.getElementById("pinch2").style.backgroundColor = "";
    document.getElementById("pinch3").style.backgroundColor = "";
    document.getElementById("pinch4").style.backgroundColor = "";
    document.getElementById("pinch5").style.backgroundColor = "green";

    let image = document.getElementById("image");
    image.src = "../img/ring.png";
    send('command/gesture', 'pinch_thumb-small')
}

function cp() {


    let message = new Paho.MQTT.Message("");
    message.destinationName = "command/cp";
    client.send(message);
}

function start() {


    let message = new Paho.MQTT.Message("");
    message.destinationName = "command/start";
    client.send(message);
}

function sendSensorStart() {

    let objJS = {
        command: "start"
    }

    let message = new Paho.MQTT.Message(JSON.stringify(objJS));
    message.destinationName = "command/controlSensor";
    client.send(message);
}

function sendSensorStop() {

    let objJS = {
        command: "stop"
    }

    let message = new Paho.MQTT.Message(JSON.stringify(objJS));
    message.destinationName = "command/controlSensor";
    client.send(message);
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        displayContents(contents);
    };
    reader.readAsText(file);
}

function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
}

document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);

function sendFile() {
    let file = document.getElementById('file-input').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(e) {
        let contents = e.target.result;
        let message = new Paho.MQTT.Message(contents);
        message.destinationName = "command/file";
        client.send(message);
    }
}