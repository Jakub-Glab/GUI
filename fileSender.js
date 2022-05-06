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