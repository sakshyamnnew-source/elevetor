document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('learn-more');
    const status = document.getElementById('elevator-status');
    
    button.addEventListener('click', function() {
        status.textContent = 'Elevator Status: Arriving at your floor...';
        setTimeout(function() {
            status.textContent = 'Elevator Status: Doors open!';
        }, 2000);
    });
});
