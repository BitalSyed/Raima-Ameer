// Colors Data
const data = {
  name: {
    colors: [
      "b",
      "br",
      "c",
      "g",
      "gr",
      "m",
      "n",
      "o",
      "p",
      "pu",
      "r",
      "roy",
      "s",
      "w",
      "y",
    ],
  },
  directstitch: {
    colors: [
      "b",
      "br",
      "c",
      "g",
      "gr",
      "m",
      "n",
      "o",
      "p",
      "pu",
      "r",
      "roy",
      "s",
      "w",
      "y",
    ],
  },
  thumbbranding: {
    colors: ["b", "roy", "w", "n", "g"],
  },
  flag: [
    "noflag",
    "usa",
    "arizona",
    "australia",
    "california",
    "canada",
    "colorado",
    "cuba",
    "dominicanrepublic",
    "hawaii",
    "ireland",
    "italy",
    "japan",
    "maryland",
    "mexico",
    "netherlands",
    "phantom",
    "southcarolina",
    "korea",
    "puertorico",
    "texas",
    "texasblueline",
    "thinblueusa",
    "thinredusa",
    "venezuela",
  ],
  palm: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  web: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  thumbinside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  thumboutside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  indexinside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  indexoutside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  middleinside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  ringinside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  ringoutside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  pinkieinside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  pinkieoutside: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  fingerpad: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  wrist: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  laces: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  welting: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
  binding: {
    colors: ["b", "br", "c", "g", "n", "r", "roy", "w"],
  },
};

// Buttons
const li = [
  "Name",
  "Direct Stitch",
  "Thumb Branding",
  "Flag #1",
  "Flag #2",
  "Web Style",
  "Palm",
  "Web",
  "Thumb Inside",
  "Thumb Outside",
  "Index Inside",
  "Index Outside",
  "Middle Inside",
  "Ring Inside",
  "Ring Outside",
  "Pinkie Inside",
  "Pinkie Outside",
  "Finger Pad",
  "Wrist",
  "Laces",
  "Welting",
  "Binding",
];

// Initializing Buttons
function initializeButtons() {
  li.map((e) => {
    list.innerHTML += `
      <li class="border-2 rounded-md">
                    <a onclick="select(this)" href="javascript:void(0)"
                      class="text-gray-800 flex justify-start text-sm flex items-center rounded-md px-4 py-2 transition-all">
  
                      <span>${e}</span>
                      <span>${
                        e.split("#")[0] == "Flag " ? "&nbsp;+$5" : ""
                      }</span>
                    </a>
                  </li> 
      `;
  });
}

// To select color in dynamic functions
let s;

// choose colors sidebar
function select(n) {
  s = n;
  let result = n
    .querySelector("span")
    .innerText.split(":")[0]
    .replace(/\s+/g, "")
    .toLowerCase();
  console.log(result);

  // Flag
  if (result.split("#")[0] == "flag") {
    sub.querySelector("ul").innerHTML = "";
    const color = data[result.split("#")[0]];
    let i = 0;
    console.log(color);
    while (data[result.split("#")[0]].length > i)
      sub.querySelector("ul").innerHTML += `
    <div class="flex justify-evenly">
                    <li onclick="${
                      result.split("#")[0] + result.split("#")[1]
                    }(this)" class="pointer border-2 rounded-md m-1 hover:scale-105">
                      <img src="/gloves/flags/${color[i++]}.png"
                        class="text-gray-800 w-80 h-auto flex justify-start text-sm flex items-center rounded-md px-4 py-2 transition-all">
                      </img>
                    </li>
                    <li onclick="${
                      result.split("#")[0] + result.split("#")[1]
                    }(this)" class="pointer border-2 ${
        color[i] == undefined ? "hidden" : ""
      } rounded-md m-1 hover:scale-105">
                      <img src="/gloves/flags/${color[i++]}.png"
                        class="text-gray-800 w-80 h-auto flex justify-start text-sm flex items-center rounded-md px-4 py-2 transition-all">
                      </img>
                    </li>

                  </div>
    `;
    sub.style.transform = "translateX(0%)";
    return;
  }

  if (result == "webstyle") {
    sub.querySelector("ul").innerHTML = "";
    sub.querySelector("ul").innerHTML += `
    <div class="flex justify-evenly">
                    <li onclick="${result}(this)" class="bg-white border-2 rounded-md m-1 hover:scale-105">
                      <a href="javascript:void(0)"
                        class="text-gray-800 w-[80px] h-[80px] flex justify-start text-sm flex items-center rounded-md px-4 py-2 transition-all">K-Web
                      </a>
                    </li>
                    <li onclick="${result}(this)" class="bg-white border-2 rounded-md m-1 hover:scale-105">
                      <a href="javascript:void(0)"
                        class="text-gray-800 w-[80px] h-[80px] flex justify-start text-sm flex items-center rounded-md px-4 py-2 transition-all">I-Web
                      </a>
                    </li>

                  </div>
    `;
    sub.style.transform = "translateX(0%)";
    return;
  }

  console.log();

  const color = compileCodes(data[result].colors);
  console.log(color);
  sub.querySelector("ul").innerHTML = "";

  let i = 0;
  while (color.length > i)
    sub.querySelector("ul").innerHTML += `
    <div class="flex justify-evenly">
                    <li onclick="${result}(this)" style="background-color: ${
      color[i++]
    }" class="border-2 rounded-md m-1 hover:scale-105">
                      <a href="javascript:void(0)"
                        class="text-gray-800 w-[80px] h-[80px] flex justify-start text-sm flex items-center rounded-md px-4 py-2 transition-all">
                      </a>
                    </li>
                    <li onclick="${result}(this)" style="background-color: ${
      color.length <= i ? "transparent; display: none" : color[i++]
    }" class="border-2 rounded-md m-1 hover:scale-105">
                      <a href="javascript:void(0)"
                        class="text-gray-800 w-[80px] h-[80px] flex justify-start text-sm flex items-center rounded-md px-4 py-2 transition-all">
                      </a>
                    </li>

                  </div>
    `;
  sub.style.transform = "translateX(0%)";
}

