# How to run
1. if you haven't installed Node.js, go do it - there's lots of guidance, just follow basic installation.
1. ensure your node is running with `node --version` in console
1. ensure your npm is running with `npm --v` in console
1. clone this repo to the following area `C:/Source/Express`
1. open your command prompt of choice
1. run this command `cd C:/Source/Express`
1. run this command `npm init -y`
1. run this command `npm i express`
1. run this command `npm i express cors`
1. run this command `node server.js`
# Now it's running what do I do?
1. Go to https://homebrewery.naturalcrit.com/
1. Click create your own
1. In the text editor on the left, add the following code:
``` <style>
      @font-face { 
font-family: 'sprun';
crossorigin: 'anonymous';
src: url('http://localhost:3000/{{FONT YOU WANT TO USE}}.ttf');
format('ttf')
} </style>

<style> 
* {
font-family: 'sprun' !important;}
</style>```
1. adjust {{FONT YOU WANT TO USE}} to be the name of the file saved in public (such as sprun for spirit runes, or ancient for ancient)
# What is this?
This is an express server allowing you to host custom fonts for accessing on an external website
# What site is it intended for?
Homebrewery.naturalcrit.com - check it out! They made an amazing CSS editor which really makes your content flavourful
# Why build this?
In the LARP system Labyrinthe people make scrolls and these need physical representations. So I'm hijacking a tool I use for making things look fantasy-esque and applying the Labyrinthe custom fonts to it.
