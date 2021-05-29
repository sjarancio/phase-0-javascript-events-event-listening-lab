function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
      alert('Hee hee, iwas tickled');
    }
    
    input.addEventListener('click', clickAlert);  
}