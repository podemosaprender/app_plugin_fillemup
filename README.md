# Fill'em up

> A chrome / firefox plugin to fill forms from copied json or urls

__ASK: plugin@mauriciocap.com__

## Motivation

Dan needs Florence, Frank and Fred to _fill_ a given form online. __The problem is__ somebody designed a boring form requiring a lot of irrelevant information. So Dan ask them to install this plugin, sends them the JSON text by email or a URL to download it, and they only have to paste it to have it done.

Dan can even generate JSON automatically for different users, etc.

The users get the data, fill and post the form with their own credentials (__WARNING__ don't use it with payment methods, your bank, etc.)

## USAGE, as a user, to fill a form 

1. Right click on an input or select (drop down) element
2. Select "Fill'em up" from the context menu
3. A window appears
3. Paste either JSON text or a URL returning JSON text in the text area
4. Press the "Fill'em up" button
5. The window closes and the data would be in the form

__WARNING: USE AT YOUR OWN RISK__ We made every effort to make it safe, e.g. only input (not hidden) and select elements can be changed (not buttons, etc.) and you have to submit the form manually so you can check. You can also review the plugin code.

## USAGE, as the data provider, to extract the data to share

1. Fill the form as much as you can
2. Right click on an input or select (drop down) element
3. Select "Fill'em up" from the context menu
4. A window appears
4. Press the "Extract" button
5. The JSON with the form data and selectors appears

You can edit this JSON as needed, serve it from a URL, etc. (e.g. Google Spreadsheets, github, your API, etc.)

You can also specify an XPATH for the containing element like in the example using the key ```__feu_id__``` for the XPATH expression. e.g. to select the third form element use

```
 "__feu_id__": "(//form)[3]"
```

## Install

1. Download or clone the files in this repository.
2. In your chrome address bar write ```chrome:extensions```.
3. Enable the "Developer Mode" in the top right corner of the screen.
4. Click the "Load Unpacked" button
5. Find the directory where you downloaded this code
6. A new _card_ will show up, and you'll see the "gas pump" icon to the right in your address bar

## Next steps

* Complete the code to paste a JSON with data to fetch from a url using headers, credentials, encryption
 (almost ready).
* Add encryption so the data provider can post the data in a public URL (e.g. gitpages or a git repo) but __encrypted__ and send a JSON message with the key and url to the users.
* Add parsing of tables, csv, etc.
* Make it firefox compatible so it works on mobile too.

## Contributing

Altough this code is mostly a tutorial / concept to show beginners and non javascript programmers the convinience of javascript, it may in the future evolve into a commercial application, thus feel free to use it for educational purposes but not commercial applications (of course we can talk about this).

The files:

* background.js : installs the context menu, waits for a fill or extract message from the UI, runs js to extract or fill the form in the page.
* fillEmUp.html : the UI form
* fillEmUp.js : the UI code, process input and fetches the data from the url, parses the text 
* manifest.json : permisions are the most important thing here

__ASK: plugin@mauriciocap.com__
