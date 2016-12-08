import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchSong(term) {
      return $.getJSON({
          url: 'https://api.spotify.com/v1/search',
          data: {
            q: term,
            type: 'track'
          },
        }).then((data) => {
          return data.tracks.items;
        });
    }
  },

  emotions: [
    'clap',
    'grinning',
    'heart_eyes',
    'yum',
    'dancer_tone3',
    'thinking',
    'cry',
    'nauseated_face',
    'metal',
  ]
});