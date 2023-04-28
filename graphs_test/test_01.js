class _Graph {
    constructor() {
        this.canvas = _graphCanvas;

    }
    render() {
        // Clear canvas
        let ctx = this.canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw Graph
        
    }
}

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

let resizeGraphCanvas = () => {
    _graphCanvas.width = Math.floor(_graphCanvas.parentElement.clientWidth) % 2 ? Math.floor(_graphCanvas.parentElement.clientWidth) - 1 : Math.floor(_graphCanvas.parentElement.clientWidth);
    _graphCanvas.height = Math.floor(_graphCanvas.parentElement.clientHeight) % 2 ? Math.floor(_graphCanvas.parentElement.clientHeight) -1 : Math.floor(_graphCanvas.parentElement.clientHeight);
    _graph.render();
}
window.onresize = resizeGraphCanvas;
window.onkeydown = (e) => {
    switch (e.code) {
        case "KeyR": _graph.render(); break;
    }
};
window.onload = () => {
    resizeGraphCanvas();
    _graph.render();
};

let _graphCanvas = document.getElementById("graphCanvas");
let _graph = new _Graph();


/* ---INTERACTIONS---
Redraw   {KeyR}
 */