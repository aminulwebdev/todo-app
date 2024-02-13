let inputBox = document.querySelector(".input_box")
let addBtn = document.querySelector(".add_btn")
let todaErr = document.querySelector(".todo_err")
let main = document.querySelector(".main")

let storeTodo = []
let rememberIndex

addBtn.addEventListener("click", function () {
    if (inputBox.value !== "" && addBtn.innerHTML == "Add") {
        storeTodo.push(inputBox.value)
        inputBox.value = ""
        todaErr.innerHTML = ""
        todo()
    } else if (inputBox.value !== "" && addBtn.innerHTML == "Update") {
        storeTodo[rememberIndex] = inputBox.value
        addBtn.innerHTML = "Add"
        inputBox.value = ""
        todaErr.innerHTML = ""
        todo()
    } else {
        todaErr.innerHTML = "Please, enter your todo"
    }
})


function todo() {
    main.innerHTML = ""
    storeTodo.map((item, index) => {
        main.innerHTML += `<li
        class="bg-[#fff] text-black text-2xl py-4 px-8 rounded mb-1 shadow-md hover:bg-[#f7f7f7] cursor-pointer transition-all duration-300 flex justify-between">
        ${item}
        <div class="flex gap-5">
            <button class="edit_btn text-[20px] hover:text-blue-700 transition-all duration-300"><i
                    class="fa-solid fa-pen"></i></button>
            <button
                class="delete_btn text-[20px] hover:text-blue-700 transition-all duration-300"><i
                    class="fa-regular fa-circle-xmark"></i>
            </button>
        </div>
    </li>`
    })

    let editBtn = document.querySelectorAll(".edit_btn")
    let editBtnArr = Array.from(editBtn)
    editBtnArr.map((editItem, editIndex) => {
        editItem.addEventListener("click", function () {
            addBtn.innerHTML = "Update"
            inputBox.value = storeTodo[editIndex]
            rememberIndex = editIndex
            todaErr.innerHTML = ""
        })
    })

    let deleteBtn = document.querySelectorAll(".delete_btn")
    let deleteBtnArr = Array.from(deleteBtn)
    deleteBtnArr.map((delItem, delIndex) => {
        delItem.addEventListener("click", function () {

            storeTodo.splice(delIndex, 1)
            todo()

            if (storeTodo.length === 0) { // Check if storeTodo is empty
                addBtn.innerHTML = "Add"
            }


        })
    })

}