class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
    
  }

  setup() {
    fita.mapa.forEach(({inimigo, velocidade}) => {
      this.mapa.push({
        inimigo,
        velocidade,
      })
    })
    
    cenario = new Cenario(imagemCenario, 10);
    cenario1 = new Cenario(imagemCenario1, 9);
    cenario2 = new Cenario(imagemCenario2, 8);
    cenario3 = new Cenario(imagemCenario3, 7);
    cenario4 = new Cenario(imagemCenario4, 6);
    cenario5 = new Cenario(imagemCenario5, 5);
    cenario6 = new Cenario(imagemCenario6, 4);
    cenario7 = new Cenario(imagemCenario7, 3);
    cenario8 = new Cenario(imagemCenario8, 2);
    cenario9 = new Cenario(imagemCenario9, 1);
    cenario10 = new Cenario(imagemCenario10, 0);
    
    pontuacao = new Pontuacao()
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 120, height/12, 74, 110, 0, 0);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 75, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, height / 3, 80, 80, 200, 150);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, height/12, 120, 120, 400, 0, 0)
    const inimigoMedio = new Inimigo(matrizInimigoMedio, imagemInimigoMedio, width, height/12, 110, 110, 300, 0, 0)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
    inimigos.push(inimigoMedio)

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)


  }

  keyPressed(key) {
    if (!this.morreu) {
      personagem.pula()
      somDoPulo.play()
    } else {
      window.location.reload(); 
    }
    
  }

  draw() {
    const linhaAtual = this.mapa[this.indice]

    const inimigo = inimigos[linhaAtual.inimigo]
    inimigo.alteraVelocidade(linhaAtual.velocidade)

    const inimigoInvisivel = inimigo.x < -inimigo.largura

    cenario10.exibe();
    cenario10.move();
    
    cenario9.exibe();
    cenario9.move();
    
    cenario8.exibe();
    cenario8.move();
    
    cenario7.exibe();
    cenario7.move();
    
    cenario6.exibe();
    cenario6.move();
    
    cenario5.exibe();
    cenario5.move();
    
    cenario4.exibe();
    cenario4.move();
    
    cenario3.exibe();
    cenario3.move();
    
    cenario2.exibe();
    cenario2.move();
    
    cenario1.exibe();
    cenario1.move();
    
    cenario.exibe();
    cenario.move();

    pontuacao.exibe()
    pontuacao.adicionarPonto()
    vida.draw()

    personagem.exibe();
    personagem.aplicaGravidade();

    inimigo.exibe()
    inimigo.move()

    if (inimigoInvisivel) {
      this.indice++
      inimigo.reaparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0
      }
    }
    
    if(personagem.estaColidindo(vida)) {
       vida.ganhaVida()
    }
    
    console.log(linhaAtual)
    if(linhaAtual.vida) {
       vida.exibeNovaVida()
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida()
      personagem.tornarInvencivel()
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3)
        
        this.morreu = true;
        textAlign(CENTER);
        fill('#fff');
        textSize(width / 25);
        text('Pressione qualquer tecla para reiniciar', width / 2, height * 2 / 3)
        noLoop()
      }
    }
  }
}