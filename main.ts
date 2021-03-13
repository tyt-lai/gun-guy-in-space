controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, gunguy, 200, 0)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.createProjectileFromSprite(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        c c c c c c c c c c c c c c c c 
        c c c c c c c c c c c c c c c c 
        3 2 3 3 3 3 2 3 3 3 3 2 2 3 3 3 
        3 3 3 3 2 3 3 3 3 3 3 2 3 3 2 2 
        `, gunguy, 200, 0)
})
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444fffffffffffffffff
    ffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff.dfdfff4444444444444444fffffffffffffffff
    ffffffffffffffffffffffffddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffdfff444444444444444444fffffffffffffffff
    ffffffffffffffffffffffffddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffdf444444444444444444444fffffffffffffff
    ffffffffffffffffffffffffdddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdf444444444444444444444444fffffffffffff
    ffffffffffffffffffffffffdddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444fffffffffffff
    ffffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444fffffffffffff
    ffffffffffffffffffffffffffffffffffddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444ffffffffffff
    fffffffffffffffffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffff444444444444444444444444444ffffffffffff
    fffffffffffffffffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffff444444444444444444444444444ffffffffffff
    fffffffffffffffffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffff444444444444444444444444444ffffffffffff
    fffffffffffffffffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffff44444444444444444444444444fffffffffffff
    fffffffffffffffffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffffffffffffff44555555444444444444444444fffffffffffff
    ffffffffffffffffffffffffffffffffffffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555444444fffffffffffff
    ffffffffffff111fffffffffffffffffffffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555544fffffffffffff
    ffffffffffff111ffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffff
    ffffffffffff111fffffffffffffffffffddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555fffffff
    fffffffffffffffffffffffffffffffffdddddddddffffffffffffffffffffffffffff9999779fffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555fffffff
    ffffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffff99997777977ffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555fffffff
    ffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffff99999977779779fffffffffffffffffffffffffffffffffffffff44555555555555555555555555555555ffffffff
    fffffffffffffffffffffffffffffddddddddddddffffffffffffffffffffffff99999999777799777ffffffffffffffffffffffffffffffffffffff44444444444444445555555555555555ffffffff
    fffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffff9999999977779977779ffffffffffffffffffffffffffffffffffff4444444444444444444444444fffffffffffffff
    fffffffffffffffffffffffffdddddddddddddddfffffffffffffffffffffffff9977999977779977779fffffffffffffffffffffffffffffffffffff444444444444444444444444fffffffffffffff
    ffffffffffffffffffffffdddddddddddddddddffffffffffffffffffffffffff9977799997779977777ffffffffffffffffffffffffffffffffffffff44444444444444444444444fffffffffffffff
    fffffffffffffffffffffddddddddddddddddfffffffffffffffffffffffffff999777799977799977779fffffffffffffffffffffffffffffffffffff4444444444444444444444ffffffffffffffff
    fffffffffffffffffffffddddddddddddddfffffffffffffffffffffffffffff999777799997799977779fffffffffffffffffffffffffffffffffffffff4444444444444444444fffffffffffffffff
    fffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffff9997777799999999977777fffffffffffffffffffffffffffffffffffffff44444444444444444ffffffffffffffffff
    fffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffffff99977777999999999977779fffffffffffffffffffffffffffffffffffffffffff4444444444ffffffffffffffffffff
    fffffffffffffffffffffddddddfffffffffffffffffffffffffffffffffffff99977777999999799977779fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99997777999997799997779fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99997779999977779999779fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999799999777799999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999777999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff9999977999999999999979fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff9997777799999999999977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff9999977799999999977777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999777779fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9777777779999999979ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffff7777777779999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff111111111111111ffffffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffff1fff11ffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff111ffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff11ffffffffffffffffffffffffffff1111ffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaffffffffffffffffffffffffffffff1ffffffffffff11ffffffffffffffffffffffffff111fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaafffffffffffffffffffffffffff1ff1fffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaafffffffffffffffffffffffff1f1ffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaffffaaaaaaaafffffffffffffffffffffff1ff1ffff1fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaaaaff8888888ffaaaaaaffffffffffffffffffffff1ff1fff1fff111fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff1111fffffffffffffffffffffffaaaaa888888888888ffaaaaafffffffffffffffffffff1f1f1111ff1ff1f1ffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff1111fffffffffffffffffffffffaaaf88888888888888888aaaffffffffffffffffffffff11ffff1ff1ff1f1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff1111fffffffffffffffffffffffaaaf8888888aa8888888888afffffffffffffffffffffff1ffff1ff1ff1f1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaa88888aaaaaaa88888888afffffffffffffffffffffff1ffff1ff1f1ff1ff111ffff1ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaa8888aaaaaaaaaaa888888ffffffffffffffffffffffff1fff1fff1fff1ff1fff1ff1fffffffffffffffffffffccccccfffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaa8888aaaaaaffaaaaaf8888fffffffffffffffffffffffff1fffffff1ff1ff1ff11ff1fffffffffffffffffffcccccccccccffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaa8888aaaaff88888aaaf888ffffffffffffffffffffffffff11ffffff1f1ff111f1ff1fffffffffffffffffcccccccccccccccffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaa8888aaaffa88888aaaa888ffffffffffffffffffffffffffff1fffffff1ff1fff1ff1fffffffffffffffccccccccccccccccccfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaa888aaaaffa888888aaaffffffffffffffffffffffffffffffff1fffffffff1fff1ff1ffffffffffffffccccccfffffffffcccccffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaa888aaaaffaaa88888aaaffffffffffffffffffffffffffffffff1ffffffff1fff1f1ffffffffffffffccccccfffffffffffccccffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaa888aaafffaaaf8888aaaaffffffffffffffffffffffffffffffff11ffffffffffff1fffffffffffffccccccffffffffffffffcccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaa888aaaaaaaaaff888aaaaffffffffffffffffffffffffffffffffff1fffffffff1f1ffffffffffffcccccccfffffffffffffffcccffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaa88888aaaaaaaf8888faaaffffffffffffffffffffffffffffff1111f11fffffff1f1fffffffffffccccccccfffffffffffffffcccffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaa88888aaaaaaff88888aaaffffffffffffffffffffffffffffff1111fff111ffffff1fffffffffffccccccccfffffffffffffffcccffffffffff
    ffffffffffffffffffffffffffffffffffffffffffaaaa888888fffff888888aaaffffffffffffffffffffffffffffff1111fffff11fff11fffffffffffcccccccccfffffffffffffffcccffffffffff
    fffffffffffffffffffffffffffffffffffffffffffaaaa8888888888888888aaafffffffffffffffffffffffffffffffffffffffff11f11fffffffffffcccccccccffffffffffffffccccffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffaaaa888888888888ffaaaaffffffffffffffffffffffffffffffffffffffff1111111ffffffffffcccccccccffffffffffffffcccccfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffaaaa8888888888ffaaaaafffffffffffffffffffffffffffffffffffffffff1111111fffffffffccccccffcfffffffffffffccccccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaffaaaaaafffffffffffffffffffffffffffffffffffffff11991f19991fffffffffccccccfccfffffcfffffccfccccfffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffff11999f1f1999911ffffffffcccccfccccccccccccccccccccfffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaffffffffffffffffffffffffffffff1111ffff119f11ffff1f9991ffffffffcccccfccccccccccccccccccffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaffffffffffffffffffffffffffffffff1ffff1ffff111fffffff11111fffffffffccccccccccccccccccccccfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f2f2f1fffffffffffffffffffffffffffffcccccccccccccccccccfffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffff1ffffffffffffffffffffffffffffccccccccccccccccffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1122211fffffffffffffffffffffffffffffcccccffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.fffff.
    `)
