//declarar as variaveis para armazenar a posição do botaõ "no"
let topMod = 0;
let leftMod = 0;

//adicionando um evento ao corpo (body) da página para que a função do botão seja chamada quando o mouse se mover */
$("body").on("mousemove", webHandler);

function webHandler(event){
    let button = $('#no').position();
    let buttonCenter = {
        x: button.left + 50,
        y: button.top + 15
    }
}