const prodImg = document.querySelector('#product-image')
const buttonImg = document.querySelector('#button-image')
const button = document.querySelector('button')

let toggle = true

function onToggleImage() {
  toggle = !toggle
  if (toggle) {
    prodImg.src = '../../../public/images/product-card/couch-static.png'
    buttonImg.src = '../../../public/images/product-card/360-vector.png'
  } else {
    buttonImg.src = '../../../public/images/product-card/close.png'
    prodImg.src = '../../../public/images/product-card/couch-360.gif'
  }
}

button.addEventListener('click', () => {
  onToggleImage()
})
