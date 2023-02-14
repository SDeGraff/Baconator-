const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {
//	checkPassword(loginPw) {
//	return bcrypt.compareSync(loginPw, this.password);
//	}
}

Posts.init(
	{
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	message: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
  },
  {
	sequelize,
	timestamps: false,
	freezeTableName: true,
	underscored: true,
	modelName: 'posts',
  }
);

module.exports = Posts;
