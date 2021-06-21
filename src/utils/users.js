const users = []
// Adduser, removeUser, GETUSER, getUserInRoom
const addUser = ({ id, username, room })=>{
     //Clean the data
     username = username.trim().toLowerCase()
     room = room.trim().toLowerCase()

     //Validate the data
     if(!username || !room) {
            return {
                error: 'Username and room are required!'
            }
     }

     //check for existing user
     const existingUser = users.find((user)=>{
         return user.room === room && user.username === username
     })

     //Validate username
     if(existingUser){
         return {
             error: 'Username is in use!'
         }
     }
     
     //Store user 
     const user = {id, username, room}
     users.push(user)
     return { user }
}

//remove user 
const removeUser= (id)=>{
 const index = users.findIndex((user)=> user.id === id)
 if(index !== -1){
     return users.splice(index, 1)[0]
 }
}

const getUser = (id)=>{
    return users.find((user) => user.id === id)
}

const getUserInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room )
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}

//test


addUser({
    id : 22,
    username: 'Souad',
    room : 'casa'
})

addUser({
    id : 42,
    username: 'Mike',
    room : 'casa'
})

addUser({
    id : 32,
    username: 'Souad',
    room : 'Center City'
})

const user = getUser(221)
console.log(user)

const userList = getUserInRoom('fair')
console.log(userList)
