$(function () {
    $("#btn").click(function () {
        $("#text").text("loading...")
        $.ajax({
            type:"get",
            url:"https://anapioficeandfire.com/api/characters/583",
            dataType: "json",
            success: function (response) {
              $("#text").text("Exito!")
              $("#datos-nombre").text(response.name)
              $("#datos-genero").text(response.gender)
              $("#datos-titulo").text(response.titles[0])
              $("#datos-apodo").text(response.aliases)


              /*$("#datos-nombre").text(response.name)
              $("#datos-genero").text(response.gender)
              $("#datos-titulo").text(response.titles[0])

              let arrayApodos = response.aliases
              let listaString =  '<ul>';
              for (let i = 0; i < arrayApodos.length; i++) {
                  listaString += `<li>${arrayApodos[i]}<br>`
              }
              $("#datos-apodo").html(listaString)*/
            },
            //error: function (res) {
            //    console.log(res)
            //    $("#text").text("Error ese numero es invalido!! Error: "+ res.status)
                
            //}
        })

    })

})