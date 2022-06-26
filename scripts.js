class ContaBancaria
{
    constructor(agencia, numero, tipo,saldo)
    {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    } 

    get saldo()
    {
        return this._saldo;
    }

    get saldo(valor)
    {
        this._saldo = valor;
    }

    sacar(valor)
    {
        if (valor > this._saldo)
        {
            return 'Operação Inválida';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor)
    {
        this._saldo = this._saldo + valor;
        
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria
{
    constructor(agencia, numero,cartaoCredito)
    {
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito()
    {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor)
    {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria
{
    constructor(agencia, numero)
    {
        super(agencia, numero);
        this.tipo = 'poupança';
        
    }
}

class ContaUniversitaria extends ContaBancaria
{
    constructor(agencia, numero)
    {
        super(agencia, numero);
        this.tipo = 'univesitaria';
    }
    sacar(valor)
    {
        if (vaor > 500)
        {
            return 'Operação inválida';
        }

        this._saldo = this._saldo - valor;
    }
}