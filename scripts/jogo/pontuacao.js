class Pontuacao {
  constructor() {
    this.pontos = 0
  }
  
  exibe() {
    textAlign(RIGHT)
    fill('#fff')
    textSize(40)
    textFont('Georgia')
    text(parseInt(this.pontos), width - 30, 50)
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2
  }
}