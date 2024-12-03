fetch(`https://www.swapi.tech/api/films`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const charNameOne = document.getElementById('para-one')
    const charNameTwo = document.getElementById('para-two')
    const charNameThree = document.getElementById('para-three')
    const charNameFour = document.getElementById('para-four')
    const charNameFive = document.getElementById('para-five')
    const charNameSix = document.getElementById('para-six')
    for (let index = 0; index < data.result.length; index++) {
      charNameOne.innerHTML = data.result[0].properties.title
      charNameTwo.innerHTML = data.result[1].properties.title
      charNameThree.innerHTML = data.result[2].properties.title
      charNameFour.innerHTML = data.result[3].properties.title
      charNameFive.innerHTML = data.result[4].properties.title
      charNameSix.innerHTML = data.result[5].properties.title
    }
})
