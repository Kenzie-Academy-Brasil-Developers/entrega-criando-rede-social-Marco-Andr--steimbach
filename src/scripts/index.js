import { suggestUsers } from "./database.js";
import { posts } from "./database.js";

let userList = document.querySelector(`#userSection`)
let postList = document.querySelector(`#postSection`)

function createSugestions(object) {
    for (let i = 0; i < object.length; i++) {
        let obj = object[i]

        let divMain = document.createElement("div")
        let img = document.createElement("img")
        let divTwo = document.createElement("div")
        let name = document.createElement("h3")
        let qualification = document.createElement("p")
        let button = document.createElement("button")

        divMain.classList.add(`sugestionsUsers`)
        img.classList.add(`imgSectionOne`)
        button.classList.add(`buttonSugestions`)

        img.src = obj.img
        name.innerHTML = obj.user
        qualification.innerHTML = obj.stack
        button.innerHTML = `Seguir`

        button.addEventListener("click", function () {
            
            if (button.classList.contains("buttonSugestions")) {

                button.classList.remove("buttonSugestions")
                button.classList.add("buttonSugestionsFollowing")
                button.innerHTML = "Seguindo"

            } else if (button.classList.contains("buttonSugestionsFollowing")) {

                button.classList.remove("buttonSugestionsFollowing")
                button.classList.add("buttonSugestions")
                button.innerHTML = "Seguir"

            }
        })

        divMain.appendChild(img)
        divMain.appendChild(divTwo)
        divTwo.appendChild(name)
        divTwo.appendChild(qualification)
        divMain.appendChild(button)

        userList.appendChild(divMain)
    }
}

function createPosts(object) {
    for (let i = 0; i < object.length; i++) {
        let obj = object[i]

        let divMain = document.createElement("div")
        let divUser = document.createElement("div")
        let img = document.createElement("img")
        let divTwo = document.createElement("div")
        let name = document.createElement("h3")
        let qualification = document.createElement("p")
        let divThree = document.createElement("div")
        let tittle = document.createElement("h1")
        let text = document.createElement("p")
        let divFour = document.createElement("div")
        let buttonOpen = document.createElement("button")
        let buttonLike = document.createElement("button")

        let imgLike = document.createElement("img")
        imgLike.src = `Vector.png`

        img.src = obj.img
        name.innerHTML = obj.user
        qualification.innerHTML = obj.stack
        tittle.innerHTML = obj.title
        text.innerHTML = obj.text
        buttonOpen.innerHTML = `Abrir Post`
        buttonLike.innerHTML = imgLike + obj.likes

        img.classList.add("imgPost")
        divMain.classList.add("postDivMain")
        divTwo.classList.add("divTwoPost")
        divUser.classList.add("divUserPost")
        divThree.classList.add("divThreePost")
        divFour.classList.add("divFourPost")
        buttonOpen.classList.add("buttonPost")
        buttonLike.classList.add("buttonLike")


        buttonOpen.addEventListener("click", function () {

            let modal = document.createElement("dialog")
            let divMainModal = document.createElement("div")
            let divUserModal = document.createElement("div")
            let imgModal = document.createElement("img")
            let divTwoModal = document.createElement("div")
            let nameModal = document.createElement("h3")
            let qualificationModal = document.createElement("p")
            let divThreeModal = document.createElement("div")
            let tittleModal = document.createElement("h1")
            let textModal = document.createElement("p")

            let closeButton = document.createElement("button")

            closeButton.innerHTML = "X"
            closeButton.classList.add("closeButton")

            imgModal.src = obj.img
            nameModal.innerHTML = obj.user
            qualificationModal.innerHTML = obj.stack
            tittleModal.innerHTML = obj.title
            textModal.innerHTML = obj.text

            divUserModal.appendChild(imgModal)
            divUserModal.appendChild(divTwoModal)
            divMainModal.appendChild(divUserModal)
            divTwoModal.appendChild(nameModal)
            divTwoModal.appendChild(qualificationModal)
            divMainModal.appendChild(divThreeModal)
            divThreeModal.appendChild(tittleModal)
            divThreeModal.appendChild(textModal)
            divMainModal.appendChild(closeButton)
            modal.appendChild(divMainModal)

            document.body.appendChild(modal)

            modal.classList.add("modal")
            divUserModal.classList.add("modalUser")
            divThreeModal.classList.add("divThreeModal")

            closeButton.addEventListener("click", function () {
                modal.remove()
            })
        })


        divUser.appendChild(img)
        divUser.appendChild(divTwo)
        divTwo.appendChild(name)
        divTwo.appendChild(qualification)
        divMain.appendChild(divUser)
        divMain.appendChild(divThree)
        divThree.appendChild(tittle)
        divThree.appendChild(text)
        divMain.appendChild(divFour)
        divFour.appendChild(buttonOpen)
        divFour.appendChild(buttonLike)

        postList.appendChild(divMain)
    }
}

createSugestions(suggestUsers)
createPosts(posts) 