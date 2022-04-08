$(function () {
    let form = $("#formulario")
    let formEmail = $("#exampleInputEmail1")
    let formPass =  $("#exampleInputPassword1")
    let formCheck = $(".form-check-input")

    // form.submit(function () {

    // })

    form.on('submit', function (e) {
        e.preventDefault()
        $("#datos-titulo").css("display", "block")
        $("#form-mail").append(formEmail.val())
        $("#form-pass").append(formPass.val())

         for (let i = 0; i < formCheck.length; i++) {
            let frase = ("</br>"+formCheck[i].nextElementSibling.innerHTML + " " + formCheck[i].checked)
            $("#form-check").append(frase)
            //console.log(formCheck[i].checked)
        }
    })
})