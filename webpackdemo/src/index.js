function setText(){
    let box1 = document.getElementById("app");
    if(box1){
        box1.innerHTML = "欢迎来到王者荣耀！";
    }else{
        box1.innerHTML = "你是不是SB";        
    }
    alert(1);
}
setText();