let gunguy = sprites.create(img`
    1 f f f 1 1 1 . . . . . . . . . 
    1 f f f f f 1 1 . . . . . . . . 
    1 f f f f f f f 1 . . . . . . . 
    1 f f d d d f f 1 . . . . . . . 
    1 1 d 2 2 2 d 1 1 . . . . . . . 
    . 1 1 1 1 1 1 1 f . . . 2 2 2 . 
    . f f 5 f 5 f f f . f f f f f f 
    . f f f f f f f f f f d f f . . 
    . f f 5 f 5 f f f . . . . . . . 
    . f f f f f f f f . . f f f f 5 
    . f f f f f f f f f f f d f . . 
    . f f 5 f 5 f f f . . . . . . . 
    . f . . . . f . . . . . . . . . 
    . f . . . . f . . . . . . . . . 
    . f f f . . f f f . . . . . . . 
    . f f f . . f f f . . . . . . . 
    `, 0)
gunguy.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(gunguy, 150, 150)
game.onUpdateInterval(500, function() {
    let enemy = sprites.create(img`
        . . . . . . . . 7 . . . . . . 7
        . . . . . . . . 7 . . . . . . 7
        . . . . . . . . 7 1 1 1 1 1 1 7
        . . . . . . . 1 1 7 7 7 7 7 1 1
        . . . . . 1 . 1 7 f 7 7 7 f 7 1
        . . . . . 1 . 1 7 7 7 7 7 7 7 1
        . . . . . 1 . 1 1 7 2 2 2 7 7 1
        . . . . . 1 . . 1 1 1 7 1 1 1 .
        . . . . . 1 . . 7 7 1 1 1 7 7 .
        . . . . 1 5 1 7 7 7 7 7 7 7 7 7
        . . . . . 1 . 7 7 7 7 7 7 7 7 7
        . . . . . 1 . 7 7 7 7 7 7 7 7 7
        . . . . . . . . 7 7 7 7 7 7 7 .
        . . . . . . . . 7 7 7 7 7 7 7 .
        . . . . . . . . 7 7 7 7 7 7 7 .
        . . . . . . . . 7 7 . . . . 7 .
    `)  
})
