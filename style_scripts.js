function RecordStyle() {
    document.getElementById("Record").style.backgroundColor = "green";
    document.getElementById("Finish").style.backgroundColor = "";
}

function FinishStyle() {

    document.getElementById("Finish").style.backgroundColor = "Orange";
    document.getElementById("Record").style.backgroundColor = "";
}

function StartDataStyle() {

    document.getElementById("StartData").style.backgroundColor = "green";
    document.getElementById("StopData").style.backgroundColor = "";
}

function StopDataStyle() {

    document.getElementById("StartData").style.backgroundColor = "";
    document.getElementById("StopData").style.backgroundColor = "Orange";
}

function CPipelineStyle() {

    document.getElementById("CPipeline").style.backgroundColor = "Purple";
}

function SPipelineStyle() {

    document.getElementById("SPipeline").style.backgroundColor = "Green";
}

function idleStyle() {


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

}

function fistStyle() {


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
}

function flexionStyle() {


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
}

function extensionStyle() {


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
}

function pinch1Style() {


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
}

function pinch2Style() {


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
}

function pinch3Style() {


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
}

function pinch4Style() {


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
}

//export all functions
// export {
//     RecordStyle,
//     FinishStyle,
//     StartDataStyle,
//     StopDataStyle,
//     CPipelineStyle,
//     SPipelineStyle,
//     idleStyle,
//     fistStyle,
//     flexionStyle,
//     extensionStyle,
//     pinch1Style,
//     pinch2Style,
//     pinch3Style,
//     pinch4Style
// };