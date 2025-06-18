let tela = 0;

function setup() {

  createCanvas(800, 600);

  textWrap(WORD);

}

function draw() {

  // Fundo por tela

  if (tela == 0) {

    background(100, 150, 255); // Azul

  } else if (tela == 1) {

    background(150, 255, 150); // laranja

  } else if (tela == 2) {

    background(255, 150, 200); // Rosa

  } else if (tela == 3) {

    background(200, 150, 255); // Roxo

  } else if (tela == 4) {

    background(255, 80, 80); // Vermelho

  }

  // Mostra seta (exceto na última tela)

  if (tela < 4) {

    fill(180);

    rect(width - 120, height - 100, 100, 80, 10);

    fill(50);

    triangle(width - 90, height - 80, width - 90, height - 40, width - 50, height - 60);

  }

  // Texto explicativo

  fill(255);

  textSize(24);

  noStroke();

  textAlign(LEFT, TOP);

  if (tela == 0) {

    text("Nesse trabalho com o tema de comemorar a conexão entre o campo e a cidade vou explicar os setores da indústria e como eles estão relacionados em nosso cotidiano.\nPara dar início ao jogo clique na seta, localizada no canto direito da tela até a explicação terminar", 60, 60, 680);

  } else if (tela == 1) {

    text("o setor primario da indústria é a parte da economia que fica responsável porque extrai os recursos naturais e direto da natureza.\nA agricultura é uma das atividades que faz parte do setor primário incluindo a colheita de coisas como soja, milho, arroz, feijão e etc. A pecuária é relacionado com a criação de animais como a vaca e a galinha. E a mineração que e ficsdo na busca de minerais como por exemplo o ouro.\nEm si ele é responsável para coletar recursos da natureza.", 60, 60, 680);

  } else if (tela == 2) {

    text("O setor secundário é como uma continuação, pois ele pega os recursos naturais como por exemplo o leite, madeira e algodão, e transforma em coisas que utilizamos no dia a dia, por exemplo pegando a madeira e transformando em cadeiras, camas, sofás e etc.\nResumindo esse setor, ele pega oq o setor primário colhe e os transforma em utilidades para o dia a dia", 60, 60, 680);

  } else if (tela == 3) {

    text("ele segue sendo uma continuação do setor secundário. O setor secundário transoforma as colheitas em utilidades, e o setor terciário pega essas utilidades e os leva para o mercado de venda, podendo também oferecer serviços as pessoas, como motoboy, comércios, supermercados, turismos e etc", 60, 60, 680);

  } else if (tela == 4) {

    textAlign(CENTER, CENTER);

    text("Você chegou ao fimm Obrigadaa por assistir até aqui!!", width / 2, height / 2);

  }

}

function mousePressed() {

  if (tela < 4 &&

      mouseX > width - 120 && mouseX < width - 20 &&

      mouseY > height - 100 && mouseY < height - 20) {

    tela++;

    // começa a tocar o som
  }

}
  



  