const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const imgSite = document.getElementById('imgSite')

function showMenu(){
    const menu = document.querySelector(".headerEsquerda");
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else {
        menu.style.display = 'flex'
    }
}



const infoProjs = document.querySelector('.infoProjs')
let mascara = document.querySelector('.mascara')
const textInfo = document.querySelector('.textInfo')
let linkPage = document.getElementById('linkPage')

function showInfoProjs(valorP){
    infoProjs.style.left = "50%";
    infoProjs.style.transform = "translateX(-50%)";
    mascara.style.visibility = 'visible'
    

    switch(valorP) {
		case p1: //Carrocel World of Tanks
        textInfo.innerHTML = `Projeto de uma pagina com efeito de carrocel utilizando javascript para fazer a troca de imagens. <br> 
        O tema do projeto é sobre o jogo World of Tanks, onde são apresentadas imagens do jogo e um breve resumo. <br>
        Tecnologias utilizadas: HTML, CSS e JAVASCRIPT.`;
        imgSite.style.backgroundImage = "url('/img/img-wot.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/carrocel-world-of-tanks/index.html'
		break

        case p2: //Gerenfacil
        textInfo.innerHTML = `Projeto academico de uma landing page para apresentação de um software de gestão empresarial. <br>
        O objetivo do projeto é apresentar o produto e suas funcionalidades, com o intuito de captar novos clientes. <br>
        Tecnologias utilizadas: HTML, CSS.`;
        imgSite.style.backgroundImage = "url('/img/img-gfacil.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/gerenfacil/index.html'
		break

        case p3: //Previsão do tempo
        textInfo.innerHTML = `Projeto de uma pagina de consulta sobre previsão do tempo, onde o usuário pode digitar o nome da cidade e é retornado a previsão do tempo. <br> 
        o projeto tem como objetivo fazer ligação com uma API, e retornar informações climaticas conforme a localidade informada. <br>
        Tecnologias utilizadas: HTML, CSS, JAVASCRIPT, REACT e consumo de API.`;
        imgSite.style.backgroundImage = "url('/img/img-previsao.jpg')"
        linkPage.href = 'https://brunosts94.github.io/Projetos-React-Portifolio'
		break

        case p4: //Mario Brothers
        textInfo.innerHTML = `Projeto criado para explorar novas funcionalidades do javascript, criação e recebimento de formularios, máscara de fundo e botões de direcionamento para redes sociais. <br>
        O objetivo do projeto é criar uma landing divertida, onde o usuario ao interagir com o botão de contato, é apresentado um formulario oculto. <br>
        Tecnologias utilizadas: HTML, CSS, JAVASCRIPT e consumo de API.`;
        imgSite.style.backgroundImage = "url('/img/img-mario.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/mario-brothers/index.html'
		break

        case p5:  //Ajustador RGB
        textInfo.innerHTML = `Neste projeto pude aprender mais funcionalidades do javascript, criando um ajustador de cores. <br>
        O objetivo do projeto é permitir que o usuário ajuste as cores em um painel na página. <br>
        Tecnologias utilizadas: HTML, CSS e JAVASCRIPT.`;
        imgSite.style.backgroundImage = "url('/img/img-rgb.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/ajustador-rgb/index.html'
		break

        case p6: //X-men
        textInfo.innerHTML = `Projeto criado com o objetivo de exercitar posicionamento de objetos e seleção na tela, com animações em javascript. <br>
        O tema do projeto é sobre o universo dos X-men. Onde o usuario clica sobre um personagem e automaticamente é trocado o fundo do site<br>
        Tecnologias utilizadas: HTML, CSS e JAVASCRIPT.`;   
        imgSite.style.backgroundImage = "url('/img/img-xmen.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/X-men/index.html'
		break

        case p7: //Parallax
        textInfo.innerHTML = `Projeto academico onde aprendi como criar o efeito paralax em um site, foi um projeto simples mas que gostei bastante, pois pude explorar essse efeito interessandte juntamente com o uso de mídia. <br>
        O tema do projeto é sobre o exército brasileiro, onde são apresentadas imagens que vão mudando conforme vamos escrolando a tela. <br>
        Tecnologias utilizadas: HTML e CSS.`;
        imgSite.style.backgroundImage = "url('/img/img-eb.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/parallax/index.html'
		break

        case p8: //Agência Crescer
        textInfo.innerHTML = `Projeto realizado para criação de uma pagina ficticia de uma agencia, aplicando responsividade. <br>
        O objetivo do projeto é apresentar uma empresa fictícia e seus serviços. <br>
        Tecnologias utilizadas: HTML e CSS.`;
        imgSite.style.backgroundImage = "url('/img/img-agencia.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/agencia-crescer/index.html'
		break

        case p9: //Elite Treinamentos
        textInfo.innerHTML = `Projeto criado para a empresa Elite treinamentos. Esta foi o minha primeira experiência como freelancer, onde pude colocar em prática um pouco do meu conhecimento e empenho. <br> 
        Se trata de uma página comercial com o objetivo de apresentar um negócio e seus serviços.`
        imgSite.style.backgroundImage = "url('/img/img-elite.jpg')"
        linkPage.href = 'https://elitetreinamentos.netlify.app/'
		break

		default:
		console.log("opção não cadastrada")
		break
	}
}

function hiddenMask(){
    infoProjs.style.left = "-890px";
    infoProjs.style.transform = "translateX(0)";
    mascara.style.visibility = 'hidden'
}

