// DOM elementer

let form = document.querySelector("#form");
let errorDiv = document.querySelector("#error-div");



form.addEventListener("submit", function (event) {
    event.preventDefault()

    const extractPhoneRegex = /^\d+$/;

    // dette er fra denne hjemmeside https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

    console.log(extractPhoneRegex.test(form.elements.mobil.value))

    //console.log(typeof (form.elements.mobil.value))
    //console.log(form.elements.mobil.value)


    let validEmail = false;
    // email skal have @ og en punktum
    if (form.elements.email.value.includes("@") && form.elements.email.value.includes(".")) {
        // hvis det er tilfældet går det igennem til næste udfyldning af linje tekst såsom mobil 
        validEmail = true;
    }

    let validMobil = true;
    if (extractPhoneRegex.test(form.elements.mobil.value) == false) {
        validMobil = false;
    }


    // LOGIK
    // navne
    if (form.elements.full_name.value.length < 2) {
        showError("Ikke nok bogstaver i navn feltet", form.elements.full_name)
    }

    // tlf nummer
    else if (form.elements.mobil.value.length < 6 || !validMobil) {
        showError("Ikke valid telefon nummer", form.elements.mobil)
    }

    // email
    else if (form.elements.email.value.length < 5 || !validEmail) {
        showError("Ikke valid email", form.elements.email)
    }
    // besked
    else if (form.elements.msg.value.length < 5) {
        showError("Venligst put flere ord i tekstfelt", form.elements.msg)
    }

    //if all good neden under går igenem
    else {
        form.submit()
    }

})


// fejl besked neden under
function showError(msg, input) {
    errorDiv.innerHTML = msg
    input.classList.add("red-border")
    input.addEventListener("input", function () {
        input.classList.remove("red-border")
        errorDiv.innerHTML = ""
    })
}