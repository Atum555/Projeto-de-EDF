window.onload = () => {
    let _graph = new CanvasJS.Chart("_graph_container", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Top Oil Reserves"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [      
                { y: 300878, label: "Venezuela" },
                { y: 266455,  label: "Saudi" },
                { y: 169709,  label: "Canada" },
                { y: 158400,  label: "Iran" },
                { y: 142503,  label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800,  label: "UAE" },
                { y: 80000,  label: "Russia" }
            ]
        }]
    });
    _graph.render();
};

let _data;
let _graph;

// CHANGE GRAPH
const onGraphSelectChange = (event) => {
    console.log("it changed")
}

// SETUP SITE WITH DATA
const onDataLoaded = () => {
    (function() {
        const _select = document.getElementById("_graph_select");
        for (let i = 5; i < _data["questions"].length; i++) {
            let _option = document.createElement("option");
            _option.value = i;
            _option.innerHTML = _data["questions"][i];
            _select.appendChild(_option);
        }
        const firstChild = _select.firstElementChild;
        firstChild.classList.add('selected');
        const changeEvent = new Event('change');
    firstChild.dispatchEvent(changeEvent);
    })();
};

// GET DATA
(function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://atum.ga/edf/_data.json", true);
    xhr.responseType = "json"; 
    xhr.onload = function() {
        if (xhr.status === 200) {
            _data = xhr.response;
            onDataLoaded();
        }
    };
    xhr.send();
})();