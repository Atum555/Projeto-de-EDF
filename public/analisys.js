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
            {
                type: "column",
                name: "Média Nacional",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 40.8,
                        y: 40.8,
                        x: 1,
                        label: "Peso normal",
                        name: "Peso normal",
                    },
                    {
                        abs: 1.5,
                        y: 1.5,
                        x: 0,
                        label: "Abaixo do peso",
                        name: "Abaixo do peso",
                    },
                    {
                        abs: 36.6,
                        y: 36.6,
                        x: 2,
                        label: "Acima do peso",
                        name: "Acima do peso",
                    },
                    {
                        abs: 16.9,
                        y: 16.9,
                        x: 3,
                        label: "Obesidade",
                        name: "Obesidade",
                    },
                ],
            },
        ],
    }).render()
    new CanvasJS.Chart("analisys-graph-2-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Horas de Sono durante a Semana",
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
            labelMaxWidth: 85,
            labelAngle: 0,
            labelFontSize: _graph.calculateLegendSize("analisys-graph-2-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("analisys-graph-2-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 100,
        },
        data: [
            {
                type: "column",
                name: "Pouco Exercício",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 5,
                        y: 22,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 10,
                        y: 43,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 4,
                        y: 17,
                        x: 1,
                        label: "5h - 6h",
                        name: "5h - 6h",
                    },
                    {
                        abs: 4,
                        y: 17,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                ],
            },
            {
                type: "column",
                name: "Exercício Leve",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 15,
                        y: 27,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 34,
                        y: 62,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 3,
                        y: 5,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                    {
                        abs: 3,
                        y: 5,
                        x: 1,
                        label: "5h - 6h",
                        name: "5h - 6h",
                    },
                ],
            },
            {
                type: "column",
                name: "Exercício Moderado",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 19,
                        y: 40,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 20,
                        y: 43,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 4,
                        y: 9,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                    {
                        abs: 4,
                        y: 9,
                        x: 1,
                        label: "5h - 6h",
                        name: "5h - 6h",
                    },
                ],
            },
            {
                type: "column",
                name: "Exercício Intenso",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 2,
                        y: 15,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 10,
                        y: 77,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 1,
                        y: 8,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                ],
            },
            {
                type: "column",
                name: "Exercício Muito Intenso",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 1,
                        y: 17,
                        x: 5,
                        label: ">9h",
                        name: ">9h",
                    },
                    {
                        abs: 3,
                        y: 50,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 1,
                        y: 17,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 1,
                        y: 17,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                ],
            },
        ],
    }).render()
    new CanvasJS.Chart("analisys-graph-3-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Ginásio",
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
            labelMaxWidth: 85,
            labelAngle: 0,
            labelFontSize: _graph.calculateLegendSize("analisys-graph-3-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("analisys-graph-3-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 100,
        },
        data: [
            {
                type: "column",
                name: "Pratica Atividade Física",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 39,
                        y: 75,
                        x: 1,
                        label: "Não",
                        name: "Não",
                    },
                    {
                        abs: 13,
                        y: 25,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                ],
            },
            {
                type: "column",
                name: "Não Pratica Atividade Física",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 34,
                        y: 37,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                    {
                        abs: 58,
                        y: 63,
                        x: 1,
                        label: "Não",
                        name: "Não",
                    },
                ],
            },
            {
                type: "column",
                name: "Homens",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 26,
                        y: 41,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                    {
                        abs: 37,
                        y: 59,
                        x: 1,
                        label: "Não",
                        name: "Não",
                    },
                ],
            },
            {
                type: "column",
                name: "Mulheres",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 60,
                        y: 74,
                        x: 1,
                        label: "Não",
                        name: "Não",
                    },
                    {
                        abs: 21,
                        y: 26,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                ],
            },
        ],
    }).render()
}, 100)
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
                {
                    type: "column",
                    name: "Média Nacional",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 40.8,
                            y: 40.8,
                            x: 1,
                            label: "Peso normal",
                            name: "Peso normal",
                        },
                        {
                            abs: 1.5,
                            y: 1.5,
                            x: 0,
                            label: "Abaixo do peso",
                            name: "Abaixo do peso",
                        },
                        {
                            abs: 36.6,
                            y: 36.6,
                            x: 2,
                            label: "Acima do peso",
                            name: "Acima do peso",
                        },
                        {
                            abs: 16.9,
                            y: 16.9,
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
    button_2.onclick = function () {
        modal.style.display = "block"
        graph1.style = "width: 100%; height: 25em; margin-bottom: 2em; display: block;"
        title.style.display = "block"
        title.innerText = "Descanso vs Intensidade de Exercício"
        p1.style.display = "block"
        p1.innerText = "A grande maioria dos alunos do 12.º ano da Secundária de Paredes que pratica exercício físico intenso entre 6-7 dias por semana requer em média um maior n.º horas de sono o que comprova a importância do descanso nos desportistas uma vez que, por exemplo, promove a recuperação das fibras musculares."
        p2.style.display = "block"
        p2.innerText = "Observa-se que 57% dos alunos que dorme o mínimo de horas diário recomendado pela OMS pratica exercício físico intenso ou muito intenso."
        p3.style.display = "block"
        p3.innerHTML = "<strong>Relação entre a intensidade do exercício físico e a média do tempo de descanso diário:</strong><br>Pouco ou nenhum: 6h 47 min<br>Leve 1-3 dias por semana: 7h 22 min<br>Moderado 3-5 dias por semana: 7h 1 min<br>Intenso 6-7 dias por semana: 7h 52 min<br>Muito Intenso 6-7 dias por semana: 8h 41 min"
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Horas de Sono durante a Semana",
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
                labelMaxWidth: 85,
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
                    name: "Pouco Exercício",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 5,
                            y: 22,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 10,
                            y: 43,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 4,
                            y: 17,
                            x: 1,
                            label: "5h - 6h",
                            name: "5h - 6h",
                        },
                        {
                            abs: 4,
                            y: 17,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Exercício Leve",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 15,
                            y: 27,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 34,
                            y: 62,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 3,
                            y: 5,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                        {
                            abs: 3,
                            y: 5,
                            x: 1,
                            label: "5h - 6h",
                            name: "5h - 6h",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Exercício Moderado",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 19,
                            y: 40,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 20,
                            y: 43,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 4,
                            y: 9,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                        {
                            abs: 4,
                            y: 9,
                            x: 1,
                            label: "5h - 6h",
                            name: "5h - 6h",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Exercício Intenso",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 2,
                            y: 15,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 10,
                            y: 77,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 1,
                            y: 8,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Exercício Muito Intenso",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 1,
                            y: 17,
                            x: 5,
                            label: ">9h",
                            name: ">9h",
                        },
                        {
                            abs: 3,
                            y: 50,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 1,
                            y: 17,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 1,
                            y: 17,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                    ],
                },
            ],
        }).render()
    }
    let button_3 = document.getElementById("show-pop-up-3")
    button_3.onclick = function () {
        modal.style.display = "block"
        graph1.style = "width: 100%; height: 25em; margin-bottom: 2em; display: block;"
        title.style.display = "block"
        title.innerText = "Distribuição de quem vai ao Ginásio"
        p1.style.display = "block"
        p1.innerText = "O ginásio é muitas vezes associado à hipertrofia e ao mantermo-nos em forma. Por outro lado, consideramos que um desporto é sempre mais completo que o trabalho de ginásio uma vez que desenvolvemos muitas outras capacidades que não o simples aumento de volume e/ou força. Capacidades como a agilidade, flexibilidade, destreza,  resistência física, espírito de equipa e ainda o raciocínio lógico e estratégico são competências apenas obtidas com um desporto, considerando por isso o ginásio como um bom complemento à atividade desportiva e não como uma modalidade independente."
        p2.style.display = "block"
        p2.innerText = "A maioria dos alunos do 12.º ano da Secundária de Paredes que frequenta o ginásio não pratica qualquer desporto. Ou seja, neste caso, para 60% dos alunos que frequentam o ginásio este é para os mesmos como uma modalidade desportiva. A frequência do ginásio é também mais comum entre os rapazes que entre as raparigas."
        p3.style.display = "block"
        p3.innerText = "Ainda de notar que 63% dos alunos que não frequentam o ginásio também não praticam qualquer desporto. Este dado é sim preocupante uma vez que se conclui que a grande maioria dos alunos não pratica qualquer atividade física fora do ambiente escolar, quer seja esta um desporto, ou uma atividade complementar como o ginásio."
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Ginásio",
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
                labelMaxWidth: 85,
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
                    name: "Pratica Atividade Física",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 39,
                            y: 75,
                            x: 1,
                            label: "Não",
                            name: "Não",
                        },
                        {
                            abs: 13,
                            y: 25,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Não Pratica Atividade Física",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 34,
                            y: 37,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
                        },
                        {
                            abs: 58,
                            y: 63,
                            x: 1,
                            label: "Não",
                            name: "Não",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Homens",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 26,
                            y: 41,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
                        },
                        {
                            abs: 37,
                            y: 59,
                            x: 1,
                            label: "Não",
                            name: "Não",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Mulheres",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 60,
                            y: 74,
                            x: 1,
                            label: "Não",
                            name: "Não",
                        },
                        {
                            abs: 21,
                            y: 26,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
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
}, 200)

