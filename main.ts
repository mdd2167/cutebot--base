radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        cuteBot.motors(50, 50)
    }
    if (receivedNumber == 4) {
        cuteBot.motors(0, 15)
    }
    if (receivedNumber == 5) {
        cuteBot.motors(15, 0)
    }
    if (receivedNumber == 3) {
        cuteBot.motors(-30, -30)
    }
    if (receivedNumber == 1) {
        cuteBot.motors(0, 0)
    }
})
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
let left = strip.range(0, 1)
let right = strip.range(1, 1)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff00ff)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
basic.pause(200)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x7f00ff)
basic.pause(200)
cuteBot.closeheadlights()
music.play(music.createSoundExpression(WaveShape.Triangle, 700, 912, 100, 255, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
music.play(music.createSoundExpression(WaveShape.Triangle, 1181, 625, 255, 102, 200, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
basic.pause(200)
basic.forever(function () {
	
})
