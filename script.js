let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flip_button");
let resetButton = document.querySelector("#reset_button");

let heads = 0;
let tails = 0;
flipButton.addEventListener("click", ()=>{
  let i = Math.floor(Math.random()*2);

  coin.style.animation = "none";

  if(i){
    setTimeout(function(){coin.style.animation = "spin-heads 3s forwards";},100);
    heads++;
  }else{
    setTimeout(function(){
      coin.style.animation = "spin-tails  3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateCounter, 3000);
  disableButton();
});

function updateCounter(){
  document.querySelector("#heads_counter").textContent = `Heads: ${heads}`;
  document.querySelector("#tails_counter").textContent = `Tails: ${tails}`;
}

function disableButton(){
  flipButton.disabled = true;
  setTimeout(function(){flipButton.disabled = false;}, 3000);
} 

resetButton.addEventListener("click",()=>{
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateCounter();
});