
const inputs = document.querySelectorAll('input, textarea') // => retorna NodeList (array de elementos): para usar o forEach
const btn = document.getElementById('btn')
const errorMessage = document.querySelectorAll('.errorMessage')

btn.addEventListener('click', validate)

const user = {
    firstName: '',
    email: '',
    telefone: '',
    message: ''
}

async function validate() {
    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            input.classList.add('error')
            errorMessage[index].classList.remove('desativado')
        } else {
            input.classList.add('preenchido')
            errorMessage[index].classList.add('desativado')
        }

        let fieldName = input.name
        user[fieldName] = input.value
    })

    console.log(user)

    await postData(user)
}

async function postData(user) {
    await fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

//COMENTÀRIOS PARA ESTUDO:

// null => ausência de valor de forma proposital, pode não conter tal informação
// undefined => ausência de valor SÓ que uma ausência de valor que AINDA não foi definido, ele AINDA espera que algum valor possa ser definido

//   for(let i = 0; i < inputs.length; i++) {
//   }

// classList => add, remove, contains, toggle ...

// DOM => Virtual DOM

// TRIM => remove espaços em branco

// => CRIPTOGRAFIA / HASHING

// CRIPTOGRAFIA => "vai e volta"
// HASHING => "vai" / **** => politica de privacidade, cultura, segurança

// array[vetor] (o vetor é o índice do array) => o elemento a ser acessado



//TAREFAS:
// 1. Capturar os elementos HTML via DOM - [X]
// capturar TRÊS elementos=> inputs, botão e as mensagens de erro
// 2. Adicionar um evento de click no botão - [X]
// 3. Verificar se o input está vazio ou não - [X]
// 4. Validar o campo de input - [X]
// 5. Separar os dados que vêm do input para um objeto pronto para ser enviado para um servidor Backend - [X]
// 6. Enviar os dados para o Backend e cadastrar no Banco de Dados - [X]

