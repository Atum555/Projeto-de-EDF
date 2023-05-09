// CHANGE GRAPH
const onSingleGraphSelectChange = () => {
    const _q_index = document.getElementById("_single_graph_select").value;

    switch (_dataHandler.getGraphInfo("single", _q_index)["type"]) {
        case "Pie":
            _graph = new CanvasJS.Chart("_single_graph_container", {
                animationEnabled: true,
                theme: "light2",
                title:{
                    text: _dataHandler.getGraphInfo("single", _q_index)["title"]
                },
                data: [{
                    type: "doughnut",
                    startAngle: -90,
                    //innerRadius: 60,
                    indexLabelFontSize: 17,
                    indexLabel: "{label} - #percent%",
                    toolTipContent: "<b>{label}:</b> {y} (#percent%)",
                    dataPoints: _dataHandler.getDataPoints("single", _q_index)
                }]
            });
            _graph.render();
            break;
        case "Bar":
        default:
            _graph = new CanvasJS.Chart("_single_graph_container", {
                animationEnabled: true,
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                title:{
                    text: _dataHandler.getGraphInfo("single", _q_index)["title"]
                },
                data: [{        
                    type: "column",  
                    dataPoints: _dataHandler.getDataPoints("single", _q_index)
                }]
            });
            _graph.render();
    }
}

// SETUP SITE WITH DATA
const onDataLoaded = () => {
    // ADD DATA TO _single_graph_select
    (function() {
        const _select = document.getElementById("_single_graph_select");
        for (let i = 0; i < _dataHandler.getQuestions().length; i++) {
            let _option = document.createElement("option");
            _option.value = i;
            _option.innerHTML = _dataHandler.getQuestions()[i];
            _select.appendChild(_option);
        }
    })();
};