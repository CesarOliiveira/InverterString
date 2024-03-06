function inverterString(mensagem) {
    let novaString = '';
    for (let i = mensagem.length - 1; i >= 0; i--) {
        novaString += mensagem[i];
    }
    return novaString;
}


let mensagem = "Sei la";
console.log(inverterString(mensagem)); 