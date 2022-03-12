// class um "molde"

class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo = 0;
    _saldo = 0;

    sacar(valor){
        //function or metodo
        let valorSacado = 200;
        
        if(this._saldo >= valor){

            //this.saldo   thisObj.saldo

            this._saldo -= valor;
        }
    }

        depositar(valor){

            if(valor > 0){
                this._saldo += valor;
            }
        }

    
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Salim"
cliente1.cpf = 121212122323


cliente2.nome = "Pedro"
cliente2.cpf = 033434343433


const contaCorrenteSalim = new ContaCorrente();
// contaCorrenteSalim.#saldo = 0;
contaCorrenteSalim.agencia = 1001;

console.log(contaCorrenteSalim.saldo)
contaCorrenteSalim.depositar(323);
console.log(contaCorrenteSalim.saldo)
// obj.metodo();
// contaCorrenteSalim.sacar(30)


console.log(contaCorrenteSalim.saldo)