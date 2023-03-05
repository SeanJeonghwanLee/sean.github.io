const quotes = [
    {
        quote: " I find that the harder I work, the more luck I seem to have.",
        author: "Nelson Mandela"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    },
    {
        quote: "If you would be loved, love and be lovable.",
        author: "Benjamin Franklin"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
        author: "Rosa Parks"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosebelt"
    },
    {
        quote: "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
        author: "Jackie Robinson"
    },
    {
        quote: "Success is not final. Failure is not fatal. It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;
