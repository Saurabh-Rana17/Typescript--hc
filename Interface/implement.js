var Social = /** @class */ (function () {
    function Social(camera, filter, burst) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
    }
    return Social;
}());
var Youtube = /** @class */ (function () {
    function Youtube(camera, filter, burst) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
    }
    Youtube.prototype.playVdeo = function () {
        return "playing video";
    };
    return Youtube;
}());
var media = new Youtube("", true, 10);
console.log(media.playVdeo());
function test(obj) {
    console.log(obj);
}
