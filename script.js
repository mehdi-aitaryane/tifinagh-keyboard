

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