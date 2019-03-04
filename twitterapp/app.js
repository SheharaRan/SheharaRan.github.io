console.log("The Bot is starting!")

var Twit = require('twit')

var config = require('./config.js')

var T = new Twit(config);

//T.get('search/tweets', { q: 'Khloe Kardashian since:2011-07-11', count: 10}, function(err, data, response) {
//  console.log(data.statuses[3])
//    
//    for(var i = 0; i < data.statuses.length; i++){
//       console.log(data.statuses[i].text)
//    }
//    
//})
//
//T.post('statuses/update', { status: 'Whats up world!' }, function(err, data, response) {
//  console.log(data)
//})

//write a function that includes an array of tweets
//randomly select a tweet from the array and post on an interval
//could include a callback function to verify if the tweet if the tweet posted


setInterval(tweets, 20000);

function tweets(){
    var Songs = ["7 Rings - Ariana Grande", "Without Me - Halsey","Sunflower - Post Malone", "Thank U, Next - Ariana Grande", "Please Me - Cardi B & Bruno Mars", "Happier - Marshmello & Bastille", "Sicko Mode - Travis Scott", "Break Up With Your Girlfriend, I'm Bored - Ariana Grande", "High Hopes - Panic! At The Disco", "Wow. - Post Malone", "Middle Child - J. Cole", "Eastside - Benny Blanco, Halsey, & Khalid", "Thotiana - blueface", "Murder On My Mind - YNW Melly", "Going Bad - Meek Mill ft Drake", "Money - Cardi B", "A Lot - 21 Savage", "Drop Too Hard - Lil Baby & Gunna", "Girls Like You - Maroon 5 ft Cardi B", "Better - Khalid", "Shallow - Lady Gaga & Bradley Cooper", "ZEZE - Kodak Black ft Travis Scott", "Beautiful Crazy - Luke Combs", "MIA - Bad Bunny ft Drake", "Dancing With A Stranger - Sam Smith & Normani", "Youngblood - 5SOS", "Robbery - Juice WRLD", "Better Now - Post Malone", "Sweet But Psycho - Ava Max", "Be Alright - Dean Lewis", "Tequila - Dan & Shay", "Bury A Friend - Billie Eilish", "I Like It - Cardi B, Bad Bunny, & J Balvin", "You Say - Lauren Daigle", "Leave Me Alone - Flipp Dinero", "Wake Up In The Sky - Gucci Mane, Bruno Mars, & Kodak Black", "Close to Me - Ellie Goulding & Diplo ft Swae Lee", "Baby Shark - Pinkfong", "Look Back At It - A Boogie Wit da Hoodie", "Mo Bamba - Sheck Wes", "Lucid Dreams - Juice WRLD", "Envy Me - Calboy", "Swervin - A Boogie Wit da Hoodie ft 6ix9ine", "Taki Taki - DJ Snake ft Selena Gomez", "This Is It - Scotty McCreery", "NASA - Ariana Grande", "Backin' It Up - Pardison Fontaine ft Cardi B", "Needy - Ariana Grande", "Red Room - Offset", "Talk - Khalid", "Girl Like You - Jason Aldean", "Twerk - City Girls ft Cardi B", "Bloodline - Ariana Grande", "What Makes You Country - Luke Bryan", "Bad Idea - Ariana Grande", "Pure Water - Mustard & Migos", "Fake Smile - Ariana Grande", "Imagine - Ariana Grande", "Take It From Me - Jordan Davis", "Mixed Personalities - YNW Melly ft Kanye West", "Lost In The Fire - Gesaffelstein & The Weeknd", "Ghostin - Ariana Grande", "Nothing Breaks Like A Heart - Mark Ronson ft Miley Cyrus", "This Feeling - The Chainsmokers ft Kelsea Ballerini", "Undecided - Chris Brown", "Millionaire - Chris Stapleton", "Here Tonight - Brett Young", "Calling My Spirit - Kodak Black", "Sixteen - Thomas Rhett", "Love Someone - Lukas Graham", "Armed And Dangerous - Juice WRLD", "Nights Like This - Kehlani ft Ty Dolla $ign", "Close Friends - Lil Baby", "In My Head - Ariana Grande", "Put A Date On It - Yo Gotti Featuring Lil Baby", "Pure Cocaine - Lil Baby", "Down To The Honkytonk - Jake Owen", "Ella Quiere Beber - Anuel AA & Romeo Santos", "Lovely - Billie Eilish & Khalid", "Talk You Out Of It - Florida Georgia Line", "Miss Me More - Kelsea Ballerini", "Body - Loud Luxury Featuring Brando", "Burn Out - Midland", "Eyes On You - Chase Rice", "Who Do You Love - The Chainsmokers ft 5SOS", "365 - Zedd & Katy Perry", "Worth It - YK Osiris", "When The Party's Over - Billie Eilish", "Yosemite - Travis Scott", "Shot Clock - Ella Mai", "There Was This Girl - Riley Green", "Con Calma - Daddy Yankee ft Snow", "On My Way To You - Cody Johnson", "Let Me Down Slowly - Alec Benjamin ft Alessia Cara", "Make Up - Ariana Grande", "Make It Sweet - Old Dominion", "Good Girl - Dustin Lynch", "Arms Around You - XXXTENTACION x Lil Pump ft Maluma & Swae Lee", "Startender - A Boogie Wit da Hoodie ft Offset & Tyga", "One That Got Away - Michael Ray"]; 
   var randomInd =Math.floor(Math.random()*Songs.length);
   var randomInd1 =Math.floor(Math.random()*Songs.length);
   var randomInd2 =Math.floor(Math.random()*Songs.length);
   var randomInd3 =Math.floor(Math.random()*Songs.length);
    
    if (randomInd1 == randomInd){
        randomInd1 =Math.floor(Math.random()*Songs.length);
    }else if (randomInd1 == randomInd2){
        randomInd1 =Math.floor(Math.random()*Songs.length);
    }else if (randomInd1 == randomInd3){
        randomInd1 =Math.floor(Math.random()*Songs.length);
    }else if (randomInd2 == randomInd3){
        randomInd1 =Math.floor(Math.random()*Songs.length);
    }else if (randomInd == randomInd2){
        randomInd1 =Math.floor(Math.random()*Songs.length);
    }else if (randomInd1 == randomInd3){
        randomInd1 =Math.floor(Math.random()*Songs.length);
    }
    
    T.post('statuses/update', { status: "Here's your playlist:\n" + Songs[randomInd] + "\n" + Songs[randomInd1] + "\n" +Songs[randomInd2] + "\n" + Songs[randomInd3] }, function(err, data, response) {
        console.log('posted!');
      })
}

