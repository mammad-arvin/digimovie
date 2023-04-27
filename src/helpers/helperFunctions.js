const miniName=(name)=>{
    if(name.length >= 6){
        const newName=name.split("").splice(0,5);
        return newName.join("") +"..."
    }else{
        return name
    }
}
export { miniName}