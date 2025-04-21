
// Atualiza o contador de tempo juntos
function atualizarContador() {
    const inicio = new Date('2022-07-30T00:00:00');
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('contador').innerHTML = 
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos!`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
