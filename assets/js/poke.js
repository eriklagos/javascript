$(function () {
    for (let i = 0; i < 37; i++) {
        $("#imagenes_poke").append("img")
    }

    $("#img_uno").click(function () {
        let num = this.id
        $.ajax({
            type:"get",
            url:"https://pokeapi.co/api/v2/pokemon/"+num,
            dataType: "json",
            success: function (response) {
                $("#poke-nombre").text(response.name)
            }
        })
    })
})