initializeButtons();

// Dynamic functions
function name(n) {
  console.log(n);
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  console.log(invertColor(n.style.backgroundColor));
  sub.style.transform = "translateX(-100%)";
  // list.querySelector('span')
}
function directstitch(n) {
  console.log(extractRGBNumbers(n.style.backgroundColor));
  canvas3
    .getElementsByTagName("img")[4]
    .setAttribute(
      "src",
      `/gloves/stitch/${extractRGBNumbers(n.style.backgroundColor)}.png`
    );
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  // console.log(invertColor(n.style.backgroundColor));
  sub.style.transform = "translateX(-100%)";
  // list.querySelector('span')
}
function thumbbranding(n) {
  console.log(n);
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  console.log(invertColor(n.style.backgroundColor));
  sub.style.transform = "translateX(-100%)";
  // list.querySelector('span')
}
function flag1(n) {
  console.log(n.querySelector("img").src);
  canvas3
    .getElementsByTagName("img")[1]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-flag1-${
        n.querySelector("img").src.split("/flags/")[1]
      }`
    );
  // const l = s;
  // l.style.backgroundColor = n.style.backgroundColor;
  // l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  // console.log(invertColor(n.style.backgroundColor));
  sub.style.transform = "translateX(-100%)";
  // list.querySelector('span')
}
function flag2(n) {
  console.log(n.querySelector("img").src);
  canvas3
    .getElementsByTagName("img")[2]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-flag2-${
        n.querySelector("img").src.split("/flags/")[1]
      }`
    );
  // const l = s;
  sub.style.transform = "translateX(-100%)";
}
function webstyle(n) {
  console.log(n.querySelector("a").innerText);
  const split = canvas1.getElementsByTagName("img")[0].src.split("-");
  const splitc2 = canvas2.getElementsByTagName("img")[1].src.split("-");
  const split1 = canvas1.getElementsByTagName("img")[3].src.split("-");
  console.log(canvas2.getElementsByTagName("img")[12]);
  const split1c2 = canvas2.getElementsByTagName("img")[12].src.split("-");
  if (n.querySelector("a").innerText == "K-Web") {
    canvas1
      .getElementsByTagName("img")[0]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-4-weblaces-${
          split[split.length - 1]
        }`
      );
    canvas1
      .getElementsByTagName("img")[3]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-4-web-${
          split1[split1.length - 1]
        }`
      );
    canvas2
      .getElementsByTagName("img")[1]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-1-weblaces-${
          splitc2[splitc2.length - 1]
        }`
      );
    canvas2
      .getElementsByTagName("img")[12]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-1-web-${
          split1c2[split1c2.length - 1]
        }`
      );
  }
  if (n.querySelector("a").innerText == "I-Web") {
    canvas1
      .getElementsByTagName("img")[0]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-4-weblaces-i-${
          split[split.length - 1]
        }`
      );
    canvas1
      .getElementsByTagName("img")[3]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-4-web-i-${
          split1[split1.length - 1]
        }`
      );
    canvas2
      .getElementsByTagName("img")[1]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-1-weblaces-i-${
          splitc2[splitc2.length - 1]
        }`
      );
    canvas2
      .getElementsByTagName("img")[12]
      .setAttribute(
        "src",
        `/gloves/primeseries-fielder-left/left-1-web-i-${
          split1c2[split1c2.length - 1]
        }`
      );
  }
  // const l = s;
  sub.style.transform = "translateX(-100%)";
}
function palm(n) {
  console.log(n);
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  console.log(canvas1.getElementsByTagName("img")[9].src.split("palm-")[1]);
  canvas1
    .getElementsByTagName("img")[9]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-palm-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas2
    .getElementsByTagName("img")[11]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-palm-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function web(n) {
  console.log(n);
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  let split = canvas1.getElementsByTagName("img")[3].src.split("-");
  let split1 = canvas2.getElementsByTagName("img")[12].src.split("-");
  split.pop(split.length - 1);
  split1.pop(split1.length - 1);
  console.log(split);
  canvas1
    .getElementsByTagName("img")[3]
    .setAttribute(
      "src",
      `${split.join("-")}-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas2
    .getElementsByTagName("img")[12]
    .setAttribute(
      "src",
      `${split1.join("-")}-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function thumbinside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  // console.log(canvas1.getElementsByTagName("img")[9].src.split("palm-")[1]);
  canvas1
    .getElementsByTagName("img")[11]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-back-t1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function thumboutside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  // console.log(canvas1.getElementsByTagName("img")[9].src.split("palm-")[1]);
  canvas1
    .getElementsByTagName("img")[12]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-back-t2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas2
    .getElementsByTagName("img")[4]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-back-t2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function indexinside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas1
    .getElementsByTagName("img")[14]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-back-i1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas2
    .getElementsByTagName("img")[6]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-back-i1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[9]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-back-i1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function indexoutside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas2
    .getElementsByTagName("img")[7]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-back-i2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[10]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-back-i2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function middleinside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas2
    .getElementsByTagName("img")[8]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-back-m1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[11]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-back-m1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function ringinside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);

  canvas3
    .getElementsByTagName("img")[12]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-back-r1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function ringoutside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas2
    .getElementsByTagName("img")[9]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-back-r2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[13]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-back-r2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function pinkieinside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);

  canvas3
    .getElementsByTagName("img")[14]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-back-p1-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function pinkieoutside(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas2
    .getElementsByTagName("img")[10]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-back-p2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[15]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-back-p2-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function fingerpad(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas1
    .getElementsByTagName("img")[8]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-fingerpad-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[6]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-fingerpad-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function wrist(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas1
    .getElementsByTagName("img")[10]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-wrist-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[8]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-wrist-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function laces(n) {
  console.log(n);
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  let split = canvas1.getElementsByTagName("img")[1].src.split("-");
  let split2 = canvas1.getElementsByTagName("img")[0].src.split("-");
  let split1 = canvas2.getElementsByTagName("img")[0].src.split("-");
  let split3 = canvas2.getElementsByTagName("img")[1].src.split("-");
  let split4 = canvas3.getElementsByTagName("img")[0].src.split("-");
  split.pop(split.length - 1);
  split2.pop(split2.length - 1);
  split1.pop(split1.length - 1);
  split3.pop(split3.length - 1);
  split4.pop(split4.length - 1);
  console.log(split);
  canvas1
    .getElementsByTagName("img")[1]
    .setAttribute(
      "src",
      `${split.join("-")}-${getColorName(n.style.backgroundColor)}.png`
    );
  canvas1
    .getElementsByTagName("img")[0]
    .setAttribute(
      "src",
      `${split2.join("-")}-${getColorName(n.style.backgroundColor)}.png`
    );
  canvas2
    .getElementsByTagName("img")[0]
    .setAttribute(
      "src",
      `${split1.join("-")}-${getColorName(n.style.backgroundColor)}.png`
    );
  canvas2
    .getElementsByTagName("img")[1]
    .setAttribute(
      "src",
      `${split3.join("-")}-${getColorName(n.style.backgroundColor)}.png`
    );
  canvas3
    .getElementsByTagName("img")[0]
    .setAttribute(
      "src",
      `${split4.join("-")}-${getColorName(n.style.backgroundColor)}.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function welting(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas1
    .getElementsByTagName("img")[7]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-welting-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas2
    .getElementsByTagName("img")[4]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-welting-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[7]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-welting-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}
function binding(n) {
  const l = s;
  l.style.backgroundColor = n.style.backgroundColor;
  l.querySelector("span").style.color = invertColor(n.style.backgroundColor);
  canvas1
    .getElementsByTagName("img")[6]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-4-binding-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas2
    .getElementsByTagName("img")[3]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-1-binding-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  canvas3
    .getElementsByTagName("img")[5]
    .setAttribute(
      "src",
      `/gloves/primeseries-fielder-left/left-3-binding-${
        getColorName(n.style.backgroundColor) == "gold"
          ? "tan"
          : getColorName(n.style.backgroundColor)
      }.png`
    );
  sub.style.transform = "translateX(-100%)";
}