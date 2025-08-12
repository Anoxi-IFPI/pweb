$(document).ready(function() {

    // Evento de clique no botão de consulta
    $("#mybtn").click(function() {
        // Pega o valor do CEP digitado
        var cep = $("#cep").val();

        // Opcional: preenche os campos com "..." enquanto consulta
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#uf").val("...");
        $("#ibge").val("...");

        // Monta a URL para a API ViaCEP
        var url = "https://viacep.com.br/ws/" + cep + "/json/";

        // Chama o método getJSON para fazer a consulta
        $.getJSON(url, function(retorno) {
            // Verifica se o CEP foi encontrado (sem erros)
            if (!("erro" in retorno)) {
                // Se não houver erro, atualiza os campos do formulário
                $("#rua").val(retorno.logradouro);
                $("#bairro").val(retorno.bairro);
                $("#cidade").val(retorno.localidade);
                $("#uf").val(retorno.uf);
                $("#ibge").val(retorno.ibge);
            } else {
                // Se o CEP não for encontrado, exibe um alerta
                alert("CEP pesquisado não foi encontrado.");

                // Limpa os campos do formulário
                $("#rua").val("");
                $("#bairro").val("");
                $("#cidade").val("");
                $("#uf").val("");
                $("#ibge").val("");
            }
        });
    });

});