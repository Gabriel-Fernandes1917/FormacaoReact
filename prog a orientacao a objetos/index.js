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
        // let valorSacado = 200;
        
        if(this._saldo >= valor){

            this._saldo -= valor;
            
            return valor;
        }
    }

        depositar(valor){

            if(valor <= 0){
                return; // early return
            }
            this._saldo += valor;
        }

    
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Salim"
cliente1.cpf = 121212122323


cliente2.nome = "Pedro"
cliente2.cpf = 033434343433


const contaCorrenteSalim = new ContaCorrente();

contaCorrenteSalim.agencia = 1001;


contaCorrenteSalim.depositar(35);
console.log(contaCorrenteSalim._saldo)
// obj.metodo();

const valorSacado = contaCorrenteSalim.sacar(30);
console.log(`foi sacado ${valorSacado}`);

console.log(contaCorrenteSalim._saldo)

console.log(contaCorrenteSalim)