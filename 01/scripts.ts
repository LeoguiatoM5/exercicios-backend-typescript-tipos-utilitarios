type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNascimento?: string
}

type UsuarioCadastro = Omit<Required<Usuario>, 'rg'>;

const cadastrarUsuário = (info: UsuarioCadastro): UsuarioCadastro => {
    return info;
}