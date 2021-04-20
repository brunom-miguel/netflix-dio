$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
});

var gameOfThrones = {
    nome: "Game of Thrones",
    poster: "https://www.themoviedb.org/t/p/original/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/cNuJOVJvJJXjA6Io4PizviZ0cXG.jpg",
    avaliacao:"84%",
    ano: "2011",
    temporadas: "8 temporadas",
    descricao: "Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra.",
};
var grimm = {
    nome:"GRIMM",
    poster:"https://www.themoviedb.org/t/p/original/5hC8CertBqHbXNPcfm1LZ18VcjD.jpg",
    fundo: "https://www.themoviedb.org/t/p/original/1ZENhNqYmnmvItQlLgYIYWT4XIp.jpg",
    avaliacao:"82%",
    ano:"2011",
    temporadas:"6 temporadas",
    descricao:"O detetive Nick Burkhardt descobre que é o último dos Grimm, seres que protegem o mundo humano dos monstros saídos dos contos de fadas.",
};
var greysAnatomy = {
    nome:"Grey's Anatomy",
    poster:"https://www.themoviedb.org/t/p/original/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/pn6PSwyo2FoZDmdvHQ49RYwM4oI.jpg",
    avaliacao:"82%",
    ano:"2005",
    temporadas:"17 temporadas",
    descricao:"Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... ",
};
var supernatural = {
    nome:"Supernatural",
    poster:"https://www.themoviedb.org/t/p/original/ovFzkkKknAo2SbM2DfOabxRvzmy.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/55RcCNfnEQrFUehyS9hsSrH4nZc.jpg",
    avaliacao:"82%",
    ano:"2005",
    temporadas:"15 temporadas",
    descricao:"Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.",
};
var theWalkingDead = {
    nome:"The Walking Dead",
    poster:"https://www.themoviedb.org/t/p/original/owjSPGHbtgTiC34qvbIAyTViwur.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/pNiKSsohk61JXimcXAhyZVU3Q60.jpg",
    avaliacao:"81%",
    ano:"2010",
    temporadas:"10 temporadas",
    descricao:"Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos.",
};
var vikings = {
    nome:"Vikings",
    poster:"https://www.themoviedb.org/t/p/original/eO2pyluU9L4SgpN60Jk5MDyX68T.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/wPOmXBgjy4xrxxw5gyVFDfhx8Ii.jpg",
    avaliacao:"80%",
    ano:"2013",
    temporadas:"6 temporadas",
    descricao:"Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico.",
};
var house = {
    nome:"Dr. House",
    poster:"https://www.themoviedb.org/t/p/original/teFg9jM4s0RLW6Pvd3YH9cDngIR.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/r9t9lblyPfudl0LV0Ujg1nXdKyW.jpg",
    avaliacao:"86%",
    ano:"2004",
    temporadas:"8 temporadas",
    descricao:"Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.",
};
var suits = {
    nome:"Suits",
    poster:"https://www.themoviedb.org/t/p/original/ubEYUaE1EOBnSgb1OteAeGJP1E5.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/edsotmSdhkWZazcljC1K2Lrkg5Y.jpg",
    avaliacao:"80%",
    ano:"2011",
    temporadas:"9 temporadas",
    descricao:"Mesmo sem se formar e sem licença para advogar, um jovem brilhante impressiona um importante advogado e consegue uma cobiçada posição em sua firma.",
};
var friends = {
    nome:"Friends",
    poster:"https://www.themoviedb.org/t/p/original/cOkRLttsxWTtJJCE6HPPpBzS6tk.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
    avaliacao:"84%",
    ano:"1994",
    temporadas:"10 temporadas",
    descricao:"Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York. ",
};
var himym = {
    nome:"How I Met Your Mother",
    poster:"https://www.themoviedb.org/t/p/original/2Xtx5wO9jvAx8PyD6FhHEpmzyVU.jpg",
    fundo:"https://www.themoviedb.org/t/p/original/xZFbIlSl93YbdOLuKBfaSAihck4.jpg",
    avaliacao:"81%",
    ano:"2005",
    temporadas:"9 temporadas",
    descricao:"No ano de 2030, Ted Mosby, um arquiteto, decide explicar a seus filhos a história de como ele conheceu a mãe deles.",
};

var series = [gameOfThrones, grimm, greysAnatomy, supernatural,theWalkingDead, vikings, house, suits, friends, himym];

var posterGameOfThrones = document.getElementById('poster-gameOfThrones');
var posterGrimm = document.getElementById('poster-grimm');
var posterGreys = document.getElementById('poster-greys');
var posterSupernatural = document.getElementById('poster-supernatural');
var posterTheWalkingDead = document.getElementById('poster-walking');
var posterVikings = document.getElementById('poster-vikings');
var posterHouse = document.getElementById('poster-house');
var posterSuits = document.getElementById('poster-suits');
var posterFriends = document.getElementById('poster-friends');
var posterHIMYM = document.getElementById('poster-himym');

