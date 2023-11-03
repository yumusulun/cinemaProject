let logEmail = document.querySelector('.log_email')
let logPassword = document.querySelector('.log_password')
let logErr = document.querySelector('.log_err')
function loginSubmit(e){
    e.preventDefault()

    let checkUser=users.find(data=>data.email===logEmail.value)

    
    // let user = users.find(data => data.email === logEmail.value && data.password === logPassword.value);

    // if (user) {
    //   logErr.innerHTML='Welcome'
    // } else {
    //     logErr.innerHTML='try again!'
    // }

    if(checkUser){
        if(checkUser.password===logPassword.value){
            window.location.href='./index.html'
            localStorage.setItem('loggedInUser',JSON.stringify(checkUser))
        }else{
            logErr.innerHTML='Sifre yanlisdir'
        }
    }else{
        logErr.innerHTML='Istifadeci movcudd deyil'
    }

}