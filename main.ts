input.onButtonPressed(Button.A, function () {
    basic.showString("Mein name ist Gonzalez")
})
basic.showString("Hallo")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
})
