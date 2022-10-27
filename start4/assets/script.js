/*------MENU------*/

function toggleMenu(){
    document.getElementById('lista').classList.toggle('mostra');
};

document.querySelector('.btn').addEventListener('mouseover', () => {
    document.querySelector('.btn').classList.toggle('button');
});

document.querySelector('.btn').addEventListener('mouseout', () => {
    document.querySelector('.btn').classList.toggle('button');
});

let voce = document.querySelectorAll('a');

for (var i = 0; i < voce.length; i++) {
  voce[i].addEventListener('mouseover', function () {
    this.classList.toggle('hover');
  });
  voce[i].addEventListener('mouseout', function () {
    this.classList.toggle('hover');
  });
};

/*------INTERATTIVA------*/

document.getElementById('grande').addEventListener('click', function(){
    document.getElementById('pagina').style.fontSize = '60px'
});

document.getElementById('maiuscolo').addEventListener('click', function(){
    document.getElementById('pagina').style.textTransform = 'uppercase'
});

document.getElementById('nascondi').addEventListener('click', function(){
    document.getElementById('pagina').style.visibility = 'hidden'
});

document.getElementById('mostra').addEventListener('click', function(){
    document.getElementById('pagina').style.visibility = 'visible'
});

document.getElementById('colora').addEventListener('click', function(){
    document.getElementById('pagina').style.color = 'lightgreen'
});

/*------LISTA------*/

let item = document.querySelectorAll('li');

for (var i = 0; i < item.length; i++) {

  item[i].addEventListener('mouseover', function () {
    this.classList.add('cambio');
  });

  item[i].addEventListener('mouseout', function () {
    this.classList.remove('cambio');
  });
  
  item[i].addEventListener('click', function () {
    this.classList.toggle('ok');
  });

};
