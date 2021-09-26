function elapsedTime(){
    let birthday = new Date(1985, 9, 13, 0, 0, 0);
    let nowTime = new Date();

    let elapsedTime= nowTime.getTime()/1000 - birthday.getTime()/1000;
    document.getElementById("birth_time").innerText = "あなたが生まれてから" + elapsedTime + "秒経過しています"
}

setInterval(elapsedTime, 1000);