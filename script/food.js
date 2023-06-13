define(function(){
    class Food{
        constructor(name="", description="", pictureUrl="") {
            this.name = name;
            this.description = description;
            this.pictureUrl = pictureUrl;
        }
    }
    
    var foodList = [
        new Food("臭豆腐(Stinky Tofu)", "长沙臭豆腐好！", "https://youimg1.c-ctrip.com/target/100o0n000000eh0brA7BA.jpg"),
        new Food("西瓜(Watermelon)","西瓜奇怒！","https://th.bing.com/th/id/OIP.ge2CV54nr2o5UeGKdTOosQHaE7?pid=ImgDet&rs=1"),
    ];

    console.log("load food.js");

    return {
        "Food": Food,
        "foodList": foodList,
    }
});