class DataSelector {
    constructor(_data_selector_container_id, _dinamic_graph_id) {
        this._data_selector_container_id = _data_selector_container_id
        this._graph = new _graph.Dinamic(_dinamic_graph_id)
        this.series = []
        this.question1 = null

        // Add Selects
        let select1 = document.createElement("select")
        select1.id = `${this._data_selector_container_id}-select-1`
        let isfirst = true
        Object.keys(_data.questions_info).forEach(key => {
            if (isfirst) {
                select1.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].title, true, true))
                this.question1 = _data.questions_info[key].title
                isfirst = false
            } else {
                select1.options.add(new Option(_data.questions_info[key].title, _data.questions_info[key].title, false, false))
            }
        })
        select1.addEventListener("change", () => {
            this.question1 = select1.value
            this.render()
        })
        const id = this._data_selector_container_id
        console.log(id)
        document.getElementById(id).appendChild(select1)

        // Add Series Button
        let button = document.createElement("button")
        button.id = `${this._data_selector_container_id}-add-series`
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

let _data_selector_1 = null
setTimeout(() => {
    _data_selector_1 = new DataSelector("data-selecter-container", "dinamic-graph")
}, 300)
setTimeout(() => {
    document.getElementById("data-selecter-container-add-series").dispatchEvent(new Event("click"))
}, 400)
