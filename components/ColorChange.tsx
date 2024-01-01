

export default function ColorChange(color1: string, color2: string) {

    const primaryColor: string = color1.substring(1);
    const colorChange: string = color2;

    let hexStr = (parseInt(primaryColor, 16) - parseInt(colorChange, 16)).toString(16);
    while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
    return hexStr;
}