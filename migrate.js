const bcrypt = require('bcrypt-nodejs');
const User = require('./models/User');
const data={
    username:'admin',
    password:bcrypt.hashSync('password'),
    admin:true
};
User.create(data,(err,docs)=>{
   if(err){
       throw err
   }else{
       console.log('Migration Finished!');
       process.exit(0);
   }
});