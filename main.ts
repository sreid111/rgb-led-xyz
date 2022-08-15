let red = 0
let green = 0
let blue = 0
basic.forever(function () {
    red = input.acceleration(Dimension.X)
    pins.analogWritePin(AnalogPin.P0, red)
    green = input.acceleration(Dimension.Y)
    pins.analogWritePin(AnalogPin.P1, green)
    blue = input.acceleration(Dimension.Z)
    pins.analogWritePin(AnalogPin.P2, red)
})
