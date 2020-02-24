'use strict';

module.exports = function(app) {
  const songs = require('../controllers/appController');

  // Songs Routes
  app.route('/songs')
    .get(songs.list_all_songs);
    //.post(songs.create_a_song);

  app.route('/songs/:songId')
    .get(songs.read_a_song);/*
    .put(songs.update_a_song)
    .delete(songs.delete_a_song);*/
};
