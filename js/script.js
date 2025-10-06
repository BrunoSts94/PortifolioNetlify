function showMenu(){
    const menu = document.querySelector(".headerEsquerda");
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else {
        menu.style.display = 'flex'
    }
}

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');

const infoProjs = document.querySelector('.infoProjs')
let mascara = document.querySelector('.mascara')
const textInfo = document.querySelector('.textInfo')
let linkPage = document.getElementById('linkPage')

function showInfoProjs(valorP){
    infoProjs.style.left = "50%";
    infoProjs.style.transform = "translateX(-50%)";
    mascara.style.visibility = 'visible'

    infoProjs.style.left = "50%";
    infoProjs.style.transform = "translateX(-50%)";
    mascara.style.visibility = 'visible'
    

    switch(valorP) {
		case p1: 
        textInfo.innerHTML = "Neste projeto pude aprender um pouco mais sobre o efeito de carrocel em um site, utilizando funcionalidades do Javascript. Foi utilizado imagens do site do jogo World of Tanks, o link do site encontra-se no botão saiba mais."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/carrocel-world-of-tanks/index.html'
		break

		case p2: 
        textInfo.innerHTML = "Neste projeto trabalhei um pouco sobre modelos e a criação de landing pages, utilizando como exemplo uma empresa fictícia que criei em meu TCC na faculdade. O projeto também tem o objetivo de exercitar a responsividade na criação de sites."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/gerenfacil/index.html'
		break

        case p3: 
        textInfo.innerHTML = "Neste projeto foi exercitado funcionalidades do javascript, o projeto tem como objetivo fazer ligação com uma API, e retornar informações climaticas conforme a localidade informada."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/clima-tempo/index.html'
		break

        case p4: 
        textInfo.innerHTML = "Neste projeto foi exercitado funcionalidades do javascript, para criação de um formulario escondido, máscara de fundo, criação de botões para direcionamento para redes sociais, e recebimento de formularios."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/mario-brothers/index.html'
		break

        case p5: 
        textInfo.innerHTML = "Neste projeto pude aprender mais funcionalidades do javascript, criando um ajustador de cores."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/ajustador-rgb/index.html'
		break

        case p6: 
        textInfo.innerHTML = "Neste projeto foi exercitado posicionamento de objetos e seleção na tela, com javascript. também foi um projeto voltado a trabalhar a responsividade."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/X-men/index.html'
		break

        case p7: 
        textInfo.innerHTML = "Neste projeto pude aprender um pouco mais sobre o efeito paralax em um site, foi um projeto simples mas que gostei bastante, pois pude explorar essse efeito interessandte juntamente com o uso de mídia."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/parallax/index.html'
		break

        case p8: 
        textInfo.innerHTML = "Projeto realizado como exercício para criação de uma pagina empresarial, aplicando responsividade."
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/agencia-crescer/index.html'
		break

        case p9: 
        textInfo.innerHTML = "Projeto criado para a empresa Elite treinamentos, esta foi o minha primeira experiência como freelancer, onde pude colocar em prática todo meu conhecimento e empenho. Se trata de uma página com o objetivo de apresentar um negócio e seus serviços."
        linkPage.href = 'https://elitetreinamentos.netlify.app/'
		break

		default:
		console.log("opção não cadastrada")
		break
	}
}

function hiddenMask(){
    infoProjs.style.left = "-590px";
    infoProjs.style.transform = "translateX(0)";
    mascara.style.visibility = 'hidden'
}

