setTimeout(() => {
    new CanvasJS.Chart("nutrition-graph-1-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Fast-Food Mensal",
        },
        toolTip: {
            shared: true,
            contentFormatter: function (e) {
                let content = ""
                for (let i = 0; i < e.entries.length; i++) {
                    content += `<span style="color:${e.entries[i].dataSeries.color}">` + e.entries[i].dataSeries.name + ":</span> " + e.entries[i].dataPoint.y + "% (" + e.entries[i].dataPoint.abs + ")<br>"
                }
                return `<span style="font-size: 1.2em;">${e.entries[0].dataPoint.label}<br></span>` + content
            },
        },
        axisX: {
            title: "",
            labelWrap: true,
            labelMaxWidth: 100,
            labelAngle: 0,
            labelFontSize: _graph.calculateLegendSize("nutrition-graph-1-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("nutrition-graph-1-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 50,
        },
        data: [
            {
                type: "column",
                name: "Biologia",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 10,
                        y: 28,
                        x: 0,
                        label: "Apenas ocasiões expeciais ou nunca.",
                        name: "Apenas ocasiões expeciais ou nunca.",
                    },
                    {
                        abs: 2,
                        y: 6,
                        x: 3,
                        label: "6-10",
                        name: "6-10",
                    },
                    {
                        abs: 12,
                        y: 33,
                        x: 2,
                        label: "3-5",
                        name: "3-5",
                    },
                    {
                        abs: 12,
                        y: 33,
                        x: 1,
                        label: "1-2",
                        name: "1-2",
                    },
                ],
            },
            {
                type: "column",
                name: "Outros",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 55,
                        y: 38,
                        x: 1,
                        label: "1-2",
                        name: "1-2",
                    },
                    {
                        abs: 35,
                        y: 24,
                        x: 0,
                        label: "Apenas ocasiões expeciais ou nunca.",
                        name: "Apenas ocasiões expeciais ou nunca.",
                    },
                    {
                        abs: 6,
                        y: 4,
                        x: 3,
                        label: "6-10",
                        name: "6-10",
                    },
                    {
                        abs: 48,
                        y: 33,
                        x: 2,
                        label: "3-5",
                        name: "3-5",
                    },
                ],
            },
        ],
    }).render()
    new CanvasJS.Chart("nutrition-graph-2-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Peças de Fruta Diárias",
        },
        toolTip: {
            shared: true,
            contentFormatter: function (e) {
                let content = ""
                for (let i = 0; i < e.entries.length; i++) {
                    content += `<span style="color:${e.entries[i].dataSeries.color}">` + e.entries[i].dataSeries.name + ":</span> " + e.entries[i].dataPoint.y + "% (" + e.entries[i].dataPoint.abs + ")<br>"
                }
                return `<span style="font-size: 1.2em;">${e.entries[0].dataPoint.label}<br></span>` + content
            },
        },
        axisX: {
            title: "",
            labelWrap: true,
            labelMaxWidth: 100,
            labelAngle: 0,
            labelFontSize: _graph.calculateLegendSize("nutrition-graph-2-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("nutrition-graph-2-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 50,
        },
        data: [
            {
                type: "column",
                name: "ESP",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 60,
                        y: 42,
                        x: 0,
                        label: "1",
                        name: "1",
                    },
                    {
                        abs: 46,
                        y: 32,
                        x: 1,
                        label: "2",
                        name: "2",
                    },
                    {
                        abs: 26,
                        y: 18,
                        x: 2,
                        label: "3",
                        name: "3",
                    },
                    {
                        abs: 10,
                        y: 7,
                        x: 3,
                        label: "4",
                        name: "4",
                    },
                    {
                        abs: 2,
                        y: 1,
                        x: 4,
                        label: "5",
                        name: "5",
                    },
                ],
            },
        ],
    }).render()
    new CanvasJS.Chart("nutrition-graph-3-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Porções de Legumes",
        },
        toolTip: {
            shared: true,
            contentFormatter: function (e) {
                let content = ""
                for (let i = 0; i < e.entries.length; i++) {
                    content += `<span style="color:${e.entries[i].dataSeries.color}">` + e.entries[i].dataSeries.name + ":</span> " + e.entries[i].dataPoint.y + "% (" + e.entries[i].dataPoint.abs + ")<br>"
                }
                return `<span style="font-size: 1.2em;">${e.entries[0].dataPoint.label}<br></span>` + content
            },
        },
        axisX: {
            title: "",
            labelWrap: true,
            labelMaxWidth: 100,
            labelAngle: 0,
            labelFontSize: _graph.calculateLegendSize("nutrition-graph-3-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("nutrition-graph-3-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 40,
        },
        data: [
            {
                type: "column",
                name: "ESP",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 46,
                        y: 32,
                        x: 0,
                        label: "1",
                        name: "1",
                    },
                    {
                        abs: 35,
                        y: 24,
                        x: 1,
                        label: "2",
                        name: "2",
                    },
                    {
                        abs: 28,
                        y: 19,
                        x: 2,
                        label: "3",
                        name: "3",
                    },
                    {
                        abs: 23,
                        y: 16,
                        x: 3,
                        label: "4",
                        name: "4",
                    },
                    {
                        abs: 6,
                        y: 4,
                        x: 4,
                        label: "5",
                        name: "5",
                    },
                    {
                        abs: 2,
                        y: 1,
                        x: 5,
                        label: "6",
                        name: "6",
                    },
                    {
                        abs: 3,
                        y: 2,
                        x: 6,
                        label: "7",
                        name: "7",
                    },
                    {
                        abs: 1,
                        y: 1,
                        x: 8,
                        label: "9",
                        name: "9",
                    },
                ],
            },
        ],
    }).render()
}, 0)
setTimeout(function () {
    // Get the modal
    let modal = document.getElementById("pop-up-main-container")

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let graph1 = document.getElementById("pop-up-graph-container-1")
    let hr = document.getElementById("pop-up-hr")
    let graph2 = document.getElementById("pop-up-graph-container-2")
    let title = document.getElementById("pop-up-title")
    let p1 = document.getElementById("pop-up-p1")
    let p2 = document.getElementById("pop-up-p2")
    let button_1 = document.getElementById("show-pop-up-1")
    button_1.onclick = function () {
        modal.style.display = "block"
        graph1.style = "width: 100%; height: 25em; margin-bottom: 2em; display: block;"
        hr.style.display = "none"
        graph2.style.display = "none"
        title.innerText = "Consumo de Fast-Food"
        p1.innerText = "A grande maioria dos alunos do 12.º ano da Secundária de Paredes consome Fast-Food no máximo até duas vezes por mês. Realmente, cerca de um quarto dos alunos não consome Fast-Food, ou então consome muito raramente em ocasiões especiais. Esta percentagem é ligeiramente maior nos alunos que frequentam a disciplina de Biologia, apesar de a diferença ser relativamente baixa (28% vs. 24%). O mesmo acontece na faixa do consumo de Fast-Food de 1-2 vezes por mês e em média. Os alunos de Biologia apresentam uma menor tendência ao seu consumo quanto comparados com a generalidade dos inquiridos."
        p2.style.display = "block"
        p2.innerText = "Com base em outros dados podemos concluir que o curso de Artes reúne, em termos percentuais, as melhoras práticas alimentares quanto ao consumo de Fast-Food com 86% dos alunos a consumir este tipo de comida no máximo duas vezes por mês. Por comparação, apenas 14% dos alunos do curso de Artes consome Fast-Food mais que duas vezes por mês enquanto que da globalidade dos alunos do 12.º ano, 37% têm este hábito."
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Fast-Food Mensal",
            },
            toolTip: {
                shared: true,
                contentFormatter: function (e) {
                    let content = ""
                    for (let i = 0; i < e.entries.length; i++) {
                        content += `<span style="color:${e.entries[i].dataSeries.color}">` + e.entries[i].dataSeries.name + ":</span> " + e.entries[i].dataPoint.y + "% (" + e.entries[i].dataPoint.abs + ")<br>"
                    }
                    return `<span style="font-size: 1.2em;">${e.entries[0].dataPoint.label}<br></span>` + content
                },
            },
            axisX: {
                title: "",
                labelWrap: true,
                labelMaxWidth: 100,
                labelAngle: 0,
                labelFontSize: _graph.calculateLegendSize(graph1.id),
            },
            axisY: {
                labelFontSize: _graph.calculateLegendSize(graph1.id),
                suffix: "%",
                valueFormatString: "##0.",
                minimum: 0,
                maximum: 100,
            },
            data: [
                {
                    type: "column",
                    name: "Biologia",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 10,
                            y: 28,
                            x: 0,
                            label: "Apenas ocasiões expeciais ou nunca.",
                            name: "Apenas ocasiões expeciais ou nunca.",
                        },
                        {
                            abs: 2,
                            y: 6,
                            x: 3,
                            label: "6-10",
                            name: "6-10",
                        },
                        {
                            abs: 12,
                            y: 33,
                            x: 2,
                            label: "3-5",
                            name: "3-5",
                        },
                        {
                            abs: 12,
                            y: 33,
                            x: 1,
                            label: "1-2",
                            name: "1-2",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Outros",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 55,
                            y: 38,
                            x: 1,
                            label: "1-2",
                            name: "1-2",
                        },
                        {
                            abs: 35,
                            y: 24,
                            x: 0,
                            label: "Apenas ocasiões expeciais ou nunca.",
                            name: "Apenas ocasiões expeciais ou nunca.",
                        },
                        {
                            abs: 6,
                            y: 4,
                            x: 3,
                            label: "6-10",
                            name: "6-10",
                        },
                        {
                            abs: 48,
                            y: 33,
                            x: 2,
                            label: "3-5",
                            name: "3-5",
                        },
                    ],
                },
            ],
        }).render()
    }
    let button_2 = document.getElementById("show-pop-up-2")
    button_2.onclick = function () {
        modal.style.display = "block"
        graph1.style = "width: 100%; height: 25em; margin-bottom: 2em; display: block;"
        hr.style.display = "block"
        graph2.style = "width: 100%; height: 25em; margin-bottom: 2em; display: block;"
        title.innerText = "Legumes e Fruta"
        p1.innerText = "A grande maioria dos alunos do 12.º ano da Secundária de Paredes consome 2,5 porções de legumes diarimente. Dos alunos, mais de metade, mais precisamente, 56% encontra-se abaixo da média referida, sendo já esta baixa. Relativamente ao consumo de frutas, os alunos consomem em média quase duas peças de fruta (ou porção equivalente), diariamente. Observa-se mais uma vez que quase 3 em cada 4 alunos consome 2 ou menos peças de fruta diariemente."
        p2.style.display = "block"
        p2.innerText = "Segundo a OMS, é recomendado um consumo diário de 5 porções de fruta e legumes. Somadas as médias, os alunos da ESP consomem 4,5 porções de legumes e/ou frutas diariamente o que, embora se encontre um pouco aquém das exigências da Organização Mundial de Saúde, não é um grande fator de preocupação nos hábitos dos alunos. De qualquer forma, é uma média passível de melhorias e que passa pelo aumento do consumo de frutas e legumes, principalmente pelos alunos que consome 2 ou menos porções diariamente."
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Peças de Fruta Diárias",
            },
            toolTip: {
                shared: true,
                contentFormatter: function (e) {
                    let content = ""
                    for (let i = 0; i < e.entries.length; i++) {
                        content += `<span style="color:${e.entries[i].dataSeries.color}">` + e.entries[i].dataSeries.name + ":</span> " + e.entries[i].dataPoint.y + "% (" + e.entries[i].dataPoint.abs + ")<br>"
                    }
                    return `<span style="font-size: 1.2em;">${e.entries[0].dataPoint.label}<br></span>` + content
                },
            },
            axisX: {
                title: "",
                labelWrap: true,
                labelMaxWidth: 100,
                labelAngle: 0,
                labelFontSize: _graph.calculateLegendSize(graph1.id),
            },
            axisY: {
                labelFontSize: _graph.calculateLegendSize(graph1.id),
                suffix: "%",
                valueFormatString: "##0.",
                minimum: 0,
                maximum: 50,
            },
            data: [
                {
                    type: "column",
                    name: "ESP",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 60,
                            y: 42,
                            x: 0,
                            label: "1",
                            name: "1",
                        },
                        {
                            abs: 46,
                            y: 32,
                            x: 1,
                            label: "2",
                            name: "2",
                        },
                        {
                            abs: 26,
                            y: 18,
                            x: 2,
                            label: "3",
                            name: "3",
                        },
                        {
                            abs: 10,
                            y: 7,
                            x: 3,
                            label: "4",
                            name: "4",
                        },
                        {
                            abs: 2,
                            y: 1,
                            x: 4,
                            label: "5",
                            name: "5",
                        },
                    ],
                },
            ],
        }).render()
        new CanvasJS.Chart(graph2.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Porções de Legumes",
            },
            toolTip: {
                shared: true,
                contentFormatter: function (e) {
                    let content = ""
                    for (let i = 0; i < e.entries.length; i++) {
                        content += `<span style="color:${e.entries[i].dataSeries.color}">` + e.entries[i].dataSeries.name + ":</span> " + e.entries[i].dataPoint.y + "% (" + e.entries[i].dataPoint.abs + ")<br>"
                    }
                    return `<span style="font-size: 1.2em;">${e.entries[0].dataPoint.label}<br></span>` + content
                },
            },
            axisX: {
                title: "",
                labelWrap: true,
                labelMaxWidth: 100,
                labelAngle: 0,
                labelFontSize: _graph.calculateLegendSize(graph2.id),
            },
            axisY: {
                labelFontSize: _graph.calculateLegendSize(graph2.id),
                suffix: "%",
                valueFormatString: "##0.",
                minimum: 0,
                maximum: 40,
            },
            data: [
                {
                    type: "column",
                    name: "ESP",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 46,
                            y: 32,
                            x: 0,
                            label: "1",
                            name: "1",
                        },
                        {
                            abs: 35,
                            y: 24,
                            x: 1,
                            label: "2",
                            name: "2",
                        },
                        {
                            abs: 28,
                            y: 19,
                            x: 2,
                            label: "3",
                            name: "3",
                        },
                        {
                            abs: 23,
                            y: 16,
                            x: 3,
                            label: "4",
                            name: "4",
                        },
                        {
                            abs: 6,
                            y: 4,
                            x: 4,
                            label: "5",
                            name: "5",
                        },
                        {
                            abs: 2,
                            y: 1,
                            x: 5,
                            label: "6",
                            name: "6",
                        },
                        {
                            abs: 3,
                            y: 2,
                            x: 6,
                            label: "7",
                            name: "7",
                        },
                        {
                            abs: 1,
                            y: 1,
                            x: 8,
                            label: "9",
                            name: "9",
                        },
                    ],
                },
            ],
        }).render()
    }

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("pop-up-close")[0]

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none"
    }
}, 0)
