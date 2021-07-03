const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

// to get a random lower letter where a = 97 
const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// to get a random upper letter where A = 65
const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// to get a random number where 0 = 48
const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// make a custom set of symbols 
const getRandomSymbol = () => {
  const symbols = "!@#$^&(){}[]=<>/,."
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value // what is the length
  const hasLower = lowercaseEl.checked // is there lowercase letter
  const hasUpper = uppercaseEl.checked // is there uppercase letter 
  const hasNumber = numbersEl.checked 
  const hasSymbol = symbolsEl.checked
  // change the inner text to the result text field with the generated password
  resultEl.innerText = generatePassword(
    length, hasLower, hasUpper, hasNumber, hasSymbol
  )
})

function generatePassword(len, lower, upper, number, symbol) {
  let generatedPassword = ''
  // here true = 1 and false = 0 
  const typesCount = lower + upper + number + symbol;
  const typesArr = [ {lower}, {upper}, {number}, {symbol} ].filter(item => Object.values(item)[0])
  if (typesCount === 0) {
    return ''
  } 
  for (let i = 0; i < len; i+=typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, len)
  return finalPassword
}

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea') // new textarea
  const password = resultEl.innerText; // the password itself
  if (!password) { return }
  textarea.value = password; 
  document.body.appendChild(textarea)

  // this is how we select and copy 
  textarea.select()
  document.execCommand('copy')

  // then remove the textarea from the dom 
  textarea.remove()
  alert('Password is copied to the clipboard')

})

