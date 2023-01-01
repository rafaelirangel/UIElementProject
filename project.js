//Create references to the modal
let modal = document.getElementById('modalBody');

//Get open Modal image
let images = document.getElementsByClassName('image');

//Get the img in the modal
let modalImg = document.getElementById('modalPic')


//Add event Listener to open modal
let showModal = function(){
    modal.style.display = 'block';
    modalImg.src = this.src;
    
}

//Add imgs to the modal element
for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', showModal)
}

//Get close button element
let closeBtn = document.getElementsByClassName('closeBtn')[0];
//Add event Listener to close modal
closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})

//Add event Listner for outside click. If you click outside of the modal window, the modal window will close.
window.addEventListener('click', function(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
})

