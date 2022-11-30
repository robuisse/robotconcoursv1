enum RadioMessage {
    message1 = 49434,
    avancer = 29696,
    reculer = 19224,
    stop = 61268,
    gauche = 43105,
    droite = 37890,
    fermerPince = 8074,
    ouvrirPince = 62538,
    monter = 43056,
    descendre = 32859
}
radio.onReceivedMessage(RadioMessage.ouvrirPince, function () {
    ouvirPince()
})
radio.onReceivedMessage(RadioMessage.stop, function () {
    motor.motorStopAll()
})
function lateralDroite () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 120)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 120)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 120)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 120)
}
radio.onReceivedMessage(RadioMessage.monter, function () {
    if (niv_number < nb_max_niveau) {
        niv_number += 1
    } else {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    motor.servo(motor.Servos.S7, niveau[niv_number])
    basic.showString("" + (niv_number))
})
radio.onReceivedMessage(RadioMessage.droite, function () {
    tournerDroite()
})
radio.onReceivedMessage(RadioMessage.reculer, function () {
    reculer()
})
input.onButtonPressed(Button.A, function () {
    motor.servo(motor.Servos.S7, 120)
    basic.pause(1000)
    motor.servo(motor.Servos.S7, 140)
    basic.pause(1000)
    motor.servo(motor.Servos.S7, 160)
    basic.pause(1000)
    motor.servo(motor.Servos.S7, 180)
    basic.pause(1000)
    motor.servo(motor.Servos.S7, 90)
})
function fermerPince () {
    motor.servo(motor.Servos.S8, 120)
}
function diagonalDroite () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 120)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 120)
    motor.motorStop(motor.Motors.M2)
    motor.motorStop(motor.Motors.M3)
}
function reculer () {
    vitesse = 100
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, vitesse)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, vitesse)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, vitesse)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, vitesse)
}
function tournerGauche () {
    vitesse = 100
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, vitesse)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, vitesse)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, vitesse / 2)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, vitesse / 2)
}
radio.onReceivedMessage(RadioMessage.avancer, function () {
    avancer()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (niveau[0]))
})
function tournerDroite () {
    vitesse = 100
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, vitesse)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, vitesse)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, vitesse / 2)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, vitesse / 2)
}
function lateralGauche () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 120)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 120)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 120)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 120)
}
function diagonalGauche () {
    motor.motorStop(motor.Motors.M1)
    motor.motorStop(motor.Motors.M4)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 120)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 120)
}
input.onButtonPressed(Button.B, function () {
    motor.servo(motor.Servos.S8, 140)
})
radio.onReceivedMessage(RadioMessage.descendre, function () {
    if (niv_number > 0) {
        niv_number += -1
    } else {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    motor.servo(motor.Servos.S7, niveau[niv_number])
    basic.showString("" + (niv_number))
})
function avancer () {
    vitesse = 150
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, vitesse)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, vitesse)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, vitesse)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, vitesse)
}
radio.onReceivedMessage(RadioMessage.fermerPince, function () {
    fermerPince()
})
function ouvirPince () {
    motor.servo(motor.Servos.S8, 45)
}
radio.onReceivedMessage(RadioMessage.gauche, function () {
    tournerGauche()
})
let vitesse = 0
let nb_max_niveau = 0
let niv_number = 0
let niveau: number[] = []
radio.setGroup(1)
niveau = [
90,
120,
140,
160
]
niv_number = 0
nb_max_niveau = 3
