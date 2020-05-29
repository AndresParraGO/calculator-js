
const $screen = document.querySelector('#screen')
const $buttons = document.querySelectorAll('td')
const $resultButton = document.querySelectorAll('resultButton')


const expression = /(\d)\W(\d)/


// Clean Screen
function clearScreen() {
  $screen.textContent = ''
}


// Render Char in the Screen
function render(char) {
  $screen.textContent += char
}


// Operation
function operation(dataOne, dataTwo, type) {
  let result
  dataOne = parseFloat(dataOne)
  dataTwo = parseFloat(dataTwo)

  switch(type) {
    case 'suma':
      result = dataOne + dataTwo
      clearScreen()
      render(result)
      break;
    case 'resta':
      result = dataOne - dataTwo
      clearScreen()
      render(result)
      break;
    case 'division':
      result = dataOne / dataTwo
      clearScreen()
      render(result)
      break;
    case 'multi':
      result = dataOne * dataTwo
      clearScreen()
      render(result)
      break;
    case 'modulo':
      result = dataOne % dataTwo
      clearScreen()
      render(result)
      break;
  }
}


//
function result(data) {
  let arr = data.input.split('')

  let parteIzquierda = []
  let parteDerecha = []

  arr.forEach((el, i, array) => {
    if(el === '+' || el === '-' || el === '*' || el === '/' || el === '%') {
      for(let iterate = 0; iterate <= i - 1; iterate++) {
        parteIzquierda.push(arr[iterate])
      }

      for(let iterate = array.length - 1; iterate >= i + 1; iterate--) {
        parteDerecha.push(array[iterate])
      }

      switch(el) {
        case '+':
          operation(parteIzquierda.join(''), parteDerecha.reverse().join(''), 'suma')
          break;
        case '-':
          operation(parteIzquierda.join(''), parteDerecha.reverse().join(''), 'resta')
          break;
        case '*':
          operation(parteIzquierda.join(''), parteDerecha.reverse().join(''), 'multi')
          break;
        case '/':
          operation(parteIzquierda.join(''), parteDerecha.reverse().join(''), 'division')
          break;
        case '%':
          operation(parteIzquierda.join(''), parteDerecha.reverse().join(''), 'modulo')
          break;
      }
    }
  })
}


for(let i = 0; i <= $buttons.length - 1; i++) {
  $buttons[i].addEventListener('click', e => {

    if($buttons[i].getAttribute('name') !== '=') {
      render($buttons[i].getAttribute('name'))
    }

    if($buttons[i].getAttribute('name') === 'c') {
      clearScreen()
    }

  })
}

resultButton.addEventListener('click', e => {
  result($screen.textContent.trim().match(expression))
})


