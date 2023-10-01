/*
    write a function:
        - eLandscape call
        - take two arguments (width and height)
        - return true if the image is in landscape mode
*/


// my solution
(() => {
    /*
        Landscape image: 1280 x 720  Pixels. 
        Portrait  image: 1280 x 1920 Pixels.
    */
    function mySolution() {

        const eLandscape = (width, height) => {
            const max = Math.max(width, height);
            return max === width ? true : false;
        };

        const width = 1280;
        const height = 720;
        const result = eLandscape(width, height);

        console.log(result);
    };

    mySolution();

})();