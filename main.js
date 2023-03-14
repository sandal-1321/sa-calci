let text= document.querySelector("#calcu");
  function display(num)
   {
       if(num=='AC')
           text.value = '';
       else if(num=='DEL')
             text.value=text.value.slice(0,-1);
        else 
       text.value += num;
    }
   function calculate(){
	text.value = eval(text.value);
   }

