// LAB: Radio Object
/* Objective: Create a object Radio 

How to begin:

1. create a variable called radio and assign it an object literal as its value

2. Give it a property called stations and make the value an array of station objects (at least 2).

3. Give each station object a property called name and songs.  Name should be a string and songs should be an array of song objects (at least 3)l

4. Song objects should have two properties: title and artist

5. Create a method on your radio object that changes the station randomly (Math.random; Math.floor);

6. When the station is changed, pick a song from that station. Example: console.log("Now Playing " + song.title + " by " + song.artist + " on the " radio.randomStation + " station!");
*/

const radio = {  // 1.
	stations: [  // 2.
		{
			name: "Soul",  // 3.
			songs: [
				{
					title: "Say It Loud",  // 4.
					artist: "James Brown",
				},

				{
					title: "Bring It On Home To Me",
					artist: "Sam Cooke",
				},

				{
					title: "Contagious",
					artist: "The Isley Brothers",
				},
			],
		},

		{
			name: "Hip-Hop",
			songs: [
				{
					title: "Digits",
					artist: "Young Thug",
				},

				{
					title: "Act Right",
					artist: "Yo Gotti",
				},

				{
					title: "Rock Star",
					artist: "Da Baby",
				},
			],
		},

		{
			name: "R&B",
			songs: [
				{
					title: "Diamonds",
					artist: "Rihanna",
				},

				{
					title: "THIQUE",
					artist: "Beyonce`",
				},

				{
					title: "24K Magic",
					artist: "Bruno Mars",
				},
			],
		},
        
	],

    // change station function
    changeStation: function() {  // 5.
        let randomStation = Math.floor(Math.random() * radio.stations.length);
        let randomSong = Math.floor(Math.random() * radio.stations[randomStation].songs.length); // 6.
        
        console.log("Now Playing: " + radio.stations[randomStation].songs[randomSong].title + " by " + radio.stations[randomStation].songs[randomSong].artist + " on the " + radio.stations[randomStation].name + " station!");
    }
}
radio.changeStation();