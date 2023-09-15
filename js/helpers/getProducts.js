/*
function getProducts(){
    return window.fetch('').then((res)=>res.json()).then((data)=>data)
}
*/
async function getProducts(){
    try{
        const res = await window.fetch('')
        const data = await res.json()
        return data
    }
    catch (error){
        window.alert('no salio bien :(')
    }
}


export default getProducts