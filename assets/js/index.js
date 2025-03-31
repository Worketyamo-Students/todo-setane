let input = document.getElementById("input");
let ul = document.querySelector("ul");
const more = document.getElementById("more");

input.addEventListener("keypress", (e) => {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let imgTick = document.createElement("img");
  let imgRemov = document.createElement("img");
  let h = document.createElement("h1");
  let hoved = document.createElement("div");
  if (e.key == "Enter") {
    e.preventDefault();
    li.className =
      "w-full  rounded group h-[3rem] hover:bg-gray-100 border-b-2 border-gray-300 flex justify-between items-center gap-5 px-2";
    div.className =
      " bg-gray-200 hover:bg-linear-to-tr from-purples to-blues rounded-full flex justify-center items-center size-5";
    imgTick.src = "./assets/img/checked.svg";
    hoved.className = "bg-white rounded-full flex  size-4.5";
    div.append(hoved);
    imgTick.className = "";
    li.append(div);
    h.className = "h-60/100 flex-1 text-base text-{#9495A5]";
    h.textContent = input.value;
    li.append(h);
    imgRemov.src = "./assets/img/x.svg ";
    imgRemov.className =
      "size-4 lg:invisible group-hover:visible sm:visible lg:opacity-25 hover:opacity-100 cursor-pointer";
    li.append(imgRemov);
    ul.append(li);
    input.value = "";
    more.className = "inline";
    console.log(input.value);
  }
});
