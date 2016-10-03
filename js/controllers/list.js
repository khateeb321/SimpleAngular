(function () {
    angular
        .module("peopleDetails")
        .controller("listCtrl", ListController);

    function ListController() {
        var vm = this;
        vm.data = peopleData;

        vm.activePerson = {};
        vm.changeActivePerson = changeActivePerson;
        vm.search = "";

        function changeActivePerson(index) {
            vm.activePerson = index;
        }
    }

    var peopleData = [
            {
                title: "Tom Cruise",
                image_url: "http://hairstyles.thehairstyler.com/hairstyle_views/front_view_images/2364/original/Tom-Cruise.jpg",
                location: "America",
                age: "54",
                description: "Thomas Cruise Mapother IV (born July 3, 1962), known professionally as Tom Cruise, is an American actor and producer. He has been nominated for three Academy Awards and has won three Golden Globe Awards. He started his career at age 19 in the film Endless Love (1981). After portraying supporting roles in Taps (1981) and The Outsiders (1983), his first leading role was in the romantic comedy Risky Business, released in August 1983. Cruise became a full-fledged movie star after starring as Pete Maverick Mitchell in the action drama Top Gun (1986). One of the biggest movie stars in Hollywood,[2][3] Cruise starred in several more successful films in the 1980s, including the dramas The Color of Money (1986), Cocktail (1988), Rain Man (1988), and Born on the Fourth of July (1989). In the 1990s, he starred in a number of hit films, including the romance Far and Away (1992), the drama A Few Good Men (1992), the legal thriller The Firm (1993), the romantic horror film Interview with the Vampire: The Vampire Chronicles (1994), the romantic comedy-drama sports film Jerry Maguire (1996), the erotic thriller Eyes Wide Shut, and the drama Magnolia (both 1999). Since 1996, Cruise has been well known for his role as secret agent Ethan Hunt in the Mission: Impossible film series, whose most recent film, Mission: Impossible – Rogue Nation, was released in 2015."
            },
            {
                title: "Brad Pitt",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brad_Pitt_Fury_2014.jpg",
                location: "America",
                age: "52",
                description: "William Bradley Brad Pitt (born December 18, 1963) is an American actor and producer. He has received multiple awards and nominations including an Academy Award as producer under his own company Plan B Entertainment. Pitt first gained recognition as a cowboy hitchhiker in the road movie Thelma & Louise (1991). His first leading roles in big-budget productions came with the dramas A River Runs Through It (1992) and Legends of the Fall (1994), and Interview with the Vampire (1994). He gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys (both 1995), the latter earning him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination. Pitt starred in the cult film Fight Club (1999) and the major international hit Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004), Mr. & Mrs. Smith (2005), and World War Z (2013). Pitt received his second and third Academy Award nominations for his leading performances in The Curious Case of Benjamin Button (2008) and Moneyball (2011). He produced The Departed (2006) and 12 Years a Slave (2013), both of which won the Academy Award for Best Picture, and also The Tree of Life, Moneyball, and The Big Short (2015), all of which garnered Best Picture nominations."
            },
            {
                title: "Bradley Cooper",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Bradley_Cooper_%283699322472%29_%28cropped%29.jpg",
                location: "America",
                age: "41",
                description: "Bradley Charles Cooper (born January 5, 1975) is an American actor and producer. He aspired to an acting career from a young age, and moved to New York City to enroll in the MFA program at the Actors Studio in 2000. His career began with a guest role in the television series Sex and the City in 1999 and his film debut came two years later in Wet Hot American Summer. He first gained recognition as Will Tippin in the spy-action television show Alias (2001–06). His career prospects declined through much of the 2000s, although he achieved minor success with a supporting part in the comedy Wedding Crashers (2005)."
            },
            {
                title: "Bruce Willis",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Bruce_Willis_by_Gage_Skidmore.jpg",
                location: "America",
                age: "61",
                description: "Walter Bruce Willis (born March 19, 1955) is an American actor, producer, and singer. His career began on the Off-Broadway stage and then in television in the 1980s, most notably as David Addison in Moonlighting (1985–1989). He is known for his role of John McClane in the Die Hard series. He has appeared in over 60 films, including Color of Night (1994), Pulp Fiction (1994), 12 Monkeys (1995), The Fifth Element (1997), Armageddon (1998), The Sixth Sense (1999), Unbreakable (2000), Sin City (2005), Red (2010), The Expendables 2 (2012), and Looper (2012)."
            },
            {
                title: "Will Smith",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/6/65/Will_Smith_by_Gage_Skidmore.jpg",
                location: "America",
                age: "48",
                description: "In the late 1980s, Smith achieved modest fame as a rapper under the name The Fresh Prince. In 1990, his popularity increased dramatically when he starred in the popular television series The Fresh Prince of Bel-Air. The show ran for six seasons (1990–96) on NBC and has been syndicated consistently on various networks since then. After the series ended, Smith transitioned from television to film, and ultimately starred in numerous blockbuster films. He is the only actor to have eight consecutive films gross over $100 million in the domestic box office, eleven consecutive films gross over $150 million internationally, and eight consecutive films in which he starred open at the number one spot in the domestic box office tally."
            }


    ];

})();