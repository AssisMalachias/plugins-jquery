  $(document).ready(function () {
        $('#carousel-imagens').slick({
            autoplay: true,
            arrows: false
        })
        $('.menu-hamburguer').click(function(){
            $('nav').slideToggle();
        })
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DD) 00000-0000'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
})

$('#cep').mask('00000-000', {
    placeholder: '00000-000'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
        veiculoDeInteresse: {
                required: false
        },
         messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email valido',
            telefone: 'Por favor, insira o seu telefone',
            endereco: 'Por favor, insira o endereço',
            cep: 'Por favor, insira o CEP',
            cpf: 'Por favro, insira o CPF'
        },
        submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.submit();
    },
   
    },
    invalidHandler: function (evento, validator) {
        let camposIncorretos = validator.numberOfInvalids();
        if(camposIncorretos){
            alert(`Por favor,existem ${camposIncorretos} preencha os campos para prosseguir com a compra!`);
        }
        
    }
    
})
$('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
})