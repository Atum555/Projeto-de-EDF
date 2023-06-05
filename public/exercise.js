setTimeout(() => {
    new CanvasJS.Chart("exercise-graph-1-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Praticas Atividade Física?",
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
            labelFontSize: _graph.calculateLegendSize("exercise-graph-1-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("exercise-graph-1-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 100,
        },
        data: [
            {
                type: "column",
                name: "Homens",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 35,
                        y: 56,
                        x: 1,
                        label: "Não",
                        name: "Não",
                    },
                    {
                        abs: 28,
                        y: 44,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                ],
            },
            {
                type: "column",
                name: "Mulheres",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 57,
                        y: 70,
                        x: 1,
                        label: "Não",
                        name: "Não",
                    },
                    {
                        abs: 24,
                        y: 30,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                ],
            },
        ],
    }).render()
    new CanvasJS.Chart("exercise-graph-2-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Tipo de Atividade Física",
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
            labelFontSize: _graph.calculateLegendSize("exercise-graph-2-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("exercise-graph-2-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 100,
        },
        data: [
            {
                type: "column",
                name: "Homens",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 18,
                        y: 64,
                        x: 0,
                        label: "Coletivo",
                        name: "Coletivo",
                    },
                    {
                        abs: 10,
                        y: 36,
                        x: 1,
                        label: "Individual",
                        name: "Individual",
                    },
                ],
            },
            {
                type: "column",
                name: "Mulheres",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 18,
                        y: 75,
                        x: 0,
                        label: "Coletivo",
                        name: "Coletivo",
                    },
                    {
                        abs: 6,
                        y: 25,
                        x: 1,
                        label: "Individual",
                        name: "Individual",
                    },
                ],
            },
        ],
    }).render()
}, 1000)
setTimeout(function () {
    // Get the modal
    let modal = document.getElementById("pop-up-main-container")

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let graph1 = document.getElementById("pop-up-graph-container-1")
    let title = document.getElementById("pop-up-title")
    let p1 = document.getElementById("pop-up-p1")
    let p2 = document.getElementById("pop-up-p2")
    let p3 = document.getElementById("pop-up-p3")
    let button_1 = document.getElementById("show-pop-up-1")
    button_1.onclick = function () {
        modal.style.display = "block"
        graph1.style = "width: 100%; height: 25em; margin-bottom: 2em; display: block;"
        title.style.display = "block"
        title.innerText = "Desporto por Género"
        p1.style.display = "block"
        p1.innerText = "A grande maioria dos alunos do 12.º ano da Secundária de Paredes não pratica qualquer atividade física fora da escola. Em termos percentuais, as práticas desportivas de 63% dos inquiridos resumem-se, unicamente, às aulas de educação física que correspondem no máximo a 120 minutos de atividade física semanal de intensidade baixa a moderada o que não atinge os mínimos saudáveis recomendados pela OMS. Além disso, por análise de outros dados, mesmo dos alunos que praticam atividades físicas, mais de metade considera como sendo leve, ou de baixa intensidade, ou por vezes quase enexistente."
        p2.style.display = "block"
        p2.innerText = "Entre os géneros, no entanto, observa-se uma grande discrepância: os rapazes praticam mais desporto que as raparigas. Cerca de 44% dos rapazes pratica desporto, sendo 56% os que não praticam. Por outro lado, observa-se que 70% das raparigas não pratica qualquer atividade física fora da escola."
        p3.style.display = "block"
        p3.innerText = "Com isto, concluimos que nos alunos do 12.º ano da ESP, problemas relacionados com a não prática de exercício físico serão mais frequentes que o previsto, quer a nível físico, psicológico ou mesmo social. Infere-se isto uma vez que o deporto atua em diversas áreas da saúde, promovendo o bem-estar físico e a socialização, a ausência de algumas efermidades, diminuindo a autoexclusão social e o stress, muitas vezes causado pelo ambiente escolar (testes, exames, trabalhos, apresentação...)."
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Praticas Atividade Física?",
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
                    name: "Homens",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 35,
                            y: 56,
                            x: 1,
                            label: "Não",
                            name: "Não",
                        },
                        {
                            abs: 28,
                            y: 44,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Mulheres",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 57,
                            y: 70,
                            x: 1,
                            label: "Não",
                            name: "Não",
                        },
                        {
                            abs: 24,
                            y: 30,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
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
        title.style.display = "block"
        title.innerText = "Tipo de Atividade Física por Género"
        p1.style.display = "block"
        p1.innerText = "A grande maioria dos alunos do 12.º ano da Secundária de Paredes que pratica um desporto extraescolar, opta pelos desportos coletivos. Cerca de 70% encontram-se nesta situação preferindo desportos como o Futebol, Andebol, Futsal, Dança ou Hóquei em Patins em detrimento de outros como KickBoxing, Natação ou Ténis, por exemplo."
        p2.style.display = "block"
        p2.innerText = "Entre os gêneros, nas se observa grande diferença, ambos sustentam a vísivel preferência pelos desportos coletivos. Numericamente falando, 64% dos rapazes e 75% das raparigas que fazem desporto preferem as atividades coletivas."
        p3.style.display = "block"
        p3.innerText = 'Conclui-se, uma vez mais que o fator "equipa", a convivência, socialização e a interajuda são valores essenciais que tornam os desportos coletivos mais apetecíveis pelos alunos o que reforça o papel do desporto como pilar da saúde, não só física como mental e social.'
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Tipo de Atividade Física",
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
                    name: "Homens",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 18,
                            y: 64,
                            x: 0,
                            label: "Coletivo",
                            name: "Coletivo",
                        },
                        {
                            abs: 10,
                            y: 36,
                            x: 1,
                            label: "Individual",
                            name: "Individual",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Mulheres",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 18,
                            y: 75,
                            x: 0,
                            label: "Coletivo",
                            name: "Coletivo",
                        },
                        {
                            abs: 6,
                            y: 25,
                            x: 1,
                            label: "Individual",
                            name: "Individual",
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
}, 1200)
