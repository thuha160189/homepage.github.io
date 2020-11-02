
function biggerDecoration(){
    var temp = document.getElementById("txt");
	var style = window.getComputedStyle(temp, null).getPropertyValue("font-size");
    //var style = temp.style.fontSize;
	var fontSize = parseFloat(style);
    let timer = null;
    if(timer==null){
        timer=setInterval(function(){
            fontSize = fontSize + 2;
	    temp.style.fontSize = fontSize + "pt";
        },500);
    }else{
        clearInterval(timer);
        timer =null;
    }	
}
function convertTxt(){
    var tmp = document.getElementById("txt").value;
    var arr = tmp.split(" ");
    arr = Array.from(arr).map(x => {
        if(isVowel(x.charAt(0))) {
            return x + "ay";
        }
        else {
            return x.slice(1) + x.charAt(0) + "ay";
        }
    });
    document.getElementById('txt').value = Array.from(arr).join(" ");
}
function replaceW(){
    var tmp= document.getElementById('txt').value;
    var arr = tmp.split(" ");
    arr = Array.from(arr).map(x=> {
        if(x.length>=5){
           return "Malkovitch";
        }
        else{ 
            return x;
        }
    });
    document.getElementById('txt').value = Array.from(arr).join(" ");
}
function isVowel(ch){
    let arr= ['A', 'I', 'U', 'E', 'O'];
    if(ch==null||ch.length==0){ 
        return false;
    }
    else{
        return arr.indexOf(ch.toUpperCase())>=0;
    }
}

window.onload = function() {
    document.getElementById('btn').onclick=function(){
       alert("Hello, world!");
       document.getElementById('btn').onclick = biggerDecoration;
    }
	document.getElementById('btn1').onclick = convertTxt;
	document.getElementById('btn2').onclick = replaceW;
    //document.getElementById('btn').onclick = delayMsg;
   

	
	document.getElementById('bling').onchange = function(){
		var objTxt = document.getElementById('txt');
		if (document.getElementById('bling').checked){
			//objTxaBox.className = "fontbold";
			objTxt.style.fontWeight= "bold";
            objTxt.style.color="green";
            objTxt.style.textDecoration="underline";
            document.body.style.background= "url('background.jpeg')";
            alert("checked")
		}
		else 
		{
			objTxt.style.fontWeight= "normal";
            objTxt.style.textDecoration="none";
			document.body.style.backgroundImage = "";
		}
		
		
	};
};
