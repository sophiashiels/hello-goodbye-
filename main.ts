input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Goodbye!")
    basic.pause(100)
    basic.showIcon(IconNames.Sad)
})
