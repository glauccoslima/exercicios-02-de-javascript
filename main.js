// Lista de estudantes com nome e notas
const students = [
  { name: "João", grade1: 8, grade2: 7 },
  { name: "Maria", grade1: 9, grade2: 6 },
  { name: "Pedro", grade1: 5, grade2: 6 },
  { name: "Ana", grade1: 7, grade2: 9 }
];

// Função para calcular a média das notas
function calculateAverage(grade1, grade2) {
  return (grade1 + grade2) / 2;
}

// Função para verificar e mostrar se cada estudante foi aprovado com base na média de 7
function checkAndShowResults(students) {
  students.forEach(student => {
    const average = calculateAverage(student.grade1, student.grade2);
    let message = `Não foi dessa vez, ${student.name}.\n Sua média foi: ${average}. Tente Novamente!`;

    if (average >= 7) {
      message = `Parabéns, ${student.name}!\n Você foi aprovado(a) com média: ${average} no concurso!\n`;
    }

    // Exibe o resultado
    alert(message);
  });
}

// Executa a função de verificação de resultados
checkAndShowResults(students);
