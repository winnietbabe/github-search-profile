 'use strict'
 const username = document.getElementById("username")
 const searchBtn = document.getElementById("searchBtn")
 const profileCard= document.getElementById("profileCard")
const GIT_URL = `https://api.github.com/users/`;


searchBtn.onclick = (e) =>{
        e.preventDefault()
    profileCard.innerHTML = ""
    showUser();
    username.value =""
}

async function getUser(user) {
    const repData = await fetch(`${GIT_URL}${user}`)
    console.log(repData)
    const userData = await repData.json()
    console.log(userData)
    // console.log(userData)
    return userData
}

async function showUser() {
    const userData = await getUser(searchBtn.value);
    const userCard = document.createElement("div");
    userCard.classList = "user_card"

    if (userData){
        userCard.innerHTML = `    
        <img src=${userData.avatar_url}" alt="">
        <h3>name</h3>
        <div class="status">
            <h3>${userData.name}</h3>
            <div class="statusBar">
                <i class="fa-solid fa-star"></i>
                <span>${userData.public_repos}</span>
            </div>
            <div class="statusBar">
                <i class="fa-solid fa-users"></i>
                <span>${userData.followers}</span>
            </div>
            <div class="statusBar">
                <i class="fa-solid fa-address-card"></i>
                <span>${userData.bio}</span>
            </div>
        </div>`
    // console.log
        
    }
    else if (userData.message === "not found"){
        userCard.innerHTML = `
        <h3>not found</h3>`
    }

    profileCard.appendChild(userCard);

}

