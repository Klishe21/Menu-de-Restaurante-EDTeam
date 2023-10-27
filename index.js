const showMenu = () => {
    console.log(`CODIGO - PRODUCTO - PRECIO`)
    for(let item of product){
        console.log(`${item.code} - ${item.name} - $${item.cost}`)
    }
}

showMenu()