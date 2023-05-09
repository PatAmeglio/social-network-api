const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\w+@\w+\.\w+/, "Must match a valid email address!"],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;