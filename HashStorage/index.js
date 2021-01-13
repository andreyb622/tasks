import {coctailsStorage} from './coctailsStorage.js'

const wrapper = document.querySelector('.wrapper');
const control = wrapper.querySelector('.control');
let coctails = document.createElement('div')
coctails.className = 'coctails'

const addRecipeButton = control.querySelector('.add')
const getRecipeButton = control.querySelector('.recipe')
const deleteRecipeButton = control.querySelector('.delete')
const getAllRecipeButton = control.querySelector('.all')

const addRecipe = () => {
  let coctailName = prompt('Введите название напитка', 'Пеликан')
  let isAlcohol = confirm('Он алкогольный?')
  let ingredients = prompt('Введите индигриенты и их пропорции')
  let recipe = prompt('Введите Рецепт приготовления')
  
  coctailsStorage.addValue(coctailName, {
    alcohol: isAlcohol,
    ingredients: ingredients,
    recipe: recipe
  })
}

const getRecipe = () => {
  let coctailName = prompt('Введите название напитка', 'Пеликан')
   
  if(coctailsStorage.getValue(coctailName)) {
    return coctailsStorage.getValue(coctailName)
  } else {
    alert('Такой напиток в базе отсутсвует')
  }  
}

const renderCoctailInfo = () => {
  let coctailInfo = getRecipe()

  

  coctails.innerHTML = `
    <div>Алкоголь в напитке: ${coctailInfo.alcohol?'присутствует':'отсутствует'}</div>
    <div>Индигриенты: ${coctailInfo.ingredients}</div>
    <div>Рецепт приготовления: ${coctailInfo.recipe}</div>
  `
  wrapper.append(coctails)
}

const deleteRecipe = () => {
  let coctailName = prompt('Введите название напитка', 'Пеликан')

  coctailsStorage.deleteValue(coctailName)
  console.log(coctailsStorage)
}

const getAllRecipe = () => {
  
  coctails.innerHTML = coctailsStorage.getKeys()
  wrapper.append(coctails)
}

addRecipeButton.addEventListener('click', addRecipe);
getRecipeButton.addEventListener('click', renderCoctailInfo);
deleteRecipeButton.addEventListener('click', deleteRecipe);
getAllRecipeButton.addEventListener('click', getAllRecipe);


