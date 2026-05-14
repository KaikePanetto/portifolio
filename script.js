function sobre(){
    let divConteudo = document.querySelector('.conteudo');
    let explicar = document.querySelector('#explicar')
    let existente = document.getElementById('resSobre')

    if (existente) {
        existente.remove();
        explicar.innerHTML = `CLIQUE PARA SABER MAIS:`
        return;
    }

    let p = document.createElement('p')
    p.id = 'resSobre'
    explicar.innerHTML = ``
    p.innerHTML = `Eu sou o Kaike Corrêa Panetto, tenho 18 anos e estou cursando o primeiro período de Ciências da Computação pela UVV. Tenho como objetivo profissional construir uma carreira consolidada e que eu possa conseguir conciliar o trabalho com a vida pessoal, para conseguir cuidar dos meus filhos que planejo ter e cuidar da minha esposa.`
    divConteudo.appendChild(p);
}

function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5527981024400';

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');

    let div = document.createElement('div')
    let formulario = document.querySelector('form')
    formulario.remove()
    div.className = 'msg-enviada'
    div.innerHTML = `Mensagem Enviada!`
    contato.appendChild(div)
}
