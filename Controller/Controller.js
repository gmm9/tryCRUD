async function criaUsuario(nome, nota) {
    const conexao = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            nota: nota
        })
    })
    if(!conexao.ok) {
        throw new Error('Não foi possivel enviar o produto');
    }

    const conexaoConvertida = await conexao.json();
}

module.exports = {
    criaUsuario,
}