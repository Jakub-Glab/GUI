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
            send('command/record', '');
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
            image.src = "Images/idle.png";

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
            image.src = "Images/fist.png";
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
            image.src = "Images/flexion.png";
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
            image.src = "Images/extension.png";
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
            image.src = "Images/pinch1.png";
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
            image.src = "Images/pinch2.png";
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
            image.src = "Images/pinch3.png";
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
            image.src = "Images/pinch4.png";
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

        function Auto() {
            window.location.href = "auto.html";
        }

        function Manual() {
            window.location.href = "gui.html";
        }