function selecionaGrimm(){
    var divFundoFilme = document.getElementById("filme-principal");
    var divAvaliacaoFilme = document.getElementById("detalhes-extras");

    var divDescricaoFilme = document.getElementById("descricao");

    var divTituloFilme = document.getElementById("titulo");

    divFundoFilme.style.backgroundImage = `url(${grimm.fundo})`;
    
    divAvaliacaoFilme.innerHTML = "<p id='detalhes-extras'><span id='avaliacao'>" + grimm.avaliacao + "</span><span id='ano'>"+ grimm.ano +"</span><span id='temporadas'>"+ grimm.temporadas +"</span></p>"

    divDescricaoFilme.innerHTML = "<p class='descricao'>" + grimm.descricao + "</p>"

    divTituloFilme.innerHTML = "<h3 id='titulo'>"+ grimm.nome +"</h3>"
}

function selecionaGameOfThrones(){
    var divFundoFilme = document.getElementById("filme-principal");
    var divAvaliacaoFilme = document.getElementById("detalhes-extras");

    var divDescricaoFilme = document.getElementById("descricao");

    var divTituloFilme = document.getElementById("titulo");

    divFundoFilme.style.cssText = 
    'backgroundImage: `url(${'+gameOfThrones.fundo+'})`' +
    'backgroundImage: linear-gradient(280deg, rgba(0,0,0,.50),rgba(0,0,0,1)100%)';
    
    divAvaliacaoFilme.innerHTML = "<p id='detalhes-extras'><span id='avaliacao'>" + gameOfThrones.avaliacao + "</span><span id='ano'>"+ gameOfThrones.ano +"</span><span id='temporadas'>"+ gameOfThrones.temporadas +"</span></p>"

    divDescricaoFilme.innerHTML = "<p class='descricao'>" + gameOfThrones.descricao + "</p>"

    divTituloFilme.innerHTML = "<h3 id='titulo'>"+ gameOfThrones.nome +"</h3>"
}
function selecionaGreys(){
    var divFundoFilme = document.getElementById("filme-principal");
    var divAvaliacaoFilme = document.getElementById("detalhes-extras");

    var divDescricaoFilme = document.getElementById("descricao");

    var divTituloFilme = document.getElementById("titulo");

    divFundoFilme.style.backgroundImage = `url(${greysAnatomy.fundo})`;
    
    divAvaliacaoFilme.innerHTML = "<p id='detalhes-extras'><span id='avaliacao'>" + greysAnatomy.avaliacao + "</span><span id='ano'>"+ greysAnatomy.ano +"</span><span id='temporadas'>"+ greysAnatomy.temporadas +"</span></p>"

    divDescricaoFilme.innerHTML = "<p class='descricao'>" + greysAnatomy.descricao + "</p>"

    divTituloFilme.innerHTML = "<h3 id='titulo'>"+ greysAnatomy.nome +"</h3>"
}
function selecionaSupernatural(){
    var divFundoFilme = document.getElementById("filme-principal");
    var divAvaliacaoFilme = document.getElementById("detalhes-extras");

    var divDescricaoFilme = document.getElementById("descricao");

    var divTituloFilme = document.getElementById("titulo");

    divFundoFilme.style.backgroundImage = `url(${supernatural.fundo})`;
    
    divAvaliacaoFilme.innerHTML = "<p id='detalhes-extras'><span id='avaliacao'>" + supernatural.avaliacao + "</span><span id='ano'>"+ supernatural.ano +"</span><span id='temporadas'>"+ supernatural.temporadas +"</span></p>"

    divDescricaoFilme.innerHTML = "<p class='descricao'>" + supernatural.descricao + "</p>"

    divTituloFilme.innerHTML = "<h3 id='titulo'>"+ supernatural.nome +"</h3>"
}
function selecionaWalking(){
    var divFundoFilme = document.getElementById("filme-principal");
    var divAvaliacaoFilme = document.getElementById("detalhes-extras");

    var divDescricaoFilme = document.getElementById("descricao");

    var divTituloFilme = document.getElementById("titulo");

    divFundoFilme.style.backgroundImage = `url(${theWalkingDead.fundo})`;
    
    divAvaliacaoFilme.innerHTML = "<p id='detalhes-extras'><span id='avaliacao'>" + theWalkingDead.avaliacao + "</span><span id='ano'>"+ theWalkingDead.ano +"</span><span id='temporadas'>"+ theWalkingDead.temporadas +"</span></p>"

    divDescricaoFilme.innerHTML = "<p class='descricao'>" + theWalkingDead.descricao + "</p>"

    divTituloFilme.innerHTML = "<h3 id='titulo'>"+ theWalkingDead.nome +"</h3>"
}
function selecionaVikings(){
    var divFundoFilme = document.getElementById("filme-principal");
    var divAvaliacaoFilme = document.getElementById("detalhes-extras");

    var divDescricaoFilme = document.getElementById("descricao");

    var divTituloFilme = document.getElementById("titulo");

    divFundoFilme.style.backgroundImage = `url(${vikings.fundo})`;
    
    divAvaliacaoFilme.innerHTML = "<p id='detalhes-extras'><span id='avaliacao'>" + vikings.avaliacao + "</span><span id='ano'>"+ vikings.ano +"</span><span id='temporadas'>"+ vikings.temporadas +"</span></p>"

    divDescricaoFilme.innerHTML = "<p class='descricao'>" + vikings.descricao + "</p>"

    divTituloFilme.innerHTML = "<h3 id='titulo'>"+ vikings.nome +"</h3>"
}