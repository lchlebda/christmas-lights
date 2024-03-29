function morseAlphabet () {
    while (isMorse) {
        strip.showColor(color[colorIndex])
        if (!(isMorse)) {
            break;
        }
        basic.pause(2000)
        strip.clear()
        strip.show()
        basic.pause(500)
        if (!(isMorse)) {
            break;
        }
        for (let index = 0; index < 3; index++) {
            strip.showColor(color[colorIndex])
            basic.pause(500)
            strip.clear()
            strip.show()
            basic.pause(500)
        }
    }
}
function blink2 (color: number) {
    for (let index = 0; index <= 60; index++) {
        strip.setPixelColor(index, color)
        strip.setPixelColor(index + 1, color)
        index += 4
    }
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.show()
    basic.pause(500)
}
function blink1 (color: number) {
    for (let index = 0; index <= 60; index++) {
        strip.setPixelColor(index, color)
        index += 2
    }
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.show()
    basic.pause(500)
}
function blinkingSnake () {
    while (isBlinking) {
        if (isBlinking) {
            blink1(neopixel.rgb(61, 181, 54))
        }
        if (isBlinking) {
            blink1(neopixel.colors(NeoPixelColors.Violet))
        }
        if (isBlinking) {
            blink2(neopixel.colors(NeoPixelColors.Green))
        }
        if (isBlinking) {
            blink2(neopixel.colors(NeoPixelColors.Yellow))
        }
        if (isBlinking) {
            blink3(neopixel.colors(NeoPixelColors.Blue))
        }
        if (isBlinking) {
            blink3(neopixel.colors(NeoPixelColors.Indigo))
        }
        if (isBlinking) {
            blink4(neopixel.colors(NeoPixelColors.Orange))
        }
        if (isBlinking) {
            blink4(neopixel.colors(NeoPixelColors.Red))
        }
    }
}
input.onButtonPressed(Button.A, function () {
    isBlinking = false
    isMorse = false
    isRainbow = true
    rainbowSnake()
})
function rainbowSnake () {
    counter = 0
    for (let value of color) {
        doSnake(value)
    }
}
function blink4 (color: number) {
    for (let index = 0; index <= 60; index++) {
        strip.setPixelColor(index, color)
        strip.setPixelColor(index + 1, color)
        strip.setPixelColor(index + 2, color)
        strip.setPixelColor(index + 3, color)
        index += 8
    }
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.show()
    basic.pause(500)
}
function doSnake (color: number) {
    for (let index = 0; index < 60; index++) {
        if (isRainbow) {
            strip.setPixelColor(counter, color)
            counter += 1
            basic.pause(50)
            strip.show()
        } else {
            break;
        }
    }
    undoSnake()
}
input.onButtonPressed(Button.AB, function () {
    isMorse = true
    isBlinking = false
    isRainbow = false
    morseAlphabet()
})
function undoSnake () {
    for (let index = 0; index < 60; index++) {
        if (isRainbow) {
            strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black))
            counter += -1
            basic.pause(50)
            strip.show()
        } else {
            break;
        }
    }
}
input.onButtonPressed(Button.B, function () {
    isBlinking = true
    isRainbow = false
    isMorse = false
    changingBrightness()
})
function blink3 (color: number) {
    for (let index = 0; index <= 60; index++) {
        strip.setPixelColor(index, color)
        strip.setPixelColor(index + 1, color)
        strip.setPixelColor(index + 2, color)
        index += 6
    }
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.show()
    basic.pause(500)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    colorIndex += 1
    if (colorIndex == color.length) {
        colorIndex = 0
    }
})
function changingBrightness () {
    brightness = 0
    while (true) {
        for (let index = 0; index < 50; index++) {
            strip.setBrightness(brightness)
            brightness += 2
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(25)
        }
        for (let index = 0; index < 50; index++) {
            strip.setBrightness(brightness)
            brightness += -2
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(25)
        }
    }
}
let brightness = 0
let counter = 0
let isBlinking = false
let colorIndex = 0
let isMorse = false
let color: number[] = []
let isRainbow = false
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
isRainbow = false
color = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple)
]
