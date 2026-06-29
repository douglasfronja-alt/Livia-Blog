function iniciar(){

    for(let i=1;i<=2;i++){

        let like=localStorage.getItem("like"+i)||0;
        let joinha=localStorage.getItem("joinha"+i)||0;

        document.getElementById("like"+i).textContent=like;
        document.getElementById("joinha"+i).textContent=joinha;

    }

}

function curtir(id){

    let numero=parseInt(document.getElementById("like"+id).textContent);

    numero++;

    document.getElementById("like"+id).textContent=numero;

    localStorage.setItem("like"+id,numero);

}

function joinha(id){

    let numero=parseInt(document.getElementById("joinha"+id).textContent);

    numero++;

    document.getElementById("joinha"+id).textContent=numero;

    localStorage.setItem("joinha"+id,numero);

}

iniciar();