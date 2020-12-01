// your code goes in here
    let quotes = [
        {
            quote:"Life isn't about finding yourself, it is about creating yourself.",
            author:"- eorge Bernard Shaw"
        },

        {
            quote:"If you are going down the right path and you are willing to keep walking, eventually you'll make progress.",
            author:"- Barrack Obama"
        },

        {
            quote:"I have far more respect for the person with a single idea who gets there than one with a thousand ideas and does nothing.",
            author:"- Thomas Edison"
        },

        {
            quote:"What is necessary to change a person is to change awareness of himself.",
            author:"- Anonymous"
        },

        {
            quote:"Many people die at the age of 25, but their bodies are not buried until 75.",
            author:"- Benjamin Franklin"
        },

        {
            quote:"If you don't get up every morning with a burning desire to do things, you don't have enough goals.",
            author:"- Lou Holtz"
        }
    ];
    
    function newRandomQuote(){
    let randomQuotes = Math.floor(Math.random()*quotes.length);
    let newQuote = quotes[randomQuotes].quote;
    let newAuthor = quotes[randomQuotes].author;

    document.getElementById('quote').innerHTML = newQuote;
    document.getElementById('author').innerHTML = newAuthor;

    }
    newRandomQuote();

    let buttonClick = document.querySelector('button');
    buttonClick.addEventListener('click', newRandomQuote);
