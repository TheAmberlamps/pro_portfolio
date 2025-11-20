let openModals = document.getElementsByClassName("demo")
let closeModals = document.getElementsByClassName("close")

for (let i=0; i < openModals.length; i++) {
    openModals[i].addEventListener("click", () => {
        let modalDialog = document.getElementById("modal-dialog-" + i)
        modalDialog.showModal();
    })
    closeModals[i].addEventListener("click", () => {
        let modalDialog = document.getElementById("modal-dialog-" + i)
        modalDialog.close();
    })
}