import { ProductDetail } from "../models/product-detail.model";

const PRODUCTS = [
  //// <Combos>
  new ProductDetail(
    1,
    'Combo 1',
    [5],
    [1],
    [
      {
        size: undefined,
        price: 32.9,
        unitId: 1,
      },
    ],
    'combo-1',
    '8 uramakis, 2 niguiris, 3 sashimis, mini sunomono'
  ),
  new ProductDetail(
    2,
    'Combo 2',
    [5],
    [1],
    [
      {
        size: undefined,
        price: 42.9,
        unitId: 1,
      },
    ],
    'combo-2',
    '8 uramakis, 2 niguiris, 8 hossomakis, 5 sashimis, mini sunomono'
  ),
  new ProductDetail(
    3,
    'Combo 3',
    [5],
    [1],
    [
      {
        size: undefined,
        price: 69.9,
        unitId: 1,
      },
    ],
    'combo-3',
    '8 uramakis, 4 niguiris, 8 hossomakis, 10 sashimis, 5 hot rolls, 3 guiozas, mini sunomono'
  ),
  new ProductDetail(
    4,
    'Combo 4',
    [5],
    [1],
    [
      {
        size: undefined,
        price: 119.9,
        unitId: 1,
      },
    ],
    'combo-4',
    '16 uramakis, 8 niguiris, 16 hossomakis, 20 sashimis, 5 hot rolls, mini sunomono'
  ),
  new ProductDetail(
    5,
    'Combo de Jows',
    [5],
    [1],
    [
      {
        size: undefined,
        price: 42.9,
        unitId: 1,
      },
    ],
    'combo-de-jows',
    '2 jows filadélfia, 2 jow brie, 2 jow especial, 2 jow trufado, 2 jow camarão empanado, 2 niguiri trufado'
  ),
  new ProductDetail(
    6,
    'Combo Fitness',
    [5],
    [1],
    [
      {
        size: undefined,
        price: 39.9,
        unitId: 1,
      },
    ],
    'combo-fitness',
    '1 temaki filadélfia com flocos, 10 sashimi peixe branco, 2 gunkan shimeji'
  ),
  new ProductDetail(
    7,
    'Combo Ideal',
    [5],
    [1],
    [
      {
        size: '140g cada',
        price: 29.9,
        unitId: 1,
      },
    ],
    'combo-ideal',
    '2 temakis de qualquer sabor*',
    undefined,
    false,
    undefined,
    [
      'Válido até às 17h',
      'Temakis trufados, temakis com camarão ou temakis personalizados não são válidos para promoção',
    ]
  ),
  new ProductDetail(
    8,
    'Combo na Medida',
    [5],
    [1],
    [
      {
        size: '140g cada',
        price: 42.9,
        unitId: 1,
      },
    ],
    'combo-na-medida',
    '3 temakis de qualquer sabor*',
    undefined,
    false,
    undefined,
    [
      'Válido até às 17h',
      'Temakis trufados, temakis com camarão ou temakis personalizados não são válidos para promoção',
    ]
  ),
  new ProductDetail(
    9,
    'Combo Personalizado',
    [5],
    [1],
    [
      {
        size: undefined,
        price: 42.9,
        unitId: 1,
      },
    ],
    'combo-personalizado',
    'Escolha 3 opções',
    undefined,
    false,
    ['Válido até às 17h', 'Não é possível escolher nenhum item 2 vezes'],
    undefined,
    [
      {
        display: true,
        options: [
          'Salada verde com amêndoas',
          'Niguiri (4 unidades e escolher o sabor)',
          'Porção de shimeji',
          'Porção de sunomono',
          'Guioza (2 unidades)',
          'Ceviche de Peixe Branco',
          '5 Hot Roll filadélfia',
          'Uramaki (8 unidades e escolher o sabor)',
          'Hossomaki (8 unidades e escolher o sabor)',
          'Sashimi (4 unidades e escolher o sabor)',
          'Rolinho primavera (2 unidades de queijo ou legumes)',
        ],
      },
    ]
  ),
  //// </Combos>
  //// <Entradas>
  new ProductDetail(
    10,
    'Shimeji',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 18.9,
        unitId: 1,
      },
    ],
    'shimeji',
    'Porção de Shimeji à base de molho de soja, azeite e tarê servido com cebolinha'
  ),
  new ProductDetail(
    11,
    'Tartar de Salmão',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 27.9,
        unitId: 1,
      },
    ],
    'tartar-salmao',
    `Salmão em cubos, queijo brie batido com molho de salsa à base de macadâmia,
    limão, sal e azeite, finalizado com molho sweet chilli e chips de batata doce`
  ),
  new ProductDetail(
    12,
    'Carpaccio de Salmão',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 19.9,
        unitId: 1,
      },
    ],
    'carpaccio-salmao',
    `Finas fatias de salmão com tempero da casa, cebolinha e fios de batata doce`
  ),
  new ProductDetail(
    13,
    'Carpaccio de Salmão Black',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 22.9,
        unitId: 1,
      },
    ],
    'carpaccio-salmao-black',
    `Finas fatias de salmão black coberto com geleia de pimenta e nachos`
  ),
  new ProductDetail(
    14,
    'Rolinho Primavera de Legumes',
    [6],
    [1],
    [
      {
        size: '2 unidades',
        price: 11.9,
        unitId: 1,
      },
    ],
    'rolinho-legumes'
  ),
  new ProductDetail(
    15,
    'Rolinho Primavera de Queijo',
    [6],
    [1],
    [
      {
        size: '2 unidades',
        price: 13.9,
        unitId: 1,
      },
    ],
    'rolinho-queijo'
  ),
  new ProductDetail(
    16,
    'Guioza',
    [6],
    [1],
    [
      {
        size: '3 unidades',
        price: 13.9,
        unitId: 1,
      },
    ],
    'guioza',
    `Tipo de pastel frito recheado com carne e legumes`
  ),
  new ProductDetail(
    17,
    'Sunomono',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 12.9,
        unitId: 1,
      },
    ],
    'sunomono',
    `Salada de pepino com molho agridoce, kani e gergelim`
  ),
  new ProductDetail(
    18,
    'Ceviche de Peixe Branco',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 20.9,
        unitId: 1,
      },
    ],
    'ceviche-peixe-branco',
    `Peixe branco em cubos, marinado no leite de tigre com cebola roxa,
    pimentadedo de moça e cebolinha.Acompanha chips de batata doce`
  ),
  new ProductDetail(
    19,
    'Ceviche de Salmão',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 26.9,
        unitId: 1,
      },
    ],
    'ceviche-salmao',
    `Salmão em cubos, marinado no leite de tirgre com cebola roxa, pimenta dedo de moça e cebolinha.Acompanha chips de batata doce`
  ),
  new ProductDetail(
    20,
    'Ceviche de Camarão',
    [6],
    [1],
    [
      {
        size: undefined,
        price: 30.9,
        unitId: 1,
      },
    ],
    'ceviche-camarao',
    `Camarões graúdos, marinados no leite de tigre com cebola roxa, pimenta dedo de moca e cebolinha.Acompanha chips de batata doce`
  ),
  //// </Entradas>
  //// <Pokes>
  new ProductDetail(
    21,
    'Poke personalizado',
    [7],
    [1],
    [
      {
        size: undefined,
        price: 32.9,
        unitId: 1,
      },
    ],
    `poke`,
    'Personalize seu Poke. Escolha:',
    undefined,
    undefined,
    [
      `Adicione mais proteína por R$ 8,00. Incremente seu poke adicionando mais um complemento ou topping por apenas R$ 2,00.`,
    ],
    ['1 Base', '1 Proteína', '3 Acompanhamentos', '3 Toppings'],
    [
      { display: true, options: ['Arroz', 'Folhas Verdes'], title: 'Base' },
      {
        display: true,
        options: [
          'Salmão',
          'Salmão Empanado',
          'Peixe Branco',
          'Atum',
          'Shimeji',
        ],
        title: 'Proteínas',
      },
      {
        display: true,
        options: [
          'Abobrinha',
          'Alho Poró',
          'Sunomono',
          'Kani',
          'Skin',
          'Morango',
          'Manga',
          'Abacate',
          'Tomate',
          'Cenoura',
          'Pepino',
        ],
        title: 'Acompanhamentos',
      },
      {
        display: true,
        options: [
          'Amêndoas',
          'Macadâmia',
          'Cebola Roxa',
          'Cebolinha',
          'Cream Cheese',
          'Crispy Couve',
          'Nachos',
          'Chips de Batata Doce',
          'Gengibre',
          'Queijo Brie',
        ],
        title: 'Toppings',
      },
    ]
  ),
  //// </Pokes>
  //// <Porções>
  new ProductDetail(
    22,
    'Skin Crocante',
    [8],
    [1],
    [
      {
        size: undefined,
        price: 11.9,
        unitId: 1,
      },
    ],
    'porcao-skin'
  ),
  new ProductDetail(
    23,
    'Peixe Branco Empanado',
    [8],
    [1],
    [
      {
        size: undefined,
        price: 26.9,
        unitId: 1,
      },
    ],
    'porcao-peixe-branco-empanado'
  ),
  new ProductDetail(
    24,
    'Salmão Empanado',
    [8],
    [1],
    [
      {
        size: undefined,
        price: 33.9,
        unitId: 1,
      },
    ],
    'porcao-salmao-empanado'
  ),
  new ProductDetail(
    25,
    'Camarão Empanado',
    [8],
    [1],
    [
      {
        size: undefined,
        price: 35.9,
        unitId: 1,
      },
    ],
    'porcao-camarao-empanado'
  ),
  //// </Porções>
  //// <Temakis Salmão>
  new ProductDetail(
    26,
    'Salmão',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-simples',
    `Salmão fresco`,
    undefined,
    true
  ),
  new ProductDetail(
    27,
    'Salmão Trufado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'trufado',
    `Salmão, crispy de batata doce, finalizado com azeite trufado`,
    undefined,
    true
  ),
  new ProductDetail(
    28,
    'Salmão Black',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'black',
    `Salmão black fresco, amêndoas e cebolinha`
  ),
  new ProductDetail(
    29,
    'Filadélfia',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'filadelfia',
    `Salmão, cream cheese, cebolinha`
  ),
  new ProductDetail(
    30,
    'Salmão Proteico',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'proteico',
    `Salmão, flocos de arroz,raspas de limão siciliano e amêndoas em lascas`
  ),
  new ProductDetail(
    31,
    'Salmão Hot Filadélfia',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'hot-filadelfia',
    `Salmão, salmão empanado e cream cheese`
  ),
  new ProductDetail(
    32,
    'Salmão Camarão',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'salmao-camarao',
    `Salmão, camarão, kani e cream cheese`
  ),
  new ProductDetail(
    33,
    'Temaki do Bem',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'temaki-do-bem',
    `Salmão, camarão, alho poró e cebolinha`
  ),
  new ProductDetail(
    34,
    'Salmão Camarão Empanado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 22.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 27.9,
        unitId: 1,
      },
    ],
    'salmao-camarao-empanado',
    `Salmão, camarão empanado e cream cheese`
  ),
  new ProductDetail(
    35,
    'Salmão Crunchy',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'crunchy',
    `Salmão,cream cheese, amêndoas e raspas de limão`
  ),
  new ProductDetail(
    36,
    'Salmão Lemon',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-lemon',
    `Salmão,raspas de limão, molho  de limão e pepino`
  ),
  new ProductDetail(
    37,
    'Salmão Crocante',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'crocante',
    `Salmão, crispy e cream cheese`
  ),
  new ProductDetail(
    38,
    'Salmão Abacate',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-abacate',
    `Salmão, cream cheese e abacate`
  ),
  new ProductDetail(
    39,
    'Salmão com Shimeji',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-shimeji',
    `Salmão, cream cheese e shimeji`
  ),
  new ProductDetail(
    40,
    'Salmão Macadâmia',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'macadamia',
    `Salmão, macadâmia e maionese`
  ),
  new ProductDetail(
    41,
    'Salmão Couve',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-couve',
    `Salmão, cream cheese e crispy de couve`
  ),
  new ProductDetail(
    42,
    'Salmão Black Especial',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'black-especial',
    `Salmão Black, geleia de pimenta e nachos`
  ),
  new ProductDetail(
    43,
    'Salmão Nacho',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-nacho',
    `Salmão, nachos e cream cheese`
  ),
  new ProductDetail(
    44,
    'Salmão Nacho Camarão',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'nacho-camarao',
    `Salmão, cream cheese, camarão, kani e nachos`
  ),
  new ProductDetail(
    45,
    'Salmão Skin',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 19.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 24.9,
        unitId: 1,
      },
    ],
    'salmao-skin',
    `Salmão, pele do salmão grelhada e cream cheese`
  ),
  new ProductDetail(
    46,
    'Skin',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 13.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 18.9,
        unitId: 1,
      },
    ],
    'temaki-skin',
    `Pele do salmão grelhada e cream cheese`
  ),
  new ProductDetail(
    47,
    'Salmão Kani',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 19.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 24.9,
        unitId: 1,
      },
    ],
    'salmao-kani',
    `Salmão, kani e cream cheese`
  ),
  new ProductDetail(
    48,
    'Salmão Gourmet',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'gourmet',
    `Salmão, cream cheese, amêndoas, brie e tarê`
  ),
  new ProductDetail(
    49,
    'Salmão Fresh',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'fresh',
    `Salmão, alface, brie e molho de limão`
  ),
  new ProductDetail(
    50,
    'Temaki da Casa',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 22.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 27.9,
        unitId: 1,
      },
    ],
    'temaki-da-casa',
    `Salmão, shimeji,  cream cheese e camarão empanado`
  ),
  new ProductDetail(
    51,
    'Salmão Empanado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'salmao-empanado',
    `Temaki de salmão empanado com cream cheese`
  ),
  new ProductDetail(
    52,
    'Salmão Especial Empanado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'especial-empanado',
    `Salmão empanado, cream cheese, alface, molho de limão e togarashi`
  ),
  new ProductDetail(
    53,
    'Salmão do Chef',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'salmao-do-chef',
    `Salmão empanado, camarão, cream cheese e kani`
  ),
  new ProductDetail(
    54,
    'Salmão Hot',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-hot',
    `Pedaços de hot roll e cream cheese`
  ),
  new ProductDetail(
    55,
    'Salmão Grelhado (Quente)',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-grelhado',
    `Salmão grelhado e cream cheese`
  ),
  new ProductDetail(
    56,
    'Salmão Grelhado Especial (Quente)',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'grelhado-especial',
    `Salmão grelhado, abobrinha, tare, doritos e cream cheese`
  ),
  new ProductDetail(
    57,
    'Salmão Poró (Quente)',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'salmao-poro',
    `Salmão grelhado, alho poró e maionese`
  ),
  new ProductDetail(
    58,
    'Salmão Grelhado Couve (Quente)',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'grelhado-couve',
    `Salmão grelhado, crispy de couve e cream cheese`
  ),
  new ProductDetail(
    59,
    'Temaki Empanado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 23.9,
        unitId: 1,
      },
    ],
    'temaki-empanado',
    `Salmão grelhado e cream cheese, empanado por inteiro`
  ),
  //// </Temakis Salmão>
  //// <Temakis Atum>
  new ProductDetail(
    60,
    'Atum',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'atum-simples',
    `Atum fresco - opção cream cheese`
  ),
  new ProductDetail(
    61,
    'Atum Crocante',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'atum-crocante',
    `Atum, crispy, cream cheese`
  ),
  new ProductDetail(
    62,
    'Atum Lemon',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'atum-lemon',
    `Atum, molho de limão, raspas de limão e pepino`
  ),
  new ProductDetail(
    63,
    'Atum Empanado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'atum-empanado',
    `Atum empanado e cream cheese`
  ),
  //// </Temakis Atum>
  //// <Temakis (outros recheios)>
  new ProductDetail(
    64,
    'Camarão',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'temaki-camarao',
    `Camarão, cream cheese e pepino`
  ),
  new ProductDetail(
    65,
    'Camarão Empanado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 22.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 27.9,
        unitId: 1,
      },
    ],
    'temaki-camarao-empanado',
    `Camarão empanado e cream cheese`
  ),
  new ProductDetail(
    66,
    'Camarão Especial',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 21.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 26.9,
        unitId: 1,
      },
    ],
    'camarao-especial',
    `Camarão, cream cheese e kani`
  ),
  new ProductDetail(
    67,
    'Kani',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 15.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 20.9,
        unitId: 1,
      },
    ],
    'temaki-kani',
    `Kani e cream cheese`
  ),
  new ProductDetail(
    68,
    'Califórnia',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 17.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'california',
    `Kani, manga, pepino, maionese e gergelim`
  ),
  new ProductDetail(
    69,
    'Mix',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 20.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 25.9,
        unitId: 1,
      },
    ],
    'mix',
    `Salmão, peixe branco e atum`
  ),
  new ProductDetail(
    70,
    'Peixe Branco',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 17.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'temaki-peixe-branco',
    `Peixe branco fresco, cream cheese e cebolinha`
  ),
  new ProductDetail(
    71,
    'Peixe Branco Lemon',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 17.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'peixe-branco-lemon',
    `Peixe branco ao molho de limão, raspas de limão e pepino`
  ),
  new ProductDetail(
    72,
    'Peixe Branco Ceviche',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 17.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'peixe-branco-ceviche',
    `Peixe branco marinado no leite de tigre, dedo de moca, cebola roxa e cebolinha`
  ),
  new ProductDetail(
    73,
    'Peixe Branco Empanado',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 18.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 23.9,
        unitId: 1,
      },
    ],
    'peixe-branco-empanado',
    `Peixe branco empanado e cream cheese`,
    undefined,
    true
  ),
  new ProductDetail(
    74,
    'Temaki sem Arroz',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 26.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 29.9,
        unitId: 1,
      },
    ],
    'temaki-sem-arroz'
  ),
  new ProductDetail(
    75,
    'Temaki Crispy',
    [9],
    [1],
    [
      {
        size: '140g',
        price: 23.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 27.9,
        unitId: 1,
      },
    ],
    'temaki-crispy',
    `Troque o arroz de qualquer temaki por flocos de arroz`
  ),
  //// </Temakis (outros recheios)>
  //// <Temakis Vegetarianos>
  new ProductDetail(
    76,
    'Pepino',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 12.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 16.9,
        unitId: 1,
      },
    ],
    'temaki-pepino',
    `Pepino japones e maionese`,
    [1]
  ),
  new ProductDetail(
    77,
    'Vegetariano 1',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 14.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 18.9,
        unitId: 1,
      },
    ],
    'vegetariano-1',
    `Pepino, abacate, manga, alface e opção cream cheese`,
    [1]
  ),
  new ProductDetail(
    78,
    'Havaiano',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 14.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 18.9,
        unitId: 1,
      },
    ],
    'havaiano',
    `Morango, abacate, manga e cream cheese`,
    [1]
  ),
  new ProductDetail(
    79,
    'Abobrinha',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 17.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 21.9,
        unitId: 1,
      },
    ],
    'temaki-abobrinha',
    `Shimeji, cream cheese e abobrinha`,
    [1]
  ),
  new ProductDetail(
    80,
    'Shimeji Cream',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 18.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'shimeji-cream',
    `Shimeji, cream cheese e amêndoas`,
    [1]
  ),
  new ProductDetail(
    81,
    'Shimeji Poró',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 18.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'shimeji-poro',
    `Shimeji, alho poró e cream cheese`,
    [1]
  ),
  new ProductDetail(
    82,
    'Shimeji Couve',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 18.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'shimeji-couve',
    `Shimeji, crispy de couve e cream cheese`,
    [1]
  ),
  new ProductDetail(
    83,
    'Personalizado',
    [10],
    [1],
    [
      {
        size: '140g',
        price: 18.9,
        unitId: 1,
      },
      {
        size: '200g',
        price: 22.9,
        unitId: 1,
      },
    ],
    'temaki-vegetariano-personalizado',
    `Monte seu temaki com os ingredientes vegetarianos`,
    [1]
  ),
  //// </Temakis Vegetarianos>
  //// <Pratos Vegetarianos>
  new ProductDetail(
    84,
    'Kapamaki',
    [11],
    [1],
    [
      {
        size: '8 unidades',
        price: 9.9,
        unitId: 1,
      },
    ],
    `Enrolado de arroz fino com pepino e cream cheese`,
    'kapamaki',
    [1]
  ),
  new ProductDetail(
    85,
    'Uramaki vegetariano',
    [11],
    [1],
    [
      {
        size: '8 unidades',
        price: 13.9,
        unitId: 1,
      },
    ],
    'uramaki-vegetariano',
    `Enrolado de alga com arroz por fora, salpicado com gergelim e recheio de pepino, abacate, manga, alface
    e cream cheese`,
    [1]
  ),
  new ProductDetail(
    86,
    'Uramaki de Shimeji',
    [11],
    [1],
    [
      {
        size: '8 unidades',
        price: 15.9,
        unitId: 1,
      },
    ],
    'uramaki-shimeji',
    `Enrolado de alga com arroz por fora, salpicado com gergelim e recheio de shimeji e cream cheese`,
    [1]
  ),
  new ProductDetail(
    87,
    'Hot Roll Vegetariano',
    [11],
    [1],
    [
      {
        size: '8 unidades',
        price: 21.9,
        unitId: 1,
      },
    ],
    'hot-roll-vegetariano',
    `Enrolado de alga com arroz por fora, salpicado com gergelim e recheio de shimeji e cream cheese`,
    [1]
  ),
  new ProductDetail(
    88,
    'Jow Vegetariano',
    [11],
    [1],
    [
      {
        size: '4 unidades',
        price: 21.9,
        unitId: 1,
      },
    ],
    'jow-vegetariano',
    `Enrolado de cenoura cozida, recheado com cream cheese, shimeji e amêndoas`,
    [1]
  ),
  //// </Pratos Vegetarianos>
  //// <Sushis>
  new ProductDetail(
    89,
    'Uramaki Filadélfia',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'uramaki-filadelfia',
    `Salmão e cream cheese (enrolado de alga com arroz por fora salpicado com gergelim)`
  ),
  new ProductDetail(
    90,
    'Uramaki Couve',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'uramaki-couve',
    `Salmão, cream cheese e crispy de couve (enrolado de alga com arroz por fora salpicado com gergelim)`
  ),
  new ProductDetail(
    91,
    'Uramaki Grelhado',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'uramaki-grelhado',
    `Salmão grelhado, cream cheese e crispy couve (enrolado de alga com arroz por fora salpicado com gergelim)`
  ),
  new ProductDetail(
    92,
    'Uramaki Califórnia',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 13.9,
        unitId: 1,
      },
    ],
    'uramaki-california',
    `Kani, manga, pepino, maionese (enrolado de alga com arroz por fora salpicado com gergelim)`
  ),
  new ProductDetail(
    93,
    'Uramaki Skin',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 10.9,
        unitId: 1,
      },
    ],
    'uramaki-skin',
    `Skin e cream cheese (enrolado de alga com arroz por fora salpicado com gergelim)`
  ),
  new ProductDetail(
    94,
    'Uramaki Atum',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'uramaki-atum',
    `Atum e cream cheese (enrolado de alga com arroz por fora salpicado com gergelim)`
  ),
  new ProductDetail(
    95,
    'Uramaki Peixe Branco',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 15.9,
        unitId: 1,
      },
    ],
    'uramaki-peixe-branco',
    `Peixe Branco e cream cheese (enrolado de alga com arroz por fora salpicado com gergelim)`
  ),
  new ProductDetail(
    96,
    'Kappamaki Pepino',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 9.9,
        unitId: 1,
      },
    ],
    'kapamaki',
    `Hossomaki é um enrolado de arroz fino com alga por fora`
  ),
  new ProductDetail(
    97,
    'Kanimaki Kani',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 10.9,
        unitId: 1,
      },
    ],
    'kanimaki',
    `Hossomaki é um enrolado de arroz fino com alga por fora`
  ),
  new ProductDetail(
    98,
    'Shakemaki Salmão',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 14.9,
        unitId: 1,
      },
    ],
    'shakemaki',
    `Hossomaki é um enrolado de arroz fino com alga por fora`
  ),
  new ProductDetail(
    99,
    'Tekamaki Atum',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 14.9,
        unitId: 1,
      },
    ],
    'tekamaki',
    `Hossomaki é um enrolado de arroz fino com alga por fora`
  ),
  new ProductDetail(
    100,
    'Niguiri Salmão',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 14.9,
        unitId: 1,
      },
    ],
    'niguiri-salmao',
    `Bolinho de arroz coberto com fatia de peixe`
  ),
  new ProductDetail(
    101,
    'Niguiri Atum',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 14.9,
        unitId: 1,
      },
    ],
    'niguiri-atum',
    `Bolinho de arroz coberto com fatia de peixe`
  ),
  new ProductDetail(
    102,
    'Niguiri Peixe Branco',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 13.9,
        unitId: 1,
      },
    ],
    'niguiri-peixe-branco',
    `Bolinho de arroz coberto com fatia de peixe`
  ),
  new ProductDetail(
    103,
    'Niguiri Trufado',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 15.9,
        unitId: 1,
      },
    ],
    'niguiri-trufado',
    `Maçaricado.Bolinho de arroz coberto com fatia de peixe`
  ),
  new ProductDetail(
    104,
    'Niguiri Salmão Black',
    [12],
    [1],
    [
      {
        size: '8 unidades',
        price: 15.9,
        unitId: 1,
      },
    ],
    'niguiri-black',
    `Bolinho de arroz coberto com fatia de peixe`
  ),
  //// </Sushis>
  //// <Jows Especiais>
  new ProductDetail(
    105,
    'Jow Filadélfia',
    [13],
    [1],
    [
      {
        size: '4 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'jow-filadelfia',
    `Enrolado de salmão no arroz coberto de salmão batido, cream cheese e cebolinha`
  ),
  new ProductDetail(
    106,
    'Jow Shimeji',
    [13],
    [1],
    [
      {
        size: '4 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'jow-shimeji',
    `Enrolado de salmão maçaricado no arroz coberto com shimeji e cream cheese`
  ),
  new ProductDetail(
    107,
    'Jow Especial',
    [13],
    [1],
    [
      {
        size: '4 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'jow-especial',
    `Enrolado de salmão no arroz, coberto com salmão batido, cream cheese, nachos e geleia de pimenta`
  ),
  new ProductDetail(
    108,
    'Jow Brie',
    [13],
    [1],
    [
      {
        size: '4 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'jow-brie',
    `Enrolado de salmão macaricado no arroz coberto com queijobrie derretido e shimeji`
  ),
  new ProductDetail(
    109,
    'Jow Trufado',
    [13],
    [1],
    [
      {
        size: '4 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    'jow-trufado',
    `Enrolado de salmão maçaricado no arroz, coberto com salmão batido,crispy de batata doce
     e finalizado com toque de azeite de trufas`
  ),
  new ProductDetail(
    110,
    'Jow Camarão Empanado',
    [13],
    [1],
    [
      {
        size: '4 unidades',
        price: 17.9,
        unitId: 1,
      },
    ],
    'jow-camarao-empanado',
    `Enrolado de salmão no camarão empanado, finalizado com cream cheese, cebolinha e molho sweet chilli`
  ),
  //// </Jows Especiais>
  //// <Sashimis>
  new ProductDetail(
    111,
    'Sashimi Salmão',
    [14],
    [1],
    [
      {
        size: '5 fatias',
        price: 22.9,
        unitId: 1,
      },
      {
        size: '10 fatias',
        price: 32.9,
        unitId: 1,
      },
    ],
    'sashimi-salmao'
  ),
  new ProductDetail(
    112,
    'Sashimi Salmão Black',
    [14],
    [1],
    [
      {
        size: '5 fatias',
        price: 23.9,
        unitId: 1,
      },
      {
        size: '10 fatias',
        price: 33.9,
        unitId: 1,
      },
    ],
    'sashimi-black'
  ),
  new ProductDetail(
    113,
    'Sashimi Peixe Branco',
    [14],
    [1],
    [
      {
        size: '5 fatias',
        price: 14.9,
        unitId: 1,
      },
      {
        size: '10 fatias',
        price: 23.9,
        unitId: 1,
      },
    ],
    'sashimi-peixe-branco'
  ),
  new ProductDetail(
    114,
    'Sashimi Atum',
    [14],
    [1],
    [
      {
        size: '5 fatias',
        price: 14.9,
        unitId: 1,
      },
      {
        size: '10 fatias',
        price: 23.9,
        unitId: 1,
      },
    ],
    'sashimi-atum'
  ),
  new ProductDetail(
    115,
    'Sashimi Salmão Maçaricado Trufado',
    [14],
    [1],
    [
      {
        size: '5 fatias',
        price: 23.9,
        unitId: 1,
      },
      {
        size: '10 fatias',
        price: 33.9,
        unitId: 1,
      },
    ],
    'sashimi-trufado'
  ),
  //// </Sashimis>
  //// <Hot Rolls>
  new ProductDetail(
    116,
    'Hot Filadélfia',
    [15],
    [1],
    [
      {
        size: '10 unidades',
        price: 21.9,
        unitId: 1,
      },
    ],
    'hot-roll-filadelfia',
    `Salmão, cream cheese`
  ),
  new ProductDetail(
    117,
    'Hot Poró',
    [15],
    [1],
    [
      {
        size: '10 unidades',
        price: 22.9,
        unitId: 1,
      },
    ],
    'hot-roll-poro',
    `Salmao, alho poró maionese`,
    undefined,
    true
  ),
  new ProductDetail(
    118,
    'Hot Nacho',
    [15],
    [1],
    [
      {
        size: '10 unidades',
        price: 22.9,
        unitId: 1,
      },
    ],
    'hot-roll-nacho',
    `Salmao, cream cheese, nachos`
  ),
  new ProductDetail(
    119,
    'Hot Abacate',
    [15],
    [1],
    [
      {
        size: '10 unidades',
        price: 22.9,
        unitId: 1,
      },
    ],
    'hot-roll-abacate',
    `Salmao, cream cheese, nachos`
  ),
  new ProductDetail(
    120,
    'Hot Camarão',
    [15],
    [1],
    [
      {
        size: '10 unidades',
        price: 23.9,
        unitId: 1,
      },
    ],
    'hot-roll-camarao',
    `Salmao, camarao, cream cheese`
  ),
  new ProductDetail(
    121,
    'Meio Hot Roll',
    [15],
    [1],
    [
      {
        size: '5 unidades',
        price: 16.9,
        unitId: 1,
      },
    ],
    `Escolha o sabor`
  ),
  //// </Hot Rolls>
  //// <Bebidas>
  new ProductDetail(
    122,
    'Refrigerante',
    [16],
    [1],
    [
      {
        size: '350 mL',
        price: 6,
        unitId: 1,
      },
    ],
    'refrigerante'
  ),
  new ProductDetail(
    123,
    'Chá Gelado',
    [16],
    [1],
    [
      {
        size: '350 mL',
        price: 7,
        unitId: 1,
      },
    ],
    'iced-tea'
  ),
  new ProductDetail(
    124,
    'Água sem Gás',
    [16],
    [1],
    [
      {
        size: '290 mL',
        price: 5,
        unitId: 1,
      },
    ],
    'agua'
  ),
  new ProductDetail(
    125,
    'Água com Gás',
    [16],
    [1],
    [
      {
        size: '290 mL',
        price: 5,
        unitId: 1,
      },
    ],
    'agua-com-gas'
  ),
  new ProductDetail(
    126,
    'Cerveja Long Neck',
    [16],
    [1],
    [
      {
        size: '350 mL',
        price: 9,
        unitId: 1,
      },
    ],
    'cerveja-long-neck'
  ),
  new ProductDetail(
    127,
    'Cerveja Heineken',
    [16],
    [1],
    [
      {
        size: '350 mL',
        price: 10,
        unitId: 1,
      },
    ],
    'heineken'
  ),
  new ProductDetail(
    129,
    'Cerveja Praya',
    [16],
    [1],
    [
      {
        size: '350 mL',
        price: 13.9,
        unitId: 1,
      },
    ],
    'cerveja-praya'
  ),
  //// </Bebidas>
  //// <Sobremesas>
  new ProductDetail(
    130,
    'Temaki Doce',
    [17],
    [1],
    [
      {
        price: 14.9,
        unitId: 1,
      },
    ],
    'temaki-doce',
    `Ganache de avelã, morango e flocos de arroz, montados na casquinha`
  ),
  new ProductDetail(
    131,
    'Hot Roll Bis',
    [17],
    [1],
    [
      {
        price: 15.9,
        unitId: 1,
      },
    ],
    'hot-roll-bis',
    `Ganache de avelã, morango e pedacos crocantes de bis`
  ),
  new ProductDetail(
    132,
    'Harumaki de Nutella',
    [17],
    [1],
    [
      {
        size: '2 unidades',
        price: 14.9,
        unitId: 1,
      },
    ],
    'harumaki-nutella',
    `Rolinho primavera recheado com creme de avelã`
  ),
  new ProductDetail(
    133,
    'Palha Italiana Germanos',
    [17],
    [1],
    [
      {
        size: '2 unidades',
        price: 6,
        unitId: 1,
      },
    ],
    'palha-italiana-germanos',
    `Opção fit`
  ),
  //// </Sobremesas>
];

export default PRODUCTS;
