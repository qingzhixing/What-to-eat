define(["utilities"],function(utilities){
    class Food{
        constructor(name="", description="", pictureUrl="") {
            this.name = name;
            this.description = description;
            this.pictureUrl = pictureUrl;
        }
        toString = function () {
            return "name:" + this.name + "\ndescription:" + this.description + "\npictureUrl:" + this.pictureUrl;
        }
    }
    
    var foodList = [
        new Food("臭豆腐(Stinky Tofu)", "长沙臭豆腐好！", "https://youimg1.c-ctrip.com/target/100o0n000000eh0brA7BA.jpg"),
        new Food("西瓜(Watermelon)", "西瓜奇怒！", "https://th.bing.com/th/id/OIP.ge2CV54nr2o5UeGKdTOosQHaE7?pid=ImgDet&rs=1"),
        new Food("板烧鸡腿堡(Grilled Chicken Sandwich)","麦当当板烧鸡腿堡好吃🍔😋","https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2022/08/202208081012161806.png"),
        new Food("麻辣小龙虾(Spicy Crayfish)", "口味虾~(吸溜)", "https://img.zcool.cn/community/016eb15d0f16aea801205e4b68476d.jpg@1280w_1l_2o_100sh.jpg"),
        new Food("烤鸭(Baked Chicken)", "烤鸭奇怒！", "https://img.zcool.cn/community/0129f15eb90670a80121481446c7a5.jpg@1280w_1l_2o_100sh.jpg"),
        new Food("烤肉(Baked Rooibos)", "一起去吃烤肉吧！(上山)", "https://ts1.cn.mm.bing.net/th/id/R-C.c0b89c4104b92147d5f9af78a107b7bf?rik=MOa8fPLWm1GMvA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50021%2f2069.jpg_wh860.jpg&ehk=pxqxSdi1DrIrAuvlItkijJwVk2Kf%2fanWqtlU3Heq5mE%3d&risl=&pid=ImgRaw&r=0"),
        new Food("崩破(Shi)","必杀技·地天！斩铁！吃侍吧！","./static/image/崩破.png"),
    ];

    function RandomFood() {
        if (typeof(arguments.callee.arrayIndex) == "undefined" ||
            arguments.callee.arrayIndex >= foodList.length) {
            arguments.callee.arrayIndex = 0;
            utilities.ShuffleArray(foodList);
            console.info("Shuffled food list");
        }
        console.log("arrayIndex:"+arguments.callee.arrayIndex);
        return foodList[arguments.callee.arrayIndex++];
    }

    return {
        "Food": Food,
        "foodList": foodList,
        "RandomFood":RandomFood,
    }
});