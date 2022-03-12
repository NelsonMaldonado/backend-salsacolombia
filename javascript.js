var freeTime = false

const dancing = () => {
  console.log("Im dancing")
}

const doingDevWork = () => {
  console.log("Im working")
}

const whatAmIdoing = () => {
  if (freeTime) {
    dancing()
  } else {
    doingDevWork()
  }
}

whatAmIdoing()
