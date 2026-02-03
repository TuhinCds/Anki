import {UserActionData} from "./data.js"

const actionFromUsers = document.querySelector(".actionFromUsers")


const themeToggle = document.getElementById("themeToggle")
const root = document.documentElement

// sidebar
const sidebar = document.getElementById("sidebar")
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn")
const CloseSidebar = document.getElementById("CloseSidebar")
const CloseSidebar2 = document.getElementById("CloseSidebar2")
const sidebarBtns = document.getElementById("sidebarBtns")
const sidebarBtnsAll = sidebarBtns.querySelectorAll("li button")
const headerWraperLogo = document.querySelector(".headerWraper .logo")
const ShowSidebar = document.getElementById("ShowSidebar")


// Deck section Inputs
const InputFront = document.getElementById("InputFront")
const InputBack = document.getElementById("InputBack")
const InputTypeData = document.getElementById("InputTypeData")
const InputDeck = document.getElementById("InputDeck")

const deckSet = document.getElementById("deckSet")
const typeShow = document.getElementById("typeShow")

// this.btns ||||
const addDeckBtn = document.getElementById("addDeckBtn")


// overly
const overly = document.getElementById("overly")

// Main sections 
const duecks = document.querySelector(".duecks")
const addDeckSection = document.querySelector(".addDeckSection")

// Header Btns 
const AddNewBtn = document.getElementById("AddNewBtn")
const ShowDecks = document.getElementById("ShowDecks")

const header_middle = document.querySelector(".header_middle ul")
const header_middle_allBtns = header_middle.querySelectorAll("li button")

// deck show
const Alldecks = document.getElementById("Alldecks")

// massages 
const emptyDecks = document.querySelector(".emptyDecks")


// empty 
const CreateDecksBtn = document.getElementById("CreateDecksBtn")



// .row-hr-h1-c2

const RowHP8 = document.querySelector(".row-hr-h1-c2CW")


// search 
const SearchDeckBtn = document.getElementById("SearchDeckBtn")
const SearchContainer = document.querySelector(".SearchContainer")
const SearchDecksRemoveText = SearchContainer.querySelector(".searchdivition button")
const SearchDecksInput = SearchContainer.querySelector(".searchdivition input")


let savedTheme = localStorage.getItem("theme")

if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
    let theme = root.getAttribute("data-theme")
    const Theme = theme === "dark" ? "light" : "dark"


    root.setAttribute("data-theme", Theme)
    changeThemeToggleBtnContent(Theme)
    localStorage.setItem("theme", Theme)
})

