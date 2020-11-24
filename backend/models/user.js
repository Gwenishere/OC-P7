// déclarer const mysql ?

// data model for a user, UserId created by mysql
// const userSchema = abcdef.Schema({
    //email: { type: String, required: true, unique: true},
  //  password: { type: String, required: true}
//});

userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model('user', userSchema); mais pour mysql ???