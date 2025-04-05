let input = document.getElementById("input");
let ul = document.querySelector("ul");
const more = document.getElementById("more");
const img = document.getElementById("mode");
let isDark = true;


input.addEventListener("keypress", (e) => {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let imgTick = document.createElement("img");
  let imgRemov = document.createElement("img");
  let h = document.createElement("h1");
  let hoved = document.createElement("div");
  imgTick.className = "hidden";
  if (e.key == "Enter" && input.value.length !== 0 && input.value !== " ") {
    if (input.value.length >=5) {
      e.preventDefault();
      li.className =
        "w-full  rounded group  h-[3rem] hover:bg-gray-100 border-b-1 border-gray-300 flex justify-between items-center gap-5 px-2";
      div.className =
        "border-1 border-gray-300 hover:border-0  hover:bg-linear-to-tr from-purples to-blues rounded-full flex justify-center items-center size-5";
      imgTick.src = "./assets/img/checked.svg";
      hoved.className = "bg-white rounded-full flex  size-4.5  border-gray-300";
      div.append(hoved);
      div.append(imgTick);
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
      //
      let isTicked = false;
      div.addEventListener("click", () => {
        isTicked = !isTicked;
        if (isTicked) {
          hoved.classList.add("hidden");
          div.classList.add(
            "bg-linear-to-tr",
            "from-purples",
            "to-blues",
            "border-1"
          );
          h.classList.add("line-through", "text-gray-500");
          h.style.textDecoration = "line-through";
          imgTick.classList.remove("hidden");
        } else {
          h.classList.remove("line-through", "text-gray-500");
          imgTick.classList.add("hidden");
          hoved.classList.remove("hidden");
          hoved.classList.add("border-1");
          h.style.textDecoration = "none";
          div.classList.remove(
            "bg-linear-to-tr",
            "from-purples",
            "to-blues",
            "border-1"
          );
          imgTick.classList.remove("inline");
        }
      });
    } else {
      alert("input should be greather than 5 characters ");
    }
  }
  const lis = document.querySelectorAll("li");

  lis.forEach((e, index) => {
    e.lastChild.addEventListener("click", () => {
      lis[index].remove();
    });
  });
});

const counter = document.getElementById("counter");
const itemnum = document.getElementById("numitem");
const text = "items";
const updateCount = () => {
  if (ul.children.length > 0) {
    counter.textContent = text + " " + ul.children.length;
    itemnum.classList.remove("hidden");
  } else {
    counter.textContent = "no items";
    itemnum.classList.add("hidden");
  }
};
updateCount();
const observer = new MutationObserver(updateCount);
observer.observe(ul, { childList: true });

const reset = document.getElementById("reset");
reset.className = "cursor-pointer";
reset.addEventListener("click", () => {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});

