
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`.cv__contents li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`.cv__contents li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('.cv [id]').forEach((section) => {
        observer.observe(section);
    });

});
