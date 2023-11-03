let videosContainer = document.querySelector('.grid_cards_container')
let popularMovie = document.querySelector('#popular_movie')
let left1Icon = document.querySelector('.left1_icon')
let right1Icon = document.querySelector('.right1_icon')

let leftIcon2 = document.querySelector('.left_icon2')
let rightIcon2 = document.querySelector('.right_icon2')

let left3Icon = document.querySelector('.left3_icon')
let right3Icon = document.querySelector('.right3_icon')

let actionAdventure = document.querySelector('#action_adventure')
let bestComedies = document.querySelector('#best_comedies')
// let userName=document.querySelector('.logged_in_user p');
let userEl = document.querySelector('.logged_in_user');
let barsIcon=document.querySelector('.bars_icon')
let navList=document.querySelector('.nav_list')




barsIcon.addEventListener('click',()=>{
    navList.classList.toggle('nav_active')
})









if (localStorage.getItem('loggedInUser')) {

    userEl.innerHTML = `
    
    <p>welcome ${JSON.parse(localStorage.getItem('loggedInUser')).name}</p>
    <i onclick="logOut()" class="fa-solid fa-right-from-bracket log_out"></i>
   
   
    `
    // userName.innerHTML= `welcome ${JSON.parse(localStorage.getItem('loggedInUser')).name}`

} else {
    userEl.innerHTML = ` <svg onclick="userClick()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
        d="M10 0C4.48625 0 0 4.48625 0 10C0 12.9546 1.28917 15.6133 3.33333 17.4454V17.4525L3.47833 17.5775C3.50375 17.5996 3.53167 17.6179 3.5575 17.6396C3.73708 17.7912 3.92208 17.9367 4.11208 18.0758C4.16333 18.1133 4.21458 18.1496 4.26667 18.1858C4.46833 18.3275 4.67458 18.4625 4.88625 18.5892C4.92167 18.6104 4.95792 18.6304 4.99333 18.6508C5.22542 18.7858 5.4625 18.9129 5.70583 19.0292C5.70833 19.0304 5.71083 19.0312 5.71333 19.0325C6.23375 19.2804 6.77958 19.4833 7.34458 19.6392C7.355 19.6421 7.36542 19.6454 7.37583 19.6479C7.64292 19.7208 7.91458 19.7821 8.19 19.8325C8.21583 19.8371 8.24125 19.8417 8.26708 19.8463C8.53292 19.8929 8.80208 19.93 9.075 19.9554C9.10625 19.9583 9.1375 19.96 9.16833 19.9625C9.44292 19.9854 9.71958 20 10 20C10.2804 20 10.5571 19.9854 10.8317 19.9625C10.8629 19.96 10.8942 19.9583 10.925 19.9554C11.1979 19.9304 11.4671 19.8929 11.7329 19.8463C11.7587 19.8417 11.7842 19.8371 11.81 19.8325C12.0854 19.7821 12.3571 19.7208 12.6242 19.6479C12.6346 19.645 12.645 19.6421 12.6554 19.6392C13.2204 19.4833 13.7662 19.2804 14.2867 19.0325C14.2892 19.0312 14.2917 19.0304 14.2942 19.0292C14.5375 18.9129 14.7746 18.7854 15.0067 18.6508C15.0425 18.63 15.0783 18.6104 15.1137 18.5892C15.3258 18.4625 15.5321 18.3271 15.7333 18.1858C15.785 18.1496 15.8367 18.1133 15.8879 18.0758C16.0779 17.9367 16.2629 17.7912 16.4425 17.6396C16.4683 17.6179 16.4962 17.5996 16.5217 17.5775L16.6667 17.4525V17.4454C18.7108 15.6129 20 12.9546 20 10C20 4.48625 15.5138 0 10 0ZM10 10C8.16208 10 6.66667 8.50458 6.66667 6.66667C6.66667 4.82875 8.16208 3.33333 10 3.33333C11.8379 3.33333 13.3333 4.82875 13.3333 6.66667C13.3333 8.50458 11.8379 10 10 10ZM11.25 10.8333C13.7771 10.8333 15.8333 12.8896 15.8333 15.4167V17.0658C15.8158 17.0804 15.7975 17.0938 15.78 17.1083C15.6154 17.2421 15.4467 17.3692 15.2742 17.4908C15.2358 17.5179 15.1983 17.5458 15.16 17.5721C14.9737 17.6992 14.7825 17.8183 14.5879 17.9312C14.5525 17.9521 14.5167 17.9725 14.4808 17.9929C14.2767 18.1075 14.0687 18.215 13.8567 18.3133C13.8346 18.3237 13.8121 18.3337 13.7896 18.3438C13.0975 18.6583 12.3683 18.8862 11.6179 19.0212C11.5942 19.0254 11.5704 19.03 11.5467 19.0342C11.3104 19.0746 11.0721 19.1058 10.8321 19.1279C10.7992 19.1308 10.7658 19.1329 10.7325 19.1354C10.4896 19.1542 10.2454 19.1667 10 19.1667C9.75458 19.1667 9.51042 19.1542 9.2675 19.1346C9.23458 19.1321 9.20125 19.13 9.16792 19.1271C8.92792 19.105 8.68958 19.0742 8.45333 19.0333C8.42958 19.0292 8.40583 19.025 8.38208 19.0204C7.63167 18.8854 6.9025 18.6575 6.21042 18.3429C6.18792 18.3325 6.16542 18.3229 6.14333 18.3125C5.93125 18.2142 5.72333 18.1067 5.51917 17.9921C5.48333 17.9717 5.44792 17.9513 5.41208 17.9304C5.2175 17.8179 5.02625 17.6983 4.84 17.5713C4.80125 17.545 4.76375 17.5171 4.72583 17.49C4.55333 17.3683 4.38458 17.2417 4.22 17.1075C4.2025 17.0933 4.18417 17.0796 4.16667 17.065V15.4167C4.16667 12.8896 6.22292 10.8333 8.75 10.8333H11.25ZM16.6667 16.2817V15.4167C16.6667 12.8037 14.8067 10.6171 12.3417 10.1104C13.4421 9.36 14.1667 8.09625 14.1667 6.66667C14.1667 4.36917 12.2975 2.5 10 2.5C7.7025 2.5 5.83333 4.36917 5.83333 6.66667C5.83333 8.09625 6.55792 9.36 7.65833 10.1104C5.19333 10.6171 3.33333 12.8037 3.33333 15.4167V16.2817C1.785 14.6396 0.833333 12.4296 0.833333 10C0.833333 4.94542 4.94542 0.833333 10 0.833333C15.0546 0.833333 19.1667 4.94542 19.1667 10C19.1667 12.4296 18.215 14.6396 16.6667 16.2817Z"
        fill="white" />
</svg>`
}


