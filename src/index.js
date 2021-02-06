
exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
    return 0
  } else {
    let val = array[0]
    for (i=1; i<array.length; i++) {
      if (val > array[i]) {
        val = array[i]
      }
    }

    return val
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) {
    return 0
  } else {
    let val = array[0]
    for (i=1; i<array.length; i++) {
      if (val < array[i]) {
        val = array[i]
      }
    }

    return val
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
    return 0
  } else {
    let sum = 0
    for (i=0; i<array.length; i++) {
      sum += array[i]
    }

    return sum / array.length
  }
}
