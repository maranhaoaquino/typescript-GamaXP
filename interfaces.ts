interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return{
        nome: 'Lucas',
        email: 'lucas@lucas.com'
    }
}

function setUser(usuario: Usuario){
    //...
}