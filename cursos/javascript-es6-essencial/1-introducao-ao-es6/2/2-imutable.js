const students = [
    {
        name: "Grace",
        grade: 7
    },
    {
        name: "Jennifer",
        grade: 7
    },
    {
        name: "Paul",
        grade: 6
    },
];

function getApprovedStudents(studentsList){    
    return studentsList.filter(student => student.grade >= 7);
}

console.log("Alunos aprovados: ");
const nome = getApprovedStudents(students)
for(let i=0; i<nome.length; i++){
    console.log(`${i} - ${nome[i].name}`)
}

console.log("-----------------")
console.log("Lista de alunos: ")
console.log(students)