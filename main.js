function acionar (){
    var result = document.querySelector("#resultado")
    var botao = document.querySelector("#botao")
    var imagem = document.querySelector("img")  
    var data = new Date()
    var hora =19 //data.getHours()
    var minutos =40 //data.getMinutes()
    
   
 
   if (hora <= 12){
             result.innerHTML = ` <strong>bom dia sao exatamente ${hora}: ${minutos}  </strong> `
             document.body.style.backgroundColor = "LightYellow"
             imagem.src = "./manha.jfif"
    }else if (hora <= 18){
             result.innerHTML = ` <strong>boa tarde sao exatamente ${hora} : ${minutos}  </strong> `
             document.body.style.backgroundColor = "PowderBlue"
             imagem.src = "./tarde.jfif"
    }else{
                result.innerHTML = ` <strong>boa noite sao exatamente ${hora} : ${minutos}  </strong> `
                document.body.style.background = "Plum"
                imagem.src = "./pordosol.jfif"

    }
}