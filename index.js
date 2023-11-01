class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
  }
}
class Cliente extends Contato {
  constructor(nome, telefone, email, empresa) {
  super(nome, telefone, email)
    this.empresa = empresa
  }
}
  class Amigo extends Contato {
  constructor(nome, telefone, email, aniversario) {
  super(nome, telefone, email)
    this.aniversario = aniversario
  }
}
  class Colega_de_trabalho extends Contato {
  constructor(nome, telefone, email, departamento) {
  super(nome, telefone, email)
    this.departamento = departamento
  }
}
class Agenda {
constructor() {
  this.contatos = [];
}

adicionarContato(contato) {
  this.contatos.push(contato);
}

  visualizarContatos() {
    this.contatos.forEach((contato, index) => {
      if (contato.constructor.name === 'Contato') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}\n`);

      } else if (contato.constructor.name === 'Cliente') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email},empresa: ${contato.empresa} \n`);

      } else if (contato.constructor.name === 'Amigo') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}, aniversario: ${contato.aniversario} \n`);

      } else if (contato.constructor.name === 'Colega_de_trabalho') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}, departamento: ${contato.departamento}\n`);
      }
    });
  }

  editarContato(numero, novoContato) {
    if (numero >= 0 && numero < this.contatos.length) {
      this.contatos[numero] = novoContato;
    }
  }

  excluirContato(numero) {
    if (numero >= 0 && numero < this.contatos.length) {
      this.contatos.splice(numero, 1);
    }
  }

  pesquisarContatoPorNome(nome) {
    const resultados = this.contatos.filter(contato => contato.nome === nome);
    resultados.forEach((contato, index) => {
      if (contato.constructor.name === 'Contato') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}\n`);

      } else if (contato.constructor.name === 'Cliente') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email},empresa: ${contato.empresa} \n`);

      } else if (contato.constructor.name === 'Amigo') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}, aniversario: ${contato.aniversario} \n`);

      } else if (contato.constructor.name === 'Colega_de_trabalho') {
          return console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}, departamento: ${contato.departamento}\n`);
      }
    });
  }
}

var minhaAgenda = new Agenda();

while (true) {
  console.log('\nEscolha uma opção:');
  console.log('1. Adicionar Contato');
  console.log('2. Visualizar Contatos');
  console.log('3. Editar Contato');
  console.log('4. Excluir Contato');
  console.log('5. Pesquisar por Nome');
  console.log('0. Sair');

  var escolha = parseInt(prompt('Opção: '));

  switch (escolha) {
    case 1:
      console.log(' 1 - Contato Padrão \n 2 - Contato de um Cliente \n 3 - Contato de um Amigo \n 4 - Contato de um Colega de Trabalho')
      var tipo = parseInt(prompt('Tipo de Contato: '))
      if (tipo == 1) {
        var nome = prompt('Nome:');
        var telefone = prompt('Telefone:');
        var email = prompt('Email:');
        minhaAgenda.adicionarContato(new Contato(nome, telefone, email));
        break;
      }
      if (tipo == 2) {
        var nome = prompt('Nome:');
        var telefone = prompt('Telefone:');
        var email = prompt('Email:');
        var empresa = prompt('Digite o nome da empresa: ')
        minhaAgenda.adicionarContato(new Cliente(nome, telefone, email, empresa));
        break;
      }
      if (tipo == 3) {
        var nome = prompt('Nome:');
          var telefone = prompt('Telefone:');
          var email = prompt('Email:');
          var aniversario = prompt('Digite a data de aniversário: ');
          minhaAgenda.adicionarContato(new Amigo(nome, telefone, email, aniversario));
          break;
        }
        if (tipo == 4) {
          var nome = prompt('Nome:');
            var telefone = prompt('Telefone:');
            var email = prompt('Email:');
            var departamento = prompt('Digite o departamento: ')
            minhaAgenda.adicionarContato(new Colega_de_trabalho(nome, telefone, email, departamento));
            break;
          }

    case 2:
      minhaAgenda.visualizarContatos();
      break;
    case 3:
      var numeroEditar = parseInt(prompt('Número do Contato a ser Editado:')) - 1;
      var novoNome = prompt('Novo Nome:');
      var novoTelefone = prompt('Novo Telefone:');
      var novoEmail = prompt('Novo Email:');
      if (minhaAgenda.contatos[numeroEditar].constructor.name === 'Cliente') {
        var propriedadeHeranca = prompt("Nova Empresa:");
        minhaAgenda.editarContato(numeroEditar, new Cliente(novoNome, novoTelefone, novoEmail, propriedadeHeranca));
      }
      else if (minhaAgenda.contatos[numeroEditar].constructor.name === 'Amigo') {
        var propriedadeHeranca = prompt("Nova Data de Nascimento:");
        minhaAgenda.editarContato(numeroEditar, new Amigo(novoNome, novoTelefone, novoEmail, propriedadeHeranca));
      }
      else if (minhaAgenda.contatos[numeroEditar].constructor.name === 'Colega_de_trabalho') {
        var propriedadeHeranca = prompt("Novo Departamento:");
        minhaAgenda.editarContato(numeroEditar, new Colega_de_trabalho(novoNome, novoTelefone, novoEmail, propriedadeHeranca));
      }
      else {
        minhaAgenda.editarContato(numeroEditar, new Contato(novoNome, novoTelefone, novoEmail));
      }
      break;
    case 4:
      var numeroExcluir = parseInt(prompt('Número do Contato a ser Excluído:')) - 1;
      minhaAgenda.excluirContato(numeroExcluir);
      break;
    case 5:
      var nomePesquisa = prompt('Digite o nome do contato:');
      minhaAgenda.pesquisarContatoPorNome(nomePesquisa);
      break;
    case 0:
      console.log('Saindo da Agenda de Contatos.');
      break;
    default:
      console.log('Opção inválida.');
  }

  if (escolha === 0) {
    break;
  }
}
