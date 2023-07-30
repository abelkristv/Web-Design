function validate(){
    let player = new Array()
    for (let i = 1; i <= 4; i++) {
        let player = document.getElementById(`name${i}`)
        if (player.value == '') {
            alert("Player name length must not be empty")
            return
        }

        if (player.value.length < 4 || player.value.length > 8) {
            alert("Player name length must be between 4 and 8")
            return
        }
    }
    form = document.getElementById("form")

    form.submit();
    alert("Form submitted")
    return
}
