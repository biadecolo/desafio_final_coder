const pecas = [
  
  { id: 1, nome: 'O Poderoso Chefão', preco: 50.00, imgUrl: 'img/godfather.png' },
  { id: 2, nome: 'A Origem', preco: 50.00, imgUrl: 'img/inception.png' },
  { id: 3, nome: 'Interestelar', preco: 50.00, imgUrl: 'img/interestelar.png' },
  { id: 4, nome: 'Vingadores: Ultimato', preco: 50.00, imgUrl: 'img/avengers.png' },
  { id: 5, nome: 'Parasita', preco: 50.00, imgUrl: 'img/parasita.png' },
  { id: 6, nome: 'Coringa', preco: 50.00, imgUrl: 'img/joker.png' },
  { id: 7, nome: 'Matrix', preco: 50.00, imgUrl: 'img/matrix.png' },
  { id: 8, nome: 'Gladiador', preco: 50.00, imgUrl: 'img/gladiador.png' },
  { id: 9, nome: 'O Senhor dos Anéis: O Retorno do Rei', preco: 50.00, imgUrl: 'img/senhoraneis.png' },
  { id: 10, nome: 'Pulp Fiction', preco: 50.00, imgUrl: 'img/pulpf.png' },
  { id: 11, nome: 'Clube da Luta', preco: 50.00, imgUrl: 'img/fightclub.png' },
  { id: 12, nome: 'O Cavaleiro das Trevas', preco: 50.00, imgUrl: 'img/batmanruim.png' },
  { id: 13, nome: 'Forrest Gump', preco: 50.00, imgUrl: 'img/forrestgump.png' },
  { id: 14, nome: 'A Lista de Schindler', preco: 50.00, imgUrl: 'img/schindler.png' },
  { id: 15, nome: 'O Iluminado', preco: 50.00, imgUrl: 'img/shining.png' },
  { id: 16, nome: 'Blade Runner 2049', preco: 50.00, imgUrl: 'img/blade.png' },
  { id: 17, nome: 'Django Livre', preco: 50.00, imgUrl: 'img/django.png' },
  { id: 18, nome: 'Mad Max: Estrada da Fúria', preco: 50.00, imgUrl: 'img/madmax.png' },
  { id: 19, nome: 'O Grande Lebowski', preco: 50.00, imgUrl: 'img/lebowski.png' },
  { id: 20, nome: 'A Vida é Bela', preco: 50.00, imgUrl: 'img/avidaehbela.png' },
 
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
              <a href="#" class="btn btn-primary" data-indice="${indice}">Quero alugar</a>
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