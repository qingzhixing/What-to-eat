define(function(){
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
    ];

    function RandomFood() {
        return foodList[Math.floor(Math.random() * foodList.length)];
    }

    return {
        "Food": Food,
        "foodList": foodList,
        "RandomFood":RandomFood,
    }
});