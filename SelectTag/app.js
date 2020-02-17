function public_Labels(label1, label2, label3, label4, label5){
  t1.innerText = label1;
  t2.innerText = label2;
  t3.innerText = label3;
  t4.innerText = label4;
  t5.innerText = label5;
}

function public_Texts(){
  t1Texts.innerHTML = Texts1;
  t2Texts.innerHTML = Texts2;
  t3Texts.innerHTML = Texts3;
  t4Texts.innerHTML = Texts4;
  t5Texts.innerHTML = Texts5;
  init();
}

function init(){
  tabTexts.innerHTML = t1Texts.innerHTML;
}

let nowTab;
let myTab;
let mark = true;

function alterTab(){
  if (mark == true){
    nowTab = t1;
    myTab = t1base;
    mark = false;
  }
  if (window.event.srcElement.className == 'tab'){
    nowTab.className= "tab";
    myTab.style.backgroundColor = "white";
    nowTab = window.event.srcElement;
    myTabID = nowTab.id + "base";
    tabContentID = nowTab.id + "Texts";
    myTab = document.all(myTabID);
    tabContent = document.all(tabContentID);
    nowTab.className = "selTab";
    myTab.style.backgroundColor = "";
    tabTexts.innerHTML = tabContent.innerHTML;
  }
}