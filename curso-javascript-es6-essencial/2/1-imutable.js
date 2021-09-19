// A imutabilidade é um conceito do paradigma funcional que o JavaScript adota: 
// O valor da variavel nunca muda, se for preciso é criado um novo valor em outra variavel

const user = {
    name: "Darlley",
    lastName: "Brasil de Brito Furtado"
}

function getUserWithFullName(user){
    return {
        ...user, // spread operator
        fullname: `${user.name} ${user.lastName}` 
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName)
console.log(userWithFullName.fullname)