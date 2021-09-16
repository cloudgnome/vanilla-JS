# vanilla-JS
Simple library extends base JS classes: Array, Element, String, HTMLFormElement etc.

function $ - easy access to any DOM element/s by call it $("selector_string")

$('#id_name').on('event_type',(event) => {});

$('#id_name').text(); - return innerText

$('.classname').text('added text'); - add text inside elements

$('.classname').active(); - make class "active" or delete if exists.

$('.classname').toggle('type'); - toggle display:block or display:'type'
