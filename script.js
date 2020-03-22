var arr = [
  [1, "Lyn", "Reisenberg", "lreisenberg0@instagram.com", "Female", "$260.02"],
  [2, "Herculie", "Barzen", "hbarzen1@dot.gov", "Male", "$214.93"],
  [3, "Bear", "Gilmartin", "bgilmartin2@nih.gov", "Male", "$946.95"],
  [4, "Trstram", "Cowhig", "tcowhig3@xrea.com", "Male", "$59.85"],
  [5, "Golda", "Creese", "gcreese4@dailymail.co.uk", "Female", "$839.63"],
  [
    6,
    "Arnaldo",
    "Golden of Ireland",
    "agoldenofireland5@quantcast.com",
    "Male",
    "$388.44"
  ],
  [7, "Rici", "Casterot", "rcasterot6@java.com", "Female", "$616.44"],
  [8, "Cletis", "Headford", "cheadford7@dedecms.com", "Male", "$133.38"],
  [9, "Mikael", "Preene", "mpreene8@yellowpages.com", "Male", "$387.66"],
  [10, "Ron", "Twitchings", "rtwitchings9@ucoz.ru", "Male", "$950.89"],
  [11, "Graig", "Gaffey", "ggaffeya@cnn.com", "Male", "$363.41"],
  [12, "Verine", "Hallt", "vhalltb@gizmodo.com", "Female", "$145.33"],
  [13, "Nadean", "Jentet", "njentetc@spotify.com", "Female", "$742.00"],
  [14, "Lenora", "Comiam", "lcomiamd@cisco.com", "Female", "$852.33"],
  [15, "Hyacinthe", "Trodd", "htrodde@ihg.com", "Female", "$745.79"],
  [16, "Rozalie", "Thamelt", "rthameltf@phoca.cz", "Female", "$44.14"],
  [17, "Vivian", "Howell", "vhowellg@ehow.com", "Female", "$973.85"],
  [18, "Ardith", "Pires", "apiresh@vinaora.com", "Female", "$785.17"],
  [
    19,
    "Walliw",
    "Shillington",
    "wshillingtoni@squidoo.com",
    "Female",
    "$572.38"
  ],
  [20, "Rea", "Biscomb", "rbiscombj@elpais.com", "Female", "$13.34"],
  [21, "Katusha", "Loxley", "kloxleyk@time.com", "Female", "$440.26"],
  [22, "Zebulen", "Shakshaft", "zshakshaftl@51.la", "Male", "$695.92"],
  [23, "Heidi", "Hevner", "hhevnerm@blogger.com", "Female", "$934.21"],
  [24, "Aubrie", "Prantl", "aprantln@wired.com", "Female", "$959.36"],
  [25, "Vida", "Tottem", "vtottemo@illinois.edu", "Female", "$233.41"],
  [26, "Kelsy", "Furman", "kfurmanp@goodreads.com", "Female", "$260.71"],
  [27, "Remington", "Rizzardo", "rrizzardoq@topsy.com", "Male", "$972.17"],
  [28, "Bowie", "Pitfield", "bpitfieldr@columbia.edu", "Male", "$737.11"],
  [
    29,
    "Templeton",
    "Slorance",
    "tslorances@wunderground.com",
    "Male",
    "$20.94"
  ],
  [30, "Marley", "Ledwitch", "mledwitcht@deviantart.com", "Female", "$53.09"],
  [31, "Theresa", "Barehead", "tbareheadu@lycos.com", "Female", "$632.28"],
  [
    32,
    "Hank",
    "Jakoviljevic",
    "hjakoviljevicv@techcrunch.com",
    "Male",
    "$215.71"
  ],
  [33, "Wes", "Eckersley", "weckersleyw@ca.gov", "Male", "$165.30"],
  [34, "Sheilah", "Blazevic", "sblazevicx@blinklist.com", "Female", "$837.35"],
  [35, "Margaretha", "Masserel", "mmasserely@narod.ru", "Female", "$362.35"],
  [36, "Gregorius", "Virgo", "gvirgoz@ask.com", "Male", "$79.83"],
  [37, "Willey", "Richardes", "wrichardes10@nyu.edu", "Male", "$516.73"],
  [38, "Teresa", "Lodden", "tlodden11@bloomberg.com", "Female", "$675.88"],
  [39, "Damaris", "Itzkin", "ditzkin12@over-blog.com", "Female", "$646.47"],
  [40, "Colene", "Abramino", "cabramino13@uol.com.br", "Female", "$494.30"],
  [41, "Alexandr", "Morgan", "amorgan14@vinaora.com", "Male", "$632.05"],
  [42, "Albertine", "Eberst", "aeberst15@goo.ne.jp", "Female", "$43.12"],
  [43, "Panchito", "Castilla", "pcastilla16@histats.com", "Male", "$460.09"],
  [
    44,
    "Gloriane",
    "Brennenstuhl",
    "gbrennenstuhl17@hc360.com",
    "Female",
    "$708.50"
  ],
  [45, "Kermy", "Pottie", "kpottie18@vkontakte.ru", "Male", "$722.82"],
  [46, "Curcio", "Mattaus", "cmattaus19@parallels.com", "Male", "$422.80"],
  [47, "Yvonne", "Ovey", "yovey1a@dropbox.com", "Female", "$820.60"],
  [48, "Kareem", "Regnard", "kregnard1b@dailymotion.com", "Male", "$797.16"],
  [
    49,
    "Raleigh",
    "McClenan",
    "rmcclenan1c@theglobeandmail.com",
    "Male",
    "$475.00"
  ],
  [
    50,
    "Amelie",
    "Schechter",
    "aschechter1d@imageshack.us",
    "Female",
    "$159.46"
  ],
  [51, "Leigh", "Caroll", "lcaroll1e@zdnet.com", "Female", "$737.28"],
  [52, "Fabien", "Nardoni", "fnardoni1f@a8.net", "Male", "$528.28"],
  [53, "Erda", "Yitshak", "eyitshak1g@phoca.cz", "Female", "$448.18"]
];
let currPage = 1;
let perPage = 10;
var tBody = document.getElementById("tableBody");
var pBody = document.getElementById("pagination");

