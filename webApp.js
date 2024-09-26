// fetch(
//   "https://genius-song-lyrics1.p.rapidapi.com/artist/songs/?id=344497&apiKey=5f370ff7eemsh9c38ef4610f00fcp18f03cjsn82d20371780c&pageSize=6",
//   {
//     headers: {
//       "x-rapidapi-key": "5f370ff7eemsh9c38ef4610f00fcp18f03cjsn82d20371780c",
//     //   "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
//     },
//   }
// ).then(function (response) {
//   console.log(response.body);
//   return response.json();
// })
// .then(function (data) {
// console.table(data.artists);
// })


const sampleData = {
  hits: [
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 36,
        api_path: "/songs/51899",
        artist_names: "JAY-Z & Kanye West",
        full_title: "Niggas in Paris by JAY-Z & Kanye West",
        header_image_thumbnail_url:
          "https://images.genius.com/23d4917f844406d16909875904331fe5.300x300x1.jpg",
        header_image_url:
          "https://images.genius.com/23d4917f844406d16909875904331fe5.1000x1000x1.jpg",
        id: 51899,
        instrumental: false,
        lyrics_owner_id: 3,
        lyrics_state: "complete",
        lyrics_updated_at: 1713564836,
        path: "/Jay-z-and-kanye-west-niggas-in-paris-lyrics",
        primary_artist_names: "JAY-Z & Kanye West",
        pyongs_count: 452,
        relationships_index_url:
          "https://genius.com/Jay-z-and-kanye-west-niggas-in-paris-sample",
        release_date_components: {
          year: 2011,
          month: 9,
          day: 13,
        },
        release_date_for_display: "September 13, 2011",
        release_date_with_abbreviated_month_for_display: "Sep. 13, 2011",
        song_art_image_thumbnail_url:
          "https://images.genius.com/9d1522b9d24f65601295c4315c188fee.300x300x1.jpg",
        song_art_image_url:
          "https://images.genius.com/9d1522b9d24f65601295c4315c188fee.1000x1000x1.jpg",
        stats: {
          unreviewed_annotations: 1,
          concurrents: 3,
          hot: false,
          pageviews: 6892749,
        },
        title: "Niggas in Paris",
        title_with_featured: "Niggas in Paris",
        updated_by_human_at: 1720350746,
        url: "https://genius.com/Jay-z-and-kanye-west-niggas-in-paris-lyrics",
        featured_artists: [],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/652275",
          header_image_url:
            "https://images.genius.com/25d42b3ac3c5a29206334c0a92063bb5.600x353x1.png",
          id: 652275,
          image_url:
            "https://images.genius.com/410b55abb1ff71c7ccc5be931a5c9a9d.788x788x1.jpg",
          index_character: "j",
          is_meme_verified: false,
          is_verified: false,
          name: "JAY-Z & Kanye West",
          slug: "Jay-z-and-kanye-west",
          url: "https://genius.com/artists/Jay-z-and-kanye-west",
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/652275",
            header_image_url:
              "https://images.genius.com/25d42b3ac3c5a29206334c0a92063bb5.600x353x1.png",
            id: 652275,
            image_url:
              "https://images.genius.com/410b55abb1ff71c7ccc5be931a5c9a9d.788x788x1.jpg",
            index_character: "j",
            is_meme_verified: false,
            is_verified: false,
            name: "JAY-Z & Kanye West",
            slug: "Jay-z-and-kanye-west",
            url: "https://genius.com/artists/Jay-z-and-kanye-west",
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 29,
        api_path: "/songs/177832",
        artist_names: "JAY-Z (Ft. Justin Timberlake)",
        full_title: "Holy Grail by JAY-Z (Ft. Justin Timberlake)",
        header_image_thumbnail_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.300x300x1.png",
        header_image_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.1000x1000x1.png",
        id: 177832,
        instrumental: false,
        lyrics_owner_id: 104344,
        lyrics_state: "complete",
        lyrics_updated_at: 1712735356,
        path: "/Jay-z-holy-grail-lyrics",
        primary_artist_names: "JAY-Z",
        pyongs_count: 396,
        relationships_index_url: "https://genius.com/Jay-z-holy-grail-sample",
        release_date_components: {
          year: 2013,
          month: 7,
          day: 4,
        },
        release_date_for_display: "July 4, 2013",
        release_date_with_abbreviated_month_for_display: "Jul. 4, 2013",
        song_art_image_thumbnail_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.1000x1000x1.png",
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 6500294,
        },
        title: "Holy Grail",
        title_with_featured: "Holy Grail (Ft. Justin Timberlake)",
        updated_by_human_at: 1712735356,
        url: "https://genius.com/Jay-z-holy-grail-lyrics",
        featured_artists: [
          {
            _type: "artist",
            api_path: "/artists/334",
            header_image_url:
              "https://images.genius.com/4923d2176463289f7c329dc502df746f.1000x333x1.jpg",
            id: 334,
            image_url:
              "https://images.genius.com/9d3d250cfb5aa90ba1e2ca750540f90c.1000x1000x1.jpg",
            index_character: "j",
            is_meme_verified: false,
            is_verified: true,
            name: "Justin Timberlake",
            slug: "Justin-timberlake",
            url: "https://genius.com/artists/Justin-timberlake",
            iq: 629,
          },
        ],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/2",
          header_image_url:
            "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
          id: 2,
          image_url:
            "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
          index_character: "j",
          is_meme_verified: true,
          is_verified: true,
          name: "JAY-Z",
          slug: "Jay-z",
          url: "https://genius.com/artists/Jay-z",
          iq: 225,
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/2",
            header_image_url:
              "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
            id: 2,
            image_url:
              "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
            index_character: "j",
            is_meme_verified: true,
            is_verified: true,
            name: "JAY-Z",
            slug: "Jay-z",
            url: "https://genius.com/artists/Jay-z",
            iq: 225,
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 47,
        api_path: "/songs/87225",
        artist_names: "Kanye West, JAY-Z & Big Sean",
        full_title: "Clique by Kanye West, JAY-Z & Big Sean",
        header_image_thumbnail_url:
          "https://images.genius.com/6700d69266dd9477158bc4733e2f3098.300x300x1.jpg",
        header_image_url:
          "https://images.genius.com/6700d69266dd9477158bc4733e2f3098.1000x1000x1.jpg",
        id: 87225,
        instrumental: false,
        lyrics_owner_id: 11637,
        lyrics_state: "complete",
        lyrics_updated_at: 1725977975,
        path: "/Kanye-west-jay-z-and-big-sean-clique-lyrics",
        primary_artist_names: "Kanye West, JAY-Z & Big Sean",
        pyongs_count: 192,
        relationships_index_url:
          "https://genius.com/Kanye-west-jay-z-and-big-sean-clique-sample",
        release_date_components: {
          year: 2012,
          month: 9,
          day: 6,
        },
        release_date_for_display: "September 6, 2012",
        release_date_with_abbreviated_month_for_display: "Sep. 6, 2012",
        song_art_image_thumbnail_url:
          "https://images.genius.com/d85d9b28d5bf3e6abaaf04dbc9802b61.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/d85d9b28d5bf3e6abaaf04dbc9802b61.1000x1000x1.png",
        stats: {
          unreviewed_annotations: 1,
          concurrents: 2,
          hot: false,
          pageviews: 3806407,
        },
        title: "Clique",
        title_with_featured: "Clique",
        updated_by_human_at: 1725977975,
        url: "https://genius.com/Kanye-west-jay-z-and-big-sean-clique-lyrics",
        featured_artists: [],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/1950873",
          header_image_url:
            "https://images.genius.com/f2421899e249652d22f376e2bd8749bc.459x459x1.jpg",
          id: 1950873,
          image_url:
            "https://images.genius.com/f2421899e249652d22f376e2bd8749bc.459x459x1.jpg",
          index_character: "k",
          is_meme_verified: false,
          is_verified: false,
          name: "Kanye West, JAY-Z & Big Sean",
          slug: "Kanye-west-jay-z-and-big-sean",
          url: "https://genius.com/artists/Kanye-west-jay-z-and-big-sean",
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/1950873",
            header_image_url:
              "https://images.genius.com/f2421899e249652d22f376e2bd8749bc.459x459x1.jpg",
            id: 1950873,
            image_url:
              "https://images.genius.com/f2421899e249652d22f376e2bd8749bc.459x459x1.jpg",
            index_character: "k",
            is_meme_verified: false,
            is_verified: false,
            name: "Kanye West, JAY-Z & Big Sean",
            slug: "Kanye-west-jay-z-and-big-sean",
            url: "https://genius.com/artists/Kanye-west-jay-z-and-big-sean",
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 44,
        api_path: "/songs/75",
        artist_names: "JAY-Z (Ft. Alicia Keys)",
        full_title: "Empire State of Mind by JAY-Z (Ft. Alicia Keys)",
        header_image_thumbnail_url:
          "https://images.genius.com/37b88bc75f46cabbf4aa13a6bf2dcd7e.300x300x1.jpg",
        header_image_url:
          "https://images.genius.com/37b88bc75f46cabbf4aa13a6bf2dcd7e.1000x1000x1.jpg",
        id: 75,
        instrumental: false,
        lyrics_owner_id: 12,
        lyrics_state: "complete",
        lyrics_updated_at: 1726439892,
        path: "/Jay-z-empire-state-of-mind-lyrics",
        primary_artist_names: "JAY-Z",
        pyongs_count: 148,
        relationships_index_url:
          "https://genius.com/Jay-z-empire-state-of-mind-sample",
        release_date_components: {
          year: 2009,
          month: 10,
          day: 20,
        },
        release_date_for_display: "October 20, 2009",
        release_date_with_abbreviated_month_for_display: "Oct. 20, 2009",
        song_art_image_thumbnail_url:
          "https://images.genius.com/4ebced1abfe8116eb43e79192f5c0082.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/4ebced1abfe8116eb43e79192f5c0082.1000x1000x1.png",
        stats: {
          unreviewed_annotations: 0,
          concurrents: 6,
          hot: false,
          pageviews: 3777021,
        },
        title: "Empire State of Mind",
        title_with_featured: "Empire State of Mind (Ft. Alicia Keys)",
        updated_by_human_at: 1726439892,
        url: "https://genius.com/Jay-z-empire-state-of-mind-lyrics",
        featured_artists: [
          {
            _type: "artist",
            api_path: "/artists/362",
            header_image_url:
              "https://images.genius.com/0e1e725d5e4793ba3acfd614ecd89b34.984x554x1.jpg",
            id: 362,
            image_url:
              "https://images.genius.com/aecb92762c8274caae9f0cdf8cec1f86.640x640x1.jpg",
            index_character: "a",
            is_meme_verified: false,
            is_verified: false,
            name: "Alicia Keys",
            slug: "Alicia-keys",
            url: "https://genius.com/artists/Alicia-keys",
          },
        ],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/2",
          header_image_url:
            "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
          id: 2,
          image_url:
            "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
          index_character: "j",
          is_meme_verified: true,
          is_verified: true,
          name: "JAY-Z",
          slug: "Jay-z",
          url: "https://genius.com/artists/Jay-z",
          iq: 225,
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/2",
            header_image_url:
              "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
            id: 2,
            image_url:
              "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
            index_character: "j",
            is_meme_verified: true,
            is_verified: true,
            name: "JAY-Z",
            slug: "Jay-z",
            url: "https://genius.com/artists/Jay-z",
            iq: 225,
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 30,
        api_path: "/songs/52020",
        artist_names: "JAY-Z & Kanye West (Ft. Frank Ocean & The-Dream)",
        full_title:
          "No Church in the Wild by JAY-Z & Kanye West (Ft. Frank Ocean & The-Dream)",
        header_image_thumbnail_url:
          "https://images.genius.com/f4264b720b7352a2ffac3c36fa1fd5cf.300x300x1.png",
        header_image_url:
          "https://images.genius.com/f4264b720b7352a2ffac3c36fa1fd5cf.880x880x1.png",
        id: 52020,
        instrumental: false,
        lyrics_owner_id: 7,
        lyrics_state: "complete",
        lyrics_updated_at: 1687244458,
        path: "/Jay-z-and-kanye-west-no-church-in-the-wild-lyrics",
        primary_artist_names: "JAY-Z & Kanye West",
        pyongs_count: 246,
        relationships_index_url:
          "https://genius.com/Jay-z-and-kanye-west-no-church-in-the-wild-sample",
        release_date_components: {
          year: 2011,
          month: 8,
          day: 8,
        },
        release_date_for_display: "August 8, 2011",
        release_date_with_abbreviated_month_for_display: "Aug. 8, 2011",
        song_art_image_thumbnail_url:
          "https://images.genius.com/f4264b720b7352a2ffac3c36fa1fd5cf.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/f4264b720b7352a2ffac3c36fa1fd5cf.880x880x1.png",
        stats: {
          unreviewed_annotations: 1,
          hot: false,
          pageviews: 3512613,
        },
        title: "No Church in the Wild",
        title_with_featured:
          "No Church in the Wild (Ft. Frank Ocean & The-Dream)",
        updated_by_human_at: 1709477584,
        url: "https://genius.com/Jay-z-and-kanye-west-no-church-in-the-wild-lyrics",
        featured_artists: [
          {
            _type: "artist",
            api_path: "/artists/1181",
            header_image_url:
              "https://images.genius.com/b9700cfad845412f16e9bca4c51e0811.480x782x1.png",
            id: 1181,
            image_url:
              "https://images.genius.com/088f3bfabc3a8acfd99acbd86c03c993.520x520x1.png",
            index_character: "t",
            is_meme_verified: true,
            is_verified: true,
            name: "The-Dream",
            slug: "The-dream",
            url: "https://genius.com/artists/The-dream",
            iq: 13957,
          },
          {
            _type: "artist",
            api_path: "/artists/1985",
            header_image_url:
              "https://images.genius.com/72f85f6e83c697db2b79ad585f5d0574.1000x500x1.png",
            id: 1985,
            image_url:
              "https://images.genius.com/3a240e0e7829e4d8354b5b63cb87d436.1000x1000x1.png",
            index_character: "f",
            is_meme_verified: true,
            is_verified: true,
            name: "Frank Ocean",
            slug: "Frank-ocean",
            url: "https://genius.com/artists/Frank-ocean",
            iq: 8018,
          },
        ],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/652275",
          header_image_url:
            "https://images.genius.com/25d42b3ac3c5a29206334c0a92063bb5.600x353x1.png",
          id: 652275,
          image_url:
            "https://images.genius.com/410b55abb1ff71c7ccc5be931a5c9a9d.788x788x1.jpg",
          index_character: "j",
          is_meme_verified: false,
          is_verified: false,
          name: "JAY-Z & Kanye West",
          slug: "Jay-z-and-kanye-west",
          url: "https://genius.com/artists/Jay-z-and-kanye-west",
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/652275",
            header_image_url:
              "https://images.genius.com/25d42b3ac3c5a29206334c0a92063bb5.600x353x1.png",
            id: 652275,
            image_url:
              "https://images.genius.com/410b55abb1ff71c7ccc5be931a5c9a9d.788x788x1.jpg",
            index_character: "j",
            is_meme_verified: false,
            is_verified: false,
            name: "JAY-Z & Kanye West",
            slug: "Jay-z-and-kanye-west",
            url: "https://genius.com/artists/Jay-z-and-kanye-west",
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 34,
        api_path: "/songs/180511",
        artist_names: "JAY-Z (Ft. Beyoncé)",
        full_title: "Part II (On the Run) by JAY-Z (Ft. Beyoncé)",
        header_image_thumbnail_url:
          "https://images.genius.com/129e3ead35f3c401dc15058783c989a5.300x300x1.jpg",
        header_image_url:
          "https://images.genius.com/129e3ead35f3c401dc15058783c989a5.1000x1000x1.jpg",
        id: 180511,
        instrumental: false,
        lyrics_owner_id: 149650,
        lyrics_state: "complete",
        lyrics_updated_at: 1722147869,
        path: "/Jay-z-part-ii-on-the-run-lyrics",
        primary_artist_names: "JAY-Z",
        pyongs_count: 339,
        relationships_index_url:
          "https://genius.com/Jay-z-part-ii-on-the-run-sample",
        release_date_components: {
          year: 2013,
          month: 7,
          day: 4,
        },
        release_date_for_display: "July 4, 2013",
        release_date_with_abbreviated_month_for_display: "Jul. 4, 2013",
        song_art_image_thumbnail_url:
          "https://images.genius.com/129e3ead35f3c401dc15058783c989a5.300x300x1.jpg",
        song_art_image_url:
          "https://images.genius.com/129e3ead35f3c401dc15058783c989a5.1000x1000x1.jpg",
        stats: {
          unreviewed_annotations: 3,
          hot: false,
          pageviews: 2485518,
        },
        title: "Part II (On the Run)",
        title_with_featured: "Part II (On the Run) (Ft. Beyoncé)",
        updated_by_human_at: 1722147869,
        url: "https://genius.com/Jay-z-part-ii-on-the-run-lyrics",
        featured_artists: [
          {
            _type: "artist",
            api_path: "/artists/498",
            header_image_url:
              "https://images.genius.com/b6f8f961f03f57321b4f5dadd80cdd8c.1000x333x1.png",
            id: 498,
            image_url:
              "https://images.genius.com/71ff4f0cd5901efa26b6a05c2a7fefb6.1000x1000x1.jpg",
            index_character: "b",
            is_meme_verified: false,
            is_verified: false,
            name: "Beyoncé",
            slug: "Beyonce",
            url: "https://genius.com/artists/Beyonce",
          },
        ],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/2",
          header_image_url:
            "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
          id: 2,
          image_url:
            "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
          index_character: "j",
          is_meme_verified: true,
          is_verified: true,
          name: "JAY-Z",
          slug: "Jay-z",
          url: "https://genius.com/artists/Jay-z",
          iq: 225,
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/2",
            header_image_url:
              "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
            id: 2,
            image_url:
              "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
            index_character: "j",
            is_meme_verified: true,
            is_verified: true,
            name: "JAY-Z",
            slug: "Jay-z",
            url: "https://genius.com/artists/Jay-z",
            iq: 225,
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 35,
        api_path: "/songs/3786530",
        artist_names: "THE CARTERS",
        full_title: "APESHIT by THE CARTERS",
        header_image_thumbnail_url:
          "https://images.genius.com/2c95edd69eeb26b03fe45f41f6a9dcb2.300x300x1.png",
        header_image_url:
          "https://images.genius.com/2c95edd69eeb26b03fe45f41f6a9dcb2.1000x1000x1.png",
        id: 3786530,
        instrumental: false,
        lyrics_owner_id: 2334743,
        lyrics_state: "complete",
        lyrics_updated_at: 1714232479,
        path: "/The-carters-apeshit-lyrics",
        primary_artist_names: "THE CARTERS",
        pyongs_count: 161,
        relationships_index_url:
          "https://genius.com/The-carters-apeshit-sample",
        release_date_components: {
          year: 2018,
          month: 6,
          day: 16,
        },
        release_date_for_display: "June 16, 2018",
        release_date_with_abbreviated_month_for_display: "Jun. 16, 2018",
        song_art_image_thumbnail_url:
          "https://images.genius.com/2c95edd69eeb26b03fe45f41f6a9dcb2.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/2c95edd69eeb26b03fe45f41f6a9dcb2.1000x1000x1.png",
        stats: {
          unreviewed_annotations: 3,
          hot: false,
          pageviews: 2460043,
        },
        title: "APESHIT",
        title_with_featured: "APESHIT",
        updated_by_human_at: 1719727217,
        url: "https://genius.com/The-carters-apeshit-lyrics",
        featured_artists: [],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/1408735",
          header_image_url:
            "https://images.genius.com/4387bd83ae73f918240e1691cb612891.1000x333x1.jpg",
          id: 1408735,
          image_url:
            "https://images.genius.com/4bbd66eb29ac73e15faa05a64b39568a.1000x1000x1.jpg",
          index_character: "c",
          is_meme_verified: false,
          is_verified: false,
          name: "THE CARTERS",
          slug: "The-carters",
          url: "https://genius.com/artists/The-carters",
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/1408735",
            header_image_url:
              "https://images.genius.com/4387bd83ae73f918240e1691cb612891.1000x333x1.jpg",
            id: 1408735,
            image_url:
              "https://images.genius.com/4bbd66eb29ac73e15faa05a64b39568a.1000x1000x1.jpg",
            index_character: "c",
            is_meme_verified: false,
            is_verified: false,
            name: "THE CARTERS",
            slug: "The-carters",
            url: "https://genius.com/artists/The-carters",
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 12,
        api_path: "/songs/3138625",
        artist_names: "JAY-Z",
        full_title: "The Story of O.J. by JAY-Z",
        header_image_thumbnail_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.300x300x1.png",
        header_image_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.1000x1000x1.png",
        id: 3138625,
        instrumental: false,
        lyrics_owner_id: 93685,
        lyrics_state: "complete",
        lyrics_updated_at: 1694014075,
        path: "/Jay-z-the-story-of-oj-lyrics",
        primary_artist_names: "JAY-Z",
        pyongs_count: 119,
        relationships_index_url:
          "https://genius.com/Jay-z-the-story-of-oj-sample",
        release_date_components: {
          year: 2017,
          month: 6,
          day: 30,
        },
        release_date_for_display: "June 30, 2017",
        release_date_with_abbreviated_month_for_display: "Jun. 30, 2017",
        song_art_image_thumbnail_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.1000x1000x1.png",
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 2340858,
        },
        title: "The Story of O.J.",
        title_with_featured: "The Story of O.J.",
        updated_by_human_at: 1718106274,
        url: "https://genius.com/Jay-z-the-story-of-oj-lyrics",
        featured_artists: [],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/2",
          header_image_url:
            "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
          id: 2,
          image_url:
            "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
          index_character: "j",
          is_meme_verified: true,
          is_verified: true,
          name: "JAY-Z",
          slug: "Jay-z",
          url: "https://genius.com/artists/Jay-z",
          iq: 225,
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/2",
            header_image_url:
              "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
            id: 2,
            image_url:
              "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
            index_character: "j",
            is_meme_verified: true,
            is_verified: true,
            name: "JAY-Z",
            slug: "Jay-z",
            url: "https://genius.com/artists/Jay-z",
            iq: 225,
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 17,
        api_path: "/songs/3138638",
        artist_names: "JAY-Z",
        full_title: "4:44 by JAY-Z",
        header_image_thumbnail_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.300x300x1.png",
        header_image_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.1000x1000x1.png",
        id: 3138638,
        instrumental: false,
        lyrics_owner_id: 3257857,
        lyrics_state: "complete",
        lyrics_updated_at: 1607231850,
        path: "/Jay-z-4-44-lyrics",
        primary_artist_names: "JAY-Z",
        pyongs_count: 76,
        relationships_index_url: "https://genius.com/Jay-z-4-44-sample",
        release_date_components: {
          year: 2017,
          month: 6,
          day: 30,
        },
        release_date_for_display: "June 30, 2017",
        release_date_with_abbreviated_month_for_display: "Jun. 30, 2017",
        song_art_image_thumbnail_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/938568f8961cba0e4fe34fd28d709c63.1000x1000x1.png",
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 2116607,
        },
        title: "4:44",
        title_with_featured: "4:44",
        updated_by_human_at: 1718217269,
        url: "https://genius.com/Jay-z-4-44-lyrics",
        featured_artists: [],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/2",
          header_image_url:
            "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
          id: 2,
          image_url:
            "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
          index_character: "j",
          is_meme_verified: true,
          is_verified: true,
          name: "JAY-Z",
          slug: "Jay-z",
          url: "https://genius.com/artists/Jay-z",
          iq: 225,
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/2",
            header_image_url:
              "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
            id: 2,
            image_url:
              "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
            index_character: "j",
            is_meme_verified: true,
            is_verified: true,
            name: "JAY-Z",
            slug: "Jay-z",
            url: "https://genius.com/artists/Jay-z",
            iq: 225,
          },
        ],
      },
    },
    {
      highlights: [],
      index: "song",
      type: "song",
      result: {
        _type: "song",
        annotation_count: 35,
        api_path: "/songs/181906",
        artist_names: "JAY-Z",
        full_title: "Tom Ford by JAY-Z",
        header_image_thumbnail_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.300x300x1.png",
        header_image_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.1000x1000x1.png",
        id: 181906,
        instrumental: false,
        lyrics_owner_id: 172252,
        lyrics_state: "complete",
        lyrics_updated_at: 1704035160,
        path: "/Jay-z-tom-ford-lyrics",
        primary_artist_names: "JAY-Z",
        pyongs_count: 77,
        relationships_index_url: "https://genius.com/Jay-z-tom-ford-sample",
        release_date_components: {
          year: 2013,
          month: 7,
          day: 4,
        },
        release_date_for_display: "July 4, 2013",
        release_date_with_abbreviated_month_for_display: "Jul. 4, 2013",
        song_art_image_thumbnail_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.300x300x1.png",
        song_art_image_url:
          "https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.1000x1000x1.png",
        stats: {
          unreviewed_annotations: 1,
          hot: false,
          pageviews: 1689876,
        },
        title: "Tom Ford",
        title_with_featured: "Tom Ford",
        updated_by_human_at: 1709574708,
        url: "https://genius.com/Jay-z-tom-ford-lyrics",
        featured_artists: [],
        primary_artist: {
          _type: "artist",
          api_path: "/artists/2",
          header_image_url:
            "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
          id: 2,
          image_url:
            "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
          index_character: "j",
          is_meme_verified: true,
          is_verified: true,
          name: "JAY-Z",
          slug: "Jay-z",
          url: "https://genius.com/artists/Jay-z",
          iq: 225,
        },
        primary_artists: [
          {
            _type: "artist",
            api_path: "/artists/2",
            header_image_url:
              "https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png",
            id: 2,
            image_url:
              "https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg",
            index_character: "j",
            is_meme_verified: true,
            is_verified: true,
            name: "JAY-Z",
            slug: "Jay-z",
            url: "https://genius.com/artists/Jay-z",
            iq: 225,
          },
        ],
      },
    },
  ],
};

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "5f370ff7eemsh9c38ef4610f00fcp18f03cjsn82d20371780c",
    "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
  },
};

