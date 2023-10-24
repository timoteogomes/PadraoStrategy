
// Interface Strategy
class Strategy {
    execute(a, b) {
      throw new Error('O método execute deve ser implementado');
    }
  }
  
  // Implementações concretas das estratégias
  class Soma extends Strategy {
    execute(a, b) {
      return a + b;
    }
  }
  
  class Subtracao extends Strategy {
    execute(a, b) {
      return a - b;
    }
  }
  
  class Multiplicacao extends Strategy {
    execute(a, b) {
      return a * b;
    }
  }
  
  // Classe principal
  class Calculadora {
    constructor() {
      this.strategy = null;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calcular(a, b) {
      if (!this.strategy) {
        throw new Error('A estratégia não foi definida.');
      }
      return this.strategy.execute(a, b);
    }
  }
  
  // Código de teste
  const calculadora = new Calculadora();
  
  const num1 = parseInt(prompt('Digite o primeiro número: '));
  const num2 = parseInt(prompt('Digite o segundo número: '));
  
  const escolha = parseInt(
    prompt('Escolha a operação desejada: 1 para Soma, 2 para Subtração, 3 para Multiplicação')
  );
  
  if (escolha === 1) {
    calculadora.setStrategy(new Soma());
  } else if (escolha === 2) {
    calculadora.setStrategy(new Subtracao());
  } else if (escolha === 3) {
    calculadora.setStrategy(new Multiplicacao());
  } else {
    console.log('Escolha inválida!');
  }
  
  if (calculadora.strategy) {
    const resultado = calculadora.calcular(num1, num2);
    console.log('Resultado: ', resultado);
  }