// Write your code below:
function handleFormSubmit(event){
   event.preventDefault();
   const name = event.target.username.value;
   const email = event.target.email.value;
   const phone = event.target.phone.value;

   const obj = {
      name,
      email,
      phone
   };
   localStorage.setItem(obj.email, JSON.stringify(obj));

   // add user on screen and add delete button edit button
   const ul = document.querySelector('ul');
   const li = document.createElement('li'); 
   li.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phone;

   const delButton = document.createElement('input');
   delButton.type = 'button';
   delButton.value = 'Delete';
   delButton.onclick = () => {
      localStorage.removeItem(obj.email);
      ul.removeChild(li);
   }

   const editButton = document.createElement('input');
   editButton.type = 'button';
   editButton.value = 'Edit';
   editButton.onclick = () => {
      document.getElementById('username').value = obj.name;
      document.getElementById('email').value = obj.email;
      document.getElementById('phone').value = obj.phone;
      localStorage.removeItem(obj.email);
      ul.removeChild(li);
   }

   li.appendChild(delButton);
   li.appendChild(editButton);
   ul.appendChild(li);

   document.getElementById('username').value = '';
   document.getElementById('email').value = '';
   document.getElementById('phone').value = '';
}