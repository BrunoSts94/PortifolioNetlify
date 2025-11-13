const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p10 = document.getElementById('p10');
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
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto de uma pagina com efeito de carrocel utilizando javascript para fazer a troca de imagens. <br> 
        O tema do projeto é sobre o jogo World of Tanks, onde são apresentadas imagens do jogo e um breve resumo. <br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS e JAVASCRIPT.`;
        imgSite.style.backgroundImage = "url('/img/img-wot.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/carrocel-world-of-tanks/index.html'
		break

        case p2: //Gerenfacil
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto academico de uma landing page para apresentação de um software de gestão empresarial. <br>
        O objetivo do projeto é apresentar o produto e suas funcionalidades, com o intuito de captar novos clientes. <br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS.`;
        imgSite.style.backgroundImage = "url('/img/img-gfacil.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/gerenfacil/index.html'
		break

        case p3: //Previsão do tempo
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto de uma pagina de consulta sobre previsão do tempo, onde o usuário pode digitar o nome da cidade e é retornado a previsão do tempo. <br> 
        o projeto tem como objetivo fazer ligação com uma API, e retornar informações climaticas conforme a localidade informada. <br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS, JAVASCRIPT, REACT e consumo de API.`;
        imgSite.style.backgroundImage = "url('/img/img-previsao.jpg')"
        linkPage.href = 'https://brunosts94.github.io/Projetos-Com-Build/previsao-do-tempo'
		break

        case p4: //Mario Brothers
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto criado para explorar novas funcionalidades do javascript, criação e recebimento de formularios, máscara de fundo e botões de direcionamento para redes sociais. <br>
        O objetivo do projeto é criar uma landing divertida, onde o usuario ao interagir com o botão de contato, é apresentado um formulario oculto. <br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS, JAVASCRIPT e consumo de API.`;
        imgSite.style.backgroundImage = "url('/img/img-mario.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/mario-brothers/index.html'
		break

        case p5:  //Ajustador RGB
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Neste projeto pude aprender mais funcionalidades do javascript, criando um ajustador de cores. <br>
        O objetivo do projeto é permitir que o usuário ajuste as cores em um painel na página. <br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS e JAVASCRIPT.`;
        imgSite.style.backgroundImage = "url('/img/img-rgb.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/ajustador-rgb/index.html'
		break

        case p6: //X-men
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto criado com o objetivo de exercitar posicionamento de objetos e seleção na tela, com animações em javascript. <br>
        O tema do projeto é sobre o universo dos X-men. Onde o usuario clica sobre um personagem e automaticamente é trocado o fundo do site<br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS e JAVASCRIPT.`;   
        imgSite.style.backgroundImage = "url('/img/img-xmen.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/X-men/index.html'
		break

        case p7: //Linea Odonto
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto pessoal fullstack, sistema desenvolvido para uma clinica odontologica fictícia. <br>
        No sistema o usuário pode marcar consultas para seus cliente conforme disponibilidade da agenda. <br>
        Este projeto foca em demonstrar minha proficiência no consumo e manipulação de dados de APIs. </br>
        * Nota: Devido à sua dependência de API, o projeto não está funcional na versão estática do GitHub Pages. Recomendo clonar o repositório, instalar as dependencias e posteriormente roda-lo (npm run server e npm run dev). </br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS, Javascript, NodeJs, Webpack, Dayjs (biblioteca).`;
        imgSite.style.backgroundImage = "url('/img/img-linea.jpg')"
        linkPage.href = 'https://brunosts94.github.io/Projetos-Com-Build/linea-odonto'
		break

        case p8: //Beauty Saloon
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto pessoal de uma página ficticia para um salão de beleza. <br>
        Pagina em desenvolvimento... <br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS, Typescript, React e Node.`;
        imgSite.style.backgroundImage = "url('/img/img-beauty.jpg')"
        linkPage.href = 'https://beauty-salloon-teste.netlify.app'
		break

        case p9: //Elite Treinamentos
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto criado para a empresa Elite treinamentos. Esta foi o minha primeira experiência como freelancer, onde pude colocar em prática um pouco do meu conhecimento e empenho. <br> 
        Se trata de uma página comercial com o objetivo de apresentar um negócio e seus serviços.`
        imgSite.style.backgroundImage = "url('/img/img-elite.jpg')"
        linkPage.href = 'https://elitetreinamentos.netlify.app/'
		break

        case p10: //Prompt manager
        textInfo.innerHTML = `
        <strong>Sobre</strong></br>
        Projeto de um gerenciador de Prompts com armazenamento em local storage.<br> 
        Nesse projeto podemos gerenciar nosssos prompts, podendo adicionar, editar, excluir e pesquisar em uma lista. Também é possivel copiar a area de texto. Projeto responsivo para dispositivos móveis.<br>
        <strong>Tecnologias utilizadas:</strong> </br>
        HTML, CSS, Javascript e Microsoft Copilot`;
        imgSite.style.backgroundImage = "url('/img/img-prompt.jpg')"
        linkPage.href = 'https://brunosts94.github.io/LandingPages_Portifolio/prompt-manager/index.html'
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

