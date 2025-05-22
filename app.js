const watchBtn = document.getElementById("watch-btn")

const closeIcon = document.querySelector(".close-icon")

const trailerContainer = document.querySelector(".video-container")

const videoEle = document.querySelector("video")


watchBtn.addEventListener("click" , () => {
    trailerContainer.classList.remove("active")
    
})

closeIcon.addEventListener("click" , () =>{
    trailerContainer.classList.add("active") 
    videoEle.pause()
    videoEle.currentTime = 0
})