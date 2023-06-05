class DataSelector {
    constructor(_data_selector_container_id, _dinamic_graph_id) {
        this._data_selector_container_id = _data_selector_container_id
        this._graph = new _graph.Dinamic(_dinamic_graph_id)
        this.series = []
        this.question1 = null

        // Add Selects
        let select1 = document.createElement("select")
        select1.id = `${this._data_selector_container_id}-select-1`
        select1.options.add(new Option("Pergunta1", null, true, true))
        Object.keys(_data.questions_info).forEach(key => {
            select1.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].title, false, false))
        })
        select1.addEventListener("change", () => {
            this.question1 = select1.value
            this.render()
        })

        let middle_text = document.createElement("span")
        middle_text.innerText = " X "
        document.getElementById(this._data_selector_container_id).appendChild(select1)

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
        const _line_id = `${this._data_selector_container_id}-line-${this.series[this.series.length - 1] ? this.series[this.series.length - 1].index + 1 : 1}`
        const _line_i = this.series[this.series.length - 1] ? this.series[this.series.length - 1].index + 1 : 1

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
            this.series.forEach(line => {
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

        this.series.push({ id: _line_id, index: _line_i, title: _title_text.innerText, filters: [] })
        this.render()
    }
    deleteLine(line_index) {
        this.series.forEach((line, i) => {
            if (line.index == line_index) {
                document.getElementById(line.id).remove()
            }
        })
        this.series = this.series.filter(line => line.index != line_index)
        this.render()
    }
    addFilter(line_id) {
        let _filter_i = null
        this.series.forEach(line => {
            if (line.id == line_id) {
                _filter_i = line.filters.length ? line.filters.length + 1 : 1
            }
        })
        const _filter_id = `${line_id}-filter-${_filter_i}`

        // Filter Div Container
        let _filter_div = document.createElement("div")
        _filter_div.id = _filter_id

        // Question Select
        let _question_select = document.createElement("select")
        _question_select.id = `${_filter_div.id}-question-select`
        _question_select.options.add(new Option("Pergunta", null, true, true))
        Object.keys(_data.questions_info).forEach(key => {
            _question_select.options.add(new Option(_data.questions_info[key].title, key, false, false))
        })
        _question_select.addEventListener("change", () => {
            if (document.getElementById(`${_filter_id}-options-div`)) {
                document.getElementById(`${_filter_id}-options-div`).remove()
            }

            // Filter Options Div
            let filter_opt_div = document.createElement("div")
            filter_opt_div.id = `${_filter_id}-options-div`
            filter_opt_div.style.display = "inline-block"

            // Filter Options Text Type
            if (_data.questions_info[_question_select.value].type == "t" || _data.questions_info[_question_select.value].type == "l") {
                // Select Element
                let opt_select = document.createElement("select")
                opt_select.id = `${filter_opt_div.id}-select`
                opt_select.options.add(new Option("Filtro", null, true, true))
                _data.questions_info[_question_select.value].filters.forEach(option => {
                    opt_select.options.add(new Option(option, option, false, false))
                })
                opt_select.addEventListener("change", () => {
                    this.series.forEach(line => {
                        if (line.id == line_id) {
                            line.filters.forEach(filter => {
                                if (filter.id == _filter_id) {
                                    filter.question = _question_select.value
                                    filter.option = opt_select.value
                                }
                            })
                        }
                        this.render()
                    })
                })
                filter_opt_div.appendChild(opt_select)
            }

            // Add Filter Options to Page
            document.getElementById(_filter_id).insertBefore(filter_opt_div, document.getElementById(`${_filter_id}-delete-button`))
            this.render()
        })

        // Delete Filter Button
        let delete_button_img = document.createElement("img")
        delete_button_img.src = "images/delete_icon.png"
        delete_button_img.alt = "Delete"
        delete_button_img.className = "icon"
        let delete_button_div = document.createElement("div")
        delete_button_div.id = `${_filter_id}-delete-button`
        delete_button_div.appendChild(delete_button_img)
        delete_button_div.style.display = "inline-block"
        delete_button_div.style.transform = "translate(0px, +25%)"
        delete_button_div.addEventListener("click", () => {
            this.deleteFilter(_filter_id, line_id)
        })

        // Add to Page
        _filter_div.appendChild(_question_select)
        _filter_div.appendChild(delete_button_div)
        document.getElementById(line_id).insertBefore(_filter_div, document.getElementById(`${line_id}-add-filter-button`))

        this.series.forEach(line => {
            if (line.id == line_id) {
                line.filters.push({ id: _filter_id, index: _filter_i, question: null, option: null })
            }
        })
        this.render()
    }
    deleteFilter(filter_id, line_id) {
        document.getElementById(filter_id).remove()
        this.series.forEach(line => {
            if (line.id == line_id) {
                line.filters = line.filters.filter(filter => filter.id != filter_id)
            }
        })
        this.render()
    }
    render() {
        this._graph.render(this.series, this.question1, this.question2)
    }
}

let _data_selector_1 = new DataSelector("data-selecter-container-1", "dinamic-graph-1")
