function doSnake (color: number) {
    for (let index = 0; index < 60; index++) {
        strip.setPixelColor(counter, color)
        counter += 1
        basic.pause(50)
        strip.show()
    }
    undoSnake()
}
function undoSnake () {
    for (let index = 0; index < 60; index++) {
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black))
        counter += -1
        basic.pause(50)
        strip.show()
    }
}
let counter = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
let color = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple)
]
basic.forever(function () {
    counter = 0
    for (let value of color) {
        doSnake(value)
    }
})
