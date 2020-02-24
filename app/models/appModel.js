'user strict';

const sql = require('./db.js');

// Song object constructor
const Song = function(song) {
  this.song = song.song;
  this.name = song.name;
  this.is_current_song = song.is_current_song;
  this.artist = song.artist;
};

Song.getAllSongs = function (result) {
  sql.query("SELECT name FROM song", function (err, res) {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
}

Song.getSongById = function (songId, result) {
  sql.query("SELECT name FROM song WHERE id = ? ", songId, function (err, res) {
    if(err) {
      console.log('Error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
}

//Task object constructor
const Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.createTask = function (newTask, result) {
        sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
};
Task.getTaskById = function (taskId, result) {
        sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);

                }
            });
};
Task.getAllTask = function (result) {
        sql.query("Select * from tasks", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);

                 result(null, res);
                }
            });
};
Task.updateById = function(id, task, result){
  sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{
             result(null, res);
                }
            });
};
Task.remove = function(id, result){
     sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{

                 result(null, res);
                }
            });
};

module.exports = Song;
