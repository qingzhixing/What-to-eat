require.config({
    baseUrl: "script",
});

require(["food"], function (food) { 
    console.log(("Load in main.js"));
    
    function StartChangeTitleTextEmoji() {
        const titleLeftEmojis = ['🍕','🥓','🥩','🍗','🍖','🧇'];
        const titleRightEmojis = ['🍛','🍘','🧆','🍨','🍧','🍦'];
        const basicTitle = "今天吃什么?";

        GenerateExtendTitle = () => {
            let title = basicTitle;
            let leftEmoji = titleLeftEmojis[Math.floor(Math.random() * titleLeftEmojis.length)];
            let rightEmoji = titleRightEmojis[Math.floor(Math.random() * titleRightEmojis.length)];
            title = leftEmoji + title + rightEmoji;
            return title;
        }

        SetRandomEmojisTitle = () => {
            let title= GenerateExtendTitle();
            document.title = title;
            setTimeout(SetRandomEmojisTitle, 500);
        }

        SetRandomEmojisTitle();
    }

    function RegisterExtractionButtonHandler() {
        let extractionButton = document.getElementById("extraction-button");
        extractionButton.onclick = () => {
            let randomFood = food.RandomFood();

            let popUpWindow = document.getElementById("pop-up-window");
            let windowTitle = document.getElementById("window-title");
            let windowPicture = document.getElementById("window-picture");
            let windowDescription = document.getElementById("window-description");

            windowTitle.innerText = randomFood.name;
            windowPicture.src = randomFood.pictureUrl;
            windowDescription.innerText = randomFood.description;

            popUpWindow.style.display = "";
        }
    }

    function RegisterWindowConfirmButtonHandler() {
        let confirmButton = document.getElementById("window-confirm-button");
        let popUpWindow = document.getElementById("pop-up-window");
        confirmButton.onclick = () => {
            popUpWindow.style.display = "none";
            // console.log("clicked the confirm button");
        }
    }

    function ScriptLoadOK() {
        let scriptLoadMessageDiv = document.getElementById("script-load-message-div");
        scriptLoadMessageDiv.innerText = "脚本加载成功！请开始使用吧！";
    }

    window.onload = () => {
        StartChangeTitleTextEmoji();
        RegisterExtractionButtonHandler();
        RegisterWindowConfirmButtonHandler();
        console.log("@qingzhixing 2023-XX-XX");
        // console.log(food.foodList);
        ScriptLoadOK();
    }


});