function rowsElement(arr, wrapper, currPage, perPage) {
  console.log("tbody", wrapper);
  wrapper.innerHTML = "";
  currPage--;
  let start = perPage * currPage;
  let end = start + perPage <= arr.length ? start + perPage : arr.length;
  let paginatedItems = arr.slice(start, end);
  console.log("paginated", paginatedItems);
  for (let i = 0; i < paginatedItems.length; i++) {
    var tr = wrapper.insertRow();
    for (var j = 0; j < paginatedItems[i].length; j++) {
      var td = document.createElement("td");
      td.innerHTML = paginatedItems[i][j];
      tr.appendChild(td);
    }
  }
}
function pagination(arr, wrapper, perPage) {
  wrapper.innerHTML = "";
  let paginationLength = Math.floor(arr.length / perPage) + 1;
  let left = document.createElement("a");
  left.innerHTML = "&laquo;";
  wrapper.appendChild(left);

  for (let i = 1; i <= paginationLength; i++) {
    let page = document.createElement("a");
    if (i == currPage) {
      page.className = "active";
    }
    page.href = "#" + i;
    page.innerHTML = i;
    page.addEventListener("click", function() {
      currPage = i;
      rowsElement(arr, tBody, currPage, perPage);

      let current_btn = document.querySelector(".active");
      current_btn.classList.remove("active");

      page.classList.add("active");
    });
    pBody.appendChild(page);
  }
  var right = document.createElement("a");
  right.innerHTML = "&raquo;";
  pBody.appendChild(right);
}
function sortArr(params) {
  console.log("params", params);
  if (params == "Id") {
    arr.sort((a, b) => a[0] - b[0]);
  } else {
    arr.sort(sortThings);
  }
  function sortThings(a, b) {
    if (params == "FirstName") {
      a = a[1].toLowerCase();
      b = b[1].toLowerCase();
    } else if (params == "Payment") {
      a = +a[5].substring(1, a.length);
      b = +b[5].substring(1, b.length);
    }
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    }
  }
  rowsElement(arr, tBody, currPage, perPage);
}
function searchList() {
  let inputEl = document.getElementById("search").value;
  pBody.style.display = "none";
  console.log(inputEl);
  let newArr = arr.filter(item => {
    if (
      item[1].toLowerCase().includes(inputEl) ||
      item[2].toLowerCase().includes(inputEl) ||
      item[3].toLowerCase().includes(inputEl)
    ) {
      return true;
    }
    return false;
  });
  rowsElement(newArr, tBody, currPage, perPage);
  if (inputEl === "") {
    pBody.style.display = "block";
  }
}
rowsElement(arr, tBody, currPage, perPage);
pagination(arr, pBody, perPage);
