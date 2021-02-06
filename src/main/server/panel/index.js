
const startPanel = function() {
  var five = require('johnny-five')
  var board = new five.Board({
    repl: false
  })

  const serialport = require('serialport')
  serialport.list().then(console.log)

  const robot = require('robotjs')
  board.on('ready', function() {
    // Create an Led on pin 13
    var led = new five.Led(13)

    // Strobe the pin on/off, defaults to 100ms phases
    led.blink(500)

    var button = new five.Button({
      pin: 8,
      isPullup: true
    })

    button.on('hold', function() {
      console.log('Button held')
    })

    button.on('press', function() {
      console.log('Button pressed')
      robot.keyTap('space')
    })

    button.on('release', function() {
      console.log('Button released')
    })

    board.on('exit', () => {
      led.off()
    })
  })
}

module.exports = { startPanel }
