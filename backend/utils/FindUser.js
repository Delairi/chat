
function FindUser(arr, username,type_search,bool) {

    

    const exist = arr.find(user => user[type_search] == username)
    if(bool){
        if (exist) return true
        return false
    }else{
        return exist
    }
    

}

export default FindUser