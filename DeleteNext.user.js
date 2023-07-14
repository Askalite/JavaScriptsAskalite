// ==UserScript==
// @name DeleteNext
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Askalite
// @match https://ficbook.net/*
// @icon         https://ficbook.net/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function (){
        var targetWord = 'thanks';
        var alert1='не найдено';
        // Находим все ссылки на странице
        var links = document.getElementsByTagName('a');
        // Обработка ошибок
        var lsterr='';
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            try{
                if (link.href.indexOf(targetWord)>-1) {
                    alert1='hi';
                    link.remove();
                }
            }catch(err){
                lsterr=err.message+'| ';
            }
        }
        if(lsterr)alert(lsterr);
        //alert(alert1);
    }, 5);
})();
/*
The MIT License (MIT)

Copyright © «2023» «Askalite»

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
