window.onload = function () {
    const vides = document.getElementsByClassName("noir");
    const pions = document.querySelectorAll("img")
    let drag;
    for (let pion of pions) {
        pion.addEventListener("dragstart", function() {
            drag = this
        })
        for(let vide of vides ){
            vide.addEventListener("dragover", function(e){
            e.preventDefault()
            })
            vide.addEventListener("drop", function(e){
            vide.append(drag)
            })
        }
        pion.addEventListener("dblclick", function(){
            this.remove()
        })
        pion.addEventListener("touchstart", function(){
            this.remove()
        })
    }
}