//clock
setImage()
setInterval(clock,100);
function clock(){
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "PM"
    if (min==0 && sec==0){
        setImage()
    }
    if(hr<12){
        am_pm = "AM"
    }
    if (hr>12){
        hr -=12;
    }
    if(hr == 0){
        hr=12;
    }
    hr = hr<10 ? "0" + hr : hr;
    min = min<10 ? "0" + min : min;
    sec = sec<10 ? "0" + sec : sec;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("secs").innerHTML = sec;
    document.getElementById("am_pm").innerHTML = am_pm;


}

// set image according to clock value
function setImage(){
    let time = new Date();
    let hr24 = time.getHours();
    let wakeup = parseInt(document.getElementById("wakeup").value);
    let lunch =parseInt(document.getElementById("lunch").value);
    let nap = parseInt(document.getElementById("nap").value);
    let x = document.getElementById("box");
    if(hr24 === wakeup){
        let image = document.getElementById("image");
        let caption = "     WAKE UP !!";
        document.getElementById("caption").innerHTML = caption;
        x.style.display = "block";
        x.innerHTML = "GOOD MORNING !!"
        image.src = "images/morning.jpg" ;
    }
    else if(hr24 === lunch) {
        let image = document.getElementById("image");
        let caption = "     LET'S HAVE SOME LUNCH !!";
        document.getElementById("caption").innerHTML = caption;
        x.style.display = "block";
        x.innerHTML = "GOOD AFTERNOON !!"
        image.src = "images/lunch.jpg";
    }
    else if(hr24 === nap){
        let image = document.getElementById("image");
        let caption = "     GOOD NIGHT !!";
        document.getElementById("caption").innerHTML = caption;
        x.style.display = "block";
        x.innerHTML = "GOOD NIGHT !!"
        image.src = "images/sleep.jpg";  
    }
    else{
        let image = document.getElementById("image");
        let caption = "     LET'S DO SOME WORK !!";
        document.getElementById("caption").innerHTML = caption;
        x.style.display = "None";
        image.src = "images/work.png"; 
    }
}


//change image when click on party
function partyImage(){
    let party =document.getElementById("party");
    let image = document.getElementById("image");
    let caption = document.getElementById("caption");
    if (party.innerHTML ==="Party time!"){
        document.getElementById("party").innerHTML = "Party over!";
        caption.innerHTML="LET'S HAVE SOME FUN";
        image.src = "images/party.svg"; 
    } 
    else{
        document.getElementById("party").innerHTML = "Party time!";
        setImage();
    }
    
}

// disable same option in other dropdowns
function optDisable1(){
    let wakeupSel = document.getElementById("wakeup").value;
    for(let i=0;i<24;i++){
        if (i==wakeupSel){
            document.getElementById("lunch").options[i].disabled = true;
            document.getElementById("nap").options[i].disabled = true;
        }
        else{
            document.getElementById("lunch").options[i].disabled = false;
            document.getElementById("nap").options[i].disabled = false;
        } 
   }
 }

 function optDisable2(){
    let lunchSel = document.getElementById("lunch").value;
    for(let i=0;i<24;i++){
        if (i==lunchSel){
            document.getElementById("wakeup").options[i].disabled = true;
            document.getElementById("nap").options[i].disabled = true;
        }
        else{
            document.getElementById("wakeup").options[i].disabled = false;
            document.getElementById("nap").options[i].disabled = false;
        } 
   }
 }
 function optDisable3(){
    let napSel = document.getElementById("nap").value;
    for(let i=0;i<24;i++){
        if (i==napSel){
            document.getElementById("lunch").options[i].disabled = true;
            document.getElementById("wakeup").options[i].disabled = true;
        }
        else{
            document.getElementById("lunch").options[i].disabled = false;
            document.getElementById("wakeup").options[i].disabled = false;
        } 
   }
 }

