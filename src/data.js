import crowd from './assets/crowd.png';
// import hundredsOfThem from './assets/hundredsofthem.jpg';
import maple from './assets/maple.png';
import creamer from './assets/creamer.jpg';
import cards from './assets/cards.jpg';
import camera from './assets/camera.png';
import artist from './assets/artist.png';
import hotalbum from './assets/hotalbum.jpg';
import smilealbum from './assets/smilealbum.jpg';
import creamalbum from './assets/creamalbum.jpg';

const Data = {
  bands: [
    { name: '3 Card Monty',
      description: 'Ska never died and never will. After too much Blink-182 Kyle said fuck that and put together what came to be the most well-developed band of the group.  They always brought the house down. Fuck school.',
      url: '3CardMonty',
      heroImage: cards,
      members: [
        { name: 'Craig Beloo', instrument: 'Vocals' },
        { name: 'George Davies', instrument: 'Guitar' },
        { name: 'Clay ???', instrument: 'Guitar' },
        { name: 'Jorge???', instrument: 'Trombone' },
        { name: '??', instrument: 'Soprano Saxophone' },
        { name: '???', instrument: 'Trumpet' },
        { name: 'Drew ???', instrument: 'Bass' },
        { name: 'Kyle Pattridge', instrument: 'Drums' },
      ],
      albums: {
        albumArtist: '3 Card Monty',
        albumDetails: '2003 (SR-2)',
        albumImage: cards,
        albumTitle: 'A Friend Of a Friend',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:0CJzBeJcS8d0wv5PP9tWhp&theme=white',
        // playlistTracks: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:0CJzBeJcS8d0wv5PP9tWhp&theme=white',
        // GET https://api.spotify.com/v1/users/etsitramai/playlists/0CJzBeJcS8d0wv5PP9tWhp/tracks
      },
    },
    { name: 'Cream/You Please',
      description: 'Cream/You Please was the short lived but sharp metamorphosis of iamartiste - down a bassist (Jake "Hollywood" Hansen had departed to show the world just how gorgeous he could be, Brett moved over to Bass, and all of a sudden we were in college.  One time at a house show they started playing Goosebumps give me Goosebumps and Brian\'s bass drum beater fell off and they stopped playing and Brett was pissed cause they were rolling and then in the ackwardness Jared Temanson yelled "That was hot fire!" and then everything was worth it',
      url: 'CreamYouPlease',
      heroImage: creamer,
      members: [
        { name: 'Josh Morris', instrument: 'Guitar' },
        { name: 'Brett Lewan', instrument: 'Bass/Vocals' },
        { name: 'Brian Ridge', instrument: 'Drums/Percussion' },
      ],
      albums: {
        albumArtist: 'Cream/You Please',
        albumDetails: '2007 (SR-5)',
        albumImage: creamalbum,
        albumTitle: 'demos',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:2Ivx5613dY4KuPV8ZNroqj&theme=white',
      },
    },
    { name: 'Hundreds of Them',
      description: 'Hundreds of Them played boring art post rock punk music. They spent more time philospophizing about the sympathetic vibrations of their imagined triumviratee than playing music, which is not a very punk rock way to do things. They first practiced at 645 Arapahoe in a basement with a dirt floor. Then they took residence in those halcyon days at 2005 Upland, The Chicken Coop. Brian wanted to play hard, Josh wanted to play soft, and Eric just wanted to play with love. The end was in sight so they recorded their songs as a thank you to all the people that made them them and then they gave them away.',
      url: 'HundredsOfThem',
      heroImage: crowd,
      members: [
        { name: 'Josh Morris', instrument: 'Guitar/Keyboard' },
        { name: 'Eric Binkley', instrument: 'Bass/Vocals' },
        { name: 'Brian Ridge', instrument: 'Drums/Percussion' },
      ],
      albums: {
        albumArtist: 'Hundeds of Them',
        albumDetails: '2009 (SR-6)',
        albumImage: hotalbum,
        albumTitle: 'Thank You',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:5HSbBVPN8N7JmJiWYgsKfm&theme=white',
      },
    },
    { name: 'iamartiste',
      description: 'Brian so badly wanted to play in a band that he broke up two just to start his own.  He picked off Jake, and Josh from Corner 4, Brett from Left On Maple, and ventured into that melancholic land of emo. They played a few shows as Long Lost Frontier, but then settled on the completely dumb name of iamartiste',
      url: 'iamartiste',
      heroImage: artist,
      members: [
        { name: 'Brett Lewan', instrument: 'Guitar/Vocals' },
        { name: 'Josh Morris', instrument: 'Guitar/Keyboard' },
        { name: 'Jake Hansen', instrument: 'Bass/Vocals' },
        { name: 'Brian Ridge', instrument: 'Drums/Percussion' },
      ],
      albums: {
        albumArtist: 'iamartiste',
        albumDetails: '2004 (SR-1)',
        albumImage: artist,
        albumTitle: 'demos',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:260OUszYoCu5ZgCISZttyY&theme=white',
      },
    },
    { name: 'Left On Maple',
      headline: 'This will be the death of me!',
      description: 'Left On Maple was the best ever band that came out of Golden, Colorado. Brett\'s vocals just ascerbic, Jared\'s drums tenuous but so delicate. This will be the death of me!',
      url: 'LeftOnMaple',
      heroImage: maple,
      members: [
        { name: 'Brett Lewan', instrument: 'Guitar/Vocals' },
        { name: '???', instrument: 'Guitar/Keyboard' },
        { name: 'Zach Flower', instrument: 'Bass' },
        { name: 'Jared Temanson', instrument: 'Drums' },
      ],
      albums: {
        albumArtist: 'Left On Maple',
        albumDetails: '2003 (SR-1)',
        albumImage: maple,
        albumTitle: 'S/T',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:2HGva4RcoB5CTvGE1TjArX&theme=white',
      },
    },
    { name: 'Smile For My Camera',
      description: 'Smile for my camera won battle of the bands when they were still a joke and then we all realized there was nothing really funny about any of it.  They simply thrashed hard.  100% The Faint ripoff. indie dance pop lives!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      url: 'SmileForMyCamera',
      heroImage: camera,
      members: [
        { name: 'Jason Joyce', instrument: 'Vocals' },
        { name: 'Josh Morris', instrument: 'Guitar' },
        { name: 'Brett Lewan', instrument: 'Keyboard' },
        { name: 'Devin ???', instrument: 'Drums' },
      ],
      albums: {
        albumArtist: 'Smile For My Camera',
        albumDetails: '2003 (SR-4)',
        albumImage: smilealbum,
        albumTitle: 'demos',
        spotifyEmbed: 'https://open.spotify.com/embed?uri=spotify:user:etsitramai:playlist:0asyIlnbulq74L6uCD4Rn5&theme=white',
      },
    },
  ],
  get(id) {
    const isBand = b => b.name === id;
    return this.bands.find(isBand);
  },
};

export default Data;

// Devin's iamartiste pics
// https://www.facebook.com/devinomauriello/media_set?set=a.4607646642.10130.504886642&type=3

// Craig's 3 Card pics
// https://www.facebook.com/cdbellew/media_set?set=a.112204903710.94308.504068710&type=3

// Jason's smile pics
// https://www.facebook.com/smileformycamera/media_set?set=a.332833800469.194799.508515469&type=3
