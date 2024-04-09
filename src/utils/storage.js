


const getStoredData = () =>{
    let properties = [];

    const storedProperty = localStorage.getItem('bookmark');
    if(storedProperty){
        properties = JSON.parse(storedProperty);
    }

    return properties;
}



const saveStoredData = property =>{
    const properties = getStoredData();
    properties.push(property);
    localStorage.setItem('bookmark', JSON.stringify(properties));
    alert('Added to Bookmark');
}

export {getStoredData, saveStoredData}