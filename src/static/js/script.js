const submit = (e) => {
    e.preventDefault();
    console.log('submitted!');

    let visitorName = document.getElementById('visitorName');
    let visitorEmail = document.getElementById('visitorEmail');
    let visitorMessage = document.getElementById('visitorMessage');
    let captcha = document.getElementById('g-recaptcha-response');

    let formData = {
        name: visitorName.value,
        email: visitorEmail.value,
        message: visitorMessage.value,
        captcha: captcha.value
    }

    return fetch('/contact', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .then(data => {
            alert(data.msg);
            if (data.success) {
                window.location.replace('/')
            }
        });
}

export default submit;
