// Ange Hello World som ett värde till div-output
document.getElementById('output').innerText = 'Hello World'

let counter = 0

function count () {
  counter++
  document.getElementById('counteroutput').innerText = counter
}

function generateGreetings () {
  // Hämta värdet från input-elementet
  const name = document.getElementById('name').value

  // If sata, om name == 'Medieinstitutet'
  if (name === 'Medieinstitutet') {
    location.assign('secondPage.html')
  }
  const age = document.getElementById('age').value

  // Generera meddelandet
  const message = `${name} är ${age} år gammal.`

  // Posta meddelandet till output-elementet
  document.getElementById('nameoutput').innerText = message
}

// Lägg till Event listeners till buttons
document.getElementById('btncount').addEventListener('click', count)
document.getElementById('btnname').addEventListener('click', generateGreetings)