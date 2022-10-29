const btn = document.getElementById('btn')
const msgWrappper = document.getElementById('msgWrapper');

btn.onclick = function () {
    let msg = document.getElementById('msg').value;
    let name = document.getElementById('name').value;
    let htmlmsg = '<div class="message"> <h3 class="message__user">'+name+'</h3> <p class="message__text">'+msg+'</p> </div>';
    msgWrappper.insertAdjacentHTML('beforeend', htmlmsg);
    document.getElementById('msg').value = "";
}

