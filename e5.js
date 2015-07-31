function checkUsersValid(goodUsers){
    return function(theseUsers){
        return theseUsers.every(function(user){
            return goodUsers.some(function(goodUser){
                return user.id === goodUser.id;
            });
        });
    };
}

module.exports = checkUsersValid;
