// script.js

// Array de citações
var citacoes = [
    "Acredite em si mesmo e todo o resto irá se encaixar. Acredite em seu próprio julgamento, pois você é mais sábio do que pensa.",
    "O único modo de fazer um ótimo trabalho é amar o que você faz.",
    "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.",
    "Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A maneira mais eficaz de fazer algo é fazê-lo.",
    "A persistência é o caminho do êxito.",
    "Você é capaz de criar uma vida extraordinária.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "O sucesso não é o final, o fracasso não é fatal: o que conta é a coragem de continuar."
  ];
  
  // Função para gerar uma citação aleatória
  function gerarCitacao() {
    var areaCitacao = document.getElementById("area-citacao");
    var randomIndex = Math.floor(Math.random() * citacoes.length);
    var citacao = citacoes[randomIndex];
    areaCitacao.innerHTML = citacao;
  }
  