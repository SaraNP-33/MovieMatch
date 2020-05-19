module.exports = function(sequelize, DataTypes) {
    var Votes = sequelize.define("Votes", {
  
      
      votes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
  
     
    });
  
    Votes.associate = function(models) {
      models.Votes.belongsTo(models.User, { onDelete: 'cascade' });
  
  };
  
  return Votes;
  
  };