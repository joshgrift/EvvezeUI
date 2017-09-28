class Ev {
  constructor(){
    this.current = null;
    this.offX = 0;
    this.offY = 0;
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

    if(options.draggable){
      $('.ev-w-content')[0].addEventListener('mousedown', ev.mouseDown, false);
      window.addEventListener('mouseup', ev.mouseUp, false);
    }

    if(options.interface){
      $('.ev-w-content').append('<span class="ev ev-red ev-w-interface" onclick="ev.boom()">+</span>')
    }

    if(options.padding){
      $('.ev-w-content').css('padding',options.padding);
    }

    if(options.size){
      $('.ev-w-content').css('width',options.size.width).css('height',options.size.height);
      $('.ev-w-content').css('top',(window.innerHeight - options.size.height)/2).css('left',(window.innerWidth - options.size.width)/2);
    } else {
      $('.ev-w-content').css('width',300).css('height',200);
    }
  }

  boom(){
    $('.ev-window').remove();
  }

  mouseUp(){
    window.removeEventListener('mousemove', ev.divMove, true);
  }

  mouseDown(e){
    var div = $('.ev-w-content')[0];
    ev.offY = e.clientY - parseInt(div.offsetTop);
    ev.offX = e.clientX - parseInt(div.offsetLeft);
    window.addEventListener('mousemove', ev.divMove, true);
  }

  divMove(e){
    var div = $('.ev-w-content')[0];
    div.style.position = 'absolute';
    div.style.top = (e.clientY - ev.offY) + 'px';
    div.style.left = (e.clientX - ev.offX) + 'px';
  }
}
