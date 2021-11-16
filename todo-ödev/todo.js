let btnDOM=document.querySelector('#liveToastBtn')

let listLenghtDOM=document.getElementsByTagName('li')

let btnCloseDOM=document.querySelector('#close')
const alertDOM=document.querySelector('#alert')
const ALERT=(message,color) => ` <div class="alert alert-${color} alert-dismissible fade show" role="alert">
<strong>UYARI!</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`


btnDOM.addEventListener('click',formSubmit)

//çarpı butonu oluşması


for(let i=0;i<listLenghtDOM.length;i++)
{

    let closeBtn=document.createElement('span')
    closeBtn.classList.add("close")
    listLenghtDOM[i].append(closeBtn)
    closeBtn.textContent="\u00D7"
    closeBtn.ariaLabel="close"
    closeBtn.onclick= removeButton
   
    listLenghtDOM[i].onclick = check;

  


}







// listeye ekleme
function formSubmit()
{
  
  const todoDOM=document.querySelector('#task')
  if( todoDOM.value == " ")  
  {   
      showToast("Boş değer giremezsiniz ");
      todoDOM.value= ""
  }

  else if(!todoDOM.value) 
  {
    showToast("Boş değer giremezsiniz ");
    
  }
 else 
  {
 addTask(todoDOM.value)
 showToast("Başarılı bir şekilde eklendi ");
 }
}
//ekleme fonksiyonu
let todoListDOM =document.querySelector('#list')
function addTask(todo)
{
    let liDOM=document.createElement('li')
    liDOM.innerHTML= `${todo} 
    `
  
    
    
    todoListDOM.append(liDOM)
    showToast("Başarılı bir şekilde eklendi ");

    liDOM.onclick = check;
  
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    
    liDOM.append(closeButton);
    todoListDOM.append(liDOM);
    inputElement.value = ("");
  
}

// toast
function showToast(message) {
    let option = {
      animation: true,
      delay: 3000,
    };
    document.querySelector(".toast-body").innerHTML = message;
    const toast = document.querySelector("#liveToast");
    const toastElement = new bootstrap.Toast(toast, option);
    toastElement.show();
  }

 
  

  // silme fonksiyonu
  function removeButton(){
    this.parentElement.remove(); 
  }
  function check(){
    this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
  }
