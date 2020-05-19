module.exports = function(sequelize, DataTypes) {
    var Movies = sequelize.define("Movies", {
  
      
      movieName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 40]
            }
        },

        movieImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
  
        moviePlot: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        movieGenre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        movieYear: {
            type: DataTypes.INTEGER, 
            allowNull: false,
        }, 

        
     
    });
  
    Movies.associate = function(models) {
      models.Movies.hasMany( models.Votes, { onDelete: 'cascade' });
  
  };

   Movies.associate = function(models) {
       models.Movies.belongsTo(models.User,  { onDelete: 'cascade' });
   };
  
  return Movies;
  
  };