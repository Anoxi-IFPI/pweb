function exibirOcultarGenerica(seletor, tipo, flag) {
    let elemento;
    if (tipo === 'tag') {
        elemento = $(seletor);
    } else if (tipo === 'classe') {
        elemento = $('.' + seletor);
    } else if (tipo === 'id') {
        elemento = $('#' + seletor);
    }

    if (flag) {
        elemento.show('slow');
    } else {
        elemento.hide('slow');
    }
}

$(document).ready(function () {
    $('.caixa1').click(function () {
        alert('Evento Click');
    });

    $('.caixa2').dblclick(function () {
        alert('Evento Dblclick');
    });

    $('.caixa3').mouseover(function () {
        alert('Evento Mouseover');
    });
});