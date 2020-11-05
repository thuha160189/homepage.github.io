"use strict";
const NORMAL = 250;
const TURBO = 50;
let timer = NORMAL;
let interval;
let currentFrame = 0;
let preset;

function onStart(){
    if(preset !== "change"){
        preset = document.getElementById('text-area').value;
    }
    interval = setInterval(createAnimation, timer);
}

function createAnimation(){
    let option = document.getElementById('animation');
    let whichOne = option.options[option.selectedIndex].value;
    if(ANIMATIONS[whichOne] !== null && ANIMATIONS[whichOne] !==""){
        let arr = ANIMATIONS[whichOne].split("=====\n");
        if(preset !== null && preset !== "change"){
            arr.unshift(preset);
        }
        if(currentFrame >= arr.length){
            currentFrame = 0;
        }
        document.getElementById('text-area').value = arr[currentFrame++];
        disableAnimation(false);
    } else if(ANIMATIONS[whichOne] === null){
        
    } else{
        clearInterval(interval);
    }

}

function disableAnimation(isStart){
    document.getElementById("start").disabled = isStart;
    document.getElementById("stop").disabled = isStart;
    document.getElementById("animation").disabled = isStart;
}

function onChangeAnimation() {
    document.getElementById("text-area").value = "";
    preset = "";
}

function onStop(){
    disableAnimation(false);
    clearInterval(interval);
    if(preset !== null && preset !=="" && preset !== "chang"){
        document.getElementById('text-area').value = preset;
    }
}

function onChangeSize(){
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function onTurbo(){
    let valueChecked = document.getElementById("turbo").checked;
    timer = valueChecked ? TURBO : NORMAL;
    let myTextArea = document.getElementById("text-area").value;
    if(myTextArea !== null && myTextArea === ""){
        clearInterval(interval);
        interval = setInterval(createAnimation, timer);
    }
}
window.onload = function(){
    document.getElementById('start').onclick = onStart;
    document.getElementById('stop').onclick = onStop;
    document.getElementById('animation').onchange = onChangeAnimation;
    document.getElementById('fontsize').onchange = onChangeSize;
    document.getElementById('turbo').onchange = onTurbo;
}