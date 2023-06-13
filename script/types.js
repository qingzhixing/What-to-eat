define(function(){
    var Picture = function (url, title, description = "") {
        return {
            url,
            title,
            description
        };
    };
    console.log("load types.js");

    return {
        "Picture": Picture,
    }
});