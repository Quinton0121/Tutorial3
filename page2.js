var bgText = document.getElementById("bgText");

var preDiv = document.getElementById("preview");

var menu = document.getElementById("menu");

var c1 = document.getElementById("choice1");

var c2 = document.getElementById("choice2");

var c3 = document.getElementById("choice3");

var pickChooser = document.getElementById("pickChooser");

var numUse = 0;
bgText.addEventListener("keyup",function(ev){
    //console.log(ev.keyCode);
    
    //13 is asskii code enter
    if(ev.keyCode == 13){
        
        console.log(c1.checked, c2.checked, c3.checked);
        
        if(c1.checked){
           // document.body.style.backgroundColor = bgText.value;
            if(bgText.value == "why"){
                document.body.style.backgroundImage = "url(1.jpg)";
            }else  if(bgText.value == "man"){
                document.body.style.backgroundImage = "url(2.jpg)";  
            }else if(bgText.value == "logo"){
                document.body.style.backgroundImage = "url(3.jpg)";
            }else {
                document.body.style.backgroundColor = bgText.value;
            }
            
          
            
           
        } else if(c2.checked){
          //  preDiv.style.backgroundColor = bgText.value;
             if(bgText.value == "why"){
                preDiv.style.backgroundImage = "url(1.jpg)";
            }else  if(bgText.value == "man"){
                preDiv.style.backgroundImage = "url(2.jpg)";  
            }else if(bgText.value == "logo"){
                preDiv.style.backgroundImage = "url(3.jpg)";
            }else {
                preDiv.style.backgroundColor = bgText.value;
            }
            
             
            
        }else if(c3.checked){
           
          //  menu.style.backgroundColor = bgText.value;
            if(bgText.value == "why"){
                menu.style.backgroundImage = "url(1.jpg)";
            }else  if(bgText.value == "man"){
                menu.style.backgroundImage = "url(2.jpg)";  
            }else if(bgText.value == "logo"){
                menu.style.backgroundImage = "url(3.jpg)";
            }else {
                menu.style.backgroundColor = bgText.value;
            }
        } else {
            alert("Choose an Option");
        }
        
        //preDiv.style.backgroundColor = bgText.value;
        bgText.value = "";
        
        
        numUse++;
        console.log(numUse);
        if(numUse > 5){
            //alert("You reach the limit. Please pay to use more");
            document.getElementById("display").innerHTML = "You reach the limit. Please pay to use more";
        }
    
    }
});

pickChooser.addEventListener("change",function(){
    var picNum = parseInt(pickChooser.value);
    console.log(picNum);
    if(picNum > 3){
        console.log(picNum);
        pickChooser.value = 1;
    }
    
    if(picNum < 1){
        pickChooser.value = 3;
    }
    preDiv.style.backgroundImage = "url("+pickChooser.value+".jpg)";
});