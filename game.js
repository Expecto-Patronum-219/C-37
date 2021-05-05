class Game{
    constructor(){
    }
    getState(){
        var gs=database.ref("gameState")
        gs.on("value",function (data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(30)
        text("Game Start" , 100, 100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var DP=130
            for(var plr in allPlayers)
            {
                DP=DP+30;
                textSize(15)
                text(allPlayers[plr].name+":"+allPlayers[plr].distance, 100, DP)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50
            player.update()
        }
    }
}