function criar(){
    //criar variaveis e selecionar elementos 
    let input = document.querySelector('input#numero')
    let numero = Number(document.querySelector('input#numero').value)
    let lista = document.querySelector('select#seltab')

    //limpar lista para digitar uma tabuada nova toda vez
    lista.innerHTML = '' 
    
    if(input.value.length == 0){
        alert('[Input vazio] Por favor preencha o input com algum numero')
    }else {
        for(let i = 1 ; i <= 10 ; i++){
            console.log(`${numero} x ${i} = ${numero * i}`)
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            lista.appendChild(item)
        }
    
    } 

    
}
