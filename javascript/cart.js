window.onscroll = function() {
    var header = document.getElementById('main-header');
    var btnvoltar = document.getElementById('iniciobtn');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.top = '0'; // posição do cabeçalho quando rolar para baixo
        btnvoltar.style.display = 'block';
        
    } else {
        header.style.top = '37px'; // posição do cabeçalho quando no topo da página
        btnvoltar.style.display = 'none';
    }


};

function voltaraoinicio(){
    var scrollPosition = window.scrollY;
    scrollPosition = '0';
    
    

}

var passos = document.getElementById('steps');
function clickSteps(){
    if(passos.style.display == 'block') {
    passos.style.display = 'none'
    
    }else{
    passos.style.display = 'block'
    
    }

}

var menu = document.getElementById('container-menu-mediaqueries');
function mostrarmenu(){
    if(menu.style.display == 'block') {
    menu.style.display = 'none'
    
    }else{
    menu.style.display = 'block'
    
    }

}

function fecharmenu(){
    
    menu.style.display = 'none'

}
