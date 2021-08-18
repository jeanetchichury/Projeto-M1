var escolha = document.querySelector("button")
escolha.addEventListener("click", function choice(event){
    event.preventDefault()
    var decisao=prompt("Escolha entre 1 ou 2 (digite apenas números)")
    
    while (!decisao.includes(1) && !decisao.includes(2)){
            decisao=prompt("escolha inválida, escolha entre 1 ou 2 (digite apenas números)")
    }

    if (decisao.includes (1)){
        return window.location.replace("HdF1.html")
    }

    else {
        return window.location.replace("../index.html")
    }
}
)