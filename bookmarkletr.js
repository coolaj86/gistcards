$(function () {
  "use strict";

  $.ajax(
    './gistcards.js'
  , {
      dataType: 'html'
    , success: function (text) {
        console.log(text);
        $('a').attr('href', ['java', 'script:'].join() + encodeURI(text));
      }
    }
  );
});
