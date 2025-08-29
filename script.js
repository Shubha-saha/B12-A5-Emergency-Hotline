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

let coins= 100;
const coinDisplay = document.getElementById("coinDisplay");
const callButtons = document.querySelectorAll("#btnCall");
const historyContainer = document.getElementById("historyDetails");
const historyList = document.getElementById("history");

historyList.innerHTML="";

callButtons.forEach((btn) => {
  btn.addEventListener("click", ()=>{
    const card = btn.closest(".card");
    const serviceName = card.querySelector("#titleName").textContent;
    const serviceNumber = card.querySelector("#callNumber").textContent;

    if(coins<20){
      alert("Not enough coins to make a call!");
      return;
    }

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    coins -= 20;
    coinDisplay.textContent = coins;

    const now = new Date();
    const time = now.toLocaleTimeString([],{hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false});


    const div = document.createElement("div");
    div.className = "flex justify-between items-center p-2 bg-slate-100 m-3 mt-0 rounded-md";
    
    div.innerHTML=`
    <h2 class="font-bold text-[16px] text-gray-800">${serviceName}<br><span class="text-gray-400">${serviceNumber}</span>
    </h2>
    <p class="text-[14px]">${time}</p>
    `;
    historyContainer.appendChild(div);
  })
})


// COPY FUNCTIONALITY 

const copyButtons = document.querySelectorAll("#btnCopy");
const copyCount = document.getElementById("copyCount");

let totalCopy = 0;

copyButtons.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    const number = btn.closest(".card").querySelector("#callNumber").textContent;
    navigator.clipboard.writeText(number)
      .then(() => {
        totalCopy++;
        copyCount.textContent = totalCopy;
        alert(`Number ${number} copied to clipboard!`);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
    });
  });


// CLEAR HISTORY 

const clearBtn= historyContainer.querySelector("button");
clearBtn.addEventListener("click", ()=>{
   const items = historyContainer.querySelectorAll("div.flex.justify-between.items-center.p-2");
   items.forEach((item)=>item.remove())
})