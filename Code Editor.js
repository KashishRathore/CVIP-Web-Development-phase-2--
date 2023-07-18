let htmltext = document.querySelector('.html_box textarea');
let csstext = document.querySelector('.css_box textarea');
let jstext = document.querySelector('.js_box textarea');
let result =document.querySelector('#result');

function run() {

    localStorage.setItem('htmltext',htmltext.value)
    localStorage.setItem('csstext',csstext.value)
    localStorage.setItem('jstext',jstext.value)

    result.contentDocument.body.innerHTML = `${htmltext.value} <style> ${csstext.value} </style>`;
    result.contentWindow.eval(localStorage.jstext);

    
}


htmltext.value = localStorage.htmltext
csstext.value = localStorage.csstext
jstext.value = localStorage.jstext
