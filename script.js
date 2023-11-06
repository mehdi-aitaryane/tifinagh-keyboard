let map = {
    "a" : "ⴰ",
    "b" : "ⴱ",
    "g" : "ⴳ",
    "d" : "ⴷ",
    "D" : "ⴹ",
    "e" : "ⴻ",
    "f" : "ⴼ",
    "k" : "ⴽ",
    "h" : "ⵀ",
    "H" : "ⵃ",
    "A" : "ⵄ",
    "K" : "ⵅ",
    "q" : "ⵇ",
    "i" : "ⵉ",
    "j" : "ⵊ",
    "l" : "ⵍ",
    "m" : "ⵎ",
    "n" : "ⵏ",
    "o" : "ⵓ",
    "r" : "ⵔ",
    "R" : "ⵕ",
    "G" : "ⵖ",
    "s" : "ⵙ",
    "S" : "ⵚ",
    "c" : "ⵛ",
    "t" : "ⵜ",
    "T" : "ⵟ",
    "w" : "ⵡ",
    "y" : "ⵢ",
    "z" : "ⵣ",
    "Z" : "ⵥ",
    "u" : "ⵯ",
    "p" : "ⵒ",
    "v" : "ⵠ"
}

function writeChar(c)
{
    let txtarea = document.getElementById("area")
    var start = txtarea.selectionStart;
    var end = txtarea.selectionEnd;
    var sel = txtarea.value.substring(start, end);
    var finText = txtarea.value.substring(0, start) + c + txtarea.value.substring(end);
    txtarea.value = finText;
    txtarea.focus()
    txtarea.selectionEnd= end + 1;
}

function readChar(e)
{
    c = map[e.key]
    if( c && !e.ctrlKey )
    {
        writeChar(c)
    }
}

function preventEvent(e)
{
    
    c = map[e.key]
    if(e.key == "Enter" || e.key == "ArrowRight" || e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "Backspace" || e.key == "space")
    {

    }
    else if( (e.key == 'a' || e.key == 'x' || e.key == 'c' || e.key == 'v') && e.ctrlKey )
    {

    }
    else if(c || ( e.key >= 'a' && e.key <= 'z') || ( e.key >= 'A' && e.key <= 'Z') )
    {
        e.preventDefault()
    }

}