$(function () {

    $('form').submit(function (e) {
        e.preventDefault()

        let num = $("#numero-heroe").val()
        // console.log(num)

        $.ajax({
            type: "get",
            url: `https://akabab.github.io/superhero-api/api/id/${num}.json`,
            dataType: "json",
            success: function (res) {
                $("#imagen-heroe").attr("src", res.images.md)
                $("#nombre-heroe").text("Nombre: " + res.name)
                $("#ocupacion-heroe").text("Ocupacion: " + res.work.occupation)
                $("#primera-aparicion-heroe").text("Primera aparicion: " + res.biography.firstAppearance)
                $("#altura-heroe").text("Altura : " + res.appearance.height[1])
                $("#peso-heroe").text("Peso: " + res.appearance.weight[1])




                let arraydeObjetos = [
                ]
                // [{}{}{}{}]

                //console.log(Object.keys(res.powerstats).length)

                for (let i = 0; i < Object.keys(res.powerstats).length; i++) {
                    let llave = (Object.keys(res.powerstats)[i])
                    let valor = (Object.values(res.powerstats)[i])
                    //console.log(llave, valor)
                    arraydeObjetos.push({label:llave,y:valor})
                }
                console.log(arraydeObjetos)

                var options = {
                    title: {
                        text: "Website Traffic Source"
                    },
                    data: [{
                        type: "pie",
                        startAngle: 45,
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabel: "{label} ({y})",
                        yValueFormatString: "#,##0.#" % "",
                        dataPoints: arraydeObjetos
                    }]
                };

                $("#chartContainer").CanvasJSChart(options);
            },
            error: function (err) {
                console.log("Error "+ err.status)
            }
        })


    })
    // let numeroImput = document.getElementById("numero-heroe");
    // numeroImput.addEventListener("keyup", function (e) {
    //     e.preventDefault();
    //     if(e.key === 13){
    //         document.getElementById('btn').click();
    //     }
    //   })

})