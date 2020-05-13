module.exports = function(sequelize, DataTypes) {
    var movieRating = sequelize.define("movieRating", {
        id: DataTypes.integer,
        userName:  DataTypes.string,
        movieName: DataTypes.string,
        rating: DataTypes.double,
    
    });
  return movieRating;
};

