const navbar = {
    brand : "UofG Cup",
    WhatIsUofGCup : {
        WhatIsUofGCup : "What is UofG Cup?",
        Rules : "Rules",
        PastCompetitions : "Past Competitions"
    },
    UofGCup23 : {
        UofGCup23 : "UofG Cup '23",
        Tracks : "Tracks",
        Leaderboards : "Leaderboards",
        Apply : "Apply"
    },
    Contact : "Contact"
};

const pastComp = {
    title : "There are currently no past competitions right now",
    description: "Please check out our current competition",
    button: "UofG Cup '23"
};

const tracks = {
    1 : { 
        description : "A straight-line track navigated with a controller",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#1",
        build_link : ""
    },
    2 : { 
        description : "A straight-line track navigated by the robot",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#2",
        build_link : ""
    },
    3 : { 
        description : "Full track navigated with the controller",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#3",
        build_link : ""
    },
    4 : { 
        description : "Full track navigated by the robot",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#4",
        build_link : ""
    },
    5 : { 
        description : "The full track with the controller but with added obstacles",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#5",
        build_link : ""
    },
    6 : { 
        description : "The full track with obstacles navigated by the robot",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#6",
        build_link : ""
    },
    7 : { 
        description : "The full track with a parking zone using the controller",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#7",
        build_link : ""
    },
    8 : { 
        description : "The full track with the parking zone navigated by the robot",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#8",
        build_link : ""
    },
    9 : { 
        description : "Full track, obstacles, and the parking zone using the controller",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#9",
        build_link : ""
    },
    10 : { 
        description : "Full track, obstacles, and the parking zone navigated by the robot",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#10",
        build_link : ""
    },
    11 : { 
        description : "Navigate the track by drawing a line on your phone for the robot to follow",
        img_src : "images/race-track-example.jpg",
        leaderboard_link : "leaderboards.html#11",
        build_link : ""
    },
};

const players = {
    Lewis : {
        name : "Lewis Trundle",
        country : "United Kingdom",
        times : {
            "round_1" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_2" : {
                one : 23.07,
                two : 20.32,
                three : 22.72,
                best: 20.32
            },
            "round_3" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_4" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_5" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_6" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_7" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_8" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_9" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_10" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_11" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            }
        }
    },
    Billy : {
        name : "Billy Joel",
        country : "United Kingdom",
        times : {
            "round_1" : {
                one : 23.07,
                two : 21.45,
                three : 19.03,
                best: 19.03
            },
            "round_2" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_3" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            }
        }
    },
    Bob : {
        name : "Bob Jones",
        country : "United Kingdom",
        times : {
            "round_1" : {
                one : 23.07,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_2" : {
                one : 20.65,
                two : 21.45,
                three : 22.72,
                best: 21.45
            },
            "round_3" : {
                one : 27.43,
                two : 21.45,
                three : 22.72,
                best: 21.45
            }
        }
    }
}


const compData = {
    "overall" : {
        "1" : players.Lewis,
    },
    "round_1" : {
        "1" : players.Lewis,
        "2" : players.Billy,
        "3" : players.Bob
    },
    "round_2" : {
        "1" : players.Lewis,
        "2" : players.Billy,
        "3": players.Bob
    },
    "round_3" : {
        "1" : players.Lewis,
        "2" : players.Billy,
        "3" : players.Bob
    },
    "round_4" : {
        "1" : players.Lewis,
    },
    "round_5" : {
        "1" : players.Lewis,
    },
    "round_6" : {
        "1" : players.Lewis,
    },
    "round_7" : {
        "1" : players.Lewis,
    },
    "round_8" : {
        "1" : players.Lewis,
    },
    "round_9" : {
        "1" : players.Lewis,
    },
    "round_10" : {
        "1" : players.Lewis,
    },
    "round_11" : {
        "1" : players.Lewis,
    }
}

export {navbar, pastComp, tracks, compData, players};