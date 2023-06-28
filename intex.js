
let link1 = document.getElementById('view');
link1.style.display = 'none';
let customer = document.getElementById('customer');
customer.style.display = 'none';
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
            
          link1.style.display = 'block';
          link1.classList.add('next2');
        
                                     
          
         
        }, false)
      })
  })()

  let Name = document.getElementsByTagName('input')[0];
  let Email = document.getElementsByTagName('input')[1];
  let Message = document.getElementsByTagName('textarea')[0];

  link1.addEventListener('click',function(){
    customer.style.display = 'block';

    const title =  document.getElementsByClassName('name')[0];
    title.textContent = "your name:" + Name.value; 
    const mail =  document.getElementsByClassName('email')[0];
    mail.textContent = "your email:" + Email.value; 
    const msg =  document.getElementsByClassName('message')[0];
    msg.textContent = "your message:" + Message.value; 
    // posting values to c
   
  })

  //get user inputs

 
 


  