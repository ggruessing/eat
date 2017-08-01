

module.exports = function(sequelize,DataTypes) {

    var burger = sequelize.define("burgers" , {
      name: {
      type: DataTypes.STRING,
      allowNull: false
      },
      devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
      
      date: DataTypes.INTEGER,
  
    
  },{timestamps: false}) 
  return burger  
};

