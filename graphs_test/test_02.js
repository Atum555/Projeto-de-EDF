class DataSelector {
    constructor(_data_selector_container_id) {
        this._data_selector_container_id = _data_selector_container_id;
        this._graph = new _graph.Dinamic("_dinamic_graph_1");
        this.lines = [];
        
        // Add Selects
        let select1 = document.createElement("select");
        let select2 = document.createElement("select");
        select1.id = `${this._data_selector_container_id}-select-1`;
        select2.id = `${this._data_selector_container_id}-select-2`;
        select1.options.add(new Option("Pergunta1", "", true, true));
        select2.options.add(new Option("Pergunta2", "", true, true));
        Object.keys(_data.questions_info).forEach((key) => {
            select1.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].id, false, false));
            select2.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].id, false, false));
        });
        let middle_text = document.createElement("span");
        middle_text.innerText = " X ";
        document.getElementById(this._data_selector_container_id).appendChild(select1);
        document.getElementById(this._data_selector_container_id).appendChild(middle_text);
        document.getElementById(this._data_selector_container_id).appendChild(select2);

        // Add Series Button
        let button = document.createElement("button");
        button.textContent = "Adicionar Série";
        button.className = "btn";
        button.addEventListener("click", () => {this.addLine()});
        document.getElementById(this._data_selector_container_id).appendChild(button);
    }
    addLine() {
        const _line_id = `${this._data_selector_container_id}-line-${(this.lines[this.lines.length-1]) ? this.lines[this.lines.length-1].index+1 : 1}`;
        const _line_i = (this.lines[this.lines.length-1]) ? this.lines[this.lines.length-1].index+1 : 1;
        
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
        let delete_button_img = document.createElement("img");
        delete_button_img.src = "images/delete_icon.png";
        delete_button_img.alt = "Delete";
        delete_button_img.className = "icon";
        let delete_button_div = document.createElement("div");
        delete_button_div.appendChild(delete_button_img);
        delete_button_div.style.display = "inline-block";
        delete_button_div.style.transform = "translate(0px, +25%)";
        delete_button_div.addEventListener("click", () => {this.deleteLine(_line_i)});
        
        // Add to Page
        _line_div.appendChild(_title_text);
        _line_div.appendChild(add_button);
        _line_div.appendChild(delete_button_div);
        document.getElementById(this._data_selector_container_id).appendChild(_line_div);

        this.lines.push({id: _line_id, index: _line_i});
        this.render();
    }
    addFilter(line) {
        console.log(line);
        this.render();
    }
    deleteLine(line_index) {
        this.lines.forEach((line, i) => { if (line.index == line_index) { document.getElementById(line.id).remove(); } });
        this.lines = this.lines.filter((line) => line.index != line_index);
        this.render();
    }
    render() {
        console.log("render");
    }
}

let _data_selector1 = new DataSelector("data-selecter-container-1");