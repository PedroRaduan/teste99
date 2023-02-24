console.log('oi');
function enviar(){
    if(document.getElementById('pri').value == ''| document.getElementById('sec').value == ''){
        document.getElementById('errado').innerHTML = 'Preencha os campos';
    }
    else{
        console.log('sim')
    window.location = 'pedido.html'; 
    }
      
}