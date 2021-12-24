radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedString == "A") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedString == "A") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedString == "A") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedString == "A") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedString == "A") {
    	
    } else {
    	
    }
})
radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . # # # .
    . . # . .
    `)
