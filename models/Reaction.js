const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (time) => new Date(time).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactionBody:{
        type: String,
        required: true,
        maxLength: 280, 
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;