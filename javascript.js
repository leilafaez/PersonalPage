var commentInput;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}
document.getElementById('submit-btn').addEventListener('click', (event) => {
    commentInput = getNumberOrString(document.getElementById('comment-area').value);
    let element_list2 = document.getElementById('list2');
   
      if(document.getElementById("comment-area").value==null|| document.getElementById("comment-area").value==""){
        alert("blank text area")
        } else {
      let new_li2 = document.createElement('li');
      new_li2.innerText = commentInput;
  
      element_list2.appendChild(new_li2);
}
  
  });