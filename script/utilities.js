define(function () { 
    function ShuffleArray(array) {
        let lastPointer = array.length - 1;
        while (lastPointer > 0) {
            let randomIndex = Math.floor(Math.random() * lastPointer);
            let temp = array[lastPointer];
            array[lastPointer] = array[randomIndex];
            array[randomIndex] = temp;
            lastPointer--;
        }
        return array;
    }

    return {
        "ShuffleArray":ShuffleArray,
    };
});