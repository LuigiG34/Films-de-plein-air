let acceptBtn = document.querySelector('.btn-accept');
let refuseBtn = document.querySelector('.btn-refuse');
let toast = document.querySelector('.toast');

let arrayBtn = [acceptBtn,refuseBtn];

arrayBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        toast.style.display = "none";
    })    
});