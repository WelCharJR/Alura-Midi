//com algo escrito dentro do parenteses quer dizer somente que voce deu um parametro para aquela funçao,uma das funcionalidades disso é voce poder adicionar uma outra function dentro dela quando ela for chamada ou colocar uma lista dentro dela com varias ids ou classes
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName ==='audio'){
        elemento.play();
    }
    else{
        console.log('Elemento ou seletor não encontrado')
    }
}
//com a tag onclick assim que clicar no botao ele vai fazer aquela funçao expecificada,e para passar essa funçao para ela deve se colocar um sinal de = e depois atribuir a funçao ou açao\\
//colocamos a funçao sem parenteses nesse momento se nao assim que ele passa-se por esse codigo iria executar imediatamente mesmo sem clicar no botao\\
//com a tag querySelectorAll ele ira pegar todos os elementos que tiverem aquela classe que foi especificado e criar uma lista com elas começando no 0
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

for (let contador = 0 ; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]

//o classList foi colocado porque assim ele consegue pegar todos os codigos que estiverem naquela parte da classe,que nessa por exemplo tem 2 classes o que é só tecla que tem o valor 0 e o que tem valor 1 tecla_pom/clap/tim etc.... desse jeito ele vai pegar todos os elementos com o valor 1
    const instrumento = tecla.classList[1]
//utilizamos o cravo ao inves de ' normais porque para esse tipo de codigo o normal não funcionaria,e utilizamos o $ para fazer codigos como esse funcionar nesse contexto e o nome de um codigo desse é template string
    const idAudio = `#som_${instrumento}`
    
//adicionamos uma funçao invisivel (que é uma funçao que nao existe ela so funciona dentro do local que colocou ela) foi usada para fazer com que a function tocaSom (idElementoAudio) nao inicie assim que for colocada uma id dentro dela para ela funcionar
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}

