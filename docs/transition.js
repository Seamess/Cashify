document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (link.href.includes(window.location.origin)) {
                e.preventDefault();
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });
});