/*var productName, preImage, nextImage, commentInput, totalSum, images, preNum, nextNum, nextAmount, basketLists, amounts, prAmount;*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
/*
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function countSum() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  totalSum = basketLists.reduce((a,b) => a+b, 0);
}


productName = ['Keyboard', 'Headset', 'Moon desk lamp', 'Roberts Radio', 'Squish Ball'];
images = ['https://www.thegiftandgadgetstore.com/wp-content/uploads/2022/02/5038728149799-300x300.jpg', 'https://www.thegiftandgadgetstore.com/wp-content/uploads/2020/07/5038301308520-300x300.jpg', 'https://www.thegiftandgadgetstore.com/wp-content/uploads/2019/11/5056004322490-300x300.jpg', 'https://www.thegiftandgadgetstore.com/wp-content/uploads/2019/10/5056327900573-300x300.jpg', 'https://www.thegiftandgadgetstore.com/wp-content/uploads/2019/10/5056327900597-N-300x300.jpg'];
amounts = [20, 25, 22, 50, 10];
basketLists = [];
let element_image_part = document.getElementById('image_part');
let new_img = document.createElement('img');
new_img.setAttribute("src", 'https://www.thegiftandgadgetstore.com/wp-content/uploads/2021/08/Home-page-main-nav-September-2021_08.jpg');

element_image_part.appendChild(new_img);


document.getElementById('previous').addEventListener('click', (event) => {
  preImage = images.shift();
  preNum = productName.pop();
  prAmount = amounts.pop();
  let element_image_part2 = document.getElementById('image_part');
  element_image_part2.replaceChildren();
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", preImage);
  images.push(preImage);

  element_image_part2.appendChild(new_img2);
  let element_pr_name = document.getElementById('pr_name');
  element_pr_name.innerText = preNum;
  productName.unshift(preNum);
  let element_pr_price = document.getElementById('pr_price');
  element_pr_price.innerText = prAmount;
  amounts.unshift(prAmount);

});

document.getElementById('next').addEventListener('click', (event) => {
  nextImage = images.pop();
  nextNum = productName.shift();
  nextAmount = amounts.shift();
  let element_image_part3 = document.getElementById('image_part');
  element_image_part3.replaceChildren();
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", nextImage);
  images.unshift(nextImage);

  element_image_part3.appendChild(new_img3);
  let element_pr_name2 = document.getElementById('pr_name');
  element_pr_name2.innerText = nextNum;
  productName.push(nextNum);
  let element_pr_price2 = document.getElementById('pr_price');
  element_pr_price2.innerText = nextAmount;
  amounts.push(nextAmount);

});

document.getElementById('buy').addEventListener('click', (event) => {
  let element_pr_price3 = document.getElementById('pr_price');
  basketLists.unshift(nextAmount);
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = basketLists[0];

  element_list.appendChild(new_li);
  let element_sum = document.getElementById('sum');
  element_sum.innerText = basketLists.reduce((a,b) => a+b, 0);

});

document.getElementById('submit').addEventListener('click', (event) => {
  commentInput = getNumberOrString(document.getElementById('text_area').value);
  let element_list2 = document.getElementById('list2');
  if (commentInput == '') {
    element_list2.innerText = '';
  } else {
    let new_li2 = document.createElement('li');
    new_li2.innerText = commentInput;

    element_list2.appendChild(new_li2);
  }

});

document.getElementById('payment').addEventListener('click', (event) => {
  let element_paymentdetail = document.getElementById('paymentdetail');
  let new_div = document.createElement('div');
  let new_span = document.createElement('span');
  new_span.innerText = 'Please insert Card Number :';
  let new_input = document.createElement('input');

  new_span.appendChild(new_input);

  new_div.appendChild(new_span);

  element_paymentdetail.appendChild(new_div);
  let new_div2 = document.createElement('div');
  let new_span2 = document.createElement('span');
  new_span2.innerText = 'Please insert Expire Date :';
  let new_input2 = document.createElement('input');

  new_span2.appendChild(new_input2);

  new_div2.appendChild(new_span2);

  element_paymentdetail.appendChild(new_div2);
  let new_div3 = document.createElement('div');
  let new_button = document.createElement('button');
  new_button.innerText = 'Pay';

  new_button.addEventListener('click', (event) => {
    let element_info = document.getElementById('info');
    element_info.innerText = 'Your Payment is Successful!';

  });
  new_div3.appendChild(new_button);

  element_paymentdetail.appendChild(new_div3);

});*/