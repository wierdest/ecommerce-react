# Serra Shop Ecommerce - Grupo 3

Projeto feito com o intuito de aprimorar as habilidades com o React e Javascript, utilizando de bibliotecas auxiliares, que nesse caso foi o Chakra UI, para criar um ecommerce e suas funcionalidades.

## Parte do front end:
Para inicializar o projeto, deverá ser instalado as seguintes dependências na linha de comando do vscode:

- npm i
- npm run dev

## Parte do servidor:

- npx json-server db.json

# Db Json, exemplo:

```{
  "users": [
    {
      "id": "8b15",
      "nome": "Antonio",
      "email": "antonio@email.com",
      "senha": "123456"
    }
  ],
  "produto": [
    {
      "id": "1",
      "imgUrl": "https://m.media-amazon.com/images/I/51hMgfvQsuL._AC_SL1000_.jpg",
      "nome": "Mouse Gamer Mecânico 3200 Dpi Grafite Warrior - MO268",
      "descricao": "O mouse gamer preto com tecnologia LED proporciona além de conforto durante jogos de longa duração, funções multimídia para avançar e retornar e um design incrível de cores. Há também a vantagem em ter 4 tipos diferentes de sensibilidade para jogar. Disponível com as cores vermelho, roxo, rosa e azul.",
      "preco": 39.9,
      "categoria": "eletronicos",
      "quantidade": 24
    },
    {
      "id": "2",
      "imgUrl": "https://m.media-amazon.com/images/I/71dH97FwGbL._SL1500_.jpg",
      "nome": "Código Limpo: Habilidades Práticas do Agile Software",
      "descricao": "O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.",
      "preco": 88.37,
      "categoria": "livros",
      "quantidade": 5,
      "quantidadeEstoque": 9
    },
    {
      "id": "3",
      "imgUrl": "https://m.media-amazon.com/images/I/61cddzhvlML._AC_SL1500_.jpg",
      "nome": "Chocolate Ouro Branco Pacote 1Kg",
      "descricao": "O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.",
      "preco": 52.36,
      "categoria": "alimentos",
      "quantidade": 0,
      "quantidadeEstoque": 4
    },
    {
      "id": "4",
      "imgUrl": "https://m.media-amazon.com/images/I/61LHuScDwUL._AC_SY625_.jpg",
      "nome": "Tênis Olympikus Citrus Feminino",
      "descricao": "O Olympikus Citrus é o tênis ideal para quem busca resistência e flexibilidade para os corres diários. O seu cabedal em tecido Tear Jacquard multicolor, tem visual em alto relevo, proporcionando resistência, flexibilidade e leveza. Além do sintético com high frequency, com detalhes de aplicação gráfica. Puxador em fita para auxiliar no calce. O solado tem a tecnologia Evasense que proporciona leveza e maciez. Seu design com recortes verticais permite maior flexibilidade e as texturas em pontos estratégicos dão maior aderência e segurança para a sua pisada.",
      "preco": 129.99,
      "categoria": "calcados",
      "quantidade": 18,
      "avaliacao": 4
    },
    {
      "id": "5",
      "imgUrl": "https://m.media-amazon.com/images/I/51eGooSRo0L._AC_SL1000_.jpg",
      "nome": "ASUS VIVOBOOK 15 X1502ZA-EJ611W / INTEL CORE I7 1255U 3,5 GHz, 12 MB Cache / 16 GB / 512 GB SSD PCIe G3X2 /, Cor: Prata",
      "descricao": "Mostre seu estilo para o mundo com o ASUS Vivobook 15, o notebook repleto de recursos que facilitam a realização de tarefas, em qualquer lugar. Tudo no Vivobook 15 é arrojado e aprimorado, desde seu poderoso processador Intel Core de 12ª geração, até sua tela nítida e clara, passando por sua dobradiça plana de 180°, cores modernas, design elegante e um incrível e exclusivo sistema de proteção antibacteriana. Conheça o novo Vivobook 15.",
      "preco": 7699,
      "categoria": "eletronicos",
      "quantidade": 99,
      "avaliacao": 4
    },
    {
      "id": "6",
      "imgUrl": "https://m.media-amazon.com/images/I/81xTHXu8RBL._AC_SL1500_.jpg",
      "nome": "CAPACETE NEW LIBERTY FOR KIDS",
      "descricao": "Com conforto e segurança, este modelo foi planejado para atender o público infantil. Desenvolvido com materiais muito resistentes, a Pro Tork submete os capacetes da marca a rigorosos testes para oferecer alta qualidade. Possui as mesmas características técnicas que os capacetes adultos e certificação do INMETRO. Seu diferencial é o seu grafismo moderno com aplicação em transfer de alta durabilidade contra as ações climáticas.",
      "preco": 141.8,
      "categoria": "automotivos",
      "quantidade": 3,
      "quantidadeEstoque": 2
    },
    {
      "id": "7",
      "imgUrl": "https://m.media-amazon.com/images/I/61j5NSJkc2L._AC_SL1000_.jpg",
      "nome": "CatMyPet Puff Arranhador Rock Meow - Arranhador Puff E Casinha Para Gatos",
      "descricao": "Esse puff arranhador Rock Meow é o que faltava para o seu gatinho ter conforto e diversão na sua casa. Além de carpete interno para aquecer o gatinho, o puff tem arranhador na lateral, é feito de mdf de 6mm, super resistente, até para os gatinhos mais agitados.",
      "preco": 249.9,
      "categoria": "pets",
      "quantidade": 2
    },
    {
      "id": "8",
      "imgUrl": "https://m.media-amazon.com/images/I/91faXbMfGPL._AC_SL1500_.jpg",
      "nome": "Purina Friskies Friskies Petiscos Mix Frango Fígado E Peru 40G",
      "descricao": "FRISKIES® Party Mix traz muita diversão para o seu gato. Cada delicioso petisco foi desenhado para fazer seu gato explorar diferentes formas, cores, sabores e aromas.",
      "preco": 7.49,
      "categoria": "pets",
      "quantidade": 50
    },
    {
      "id": "9",
      "imgUrl": "https://m.media-amazon.com/images/I/81SM0D5+DwL._SL1500_.jpg",
      "nome": "A Sociedade do Anel - Capa Os Anéis de Poder: O Senhor dos Anéis - Parte 1",
      "descricao": "O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real.",
      "preco": 30.99,
      "categoria": "livros",
      "quantidade": 9
    },
    {
      "id": "10",
      "imgUrl": "https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SL1000_.jpg",
      "nome": "Apple iPhone 13 (256 GB) - Meia-noite",
      "descricao": "iPhone 13. O sistema de câmera dupla mais avançado em um iPhone. Chip A15 Bionic com velocidade impressionante. Um grande salto em bateria. Projetado para durar. 5G ultrarrápido*. E tela Super Retina XDR mais brilhante. Avisos legais: *É preciso ter um plano de dados. 5G só está disponível em alguns países e por meio de determinadas operadoras. As velocidades variam de acordo com as condições e operadoras locais. Para obter detalhes sobre a compatibilidade com 5G, entre em contato com sua operadora e consulte apple.com/br/iphone/cellular.",
      "preco": 4319.1,
      "categoria": "eletronicos",
      "quantidade": 15
    },
    {
      "id": "11",
      "imgUrl": "https://m.media-amazon.com/images/I/51LH3HPbAaL._AC_SL1080_.jpg",
      "nome": " Kit Lava Pet Escova Banho Cachorro Gato Dispenser de Shampoo e Luva Nanomagnetica Tira Pelos Para Pelos Curtos - Cores Sortidas",
      "descricao": "Super kit com a Escova Pet com Dispenser + Luva Nano magnética. A Esponja é feita de silicone, muito macio e suave para seu PET. É tudo o que seu PET precisa, além de limpar muito bem, ela também é massageadora. A Luva Mágica para os seus Pets você pode ficar tranquilo enquanto acaricia seu amigão e removendo o excesso de pelos do dog. A companheira ideal para lhe ajudar no banho do seu amigo de quatro patas. O silicone é super fácil de limpar quando fica sujo. O silicone é forte o suficiente para que possa até ser fervido em água quente.",
      "preco": 29.9,
      "categoria": "pets",
      "quantidade": 3
    }
  ],
  "pedido": [
    {
      "id": "1",
      "valorTotal": 200,
      "idUser": "8b15",
      "itens": [
        {
          "idProduto": "1",
          "quantidade": 1
        },
        {
          "idProduto": "2",
          "quantidade": 1
        }
      ]
    }
  ]
}
```

# Vite Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
