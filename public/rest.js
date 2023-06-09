setTimeout(() => {
    new CanvasJS.Chart("rest-graph-1-small", {
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
            labelMaxWidth: 100,
            labelAngle: 0,
            labelFontSize: _graph.calculateLegendSize("rest-graph-1-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("rest-graph-1-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 60,
        },
        data: [
            {
                type: "column",
                name: "Ciencias",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 18,
                        y: 27,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 8,
                        y: 12,
                        x: 1,
                        label: "5h - 6h",
                        name: "5h - 6h",
                    },
                    {
                        abs: 35,
                        y: 53,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 5,
                        y: 8,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                ],
            },
            {
                type: "column",
                name: "Humanidades",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 16,
                        y: 37,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 23,
                        y: 53,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 3,
                        y: 7,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                    {
                        abs: 1,
                        y: 2,
                        x: 1,
                        label: "5h - 6h",
                        name: "5h - 6h",
                    },
                ],
            },
            {
                type: "column",
                name: "Economia",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 9,
                        y: 43,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 4,
                        y: 19,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                    {
                        abs: 1,
                        y: 5,
                        x: 1,
                        label: "5h - 6h",
                        name: "5h - 6h",
                    },
                    {
                        abs: 7,
                        y: 33,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                ],
            },
            {
                type: "column",
                name: "Artes",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 5,
                        y: 36,
                        x: 3,
                        label: "7h - 8h",
                        name: "7h - 8h",
                    },
                    {
                        abs: 6,
                        y: 43,
                        x: 2,
                        label: "6h - 7h",
                        name: "6h - 7h",
                    },
                    {
                        abs: 1,
                        y: 7,
                        x: 4,
                        label: "8h - 9h",
                        name: "8h - 9h",
                    },
                    {
                        abs: 1,
                        y: 7,
                        x: 5,
                        label: ">9h",
                        name: ">9h",
                    },
                    {
                        abs: 1,
                        y: 7,
                        x: 1,
                        label: "5h - 6h",
                        name: "5h - 6h",
                    },
                ],
            },
        ],
    }).render()
    new CanvasJS.Chart("rest-graph-2-small", {
        animationEnabled: true,
        animationDuration: 2000,
        theme: "light2",
        title: {
            text: "Ecrãs até adormecer",
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
            labelFontSize: _graph.calculateLegendSize("rest-graph-2-small"),
        },
        axisY: {
            labelFontSize: _graph.calculateLegendSize("rest-graph-2-small"),
            suffix: "%",
            valueFormatString: "##0.",
            minimum: 0,
            maximum: 65,
        },
        data: [
            {
                type: "column",
                name: "Sono Regulado",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 65,
                        y: 60,
                        x: 2,
                        label: "Não",
                        name: "Não",
                    },
                    {
                        abs: 20,
                        y: 19,
                        x: 1,
                        label: "Às vezes",
                        name: "Às vezes",
                    },
                    {
                        abs: 23,
                        y: 21,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                ],
            },
            {
                type: "column",
                name: "Sono não regulado",
                showInLegend: true,
                dataPoints: [
                    {
                        abs: 2,
                        y: 33,
                        x: 2,
                        label: "Não",
                        name: "Não",
                    },
                    {
                        abs: 2,
                        y: 33,
                        x: 0,
                        label: "Sim",
                        name: "Sim",
                    },
                    {
                        abs: 2,
                        y: 33,
                        x: 1,
                        label: "Às vezes",
                        name: "Às vezes",
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
        title.innerText = "Horas de Sono dos Cursos"
        p1.style.display = "block"
        p1.innerText = "A grande maioria dos alunos do 12.º ano da Secundária de Paredes dorme em média, 7 horas e 18 minutos diarimente o que se encontra abaixo do recomendado para a faixa etária dos alunos (8-10 horas de descanso diário). O curso de Ciências, além de possuir uma média mais baixa relativamente ao n.º de horas diárias de descanso, reúne a grande maioria dos alunos que dorme menos de 6 horas diárias. Este valor é preocupante uma vez que seria de esperar que os alunos das áreas científicas reconhecessem de forma mais clara as desvantagens de uma quantidade de descanso insuficiente."
        p2.style.display = "block"
        p2.innerText = "Apesar de as médias do n.º de horas de sono entre os cursos não variar muito mais que cerca de 20 min diariamente, encontram-se nos alunos de Economia e de Artes as melhores práticas com 19% e 14% dos alunos nos respetivos cursos a cumprirem o mínimo exigido. Não obstante, a quantidade de alunos que não dorme no mínimo 8 horas diárias é preocupante. Em termos percentuais, menos de 10% de todos os alunos cumpre este objetivo."
        p3.style.display = "block"
        p3.innerHTML = "<strong>Horas médias de sono:</strong><br>Ciências: 7h 8 min<br>Humanidades: 7h 16 min<br>Economia: 7h 31 min<br>Artes: 7h 17 min"
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
                labelMaxWidth: 100,
                labelAngle: 0,
                labelFontSize: _graph.calculateLegendSize(graph1.id),
            },
            axisY: {
                labelFontSize: _graph.calculateLegendSize(graph1.id),
                suffix: "%",
                valueFormatString: "##0.",
                minimum: 0,
                maximum: 60,
            },
            data: [
                {
                    type: "column",
                    name: "Ciencias",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 18,
                            y: 27,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 8,
                            y: 12,
                            x: 1,
                            label: "5h - 6h",
                            name: "5h - 6h",
                        },
                        {
                            abs: 35,
                            y: 53,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 5,
                            y: 8,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Humanidades",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 16,
                            y: 37,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 23,
                            y: 53,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 3,
                            y: 7,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                        {
                            abs: 1,
                            y: 2,
                            x: 1,
                            label: "5h - 6h",
                            name: "5h - 6h",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Economia",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 9,
                            y: 43,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 4,
                            y: 19,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                        {
                            abs: 1,
                            y: 5,
                            x: 1,
                            label: "5h - 6h",
                            name: "5h - 6h",
                        },
                        {
                            abs: 7,
                            y: 33,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Artes",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 5,
                            y: 36,
                            x: 3,
                            label: "7h - 8h",
                            name: "7h - 8h",
                        },
                        {
                            abs: 6,
                            y: 43,
                            x: 2,
                            label: "6h - 7h",
                            name: "6h - 7h",
                        },
                        {
                            abs: 1,
                            y: 7,
                            x: 4,
                            label: "8h - 9h",
                            name: "8h - 9h",
                        },
                        {
                            abs: 1,
                            y: 7,
                            x: 5,
                            label: ">9h",
                            name: ">9h",
                        },
                        {
                            abs: 1,
                            y: 7,
                            x: 1,
                            label: "5h - 6h",
                            name: "5h - 6h",
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
        title.innerText = "Ecrãs na Hora de Dormir"
        p1.style.display = "block"
        p1.innerText = "Dos alunos do 12.º ano da Secundária de Paredes, 27% dos alunos afirma adormecer sempre ao telemóvel ou a assistir televisão. 19% admite que isto, embora não aconteça sempre, é frequente. Por fim, 54% dos alunos não assiste conteúdos digitais para adormecer."
        p2.style.display = "block"
        p2.innerText = "Dos dados anteriores é possível correlacionar o uso de telemóvel e o assistir televisão como fatores que impedem um sono regulado e que, consequentemente, diminuem a qualidade e quantidade do descanso. Assim, 60% dos alunos que não utilizam o telemóvel ou assistem televisão para adormecer têm um sono regulado, isto é, adormecem sempre por volta da mesma hora. Em contrapartida, 1 em cada 3 alunos que que assiste conteúdos digitais na hora de dormir, possui um sono desregulado, ou seja, adormece a horas diferentes todos os dias fruto do poder viciante por exemplo, das redes sociais ou dos filmes e séries."
        p3.style.display = "block"
        p3.innerText = "Conclui-se assim que as tecnologias exercem ainda um forte poder sobre os alunos e que os impede muitas vezes de usufruir de hábitos saudáveis de descanso o que pode ter um grande impacto no sucesso escolar e ainda no rendimento físico entre aqueles que são desportistas."
        new CanvasJS.Chart(graph1.id, {
            animationEnabled: true,
            animationDuration: 2000,
            theme: "light2",
            title: {
                text: "Ecrãs até adormecer",
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
                maximum: 65,
            },
            data: [
                {
                    type: "column",
                    name: "Sono Regulado",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 65,
                            y: 60,
                            x: 2,
                            label: "Não",
                            name: "Não",
                        },
                        {
                            abs: 20,
                            y: 19,
                            x: 1,
                            label: "Às vezes",
                            name: "Às vezes",
                        },
                        {
                            abs: 23,
                            y: 21,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
                        },
                    ],
                },
                {
                    type: "column",
                    name: "Sono não regulado",
                    showInLegend: true,
                    dataPoints: [
                        {
                            abs: 2,
                            y: 33,
                            x: 2,
                            label: "Não",
                            name: "Não",
                        },
                        {
                            abs: 2,
                            y: 33,
                            x: 0,
                            label: "Sim",
                            name: "Sim",
                        },
                        {
                            abs: 2,
                            y: 33,
                            x: 1,
                            label: "Às vezes",
                            name: "Às vezes",
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