const displayHitSongs = (songs) => {
  const resultsContainer = document.getElementById("results-container");

  songs.forEach((song) => {
    const songTitle = document.createElement("h2");
    songTitle.innerText = song.result.full_title;
    const songArtists = document.createElement("p");
    songArtists.innerText = song.result.artist_names;

    // create Card for each song
    const songCard = document.createElement("div");
    songCard.classList.add("song-card");

    // append title, artist names etc to the song card

    songCard.appendChild(songTitle);
    songCard.appendChild(songArtists);

    console.log(songCard);

    resultsContainer.appendChild(songCard);
  });
};

const fetchArtistHitSongs = async (artistName) => {
  try {
    // const response = await fetch(
    //   `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${artistName}&per_page=10&page=1`,
    //   options
    // ); // fetches hits songs from the database based on artist name
    // const result = await response.json(); // it gets the search result in json format

    console.log(sampleData.hits[0].result);
    sampleSongs = sampleData.hits.slice(0, 3);
    displayHitSongs(sampleSongs);
  } catch (error) {
    console.log(error);
  }
};

const form = document.getElementById("submit-form"); // grab the form element

// Add submit event listerner to the form element.
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents the page from reloading when the form is submitted
  const artistName = document.getElementById("artist-name").value; // Get the the value(artist name) from the input field
  fetchArtistHitSongs(artistName); // fetches the hit songs by the artist
});
