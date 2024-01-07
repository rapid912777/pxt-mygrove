//% weight=100 color=#0080ff icon="\uf1b2"
namespace MyGrove{
    function lcdWriteResister(reg: number, val: number) {
        let lcdAddr = 0x3e
        let cmd = (reg << 8) | val
        pins.i2cWriteNumber(lcdAddr, cmd, NumberFormat.UInt16BE)    
    }

    //% block="初期化"
    function lcdInit() {
        basic.pause(30)
        lcdWriteResister(0x80, 0x20)
        basic.pause(1);
        lcdWriteResister(0x80, 0x0c)
        basic.pause(1)
        lcdClearScreen()
    }

    //% block="画面をクリア"
    export function lcdClearScreen() {
        lcdWriteResister(0x80, 0x01)
        basic.pause(2);
    }

    //% block="文字列|%text|を表示"
    export function lcdWriteText(text: string) {
        for (let index = 0; index <= text.length; index++){
            lcdWriteResister(0x40, text.charCodeAt(index))
        }
    }
}