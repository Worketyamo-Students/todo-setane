let input = document.getElementById("input");
let ul = document.querySelector("ul");
const more = document.getElementById("more");
const img = document.getElementById("mode");
let isDark = true;

img.addEventListener("click", () => {
  const bg = document.getElementById("bg");
  console.log(bg.src);

  if (isDark) {
    img.src = "./assets/img/sun.svg";
    document.body.classList.add("dark");
    bg.src = "../assets/img/bg2.png";
    bg.classList.add("opacity-50");
  } else {
    img.src = "../assets/img/moon.svg";
    document.body.classList.remove("dark");
    bg.classList.remove("opacity-75");
    bg.src = "../assets/img/mountains.svg";
  }
  isDark = !isDark;
});

function Todo() {
  input.addEventListener("keypress", (e) => {
    let div = document.createElement("div");
    let imgTick = document.createElement("img");
    let imgRemov = document.createElement("img");
    let h = document.createElement("h1");
    let hoved = document.createElement("div");
    let li = document.createElement("li");
    li.setAttribute("is_checked", false);
    imgTick.className = "hidden";
    if (e.key == "Enter" && input.value.length !== 0 && input.value !== " ") {
      if (input.value.length > 5) {
        e.preventDefault();
        li.className =
          "w-full  rounded group dark:bg-[#25273D] rounded-b-none dark:text-white dark:hover:bg-[#40425b]  h-[3rem] hover:bg-gray-100 border-b-1 border-gray-300 flex justify-between items-center gap-5 px-2";
        div.className =
          "border-1 border-gray-300 hover:border-0   hover:bg-linear-to-tr from-purples to-blues rounded-full flex justify-center items-center size-5";
        imgTick.src = "./assets/img/checked.svg";
        hoved.className =
          "bg-white rounded-full flex  size-4.5 dark:bg-[#25273D] border-gray-300";
        div.append(hoved);
        div.append(imgTick);
        li.append(div);
        h.className = "h-60/100 flex-1 text-base text-{#9495A5]";
        h.textContent = input.value;
        li.append(h);
        imgRemov.src = "./assets/img/x.svg ";
        imgRemov.className =
          "size-4 lg:invisible group-hover:visible sm:visible dark:lg:opacity-100 lg:opacity-25 hover:opacity-100 cursor-pointer";
        li.append(imgRemov);
        ul.append(li);
        input.value = "";
        more.className = "inline";

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
            li.setAttribute("is_checked", true);
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
            li.setAttribute("is_checked", false);
          }
        });
      } else {
        alert("input should be greather than 5 characters ");
      }
    }
    let all = document.querySelectorAll("[is_checked]");
    let active = document.querySelectorAll("[is_checked='false']");
    let complited = document.querySelectorAll("[is_checked='true']");
    let aciteTab = document.getElementById("active");
    let allTab = document.getElementById("all");
    let complitedTab = document.getElementById("complited");
    const lis = document.querySelectorAll("li");

    lis.forEach((e, index) => {
      e.lastChild.addEventListener("click", () => {
        lis[index].remove();
      });
    });
  });
}
Todo();

let aciteTab = document.getElementById("active");
let allTab = document.getElementById("all");
let complitedTab = document.getElementById("complited");
aciteTab.addEventListener("click", () => {
  let complited = document.querySelectorAll("[is_checked='true']");
  let active = document.querySelectorAll("[is_checked='false']");
  const counter = document.getElementById("counter");
  const itemnum = document.getElementById("numitem");
  itemnum.classList.remove("hidden");
  counter.textContent = text + " " + active.length;
  complited.forEach((e) => {
    e.classList.add("hidden");
  });
  active.forEach((e) => {
    e.classList.remove("hidden");
  });
  let aciteTab = document.getElementById("active");
  let allTab = document.getElementById("all");
  let complitedTab = document.getElementById("complited");
  allTab.classList.add("text-gray-300");
  complitedTab.classList.add("text-gray-300");
  aciteTab.classList.add("text-blue-300");
  aciteTab.classList.remove("text-gray-300");
});

complitedTab.addEventListener("click", () => {
  let complited = document.querySelectorAll("[is_checked='true']");
  let active = document.querySelectorAll("[is_checked='false']");
  const itemnum = document.getElementById("numitem");
  const counter = document.getElementById("counter");

  if (complited.length > 0) {
    counter.textContent = text + " " + complited.length;
    itemnum.classList.remove("hidden");
  } else {
    counter.textContent = "no items";
    itemnum.classList.add("hidden");
  }
  complited.forEach((e) => {
    e.classList.remove("hidden");
  });
  active.forEach((e) => {
    e.classList.add("hidden");
  });
  let aciteTab = document.getElementById("active");
  let allTab = document.getElementById("all");
  let complitedTab = document.getElementById("complited");

  allTab.classList.add("text-gray-300");
  complitedTab.classList.add("text-blue-300");
  complitedTab.classList.remove("text-gray-300");
  aciteTab.classList.add("text-gray-300");
});
allTab.addEventListener("click", () => {
  let all = document.querySelectorAll("[is_checked]");
  const counter = document.getElementById("counter");
  counter.textContent = text + " " + all.length;
  all.forEach((element) => {
    element.classList.remove("hidden");
  });
  let aciteTab = document.getElementById("active");
  let allTab = document.getElementById("all");
  let complitedTab = document.getElementById("complited");
  allTab.classList.remove("text-gray-300");
  allTab.classList.add("text-blue-300");
  complitedTab.classList.add("text-gray-300");
  aciteTab.classList.add("text-gray-300");
});
function deleteSelected(complitedTab) {
  complitedTab.addEventListener("click", () => {
    let complited = document.querySelectorAll("[is_checked='true']");
    console.log("wht", complited);
    ul.append();
  });
}

const itemnum = document.getElementById("numitem");
const text = "items";

const updateCount = () => {
  const counter = document.getElementById("counter");
  if (ul.children.length > 0) {
    counter.textContent = text + " " + ul.children.length;
    itemnum.classList.remove("hidden");
  } else {
    itemnum.classList.add("hidden");
  }
};
updateCount();
const observer = new MutationObserver(updateCount);
observer.observe(ul, { childList: true });
const reset = document.getElementById("reset");
reset.className = "cursor-pointer";
reset.addEventListener("click", () => {
  let complited = document.querySelectorAll("[is_checked='true']");
  complited.forEach((complited) => {
    ul.removeChild(complited);
  });
});
