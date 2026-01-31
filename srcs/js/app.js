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


// overly 
const overly = document.getElementById("overly")



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