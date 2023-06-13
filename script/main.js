require.config({
    baseUrl: "script",
});

require(["types"], function (types) { 
    
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

    window.onload= () => {
        StartChangeTitleTextEmoji();
        console.log("@qingzhixing 2023-XX-XX");
        console.log(types.Picture());
    }
    
});


