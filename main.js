document.addEventListener('DOMContentLoaded', function() { 

    const form = document.getElementById("form-cadastro");
    const tabelaDeContatos = document.getElementById("tabela-contatos");

    form.addEventListener("submit", function(e) {  
        e.preventDefault();

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;  

    var newrow = tabelaDeContatos.insertRow();  
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    form.reset() 
    })
}) 