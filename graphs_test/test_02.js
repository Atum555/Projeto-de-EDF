class DataSelector {
    constructor(_data_selector_container_id, _dinamic_graph_id) {
        this._data_selector_container_id = _data_selector_container_id
        this._graph = new _graph.Dinamic(_dinamic_graph_id)
        this.lines = []

        // Add Selects
        let select1 = document.createElement("select")
        let select2 = document.createElement("select")
        select1.id = `${this._data_selector_container_id}-select-1`
        select2.id = `${this._data_selector_container_id}-select-2`
        select1.options.add(new Option("Pergunta1", "", true, true))
        select2.options.add(new Option("Pergunta2", "", true, true))
        Object.keys(_data.questions_info).forEach(key => {
            select1.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].id, false, false))
            select2.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].id, false, false))
        })
        select1.addEventListener("change", () => {
            this.render()
        })
        select2.addEventListener("change", () => {
            this.render()
        })
        let middle_text = document.createElement("span")
        middle_text.innerText = " X "
        document.getElementById(this._data_selector_container_id).appendChild(select1)
        document.getElementById(this._data_selector_container_id).appendChild(middle_text)
        document.getElementById(this._data_selector_container_id).appendChild(select2)

        // Add Series Button
        let button = document.createElement("button")
        button.textContent = "Adicionar Série"
        button.className = "btn"
        button.addEventListener("click", () => {
            this.addLine()
        })
        document.getElementById(this._data_selector_container_id).appendChild(button)
    }
    addLine() {
        const _line_id = `${this._data_selector_container_id}-line-${this.lines[this.lines.length - 1] ? this.lines[this.lines.length - 1].index + 1 : 1}`
        const _line_i = this.lines[this.lines.length - 1] ? this.lines[this.lines.length - 1].index + 1 : 1

        // Line Div Container
        let _line_div = document.createElement("div")
        _line_div.id = _line_id
        _line_div.className = "filter_line_container"

        // Title
        let _title_text = document.createElement("span")
        _title_text.id = `${_line_id}-title`
        _title_text.innerText = `Série ${_line_i}`
        _title_text.contentEditable = true
        _title_text.addEventListener("input", () => {
            this.lines.forEach(line => {
                if (line.id == _line_id) {
                    line.title = _title_text.innerText
                }
            })
            this.render()
        })

        // Add Filter Button
        let add_button = document.createElement("button")
        add_button.id = `${_line_id}-add-filter-button`
        add_button.textContent = "Adicionar Filtro"
        add_button.className = "btn"
        add_button.addEventListener("click", () => {
            this.addFilter(_line_id)
        })

        // Delete Line Button
        let delete_button_img = document.createElement("img")
        delete_button_img.src = "images/delete_icon.png"
        delete_button_img.alt = "Delete"
        delete_button_img.className = "icon"
        let delete_button_div = document.createElement("div")
        delete_button_div.appendChild(delete_button_img)
        delete_button_div.style.display = "inline-block"
        delete_button_div.style.transform = "translate(0px, +25%)"
        delete_button_div.addEventListener("click", () => {
            this.deleteLine(_line_i)
        })

        // Add to Page
        _line_div.appendChild(_title_text)
        _line_div.appendChild(add_button)
        _line_div.appendChild(delete_button_div)
        document.getElementById(this._data_selector_container_id).appendChild(_line_div)

        this.lines.push({ id: _line_id, index: _line_i, filters: [] })
        this.render()
    }
    deleteLine(line_index) {
        this.lines.forEach((line, i) => {
            if (line.index == line_index) {
                document.getElementById(line.id).remove()
            }
        })
        this.lines = this.lines.filter(line => line.index != line_index)
        this.render()
    }
    addFilter(line_id) {
        const _filter_id = `${line_id}-filter-${this.lines.forEach(line => {
            if (line.id == line_id) {
                return line.filters.length ? line.filters.length + 1 : 1
            }
        })}`
        const _filter_i = this.lines.forEach(line => {
            if (line.id == line_id) {
                return line.filters.length ? line.filters.length + 1 : 1
            }
        })

        // Filter Div Container
        let _filter_div = document.createElement("div")
        _filter_div.id = _filter_id

        // Question Select
        let _question_select = document.createElement("select")
        _question_select.id = `${_filter_div.id}-question-select`
        _question_select.options.add(new Option("Pergunta", "", true, true))
        Object.keys(_data.questions_info).forEach(key => {
            _question_select.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].id, false, false))
        })
        _question_select.addEventListener("change", () => {
            this.render()
        })

        // Delete Filter Button
        let delete_button_img = document.createElement("img")
        delete_button_img.src = "images/delete_icon.png"
        delete_button_img.alt = "Delete"
        delete_button_img.className = "icon"
        let delete_button_div = document.createElement("div")
        delete_button_div.appendChild(delete_button_img)
        delete_button_div.style.display = "inline-block"
        delete_button_div.style.transform = "translate(0px, +25%)"
        delete_button_div.addEventListener("click", () => {
            this.deleteFilter(_filter_id)
        })

        // Add to Page
        _filter_div.appendChild(_question_select)
        _filter_div.appendChild(delete_button_div)
        document.getElementById(line_id).insertBefore(_filter_div, document.getElementById(`${line_id}-add-filter-button`))

        this.lines.forEach(line => {
            if (line.id == line_id) {
                line.filters.push({ id: _filter_id, index: _filter_i })
            }
        })
        this.render()
    }
    deleteFilter(filter_id) {
        document.getElementById(filter_id).remove()
        this.lines[line_index - 1].filters = this.lines[line_index - 1].filters.filter(filter => filter.index != filter_index)
        this.render()
    }
    render() {
        console.log("render")
    }
}

let _data_selector_1 = new DataSelector("data-selecter-container-1", "dinamic-graph-1")
