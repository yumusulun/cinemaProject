let regName = document.querySelector('.reg_name')
let regEmail = document.querySelector('.reg_email')
let regPassword = document.querySelector('.reg_password')
let regRetypePassword = document.querySelector('.reg_retypePassword')
let regErr = document.querySelector('.reg_err')



function regSubmit(e){
    e.preventDefault()

    let checkNewUser=users.find(data=>data.email===regEmail.value)

    if(checkNewUser){
        regErr.innerHTML='Istifadeci movcuddur'
    }else{
        if(regRetypePassword.value===regPassword.value){
            let newUser={
                id: users.length+1,
                name: regName.value,
                email: regEmail.value,
                password: regPassword.value
            }
            users.push(newUser)
            localStorage.setItem('users',JSON.stringify(users))
            regErr.innerHTML='Qeydiyyat ugurla bitdi'
            window.location.href='./login.html'

        }else{
            regErr.innerHTML='Sifreler eyni deyil'
        }
        
    }

}