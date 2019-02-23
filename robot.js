class Robot {
  constructor(coordinates, bearing) {
    this.coordinates = [coordinates[0], coordinates[1]]
    this.bearing = bearing
    this.advance = this.advance.bind(this)
  }

  setCoordinates(x, y) {
    (this.coordinates[0] = x), (this.coordinates[1] = y)
  }

  getCoordinates() {
    console.log(this.coordinates[0], this.coordinates[1]);
    return [this.coordinates[0], this.coordinates[1]]
  }

  setBearing(bearing) {
    let acceptable_bearings = ['N', 'S', 'E', 'W']
    if (acceptable_bearings.includes(bearing.toLowerCase())) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  // Get robot to move
  advance(bearing, startX, startY) {
    switch (bearing) {
      case 'N':
        if (this.coordinates[1] === startY) {
          throw new Error("Can't move off the grid")
          return 0
        } else {
          this.coordinates[1]++
          return 1
        }
        break
      case 'S':
        if (this.coordinates[1] == 0) {
          throw new Error("Can't move off the grid")
          return 0
        } else {
          this.coordinates[1]--
          return 1
        }
        break
      case 'E':
        if (this.coordinates[0] == startX) {
          throw new Error("Can't move off the grid")
          return 0
        } else {
          this.coordinates[0]++
          return 1
        }
        break
      case 'W':
        if (this.coordinates[0] == 0) {
          throw new Error("Can't move off the grid")
          return 0
        } else {
          this.coordinates[0]--
          return 1
        }
        break
    }
  }
}
