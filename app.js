let j = document.getElementsByClassName('blue')[0];
let j1 = document.getElementsByClassName('blue')[1];
let j2 = document.getElementsByClassName('blue')[2];
let j3 = document.getElementsByClassName('blue')[3];
let j4 = document.getElementsByClassName('blue')[4];
let j5 = document.getElementsByClassName('blue')[5];
let j6 = document.getElementsByClassName('blue')[6];
let j7 = document.getElementsByClassName('blue')[7];
let j8 = document.getElementsByClassName('blue')[8];


let grid = document.getElementById("grid");
let hide = document.getElementById("hide");
let header = document.getElementById("grid-header");
let para = Array.of(document.getElementsByClassName("para-hide"))[0];
let blue1 = document.querySelectorAll('.apply');

// console.log(blue1)
j.addEventListener("click", function () {
    document.getElementsByClassName("h")[0].classList.add("grid1");
    grid.classList.add("grid2")
    hide.style.display = "block"
    hide.style.width = "100%"
    header.style.display = "none";
    let g = j.parentElement.parentElement;
    let string = g.getElementsByTagName('h2')[0].innerHTML
    let img = g.getElementsByTagName('img')[0].src
    hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
    hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
    for (let i = 0; i < para.length; i++) {
        para[i].classList.add("g");      
    }
    for (let i = 0; i < blue1.length; i++) {
        let j1=blue1[i].getElementsByTagName('A');
        for (let index = 0; index < j1.length; index++) {
            j1[index].style.padding="0.6rem 1rem";
        }
    }
});

j1.addEventListener("click", function () {
    document.getElementsByClassName("h")[0].classList.add("grid1");
    grid.classList.add("grid2")
    hide.style.display = "block"
    hide.style.width = "100%"
    header.style.display = "none";
    let g = j1.parentElement.parentElement;
    let string = g.getElementsByTagName('h2')[0].innerHTML
    let img = g.getElementsByTagName('img')[0].src
    hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
    hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
    for (let i = 0; i < para.length; i++) {
        para[i].classList.add("g");      
    }
    for (let i = 0; i < blue1.length; i++) {
        let l2=blue1[i].getElementsByTagName('A');
        for (let index = 0; index < j1.length; index++) {
            l2[index].style.padding="0.6rem 1rem";
        }
    }

});
j2.addEventListener("click", function () {
    document.getElementsByClassName("h")[0].classList.add("grid1");
    grid.classList.add("grid2") 
    hide.style.display = "block"
    hide.style.width = "100%"
    header.style.display = "none";  
    let g = j2.parentElement.parentElement;
    let string = g.getElementsByTagName('h2')[0].innerHTML
    let img = g.getElementsByTagName('img')[0].src
    hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
    hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
    for (let i = 0; i < para.length; i++) {
        para[i].classList.add("g");      
    }
    for (let i = 0; i < blue1.length; i++) {
        let j1=blue1[i].getElementsByTagName('A');
        for (let index = 0; index < j1.length; index++) {
            j1[index].style.padding="0.6rem 1rem";
        }
    }
});
j3.addEventListener("click", function () { 
    document.getElementsByClassName("h")[0].classList.add("grid1");
    grid.classList.add("grid2")
    hide.style.display = "block"
    hide.style.width = "100%"
    let g = j3.parentElement.parentElement;
    let string = g.getElementsByTagName('h2')[0].innerHTML
    let img = g.getElementsByTagName('img')[0].src
    hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
    hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
    header.style.display = "none";
    for (let i = 0; i < para.length; i++) {
        para[i].classList.add("g");      
    }
    for (let i = 0; i < blue1.length; i++) {
        let j1=blue1[i].getElementsByTagName('A');
        for (let index = 0; index < j1.length; index++) {
            j1[index].style.padding="0.6rem 1rem";
        }
    }
 });
j4.addEventListener("click", function () {
     document.getElementsByClassName('h')[0].classList.add('grid1');
     grid.classList.add("grid2")
     hide.style.display = "block"
    hide.style.width = "100%"
    let g = j4.parentElement.parentElement;
    let string = g.getElementsByTagName('h2')[0].innerHTML
    let img = g.getElementsByTagName('img')[0].src
    hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
    hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
     header.style.display = "none";
     for (let i = 0; i < para.length; i++) {
        para[i].classList.add("g");      
    }
    for (let i = 0; i < blue1.length; i++) {
        let j1=blue1[i].getElementsByTagName('A');
        for (let index = 0; index < j1.length; index++) {
            j1[index].style.padding="0.6rem 1rem";
        }
    }
 });
j5.addEventListener("click", function () { 
    document.getElementsByClassName('h')[0].classList.add('grid1');
    grid.classList.add("grid2")
     hide.style.display = "block"
    hide.style.width = "100%"
    let g = j5.parentElement.parentElement;
    let string = g.getElementsByTagName('h2')[0].innerHTML
    let img = g.getElementsByTagName('img')[0].src
    hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
    hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
     header.style.display = "none";
     for (let i = 0; i < para.length; i++) {
        para[i].classList.add("g");      
    }
    for (let i = 0; i < blue1.length; i++) {
        let j1=blue1[i].getElementsByTagName('A');
        for (let index = 0; index < j1.length; index++) {
            j1[index].style.padding="0.6rem 1rem";
        }
    }
 });
