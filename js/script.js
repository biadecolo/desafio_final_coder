const pecas = [
  
  { id: 1, nome: 'O Poderoso Chefão', preco: 50.00, imgUrl: 'img/godfather.png', dsc: "Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios." },
  { id: 2, nome: 'A Origem', preco: 50.00, imgUrl: 'img/inception.png', dsc: "Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos." },
  { id: 3, nome: 'Interestelar', preco: 50.00, imgUrl: 'img/interestelar.png', dsc: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar." },
  { id: 4, nome: 'Vingadores: Ultimato', preco: 50.00, imgUrl: 'img/avengers.png', dsc: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco." },
  { id: 5, nome: 'Parasita', preco: 50.00, imgUrl: 'img/parasita.png', dsc: "Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Por obra do acaso, ele começa a dar aulas de inglês para uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano para se infiltrar também na abastada família, um a um. No entanto, os segredos e mentiras necessários à ascensão social cobram o seu preço." },
  { id: 6, nome: 'Coringa', preco: 50.00, imgUrl: 'img/joker.png', dsc: "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante." },
  { id: 7, nome: 'Matrix', preco: 50.00, imgUrl: 'img/matrix.png', dsc: "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia." },
  { id: 8, nome: 'Gladiador', preco: 50.00, imgUrl: 'img/gladiador.png', dsc: "Maximus é um poderoso general romano, amado pelo povo e pelo imperador Marcus Aurelius. Antes de sua morte, o Imperador desperta a ira de seu filho Commodus ao tornar pública a sua predileção em deixar o trono para Maximus. Sedento pelo poder, Commodus mata seu pai, assume a coroa e ordena a morte de Maximus, que consegue fugir antes de ser pego, e passa a se esconder como um escravo e gladiador enquanto vai atrás de vingança." },
  { id: 9, nome: 'O Senhor dos Anéis: O Retorno do Rei', preco: 50.00, imgUrl: 'img/senhoraneis.png', dsc: "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel." },
  { id: 10, nome: 'Pulp Fiction', preco: 50.00, imgUrl: 'img/pulpf.png', dsc: "Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle." },
  { id: 11, nome: 'Clube da Luta', preco: 50.00, imgUrl: 'img/fightclub.png', dsc: "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler." },
  { id: 12, nome: 'O Cavaleiro das Trevas', preco: 50.00, imgUrl: 'img/batmanruim.png', dsc: "Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos."  },
  { id: 13, nome: 'Forrest Gump', preco: 50.00, imgUrl: 'img/forrestgump.png', dsc: "Mesmo com o raciocínio lento, Forrest Gump nunca se sentiu desfavorecido. Graças ao apoio da mãe, ele teve uma vida normal. Seja no campo de futebol como um astro do esporte, lutando no Vietnã ou como capitão de um barco de pesca de camarão, Forrest inspira a todos com seu otimismo. Mas a pessoa que Forrest mais ama pode ser a mais difícil de salvar: seu amor de infância, a doce e perturbada Jenny."  },
  { id: 14, nome: 'A Lista de Schindler', preco: 50.00, imgUrl: 'img/schindler.png', dsc: "O alemão Oskar Schindler viu na mão de obra judia uma solução barata e viável para lucrar com negócios durante a guerra. Com sua forte influência dentro do partido nazista, foi fácil conseguir as autorizações e abrir uma fábrica. O que poderia parecer uma atitude de um homem não muito bondoso, transformou-se em um dos maiores casos de amor à vida da História, pois este alemão abdicou de toda sua fortuna para salvar a vida de mais de mil judeus em plena luta contra o extermínio alemão."  },
  { id: 15, nome: 'O Iluminado', preco: 50.00, imgUrl: 'img/shining.png', dsc: "Jack Torrance se torna caseiro de inverno do isolado Hotel Overlook, nas montanhas do Colorado, na esperança de curar seu bloqueio de escritor. Ele se instala com a esposa Wendy e o filho Danny, que é atormentando por premonições. Jack não consegue escrever e as visões de Danny se tornam mais perturbadoras. O escritor descobre os segredos sombrios do hotel e começa a se transformar em um maníaco homicida, aterrorizando sua família."  },
  { id: 16, nome: 'Blade Runner 2049', preco: 50.00, imgUrl: 'img/blade.png', dsc: "No século 21, uma corporação desenvolve clones humanos para serem usados como escravos em colônias fora da Terra, identificados como replicantes. Em 2019, um ex-policial é acionado para caçar um grupo fugitivo vivendo disfarçado em Los Angeles."  },
  { id: 17, nome: 'Django Livre', preco: 50.00, imgUrl: 'img/django.png' , dsc: "No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para perseguir os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a entrarem em competições mortais." },
  { id: 18, nome: 'Mad Max: Estrada da Fúria', preco: 50.00, imgUrl: 'img/madmax.png', dsc: "Em um mundo pós-apocalíptico, Max Rockatansky acredita que a melhor forma de sobreviver é não depender de ninguém. Porém, após ser capturado pelo tirano Immortan Joe e seus rebeldes, Max se vê no meio de uma guerra mortal iniciada pela Imperatriz Furiosa, que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita ajudá-la."  },
  { id: 19, nome: 'O Grande Lebowski', preco: 50.00, imgUrl: 'img/lebowski.png', dsc: "Jeff Lebowski é um boa vida que acaba se envolvendo com a história de um milionário com o mesmo nome. O ricaço pede ajuda a Jeff para entregar o dinheiro do resgate de sua esposa, que foi sequestrada por bandidos perigosos."  },
  { id: 20, nome: 'A Vida é Bela', preco: 50.00, imgUrl: 'img/avidaehbela.png', dsc: "Durante a Segunda Guerra Mundial na Itália, o judeu Guido e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele precisa usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência ao redor."  },
 
  ];
  

  const prod = document.querySelector(".produtos")
  
  let acumular = ""

  pecas.forEach((e,indice)=>{  
    acumular += `
      <div class="col-md-3 cardprod">
          <div class="card" style="">
            <img class="card-img-top" src="${e.imgUrl}" alt="${e.nome}">
            <div class="card-body">
              <h5 class="card-title tailwind-truncate">${e.nome}</h5>
              <p class="card-text">R$${e.preco.toFixed(2)}</p>
              <div class="row justify-content-center">
              <a href="#" class="btn btn-dark" data-indice="${indice}">Quero alugar</a>
              </div>
            </div>
          </div>
      </div>
    `
  })
  
  prod.innerHTML=acumular

  const btnCompra = document.querySelectorAll(".btn")

  btnCompra.forEach((e)=>{
    e.addEventListener("click",(evt)=>{
      const index = evt.target.getAttribute("data-indice")
      const peca = pecas[index]
      
      localStorage.setItem("pecaSelecionada",JSON.stringify(peca))

      window.location.href="ver.html"
      
    })
  })

// Inicio Buscar
function filtrarFilmes() {
  const input = document.getElementById('searchBar').value.toLowerCase();

  const filmes = document.querySelectorAll('.cardprod');

  filmes.forEach(filme => {
    const titulo = filme.querySelector('.card-title').textContent.toLowerCase();

    if (titulo.includes(input)) {
      filme.style.display = 'block';
    } else {
      filme.style.display = 'none';
    }
  });
}

// Fim Buscar