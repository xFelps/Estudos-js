var pessoa = {
    age: 10,
    name: 'Lucas',
    sex: 'male'
};

var pessoa2 = {
    age: 15,
    name: 'Felipe'
}

function getRemainingYearsToMajorty (person) {
    return 18 - person.age; 
}

function increasePersonAge (teste) {
    teste.age = teste.age + 1; 
    if (teste.sex) {
        teste.sex = 'female'
    }
}
console.log('git')
increasePersonAge(pessoa);
increasePersonAge(pessoa2);
console.log(pessoa, pessoa2)

function eAdultoOuCrianca (remainingYears) {
    if (remainingYears <= 3 && remainingYears > 0) {
        return 'Ele é adolescente';
    } else if (remainingYears > 3) {
        return 'Ele é criança';
    } else {
        return 'Maior de idade';
    }
}

console.log(eAdultoOuCrianca(getRemainingYearsToMajorty(pessoa)))
