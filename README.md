Purpose
===

Turn gists into flash cards.

Usage
===

Go to the demo site <http://coolaj86.github.com/gistcards> and drag the bookmarklet into your bookmarks bar.

Then go to a gist that is in the format given below and click the bookmarklet.

Alternatively, you can copy and paste the script here into the JavaScript console.

Format
===

Any gist that is written in the following format can be used with this javascript.

```markdown
Pop-Quiz (this is a title)
===

Monty Python & the Holy Grail (this is a category)
---

### What is your favorite color? (this is a question)

Blue... no, YELLOOOOOOOW! (a simple answer)

### What is the average airspeed velocity of an unladen swallow? (also a question)

11 m/s

Source: <http://style.org/unladenswallow/>

Sinatra
---

### How would a create a route that responds to a form post? (this is a question)

```ruby
post('/find_friends') do
  # do something with `params`
end
```
```
