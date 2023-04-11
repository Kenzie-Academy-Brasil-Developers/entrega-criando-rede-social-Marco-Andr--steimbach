import { suggestUsers } from "./database.js";
import { posts } from "./database.js";

let userList = document.querySelector(`#userSection`)
let postList = document.querySelector(`#postSection`)

function createSugestions(object) {
    for (let i = 0; i < object.length; i++) {
        let obj = object[i]

        let divMain = document.createElement("li")
        let img = document.createElement("img")
        let divUser = document.createElement("div")
        let name = document.createElement("h3")
        let qualification = document.createElement("p")
        let button = document.createElement("button")

        divMain.classList.add(`suggestion__list`)
        name.classList.add(`suggestion__list--title`)
        qualification.classList.add(`suggestion__list--stack`)
        img.classList.add(`suggestion__list--img`)
        button.classList.add(`suggestion__list--button`)

        img.src = obj.img
        name.innerHTML = obj.user
        qualification.innerHTML = obj.stack
        button.innerHTML = `Seguir`

        button.addEventListener("click", function () {

            if (button.classList.contains("suggestion__list--button")) {

                button.classList.remove("suggestion__list--button")
                button.classList.add("suggestion__list__button--Following")
                button.innerHTML = "Seguindo"

            } else if (button.classList.contains("suggestion__list__button--Following")) {

                button.classList.remove("suggestion__list__button--Following")
                button.classList.add("suggestion__list--button")
                button.innerHTML = "Seguir"

            }
        })

        divMain.appendChild(img)
        divMain.appendChild(divUser)
        divUser.appendChild(name)
        divUser.appendChild(qualification)
        divMain.appendChild(button)

        userList.appendChild(divMain)
    }
}

function createPosts(object) {
    for (let i = 0; i < object.length; i++) {
        let obj = object[i]

        let divMain = document.createElement("li")
        let divUser = document.createElement("div")
        let img = document.createElement("img")
        let divUserName = document.createElement("div")
        let name = document.createElement("h3")
        let qualification = document.createElement("p")
        let divPost = document.createElement("div")
        let tittle = document.createElement("h1")
        let text = document.createElement("p")
        let divPostButtons = document.createElement("div")
        let buttonOpen = document.createElement("button")
        let buttonLike = document.createElement("button")

        let imgUnLike = document.createElement("img")
        let imgLike = document.createElement("img")

        imgLike.src = `./src/assets/img/like.png`
        console.log(imgLike)
        imgUnLike.src = `./src/assets/img/Vector.png`

        img.src = obj.img
        name.innerHTML = obj.user
        qualification.innerHTML = obj.stack
        tittle.innerHTML = obj.title
        text.innerHTML = obj.text
        buttonOpen.innerHTML = `Abrir Post`
        buttonLike.innerHTML = obj.likes

        img.classList.add("sectionPosts__userImgPost")
        divMain.classList.add("sectionPosts__div__main")
        divUserName.classList.add("sectionPosts__div__UserName")
        divUser.classList.add("sectionPosts__div__User")
        name.classList.add("sectionPosts__div__User--name")
        text.classList.add("sectionPosts__div__User--stack")
        divPost.classList.add("sectionPosts__div__content")
        tittle.classList.add("sectionPosts__div__content--title")
        text.classList.add("sectionPosts__div__content--text")
        divPostButtons.classList.add("sectionPosts__div__button")
        buttonOpen.classList.add("sectionPosts__div__button--buttonPost")
        buttonLike.classList.add("sectionPosts__div__button--buttonLike")


        buttonOpen.addEventListener("click", function () {

            let modal = document.createElement("dialog")
            let divMainModal = document.createElement("div")
            let divUserModal = document.createElement("div")
            let imgModal = document.createElement("img")
            let divUserNameModal = document.createElement("div")
            let nameModal = document.createElement("h3")
            let qualificationModal = document.createElement("p")
            let divPostModal = document.createElement("div")
            let tittleModal = document.createElement("h1")
            let textModal = document.createElement("p")

            let closeButton = document.createElement("button")

            closeButton.innerHTML = "X"
            closeButton.classList.add("modal__closeButton")

            imgModal.src = obj.img
            nameModal.innerHTML = obj.user
            qualificationModal.innerHTML = obj.stack
            tittleModal.innerHTML = obj.title
            textModal.innerHTML = obj.text

            divUserModal.appendChild(imgModal)
            divUserModal.appendChild(divUserNameModal)
            divUserModal.appendChild(closeButton)
            divMainModal.appendChild(divUserModal)
            divUserNameModal.appendChild(nameModal)
            divUserNameModal.appendChild(qualificationModal)
            divMainModal.appendChild(divPostModal)
            divPostModal.appendChild(tittleModal)
            divPostModal.appendChild(textModal)
            modal.appendChild(divMainModal)

            document.body.appendChild(modal)

            modal.classList.add("modal")
            divUserModal.classList.add("modal__User")
            imgModal.classList.add("modal__User--img")
            nameModal.classList.add("modal__User--name")
            divPostModal.classList.add("modal__post")
            tittleModal.classList.add("modal__post--tittle")
            textModal.classList.add("modal__post--text")

            closeButton.addEventListener("click", function () {
                modal.remove()
            })
        })

        divUser.appendChild(img)
        divUser.appendChild(divUserName)
        divUserName.appendChild(name)
        divUserName.appendChild(qualification)
        divMain.appendChild(divUser)
        divMain.appendChild(divPost)
        divPost.appendChild(tittle)
        divPost.appendChild(text)
        divMain.appendChild(divPostButtons)
        divPostButtons.appendChild(buttonOpen)
        divPostButtons.appendChild(buttonLike)
        buttonLike.appendChild(imgUnLike)

        postList.appendChild(divMain)
    }
}

createSugestions(suggestUsers)
createPosts(posts) 