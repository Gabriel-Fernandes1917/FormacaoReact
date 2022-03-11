// class um "molde"

class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Salim"
cliente1.cpf = 121212122323
cliente1.agencia = 1001
cliente1.saldo = 0

cliente2.nome = "Pedro"
cliente2.cpf = 033434343433
cliente2.agencia = 1001
cliente2.saldo = 0

console.log(cliente1)