$(document).ready( () => {
    getQuote();
    var curentQuote;
  function getQuote() {
        $.getJSON('https://assets.zackward.net/ron-swanson-quotes.json', parseFunc);
        function parseFunc(val) {
            let randomNum = Math.floor(Math.random() * val.quotes.length);
            curentQuote = val.quotes[randomNum];
            $('.monitor').text(val.quotes[randomNum]);
        }
    };

    $('.changeQ').click( () => getQuote() );
    $('.twittIt').click( () => window.open('https://twitter.com/intent/tweet?text=' + curentQuote ) );

});