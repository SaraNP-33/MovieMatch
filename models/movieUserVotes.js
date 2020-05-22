module.exports=function(sequelize, DataTypes) {
    var MovieUserVotes = sequelize.define("MovieUserVotes", {
  
      
      votes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
      }
    
  
     
    });
    MovieUserVotes.associate = function(models) {
        MovieUserVotes.belongsTo(models.User)
        MovieUserVotes.belongsTo(models.Movies)
        
    };
  
    
    

return MovieUserVotes;
};

