const os = require('os')//module
//info about current user
const user = os.userInfo()
/*os cest le nom de la variable 
                        c'est la méthode que je cherche sur des 
                        informations d'un utilisateur*/
console.log(user)
//methode returns the system uptime in seconds
//consol.log(`the system uptime is ${OS.uptime()} seconds`)
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)