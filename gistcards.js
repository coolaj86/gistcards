(function () {
  "use strict";

  /* this code is terribad, please don't try to learn from it
   * I do plan to clean it up, but it's very dirty right now
   */
  var cards
    , flashes = []
    ;
    
  function shuffle(array) {
    var m = array.length, t, i;
   
    /* While there remain elements to shuffle… */
    while (m) {
   
      /* Pick a remaining element… */
      i = Math.floor(Math.random() * m--);
   
      /* And swap it with the current element. */
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
   
    return array;
  }
   
  function getNodes(child) {
    var i
      , siblings = []
      , sibling = child.nextSibling
      ;
   
    $(child).hide();
    
    for (i = 0; i < 30; i += 1) {
      if (null === sibling || 'h3' === sibling.nodeName.toLowerCase()) {
        break;
      }
      /* ignore categories for now */
      if ('h2' === sibling.nodeName.toLowerCase()) {
        sibling = sibling.nextSibling;
        continue;
      }
      $(sibling).hide();
      siblings.push(sibling);
      sibling = sibling.nextSibling;
    }
    return siblings;
  }
   
  /* hide categories */
  $($('.context-loader-container')[0]).find('h2').hide();
  cards = $($('.context-loader-container')[0]).find('h3');
  cards = [].slice.call(cards);
   
  cards.forEach(function (card) {
    flashes.push({
      q: card
    , a: getNodes(card)
    });
  });
   
  function runCardApp() {
    var flash = flashes.sort(shuffle).pop()
      , ans = []
      ;
     
    function showCard() {
      flash = flashes.pop();
      ans = flash.a.slice(0);
      $(flash.q).show();
    }
    function showCardPart() {
      var a
        ;
        
      if (ans.length) {
        a = ans.shift();
        while (a && /^\s*$/.test($(a).text())) {
          a = ans.shift();
        }
        $(a).show();
        return;
      }
      $(flash.q).hide();
      $(flash.a).hide();
      
      showCard();
    }
     
    showCard();
    $($('.context-loader-container')[0]).on('click', function () {
      showCardPart();
    });
  }
  runCardApp();

  console.log("We're straight. You can close the JavaScript console now.");
}());
