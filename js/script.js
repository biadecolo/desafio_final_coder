const pecas = [
    { id: 1, nome: 'Processador Intel Core i7', preco: 1500.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 2, nome: 'Placa-Mãe ASUS Prime', preco: 800.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 3, nome: 'Memória RAM Kingston 16GB', preco: 450.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 4, nome: 'Placa de Vídeo NVIDIA RTX 3080', preco: 4500.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 5, nome: 'SSD Samsung 1TB', preco: 600.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 6, nome: 'Fonte Corsair 750W', preco: 350.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 7, nome: 'Gabinete Cooler Master', preco: 400.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 8, nome: 'Teclado Mecânico Razer', preco: 500.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 9, nome: 'Mouse Gamer Logitech', preco: 250.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 10, nome: 'Monitor LG 24"', preco: 900.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 11, nome: 'Processador AMD Ryzen 9', preco: 1800.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 12, nome: 'Placa-Mãe MSI MAG', preco: 750.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 13, nome: 'Memória RAM Corsair 32GB', preco: 950.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 14, nome: 'Placa de Vídeo AMD Radeon RX 6800', preco: 3200.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 15, nome: 'HD Seagate 2TB', preco: 350.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 16, nome: 'Cooler Master Hyper 212', preco: 200.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 17, nome: 'Gabinete NZXT H510', preco: 650.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 18, nome: 'Teclado Mecânico HyperX', preco: 450.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 19, nome: 'Mouse Gamer Razer', preco: 300.00, imgUrl: 'https://picsum.photos/100/100' },
    { id: 20, nome: 'Monitor Dell 27"', preco: 1300.00, imgUrl: 'https://picsum.photos/100/100' },
 
  ];
  

  const prod = document.querySelector(".produtos")
  
  let acumular = ""

  pecas.forEach((e)=>{  
    acumular += `
    <div>
        <img src=${e.imgUrl} alt=${e.nome}/>
       <p style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${e.nome}</p>
       <p>R$${e.preco.toFixed(2)}</p>
       <button>Comprar</button>
        </div>
    `
  })
  
  prod.innerHTML=acumular