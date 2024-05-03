const { DataTypes } = require('sequelize');
const db = require('../DB/dbConnect');

const Music = db.define(
  'Music',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lien: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artiste: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
);

module.exports = Music;