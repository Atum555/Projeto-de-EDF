class _DATA {
    constructor(_url) {
        this._url = _url;
        this._raw_data = {};
        this.#downloadData();
    }
    getQuestions() { return this._raw_data["questions"]; }
    getGraphInfo(_type, _q_index) { return this._raw_data["graph_type"][_type][_q_index]; };
    getDataPoints(_type, _q_index) {
        switch (_type) {
            case "single":
                switch (_q_index) {
                    default:
                        let count = {};
                        this._raw_data["answers"].forEach(answerSet => {
                            if (count[answerSet[_q_index]]) { count[answerSet[_q_index]]++; }
                            else { count[answerSet[_q_index]] = 1; }
                        });
                        return Object.keys(count).map(key => { return { label: key, y: count[key] }; });
            }
        }
    }
    #downloadData() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", this._url, true);
        xhr.responseType = "json"; 
        xhr.onload = function() {
            if (xhr.status === 200) {
                _dataHandler._raw_data = xhr.response;
                onDataLoaded();
            }
        };
        xhr.send();
    }
}

// Globals
let _dataHandler = new _DATA("https://atum.ga/edf/_data.json");