basic.forever(function () {
    mbit_Display.RGB2(
    DigitalPin.P0,
    DigitalPin.P1,
    DigitalPin.P2,
    mbit_Display.enColor.Red
    )
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.pause(10000)
    mbit_Display.RGB2(
    DigitalPin.P0,
    DigitalPin.P1,
    DigitalPin.P2,
    mbit_Display.enColor.Green
    )
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.pause(10000)
})
