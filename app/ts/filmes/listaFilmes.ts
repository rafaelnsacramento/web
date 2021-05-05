// Arrays responsaveis pelos titulos de filmes
const filmes_acao: string[] = ["Resgate", "The Old Guard", "Mundo Duplo"];
const filmes_aventura: string[] = ["Artemis Fowl", "Dolittle", "Mulan"];
const filmes_romance: string[] = ["The Photograph", "Enquanto Estivermos Juntos", "A Batida Perfeita"];
const filmes_terror: string[] =  ["O Exorcista","A Bruxa"];


//3)Função responsavel por criar o botão para escolher o filme após ter consultado a categoria
// posteriormente acionar a função de filme escolhido
function botaoEscolherFilme() {
    let butCons = document.getElementById('butConsult');
    let butNovo = document.createElement('button');
    butNovo.setAttribute('id', 'butFilme');
    butNovo.textContent = 'Escolher Filme';
    butNovo.setAttribute('id', 'butNovo');
    butNovo.onclick = filmeEscolhido;
    document.body.insertBefore(butNovo, butCons);
}

//4)Função responsavel por trazer os dados do filme escolhido
function filmeEscolhido() {
    let selFilm = <HTMLSelectElement>document.getElementById('selectFilmes');

    if (selFilm.value == 'Resgate') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-acao/resgate.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Em Bangladesh, o mercenário do mercado negro Tyler Rake luta para sobreviver durante a missão para resgatar o filho sequestrado de um chefe do crime internacional."
    }

    else if (selFilm.value == 'The Old Guard') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-acao/the-old-guard.png' height='398px' width='498px'>";
        divSinop.innerHTML = "Em The Old Guard, Andy (Charlize Theron) e seus companheiros formam um grupo de soldados que possuem a inestimável virtude da vida eterna. Eles vivem através dos anos oferecendo seus serviços como mercenários para aqueles que podem pagar, se passando como seres humanos comuns dentre os demais. No entanto, tudo muda com a descoberta de que existe uma outra imortal que atua como fuzileira naval."
    }

    else if (selFilm.value == 'Mundo Duplo') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-acao/mundo-duplo.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Para honrar seu clã, o jovem Dong Yilong embarca em uma perigosa jornada para competir em um torneio que seleciona guerreiros para batalhas. Assista o quanto quiser."
    }

    else if (selFilm.value == 'Artemis Fowl') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-aventura/artemis-fowl.jpeg' height='398px' width='498px'>";
        divSinop.innerHTML = "Artemis Fowl é um garoto de 12 anos muito inteligente que usa sua capacidade para roubar. Um dia, ele descobre um local mágico chamado mundo das fadas. Decidido a roubar a fortuna local, ele sequestra um elfo e cobra um resgate para libertá-lo."
    }

    else if (selFilm.value == 'Dolittle') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-aventura/dolittle.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "O Dr. Dolittle vive com uma variedade de animais exóticos e conversa com eles diariamente. Quando a jovem rainha Victoria fica doente, o excêntrico médico e seus amigos peludos embarcam em uma aventura épica em uma ilha mítica para encontrar a cura."
    }

    else if (selFilm.value == 'Mulan') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-aventura/mulan.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Em Mulan, Hua Mulan (Liu Yifei) é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira."
    }
    else if (selFilm.value == 'The Photograph') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-romance/the-photograph.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Em A Fotografia, Mae (Issa Rae) acaba de enfrentar a inesperada morte de sua mãe, uma famosa fotógrafa que sempre colocou sua profissão acima dos relacionamentos. Vasculhando os pertences deixados pela mãe, Mae encontra algumas fotos antigas e descobre que ela mantinha uma relação secreta com um rapaz estranho. Enquanto tenta desvendar a identidade do homem da foto, Mae se apaixona pelo jornalista responsável por cobrir a morte de sua mãe."
    }
    else if (selFilm.value == 'Enquanto Estivermos Juntos') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-romance/enquanto-estivermos-juntos.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Enquanto Estivermos Juntos é a história real de Jeremy Camp (K.J. Apa), famoso cantor de rock cristão, indicado ao Grammy. A obra foca em como a religião foi essencial para o artista superar as dores de sua vida, principalmente, quando sua esposa Melissa (Britt Robertson) descobriu estar com câncer."
    }
    else if (selFilm.value == 'A Batida Perfeita') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-romance/a-batida-perfeita.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Em A Batida Perfeita, uma famosa cantora e sua assistente lotada de trabalho se deparam com uma escolha que que pode alterar o curso de suas carreiras."
    }
    else if (selFilm.value == 'O Exorcista') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-terror/o-exorcista.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador. Deste modo, ela pede ajuda a um padre, que também um psiquiatra, e este chega a conclusão de que a garota está possuída pelo demônio. Ele solicita então a ajuda de um segundo sacerdote, especialista em exorcismo, para tentar livrar a menina desta possessão."
    }
    else if (selFilm.value == 'A Bruxa') {
        console.log(selFilm.value);
        let divFilme = <HTMLSelectElement>document.getElementById('d3');
        let divSinop = <HTMLSelectElement>document.getElementById('d4');
        divFilme.innerHTML = "<img class='imgFilme' src='./assets/filmes-terror/a-bruxa.jpg' height='398px' width='498px'>";
        divSinop.innerHTML = "Um agricultor se muda para um terreno remoto sob ameaça de excomunhão da igreja. Coisas estranhas começam a acontecer nesse terreno que faz divisa com uma floresta onde, de acordo com os mitos, mora um mal inominável."
    }
}