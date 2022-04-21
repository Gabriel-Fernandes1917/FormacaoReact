class Cliente { // molde de client
    nome;
    cpf;
}

class ContaCorrente{
    saldo;
    agencia;

    sacar(valor){

        if(this.saldo >= valor){
        
            this.saldo -= valor
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor
        }
    }
}


const cliente1 = new Cliente()

cliente1.nome = "Ricardo"
cliente1.cpf = 23232323232



const cliente2 = new Cliente()
 cliente2.Nome = "Alice"
 cliente2.CPF = 12222


const ContaCorrenteRicardo = new ContaCorrente()
ContaCorrenteRicardo.saldo = 0
ContaCorrenteRicardo.agencia = 1001

ContaCorrenteRicardo.depositar(900) 
console.log(ContaCorrenteRicardo.saldo)
ContaCorrenteRicardo.sacar(400)
console.log(ContaCorrenteRicardo)


console.log(cliente1)
// console.log(cliente2)