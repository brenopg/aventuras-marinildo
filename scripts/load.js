function preload() {
  fita = loadJSON('fita/fita.json');

  imagemCenario = loadImage('imagens/cenario/Layer_0000_9.png');
  imagemCenario1 = loadImage('imagens/cenario/Layer_0001_8.png');
  imagemCenario2 = loadImage('imagens/cenario/Layer_0002_7.png');
  imagemCenario3 = loadImage('imagens/cenario/Layer_0003_6.png');
  imagemCenario4 = loadImage('imagens/cenario/Layer_0004_Lights.png');
  imagemCenario5 = loadImage('imagens/cenario/Layer_0005_5.png');
  imagemCenario6 = loadImage('imagens/cenario/Layer_0006_4.png');
  imagemCenario7 = loadImage('imagens/cenario/Layer_0007_Lights.png');
  imagemCenario8 = loadImage('imagens/cenario/Layer_0008_3.png');
  imagemCenario9 = loadImage('imagens/cenario/Layer_0009_2.png');
  imagemCenario10 = loadImage('imagens/cenario/Layer_0010_1.png');
  
  imagemTelaInicial = loadImage('imagens/assets/menu.png');
  imagemVida = loadImage('imagens/assets/coracao1.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/run4.gif');
  imagemInimigo = loadImage('imagens/inimigos/ghost.gif');
  imagemInimigoVoador = loadImage('imagens/inimigos/bat.gif');
  imagemInimigoGrande = loadImage('imagens/inimigos/skeleton.gif');
  imagemInimigoMedio = loadImage('imagens/inimigos/frog.gif');


  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

  somDoJogo = loadSound('sons/royal.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}