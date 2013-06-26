Go Here
===

<http://coolaj86.github.com/gistcards>

Purpose
===

Turn gists into flash cards.

Usage
===

Drag 
<a href='javascript:function%20shuffle(e)%7Bvar%20t=e.length,n,r;while(t)%7Br=Math.floor(Math.random()*t--);n=e%5Bt%5D;e%5Bt%5D=e%5Br%5D;e%5Br%5D=n%7Dreturn%20e%7Dfunction%20getNodes(e)%7Bvar%20t,n=%5B%5D,r=e.nextSibling;$(e).hide();for(t=0;t%3C30;t+=1)%7Bif(null===r%7C%7C%22h3%22===r.nodeName.toLowerCase())%7Bbreak%7Dif(%22h2%22===r.nodeName.toLowerCase())%7Br=r.nextSibling;continue%7D$(r).hide();n.push(r);r=r.nextSibling%7Dreturn%20n%7Dfunction%20showCard()%7Bflash=flashes.pop();ans=flash.a.slice(0);$(flash.q).show()%7Dfunction%20showCardPart()%7Bvar%20e;if(ans.length)%7Be=ans.shift();while(e&&/%5Es*$/.test($(e).text()))%7Be=ans.shift()%7D$(e).show();return%7D$(flash.q).hide();$(flash.a).hide();showCard()%7Dvar%20cards,flashes=%5B%5D;$($(%22.context-loader-container%22)%5B0%5D).find(%22h2%22).hide();cards=$($(%22.context-loader-container%22)%5B0%5D).find(%22h3%22);cards=%5B%5D.slice.call(cards);cards.forEach(function(e)%7Bflashes.push(%7Bq:e,a:getNodes(e)%7D)%7D);console.log(flashes);var%20flash=flashes.sort(shuffle).pop(),ans=%5B%5D;showCard();$($(%22.context-loader-container%22)%5B0%5D).on(%22click%22,function()%7BshowCardPart()%7D)'>this bookmarklet</a>
to your bookmarks bar and then click on it.

Alternatively, you can copy and paste the script here into the JavaScript console on any gist that is in the correct format.

Format
===

Any gist that is written in the following format can be used with this javascript.

```markdown
Title: Pop-Quiz
===

Category: Monty Python & the Holy Grail
---

### Question: What is your favorite color?

Answer: Blue... no, YELLOOOOOOOW!

### Question: What is the average airspeed velocity of an unladen swallow?

11 m/s

Source: <http://style.org/unladenswallow/>
```
