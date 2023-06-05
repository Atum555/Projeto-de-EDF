setTimeout(() => {
    new CanvasJS.Chart("analisys-graph-1-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "IMC",
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
            labelFontSize: _graph.calculateLegendSize("analisys-graph-1-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("analisys-graph-1-small"),
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
                        abs: 29,
                        y: 81,
                        x: 1,
                        label: "Peso normal",
                        name: "Peso normal",
                    },
                    {
                        abs: 6,
                        y: 17,
                        x: 2,
                        label: "Acima do peso",
                        name: "Acima do peso",
                    },
                    {
                        abs: 1,
                        y: 3,
                        x: 0,
                        label: "Abaixo do peso",
                        name: "Abaixo do peso",
                    },
                ],
            },
            {
                type: "column",
                name: "Outros",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 109,
                        y: 76,
                        x: 1,
                        label: "Peso normal",
                        name: "Peso normal",
                    },
                    {
                        abs: 8,
                        y: 6,
                        x: 0,
                        label: "Abaixo do peso",
                        name: "Abaixo do peso",
                    },
                    {
                        abs: 26,
                        y: 18,
                        x: 2,
                        label: "Acima do peso",
                        name: "Acima do peso",
                    },
                    {
                        abs: 1,
                        y: 1,
                        x: 3,
                        label: "Obesidade",
                        name: "Obesidade",
                    },
                ],
            },
        ],
    }).render()
    //new CanvasJS.Chart("analisys-graph-2-small").render()
    //new CanvasJS.Chart("analisys-graph-3-small").render()
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
        title.innerText = "IMC Biologia vs Todos"
        p1.style.display = "block"
        p1.innerText = "A grande maioria dos alunos do 12.º ano Secundária de Paredes, mais precisamente 76%, possui um índice de massa corporal (IMC) saudável. Dos alunos que não se encontram nesta faixa, é mais frequente o sobrepeso (18%) que o subpeso (6%). O IMC embora não dispense a consulta de outros critérios e modelos de análise pois não tem em conta fatores como a constituição física ou a genética, é um claro indicador sobre a saúde de cada indivíduo."
        p2.style.display = "block"
        p2.innerText = "Em comparação com dados do Instituto Nacional de Estatística, os alunos apresentam resultados satisfatórios em relação às médias portuguesas em cada faixa do IMC. A percentagem de alunos na zona saudável é muito superior à média portuguesa de 40,8%. Em relação ao sobrepeso, 18% dos alunos encontram-se nesta situação sendo a média nacional de 36.6%. A obesidade que no nosso país afeta 16,9% afeta unicamente 1% dos alunos inquiridos. Quanto ao subpeso, encontram-se percentualemnte mais alunos nesta condição, 6% contra uns escassos 1,5% a nível nacional. Conclui-se que os alunos se encontram numa melhor situação quando comparado com o panorama nacional. Contudo, as condições como o sobrepeso e obesidade são ainda um objetivo a combater, bem como o subpeso que adquire nesta faixa etária uma maior significação."
        p3.style.display = "block"
        p3.innerText = "Tal como seria de prever, os alunos que frequentam a disciplina de Biologia tendencialmente apresentam um IMC melhor. Por exemplo, encontram-se mais alunos com um IMC saudável e menos com subpeso, sobrepeso e ainda obesidade inexistente."
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "IMC",
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
                            abs: 29,
                            y: 81,
                            x: 1,
                            label: "Peso normal",
                            name: "Peso normal",
                        },
                        {
                            abs: 6,
                            y: 17,
                            x: 2,
                            label: "Acima do peso",
                            name: "Acima do peso",
                        },
                        {
                            abs: 1,
                            y: 3,
                            x: 0,
                            label: "Abaixo do peso",
                            name: "Abaixo do peso",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Outros",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 109,
                            y: 76,
                            x: 1,
                            label: "Peso normal",
                            name: "Peso normal",
                        },
                        {
                            abs: 8,
                            y: 6,
                            x: 0,
                            label: "Abaixo do peso",
                            name: "Abaixo do peso",
                        },
                        {
                            abs: 26,
                            y: 18,
                            x: 2,
                            label: "Acima do peso",
                            name: "Acima do peso",
                        },
                        {
                            abs: 1,
                            y: 1,
                            x: 3,
                            label: "Obesidade",
                            name: "Obesidade",
                        },
                    ],
                },
            ],
        }).render()
    }
    let button_2 = document.getElementById("show-pop-up-2")
    /* button_2.onclick = function () {
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
    } */

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("pop-up-close")[0]

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none"
    }
}, 1200)
