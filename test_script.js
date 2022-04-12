import * as style from './style_scripts.js';

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
    style.RecordStyle();
    send('command/record', '');
}

function Finish() {
    style.FinishStyle();
    send('command/finishLearn', '');
}

function StartData() {
    style.StartDataStyle();
    sendSensorStart();
}

function StopData() {
    style.StopDataStyle();
    sendSensorStop();
}

function CPipeline() {
    style.CPipelineStyle();

    let message = new Paho.MQTT.Message("");
    message.destinationName = "command/cp";
    client.send(message);
}

function SPipeline() {
    style.SPipelineStyle();

    let message = new Paho.MQTT.Message("");
    message.destinationName = "command/start";
    client.send(message);
}

function idle1() {
    style.idleStyle();
    send('command/gesture', 'idle')
}

function fist() {
    style.fistStyle();
    send('command/gesture', 'fist')
}

function flexion() {
    style.flexionStyle();
    send('command/gesture', 'flexion')
}

function extension() {
    style.extensionStyle();
    send('command/gesture', 'extension')
}

function pinch2() {
    style.pinch1Style();
    send('command/gesture', 'pinch_thumb-index')
}

function pinch3() {
    style.pinch2Style();
    send('command/gesture', 'pinch_thumb-middle')
}

function pinch4() {
    style.pinch3Style();
    send('command/gesture', 'pinch_thumb-ring')
}

function pinch5() {
    style.pinch4Style();
    send('command/gesture', 'pinch_thumb-small')
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

function Auto() {
    window.location.href = "auto.html";
}

function Manual() {
    window.location.href = "gui.html";
}