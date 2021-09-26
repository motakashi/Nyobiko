let game = {
    startTime : null,
    stopTime: null,
    displayArea : document.getElementById("display-area"),
    start : function (){
        game.startTime = Date.now();
        console.log("start: " + game.startTime);
        console.log("開始しました。")
    },
    stop : function(){
        game.stopTime = Date.now();
        console.log("終了しました");
        console.log("stop: " + game.stopTime);
        game.displayAreaAction();
    },
    displayAreaAction : function(){
        let resultTime = game.stopTime - game.startTime
        console.log(resultTime);
        if (resultTime < 9500){
            game.displayArea.innerText = "早かったです。" + resultTime/1000 + "秒でした。"
        }
    
        if (resultTime > 10500){
            game.displayArea.innerText = "遅かったです。" + resultTime/1000 + "秒でした。"
        }
    
        if (resultTime >= 9500 && resultTime <= 10500){
            game.displayArea.innerText = "成功です" + resultTime/1000 + "秒でした。"
        }
    }
}

if (confirm("開始します")){
    game.start();
    document.body.onkeydown = game.stop;
}



