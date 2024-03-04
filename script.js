/* Color Template
<div class="color" style="background-color: aliceblue">
  <span class="display">aliceblue</span>
</div>
*/

// Elements
const $galleries = document.getElementById('galleries')
const $first10 = document.getElementById('first10')
const $blueColors = document.getElementById('blueColors')
const $sortedColors = document.getElementById('sortedColors')

// First 10 Colors
const first10 = colors.slice(0, 10)
$first10.innerHTML = first10.map(color => `
  <div class="color" style="background-color: ${color.name}">
    <span class="display">${color.name}</span>
  </div>`).join('')

// Blue Gallery
// Create a gallery containing all colors with blue in their name
function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  for (const prop in props) {
    $el[prop] = props[prop]
  }
  $el.append(...children)
  return $el
}

const blueColors = colors.filter(color => color.name.includes('blue'))

blueColors.forEach(color => {
  $blueColors.append(
    createElement(
      'div', 
      {className: 'color', style: 'background-color:' + color.name },
      createElement('span', {className: 'display'}, color.name)  
    )
  )
})

// Sorted by Hex Value
const sortedColors = colors.toSorted((a, b) => {
  if (a.hex < b.hex) {
    return -1
  } else if (a.hex > b.hex) {
    return 1;
  } 
  return 0
})

$sortedColors.innerHTML = sortedColors.reduce((html, color) => html += `
  <div class="color" style="background-color: ${color.hex}">
    <span class="display">${color.hex}</span>
  </div>`, '')