j6.addEventListener("click", function () { 
    document.getElementsByClassName('h')[0].classList.add('grid1');
    grid.classList.add("grid2")
    hide.style.display = "block"
   hide.style.width = "100%"
   let g = j6.parentElement.parentElement;
   let string = g.getElementsByTagName('h2')[0].innerHTML
   let img = g.getElementsByTagName('img')[0].src
   hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
   hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
    header.style.display = "none";
    for (let i = 0; i < para.length; i++) {
       para[i].classList.add("g");      
   }
   for (let i = 0; i < blue1.length; i++) {
       let j1=blue1[i].getElementsByTagName('A');
       for (let index = 0; index < j1.length; index++) {
           j1[index].style.padding="0.6rem 1rem";
       }
   }
});
j7.addEventListener("click", function () { 
    document.getElementsByClassName('h')[0].classList.add('grid1');
    grid.classList.add("grid2")
    hide.style.display = "block"
   hide.style.width = "100%"
   let g = j7.parentElement.parentElement;
   let string = g.getElementsByTagName('h2')[0].innerHTML
   let img = g.getElementsByTagName('img')[0].src
   hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
   hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
    header.style.display = "none";
    for (let i = 0; i < para.length; i++) {
       para[i].classList.add("g");      
   }
   for (let i = 0; i < blue1.length; i++) {
       let j1=blue1[i].getElementsByTagName('A');
       for (let index = 0; index < j1.length; index++) {
           j1[index].style.padding="0.6rem 1rem";
       }
   }
});
j8.addEventListener("click", function () { 
    document.getElementsByClassName('h')[0].classList.add('grid1');
    grid.classList.add("grid2")
    hide.style.display = "block"
   hide.style.width = "100%"
   let g = j8.parentElement.parentElement;
   let string = g.getElementsByTagName('h2')[0].innerHTML
   let img = g.getElementsByTagName('img')[0].src
   hide.getElementsByTagName('div')[2].getElementsByTagName('h1')[0].innerText=string
   hide.getElementsByTagName('div')[0].getElementsByTagName('img')[1].src=img;
    header.style.display = "none";
    for (let i = 0; i < para.length; i++) {
       para[i].classList.add("g");      
   }
   for (let i = 0; i < blue1.length; i++) {
       let j1=blue1[i].getElementsByTagName('A');
       for (let index = 0; index < j1.length; index++) {
           j1[index].style.padding="0.6rem 1rem";
       }
   }
});
let checkboxElems = Array.of(document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('input'))[0];

checkboxElems[0].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[0].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[0].style.boxShadow="none"
}
});
checkboxElems[1].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[1].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[1].style.boxShadow="none"
}
});
checkboxElems[2].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[2].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[2].style.boxShadow="none"
}
});
checkboxElems[3].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[3].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[3].style.boxShadow="none"
}
});
checkboxElems[4].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[4].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[4].style.boxShadow="none"
}
});
checkboxElems[5].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[5].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[0].querySelectorAll('ul')[0].querySelectorAll('span')[5].style.boxShadow="none"
}
});


var checkboxElems1 = Array.of(document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('input'))[0];

checkboxElems1[0].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[0].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[0].style.boxShadow="none"
}
});
checkboxElems1[1].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[1].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[1].style.boxShadow="none"
}
});
checkboxElems1[2].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[2].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[2].style.boxShadow="none"
}
});
checkboxElems1[3].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[3].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[3].style.boxShadow="none"
}
});
checkboxElems1[4].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[4].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[4].style.boxShadow="none"
}
});
checkboxElems1[5].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[5].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[1].querySelectorAll('ul')[0].querySelectorAll('span')[5].style.boxShadow="none"
}
});


var checkboxElems2 = Array.of(document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('input'))[0];

checkboxElems2[0].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[0].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[0].style.boxShadow="none"
}
});
checkboxElems2[1].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[1].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[1].style.boxShadow="none"
}
});
checkboxElems2[2].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[2].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[2].style.boxShadow="none"
}
});
checkboxElems2[3].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[3].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[3].style.boxShadow="none"
}
});
checkboxElems2[4].addEventListener("change", function displayCheck() {
if (this.checked) {
document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[4].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[4].style.boxShadow="none"
}
});
checkboxElems2[5].addEventListener("change", function displayCheck() {
if (this.checked) {
    document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[5].style.boxShadow="blue 1px 1px 11px 3px";
} 
else {
    document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[5].style.boxShadow="none"
}
});
checkboxElems2[6].addEventListener("change", function displayCheck() {
    if (this.checked) {
        document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[6].style.boxShadow="blue 1px 1px 11px 3px";
    } 
    else {
        document.getElementsByClassName("main-ch1")[2].querySelectorAll('ul')[0].querySelectorAll('span')[6].style.boxShadow="none"
    }
    });