class DataSelector {
    constructor(_data_selector_container_id) {
        this._data_selector_container_id = _data_selector_container_id;
        this._graph = new _graph.Dinamic("_dinamic_graph_1");
        this.lines = [];

        let button = document.createElement("button");
        button.textContent = "Adicionar Série";
        button.className = "btn";
        button.addEventListener("click", () => {this.addLine()});
        document.getElementById(this._data_selector_container_id).appendChild(button);
    }
    addLine() {
        const _line_id = `${this._data_selector_container_id}-line-${(this.lines[-1]) ? this.lines[-1].index+1 : 1}`;
        const _line_i = (this.lines[-1]) ? this.lines[-1].index+1 : 1;
        
        // Line Div Container
        let _line_div = document.createElement("div");
        _line_div.id = _line_id;
        _line_div.className = "filter_line_container";

        // Title
        let _title_text = document.createElement("span");
        _title_text.id = `${_line_id}-title`;
        _title_text.innerText = `Série ${_line_i}`;
        _title_text.contentEditable = true;
        _title_text.addEventListener('input', () => {
            this.lines.forEach((line) => {
                if (line.id == _line_id) {
                    line.title = _title_text.innerText;
                }
            });
            this.render();
        });

        // Add Filter Button
        let add_button = document.createElement("button");
        add_button.textContent = "Adicionar Filtro";
        add_button.className = "btn";
        add_button.addEventListener("click", () => {this.addFilter(_line_id)});

        // Delete Line Button
        let delete_button = document.createElement("button");
        delete_button.textContent = "Apagar Série";
        delete_button.className = "btn";
        delete_button.addEventListener("click", () => {this.deleteLine(_line_id)});
        
        // Add to Page
        _line_div.appendChild(_title_text);
        _line_div.appendChild(add_button);
        _line_div.appendChild(delete_button);
        document.getElementById(this._data_selector_container_id).appendChild(_line_div);

        this.lines.push({id: _line_id, index: _line_i});
        this.render();
    }
    addFilter(line) {
        console.log(line);
        this.render();
    }
    deleteLine(line) {
        console.log(line);
        this.render();
    }
    render() {
        console.log("render");
    }
}

let _data_selector1 = new DataSelector("data-selecter-container-1");