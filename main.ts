input.onButtonPressed(Button.A, function () {
    basic.showNumber(t01)
    while (t01 > 0) {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
        basic.showNumber(t01)
        basic.pause(500)
        t01 += -1
    }
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        // Krever microbit V2
        soundExpression.giggle.playUntilDone()
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showIcon(IconNames.Heart)
    music.playMelody("E B C5 A B G A F ", 359)
    music.playMelody("E B C5 A B G A F ", 359)
    music.playMelody("E - - - - - - - ", 81)
})
input.onButtonPressed(Button.B, function () {
    t01 = 9
    basic.showNumber(t01)
})
let t01 = 0
t01 = 9
basic.showNumber(t01)
basic.forever(function () {
	
})