function changeThemeToggleBtnContent(savedTheme) {
    if (savedTheme === "light") {
       themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>` 
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
}
changeThemeToggleBtnContent(savedTheme)

// THEME TOGGLE CODE END 



function ToggleSidebar() {
    sidebar.classList.toggle("open")
    ToggleOverly()
}
function RemoveSidebar() {
    sidebar.classList.remove("open")
    RemoveOverly()
}
function AddSidebar() {
    sidebar.classList.add("open")
    AddOverly()
}
sidebarToggleBtn.addEventListener("click", () => {
    ToggleSidebar()
})

document.addEventListener("click", (e) => {
    if (!e.target.closest("#sidebar") && !e.target.closest("#sidebarToggleBtn")) {
        RemoveSidebar()
    }
})
CloseSidebar.addEventListener('click', () => {
    RemoveSidebar()
})


sidebarBtnsAll.forEach(btn => {
    btn.addEventListener("click", () => {
        sidebarBtnsAll.forEach(btnRemove => {
            btnRemove.classList.remove("select")
        })
        btn.classList.add("select")
    })
})

CloseSidebar2.addEventListener("click", () => {
    sidebar.classList.add("close")
    document.body.classList.add("closeSidebar")
    headerWraperLogo.classList.add("open")
    ShowSidebar.classList.add("show")
})
ShowSidebar.addEventListener("click", () => {
    sidebar.classList.remove("close")
    document.body.classList.remove("closeSidebar")
    headerWraperLogo.classList.remove("open")
    ShowSidebar.classList.remove("show")
})

// overly 
function AddOverly() {
    overly.classList.add("active")
}
function RemoveOverly() {
    overly.classList.remove("active")
}
function ToggleOverly() {
    overly.classList.toggle("active")
}




function AddtypeShow() {
    typeShow.classList.add("show")
}
function HidetypeShow() {
    typeShow.classList.remove("show")
}
function AdddeckSet() {
    deckSet.classList.add("show")
}
function HidedeckSet() {
    deckSet.classList.remove("show")
}


// section handler 
ShowDecks.addEventListener("click", () => {
    ShowSection("ShowDeck")
})
AddNewBtn.addEventListener("click", () => {
    ShowSection("AddDeck")
})

const Savedsection = localStorage.getItem("section")

if (Savedsection) {
    ShowSection(Savedsection)
}

let activeBtn = parseInt(localStorage.getItem("activeBtn")) || 0

function ShowSection(sectionName) {
    switch (sectionName) {
        case "ShowDeck":
            duecks.classList.remove("height0")
            addDeckSection.classList.add("height0")
            localStorage.setItem("section", sectionName)
            break
        case "AddDeck":
            duecks.classList.add("height0")
            addDeckSection.classList.remove("height0") 
            localStorage.setItem("section", sectionName)
            header_middle_allBtns.forEach(allBtnL => allBtnL.classList.remove("active"))
            header_middle_allBtns[1].classList.add("active")
            localStorage.setItem("activeBtn", 1)
            break
        case "ShowDeckElement":
            
            break
    }
}


header_middle_allBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        header_middle_allBtns.forEach(btnRemove => {
            btnRemove.classList.remove("active")
        })
        btn.classList.add("active")
        localStorage.setItem("activeBtn", index)
    })
})

ShowClickedHeaderBtns()
function ShowClickedHeaderBtns() {
    header_middle_allBtns.forEach((btn, index) => {
    if (activeBtn === index) {
        btn.classList.add("active")
    } else {
        btn.classList.remove("active")
    } 

})
}

document.addEventListener("click", (e) => {
    if (!e.target.closest("#InputTypeData") && !e.target.closest("#typeShow")) {
        HidetypeShow()
    }
    if (!e.target.closest("#InputDeck") && !e.target.closest("#deckSet")) {
        HidedeckSet()
    }
})










// User data 
let Decks = JSON.parse(localStorage.getItem("Decks")) || {}


let isValidFront = false

InputFront.addEventListener("input", () => {
    let DeckValue = InputDeck.value

    if (Decks[DeckValue]) {
        
    let InputFrontValue = InputFront.value.trim()
    let deckInfo = Decks[DeckValue].map(item => item.Front)
    
    if (deckInfo.includes(InputFrontValue)) {
        InputFront.classList.add("error")
        isValidFront = false
    } else {
        InputFront.classList.remove("error")
        isValidFront = true
    }
    } else {
        InputFront.classList.remove("error")
    }
})


function AddDeckData() {
    let InputTypeDataValue = InputTypeData.value
    let InputFrontValue = InputFront.value.trim()
    let InputBackValue = InputBack.value.trim()
    let InputDeckValue = InputDeck.value.trim()

    if (Decks[InputDeckValue]) {
    let deckInfo = Decks[InputDeckValue].map(item => item.Front)
    
    if (deckInfo.includes(InputFrontValue)) {
        InputFront.classList.add("error")
        isValidFront = false
    } else {
        InputFront.classList.remove("error")
        isValidFront = true
    }
    } else {
        isValidFront = true
        InputFront.classList.remove("error")
    }


    // check 
    if (!InputDeckValue) {
        InputDeck.focus()
    }
    if (!InputBackValue) {
        InputBack.focus()
    }
    if(!InputFrontValue || !isValidFront) {
        InputFront.focus()
    }

    if (!InputFrontValue || !InputBackValue || !InputDeckValue || !isValidFront) return

    
    if (Object.keys(Decks).includes(InputDeckValue)) {
        Decks[InputDeckValue].push({Type: InputTypeDataValue, Front: InputFrontValue, Back: InputBackValue, deck: InputDeckValue})
    } else {
        Decks[InputDeckValue] = [{Type: InputTypeDataValue, Front: InputFrontValue, Back: InputBackValue, deck: InputDeckValue}]
    }
    
    localStorage.setItem("Decks", JSON.stringify(Decks))
    ShowDeckInnerDox(Decks)
  

    InputTypeData.value = ""
    InputFront.value = ""
    InputBack.value = ""
}
let ActiveActionMenu = null

function ShowDeckInnerDox(decks) {
    ShowEmptyDecks(Decks)
    Alldecks.innerHTML = ""
    deckSet.innerHTML = ""
    
    Object.keys(decks).forEach((keys, index) => {
            let createData = document.createElement("div")
            createData.classList.add("deck")
            createData.innerHTML = `<div class="deck_number">
                        <span>${index + 1}</span>
                    </div>
                    <div class="deck_main">
                        <div class="deckName">${keys.length > 15 ? keys.slice(0, 10) + " ..." : keys}</div>
                    <div class="deckInfo">
                        <div class="showDeckLenegth">deck<span class="showDeckLen">${decks[keys].length}</span></div>
                        <div class="config_deck">
                            <button class="deckActionBtn"><i class="fa-solid fa-ellipsis"></i></button>
                            <div class="deckActionMenu">
                                <div class="deckActionMenuHead"></div>
                                <div class="deckConfigBtns">
                                    <button><i class="fa-regular fa-pen-to-square"></i>Rename</button>
                                    <button><i class="fa-solid fa-plus"></i>Add</button>
                                    <div class="row-hr-h1 c10"></div>
                                    <button class="deleteDeck" data-name="${keys}"><i class="fa-regular fa-trash-can"></i>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>`
            Alldecks.appendChild(createData)
            let createdeckSetBtns = document.createElement("button")
            createdeckSetBtns.innerHTML = `${keys}`
            deckSet.appendChild(createdeckSetBtns)
            createdeckSetBtns.addEventListener("click", () => {
                CutToDeck(keys, index)
            })

            

             
            // deckActionBtn
    })

     if (Object.keys(decks).length < 1) {
        RowHP8.classList.remove("withItem")
     } else {
        RowHP8.classList.add("withItem")
     }
     ShowEmptyDecks(decks)
}


   document.addEventListener("click", (e) => {
    let menu = e.target.closest(".deckActionMenu")
    if (!menu && !e.target.closest(".deckActionBtn")) {
        deckActionMenuToggle(menu)
    }
    let deckName = e.target.closest(".deleteDeck")
    if (deckName) {
        DeleteDeck(deckName.dataset.name)
        HidedeckActionMenuToggle(menu)
    }
    let actionbtn = e.target.closest(".deckActionBtn")
    if (actionbtn) {
        const Actionmenu = actionbtn.nextElementSibling
         deckActionMenuToggle(Actionmenu)
    } 
    

    
   })

   document.addEventListener("click", (e) => {
        if (!e.target.closest(".deckActionBtn") && !e.target.closest(".deckActionMenu")) {
            Alldecks.querySelectorAll(".deckActionMenu").forEach(menu => menu.classList.remove("show"))
        }

        if (
            !e.target.closest(".SearchContainer") &&
            !e.target.closest(".searchDeckBtn")) 
           {
            SearchContainer.classList.remove("show")
            SearchDeckBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
        }
   })


InputTypeData.addEventListener("click", () => {
    AddtypeShow()
})

InputDeck.addEventListener("click", () => {
    if (Object.keys(Decks).length < 1) {
        HidedeckSet() 
    } else {
        AdddeckSet()
    }
    
})






function deckActionMenuToggle(menu) {
    if (!menu) return

    if (ActiveActionMenu && ActiveActionMenu !== menu) {
        ActiveActionMenu.classList.remove("show")
        ActiveActionMenu = null
    }
    menu.classList.toggle("show")
    if (menu.classList.contains("show")) {
        ActiveActionMenu = menu
    } else {
        ActiveActionMenu = null
    }

}
function HidedeckActionMenuToggle(menu) {
    if (!menu) return
   menu.classList.remove("show") 
}

function DeleteDeck(deckName) {
    delete Decks[deckName]
    localStorage.setItem("Decks", JSON.stringify(Decks))
    ShowDeckInnerDox(Decks)
}



ShowDeckInnerDox(Decks)

addDeckBtn.addEventListener("click", () => {
    AddDeckData()
})
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        AddDeckData()
    }
})
function CutToDeck(key, index) {
    InputDeck.value = key
}

function ShowEmptyDecks(DecksData) {
    if (Object.keys(DecksData).length < 1){
        emptyDecks.classList.remove("height0")
        Alldecks.classList.add("height0")
    } else {
        emptyDecks.classList.add("height0")
        Alldecks.classList.remove("height0")
    }
    
}
ShowEmptyDecks(Decks)

CreateDecksBtn.addEventListener("click", () => {
    ShowSection("AddDeck")
})


function SearchDecks() {
    let SearchDecksInputValue = SearchDecksInput.value.trim().toLowerCase()
    let filterDecks = Object.entries(Decks).filter(([key, value]) => key.toLowerCase().includes(SearchDecksInputValue) || SearchDecksInputValue.includes(key))
    if (filterDecks.length < 1) {
        let searchLCount = {}
        Object.entries(Decks).forEach(([key, value]) => {
            for(let i = 0; i < SearchDecksInputValue.length; i++) {
                for(let j = 0; j < key.length; j++) {
                    if (SearchDecksInputValue[i] === key[j]) {
                        searchLCount[key] = ++searchLCount[key] || 1
                    }
                }
            }
        })
        let searchCountData = Object.values(searchLCount)
        let max = searchCountData[0]

        for(let u = 0; u < searchCountData.length; u++) {
            if (searchCountData[u] > max) {
                max = searchCountData[u]
            }
        }
        let searchItemFound = Object.entries(searchLCount).filter(([key, value]) => value === max)[0][0]
        let day = Object.entries(Decks).filter(([key, value]) => key === searchItemFound)
        filterDecks = day
    }
    let DecksNew = Object.fromEntries(filterDecks)
    console.log(DecksNew)

    ShowDeckInnerDox(DecksNew)
}
SearchDeckBtn.addEventListener("click", (e) => {
      e.stopPropagation()
    SearchContainer.classList.toggle("show")
    if (SearchContainer.classList.contains("show")) {
        SearchDeckBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass-minus"></i>`
    } else {
        SearchDeckBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`
    }

})
SearchDecksRemoveText.addEventListener("click", () => {
    SearchDecksInput.value = ""
    EmptyInput()
    ShowDeckInnerDox(Decks)
})


SearchDecksInput.addEventListener("input", () => {
    SearchDecks()
    EmptyInput()
})

function EmptyInput() {
    let SearchDecksInputValue = SearchDecksInput.value.trim()
      if (SearchDecksInputValue.length < 1) {
        SearchDecksRemoveText.style.scale = "0"
        SearchDecksInput.focus()
      } else {
        SearchDecksRemoveText.style.scale = "1"
      }
}
UserActionData.UserActionTypes.forEach((btn, index) => {
    let createBtn = document.createElement("button")
    createBtn.classList.add("UserAction")
    createBtn.innerHTML = `<div class="UserActionSignAgain">${btn.time}</div><div>${btn.type}</div>`
    actionFromUsers.appendChild(createBtn)
})