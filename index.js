// Componente
class Texto {
    constructor(contenido) {
      this.contenido = contenido;
    }
  
    mostrar() {
      return this.contenido;
    }
  }
  
  // Decorador Base
  class DecoradorTexto {
    constructor(texto) {
      this.texto = texto;
    }
  
    mostrar() {
      return this.texto.mostrar();
    }
  }
  
  // Decoradores Concretos
  class MayusculasDecorator extends DecoradorTexto {
    mostrar() {
      return super.mostrar().toUpperCase();
    }
  }
  
  class BordeDecorator extends DecoradorTexto {
    mostrar() {
      return `<div style="border: 1px solid black; padding: 5px;">${super.mostrar()}</div>`;
    }
  }
  
  class EnlaceDecorator extends DecoradorTexto {
    constructor(texto, url) {
      super(texto);
      this.url = url;
    }
  
    mostrar() {
      return `<a href="${this.url}">${super.mostrar()}</a>`;
    }
  }
  
  // Uso
  const textoSimple = new Texto("Hola Mundo");
  console.log(textoSimple.mostrar()); // Salida: Hola Mundo
  
  const textoEnMayusculas = new MayusculasDecorator(textoSimple);
  console.log(textoEnMayusculas.mostrar()); // Salida: HOLA MUNDO
  
  const textoConBorde = new BordeDecorator(textoSimple);
  console.log(textoConBorde.mostrar());
  // Salida: <div style="border: 1px solid black; padding: 5px;">Hola Mundo</div>
  
  const textoEnMayusculasConBorde = new BordeDecorator(textoEnMayusculas);
  console.log(textoEnMayusculasConBorde.mostrar());
  // Salida: <div style="border: 1px solid black; padding: 5px;">HOLA MUNDO</div>
  
  const textoConEnlace = new EnlaceDecorator(textoSimple, "https://www.ejemplo.com");
  console.log(textoConEnlace.mostrar());
  // Salida: <a href="https://www.ejemplo.com">Hola Mundo</a>
  
  const textoConEnlaceEnMayusculasYBorde = new BordeDecorator(new MayusculasDecorator(new EnlaceDecorator(textoSimple, "https://www.otroejemplo.com")));
  console.log(textoConEnlaceEnMayusculasYBorde.mostrar());
  // Salida: <div style="border: 1px solid black; padding: 5px;"><a href="https://www.otroejemplo.com">HOLA MUNDO</a></div>