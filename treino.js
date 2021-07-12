let listaDeAlunos = [
    { nome: "Philipe", nota1: 9, nota2: 9, nota3: 7 },
    { nome: "Sabrina", nota: 9, nota2: 9, nota3: 7 },
    { nome: "João", nota: 8, nota2: 9, nota3: 7 },
];

function nota(array) {
    for (let aluno of array) {
        console.log(`O aluno ${aluno.nome} tirou a nota: ${aluno.nota}`);
    }
}

nota(listaDeAlunos);
