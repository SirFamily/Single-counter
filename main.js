// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

const counter = document.querySelector(".counter");
const btnp = document.querySelector(".btn-inc");
const btnd = document.querySelector(".btn-dec");
const btnc = document.querySelector(".btn-clr");
const number = document.querySelector(".number");

let result = 0;

function updateNum(){
  number.textContent = result;
}

function plus(){
    result += 1;
    updateNum()
}
function minus() {
    result -= 1;
    result = result === -1 ? 0 : result;
    updateNum()
  }
  
  function clear() {
    result = 0;
    updateNum()
  }

 
  btnp.addEventListener('click', plus)
  btnd.addEventListener('click', minus);
  btnc.addEventListener('click', clear);
  

const audio = new Audio();
audio.src = "./click.mp3";

const audio2 = new Audio();
audio2.src = "./Delete.mp3";