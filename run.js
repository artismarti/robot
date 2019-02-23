const startDiv = document.getElementById('start')
const cleaned = document.getElementById('cleaned')

// Read the input
const fetchInput = () => {
  fetch('./input.txt')
    .then(response => response.text())
    .then(text => processInstructions(text))
}

const processInstructions = text => {
  let instructions = text.split('\n').filter(i => i.length > 0)
  let startCoordinates = instructions.shift()
  let directions = instructions.pop()
  let dirtSpots = []
  for (i of instructions) {
    dirtSpots.push([Number(i[0]), Number(i.slice(-1))])
  }
  moveRobot(startCoordinates, directions, dirtSpots)
}

const moveRobot = (startCoordinates, directions, dirtSpots) => {
  let Roomba = new Robot(
    [startCoordinates[0], Number(startCoordinates.slice(-1))],
    'W'
  )
  startDiv.innerText = `Start coordinates: ${Roomba.getCoordinates()}`

  let cleanedSpots = 0
  for (let move of directions) {
    if (Roomba.advance(move, Roomba.coordinates[0], Roomba.coordinates[1])) {
      vaccumedSpots = Roomba.getCoordinates();
      for (let dirtSpot in dirtSpots) {
        if (vaccumedSpots[0] === dirtSpots[dirtSpot][0] && vaccumedSpots[1] === dirtSpots[dirtSpot][1]){
          cleanedSpots+=1
        }
      }
    }
    console.log(cleanedSpots);
    cleaned.innerText = `${cleanedSpots} spot(s) cleaned`
  }
}

fetchInput()
