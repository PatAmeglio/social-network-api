const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      minLength: 1,
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
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;