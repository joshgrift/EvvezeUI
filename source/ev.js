class Ev {
  constructor(){
    this.current = null;
  }

  window(content, options){
   $('section.ev').remove();
    var html = "<section class='ev ev-window";
    if(options.color){
      html += " ev-" + options.color;
    }

    html += "'";

    html += "><div class='ev-w-content'>" + content + "</div></section>";

    $('body').append(html);

    if(options.size){
      $('section.ev-window').css('width',options.size[0]).css('height',options.size[1]);
    } else {
      $('section.ev-window').css('width',200).css('height',300);
    }
  }

  boom(){
    $('.ev-window').remove();
  }
}
