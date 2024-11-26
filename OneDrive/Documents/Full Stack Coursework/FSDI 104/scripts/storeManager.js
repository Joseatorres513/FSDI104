const LS_KEY = "services";

function save(service){
   /* console.log(service); //obj */
    let data = read();
    data.push(service);
    let val = JSON.stringify(data);
    /*console.log(val); //JSON*/
    localStorage.setItem(LS_KEY,val);
}

function read() {
    let data = localStorage.getItem(LS_KEY);

    if(!data){//Not data? true or false
        return []; // creating the array
    }else{
        let list = JSON.parse(data);// parse the string back into obj
        return list;
    }
    /*document.write(data);
    return data;   */
}