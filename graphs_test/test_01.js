_graph.single.loadOptions("_single_graph_select");
document.getElementById("_single_graph_select").addEventListener("change", function() {_graph.single.loadGraph(this.id, this.value);});