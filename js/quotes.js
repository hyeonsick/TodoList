const quotes =[
    {
        quote:"삶이 있는 한 희망은 있다",
        author:"키케로",
    },
    {
        quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:"사무엘존슨",
    },
    {
        quote:"언제나 현재에 집중할수 있다면 행복할것이다",
        author:"파울로 코엘료",
    },
    {
        quote:"피할수 없으면 즐겨라",
        author:"로버트 엘리엇",
    },
    {
        quote:"절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author:"L.론허바드",
    },
    {
        quote:"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다 ",
        author:"제임스 오펜하임",
    },
    {
        quote:"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author:"앙드레 말로",
    },
    {
        quote:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
        author:"톰 모나건",
    },
    {
        quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author:"괴테",
    },
    {
        quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다",
        author:"이소룡",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuquotes =quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuquotes.quote;
author.innerText = todaysQuquotes.author;