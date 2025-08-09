$(document).ready(function () {
    $("#consultar").click(function () {
        var cep = $("#cep").val();
        var url = "https://viacep.com.br/ws/" + cep + "/json/";

        $.getJSON(url, function (retorno) {
            $("#logradouro").val(retorno.logradouro);
            $("#bairro").val(retorno.bairro);
            $("#cidade").val(retorno.localidade);
            $("#uf").val(retorno.uf);
            $("#ibge").val(retorno.ibge);
        });
    });

    $("#limpar").click(function () {
        $("#cep").val("");
        $("#logradouro").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    });
});