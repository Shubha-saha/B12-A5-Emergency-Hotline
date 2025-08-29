// HEART FUNCTIONALITY 

const hearts = document.querySelectorAll('.fa-heart');
const heartCount = document.getElementById('heartCount');
let totalLikes=0;

hearts.forEach((heart)=>{
  heart.addEventListener('click', () => {
    totalLikes++;
    heartCount.textContent=totalLikes;
  })
})

// CALL FUNCTIONALITY 

let coin= 100;
const coinDisplay = document.getElementById("coinDisplay")