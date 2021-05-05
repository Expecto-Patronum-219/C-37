class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }
    getCount(){
        var pc=database.ref("playerCount")
        pc.on("value",(data)=>{
        playerCount=data.val()
        })
    }
    updateCount(Count){
        database.ref("/").update({
            playerCount:Count
        })
    }
    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({name:this.name, distance:this.distance})
    }


static getPlayerInfo(){
    var playerInfo=database.ref("players")
    playerInfo.on("value", (data)=>{
        allPlayers=data.val()
    })
}
}