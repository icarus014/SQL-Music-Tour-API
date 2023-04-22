'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stage, StageEvent, MeetGreet, SetTime}) {
      // define association here
      Event.belongsToMany(Stage, {
        through: StageEvent,
        foreignKey: 'event_id',
        as: 'stages'
      })
      Event.hasMany(MeetGreet, {
        foreignKey:'event_id',
        as: 'meet_greets'
      })
      Event.hasMany(SetTime, {
        foreignKey:'event_id',
        as: 'set_times'
      })
    }
  }
  Event.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};