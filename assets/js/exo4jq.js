// Déclaration de ma fonction qui englobe tout
$(function () {
  //fonction qui va aggrandir le rectangle de 10 px au clic sur le bouton "aggrandir".
  $('#grow').click(function(){
    $('.rectangle').animate({height: '+=10px'});
    //Si le rectangle dépasse les 100 px, il revient a 10 px.
    var height = $('.rectangle').height();
    if(height >= 100){
      $('.rectangle').animate({height: '10px'});
    }
  });
  //Fonction qui met le rectangle en vert.
  $('#green').click(function(){
    $('.rectangle').css('background-color', 'green');
  });
  //Fonction qui remet la couleur d'origine au rectangle.
  $('#color').click(function(){
    $('.rectangle').css('background-color', '');
  });
  //Fonction qui va cacher le rectangle.
  $('#hide').click(function(){
    $('.rectangle').hide();
  });
  //Fonction qui va afficher le rectangle.
  $('#show').click(function(){
    $('.rectangle').show();
  });
});
