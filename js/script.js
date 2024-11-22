const URL_APP = "https://script.google.com/macros/s/AKfycbzS-0OuffSyKrxQ1FC8TZRhttvLMnvq-OHPQcVQLAttwhpHjY7ptWdpQaD8pP8UeM74Xg/exec";

const form = document.querySelector("#form");

form.action = URL_APP;

function isFilled(details) {
    const { firstName, lastName, linkedInUrl } = details;
    if (!firstName) return false;
    if (!lastName) return false;
    if (!linkedInUrl) return false;
    return true;
}

form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const firstName = document.querySelector("[name=firstName]");
    const lastName = document.querySelector("[name=lastName]");
    const linkedInUrl = document.querySelector("[name=linkedInUrl]");
    const specialization = document.querySelector("[name=specialization]");

    let details = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        linkedInUrl: linkedInUrl.value.trim(),
        specialization: specialization.value.trim(),

    };

    if (!isFilled(details)) return;

    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    const result = await fetch(URL_APP, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "cors",
        body: formBody,
    })
        .then((res) => res.json())
            .catch((err) => alert("Помилка!"))

            if( result.type === 'success'){
                firstName.value = '';
                lastName.value = '';
                linkedInUrl.value = '';
                specialization.value = '';
                alert('Дані успішно відправлені!')
            }
            if(result.type === 'error'){
                alert('Помилка ${result.errors}')
            }

});