// let logOut=document.querySelector('.log_out');

// logOut.addEventListener('click',()=>{
//     window.location.href='./login.html'
//     localStorage.removeItem('loggedInUser')
// })

function logOut(){
        window.location.href='./entrance.html'
    localStorage.removeItem('loggedInUser')
}
function userClick(){
    window.location.href='./login.html'
}
fetch('./API/videos.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(x => {
            videosContainer.innerHTML += `
        <div class="grid_card">
            <video controls src="${x.video}"></video>
            <p>${x.name}</p>
        </div>`
        })
    }

    )


let count = 0;
function slider1() {
    for (let i = 0; i < popularMovie.children.length; i++) {
        popularMovie.children[i].style.transform = `translateX(${-300 * count}px)`
    }
}

function slider2() {
    for (let i = 0; i < actionAdventure.children.length; i++) {
        actionAdventure.children[i].style.transform = `translateX(${-300 * count}px)`
    }
}

function slider3() {
    for (let i = 0; i < bestComedies.children.length; i++) {
        bestComedies.children[i].style.transform = `translateX(${-300 * count}px)`
    }
}

setInterval(() => {
    if (count < popularMovie.children.length - 4) {
        count++
        slider1()
    } else {
        count = 0
        slider1()
    }
}, 2000);



setInterval(() => {
    if (count < actionAdventure.children.length - 4) {
        count++
        slider2()
    } else {
        count = 0
        slider2()
    }
}, 2000);


setInterval(() => {
    if (count < bestComedies.children.length - 4) {
        count++
        slider3()
    } else {
        count = 0
        slider3()
    }
}, 2000);




right1Icon.addEventListener('click', () => {
    if (count < popularMovie.children.length - 4) {
        count++
        slider1()
    } else {
        count = 0
        slider1()
    }
})

left1Icon.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider1()
    } else {
        count = 0
        slider1()
    }
})






leftIcon2.addEventListener('click', () => {
    if (count < actionAdventure.children.length - 4) {
        count++
        slider2()
    } else {
        count = 0
        slider2()
    }
})

rightIcon2.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider2()
    } else {
        count = 0
        slider2()
    }
})





right3Icon.addEventListener('click', () => {
    if (count < bestComedies.children.length - 4) {
        count++
        slider3()
    } else {
        count = 0
        slider3()
    }
})

left3Icon.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider3()
    } else {
        count = 0
        slider3()
    }
})