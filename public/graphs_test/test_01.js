_graph.single.loadOptions(_select_element_id="_single_graph_select", _graph_container="_single_graph_container");

document.getElementById("_single_graph_select").addEventListener("change", function() {_graph.single.loadGraph(_graph_container="_single_graph_container", _q_index=this.value);});

let observers = [];
for (let i=0; i<31; i++) {
    const element_id = "_single_graph_"+ (i+1).toString().padStart(2, '0');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                _graph.single.loadGraph(element_id, i.toString());
                observer.disconnect();
            }
        });
    });
    observer.observe(document.getElementById(element_id));
};