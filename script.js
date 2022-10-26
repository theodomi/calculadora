function verificarCompatibilidade() {
    var tipoSanguineo = document.getElementById("tipo-sanguineo").value
    var doadorOuReceptor = document.getElementById("doador-ou-receptor").value
    var mensagem = ""

    // se for doador
    if (doadorOuReceptor == "doador") {
        if (tipoSanguineo == "o-negativo") {
            mensagem = "Você pode doar para todos os tipos sanguíneos."
        } else if (tipoSanguineo == "o-positivo") {
            mensagem = "Você pode doar para AB+, A+, B+ e O+."
        } else if (tipoSanguineo == "b-negativo") {
            mensagem = "Você pode doar para AB-, AB+, B- e B+."
        } else if (tipoSanguineo == "b-positivo") {
            mensagem = "Você pode doar para AB+ e B+."
        } else if (tipoSanguineo == "a-negativo") {
            mensagem = "Você pode doar para AB+, AB-, A+ e A-."
        } else if (tipoSanguineo == "a-positivo") {
            mensagem = "Você pode doar para AB+ e A+."
        } else if (tipoSanguineo == "ab-negativo") {
            mensagem = "Você pode doar para AB- e AB+."
        } else {
            mensagem = "Você é compatível somente com AB+."
        }
        // se for receptor
    } else {
        if (tipoSanguineo == "o-negativo") {
            mensagem = "Você pode receber somente de O-."
        } else if (tipoSanguineo == "o-positivo") {
            mensagem = "Você pode receber de O- e O+."
        } else if (tipoSanguineo == "b-negativo") {
            mensagem = "Você pode receber de O- e B-."
        } else if (tipoSanguineo == "b-positivo") {
            mensagem = "Você pode receber de O-, O+, B+ e B-."
        } else if (tipoSanguineo == "a-negativo") {
            mensagem = "Você pode receber de O- e A-."
        } else if (tipoSanguineo == "a-positivo") {
            mensagem = "Você pode receber de O-, O+, A- e A+."
        } else if (tipoSanguineo == "ab-negativo") {
            mensagem = "Você pode receber de O-, B-, A- e AB-."
        } else {
            mensagem = "Você é pode receber todos os tipos sanguíneos."
        }
    }
    alert(mensagem)
}