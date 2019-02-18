function Song(song_name, artist, image, song_file){
	this.song_name = song_name,
	this.artist = artist,
	this.image = image,
	this.song_file = song_file
}

function Jukebox(songs_list){
	this.songs_list = songs_list
	this.current_song_index = 0 % this.songs_list.length
	this.current_song = this.songs_list[this.current_song_index]
	this.playSong = function(){
		this.current_song = this.songs_list[this.current_song_index]
		//play current song
		var playButton_src = document.getElementById("song")
		playButton_src.setAttribute("src", this.current_song.song_file)
		var playButton_audio = document.getElementById("play_audio")
		playButton_audio.load()
		playButton_audio.play()
        
        var albumcover = document.getElementById("album_cover")
        albumcover.setAttribute("src", this.current_song.image)
        
        document.getElementById("s" + (this.current_song_index +1)).style.color = "darkblue";
        
        document.getElementById("s" + (this.current_song_index +1)).style.fontWeight = "400";
        
        document.getElementById("s" + this.current_song_index).style.color = "black";
        
        document.getElementById("s" + this.current_song_index).style.fontWeight = "300";
        
        //returning null for 0 in the array -- not working
        if(this.current_song_index == 0){
            document.getElementById("s5").style.color = "black";
        
            document.getElementById("s5").style.fontWeight = "300";
        }
        
        console.log(this.current_song);
        
                
	}

	this.pauseSong = function(){
		//pause current song
		var playButton_audio = document.getElementById("play_audio")
		playButton_audio.pause()
	}

	this.fastforward = function(){
		this.pauseSong()
		this.current_song_index = (this.current_song_index+1)%this.songs_list.length
		this.playSong()
	}

	this.rewind = function(){
		this.pauseSong()
		this.current_song_index = (this.current_song_index-1)%this.songs_list.length
		if (this.current_song_index == -1){
			this.current_song_index = this.songs_list.length - 1
		}
		this.playSong()
	}
}


/////////////////////////////////////

var s1 = new Song("In The End", "Linkin Park", "https://images.genius.com/9b3577380616e434444df78c3ee23272.1000x1000x1.jpg", "songs/LinkinParkInTheEnd.mp3")
var s2 = new Song("Numb", "Linkin Park", "https://d2tml28x3t0b85.cloudfront.net/tracks/artworks/000/581/243/original/d74449.jpeg?1500891757", "songs/numb.mp3")
var s3 = new Song("Bad Romance", "Lady Gaga", "https://images-na.ssl-images-amazon.com/images/I/71Pu0evk6eL._SL1095_.jpg", "songs/BadRomance.mp3")
var s4 = new Song("A Million Reasons", "Lady Gaga", "https://images-na.ssl-images-amazon.com/images/I/61QK0RIR5vL._SL1200_.jpg", "songs/MillionReasons.mp3")
var s5 = new Song("Shallow", "Lady Gaga", "https://i1.wp.com/www.thereviewsarein.com/wp-content/uploads/2018/10/A-Star-Is-Born-Lady-Gaga-Poster-Thumb.jpg?ssl=1", "songs/Shallow.mp3")

var song_array = [s1, s2, s3, s4, s5]
var jukebox_obj = new Jukebox(song_array)

document.getElementById("s1").innerHTML =  "1.  " + song_array[0].song_name + " by " + song_array[0].artist

document.getElementById("s2").innerHTML =  "2.  " + song_array[1].song_name + " by " + song_array[1].artist

document.getElementById("s3").innerHTML =  "3.  " + song_array[2].song_name + " by " + song_array[2].artist

document.getElementById("s4").innerHTML =  "4.  " + song_array[3].song_name + " by " + song_array[3].artist

document.getElementById("s5").innerHTML =  "5.  " + song_array[4].song_name + " by " + song_array[4].artist

function Rewind(){
	jukebox_obj.rewind()
}
function play(){
	jukebox_obj.playSong()
}
function Pause(){
	jukebox_obj.pauseSong()
}
function FF(){
	jukebox_obj.fastforward()
}

document.getElementById("play_button").addEventListener("click", play);