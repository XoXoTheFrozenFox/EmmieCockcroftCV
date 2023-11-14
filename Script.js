document.addEventListener('DOMContentLoaded', function () {
    console.log("Created by Bernard Swanepoel")
    const imgBx = document.querySelector('.imgBx');
    const modal = document.getElementById('customModal');

    imgBx.addEventListener('mouseover', applyGoldScale);
    imgBx.addEventListener('mouseout', handleMouseOut);


    imgBx.addEventListener('touchstart', (event) => {
        event.preventDefault();
        applyGoldScale();
        showCustomModal();
    });
    
    imgBx.addEventListener('touchend', (event) => {
        event.preventDefault();
        handleTouchEnd();
    });

    function applyGoldScale() {
        imgBx.style.filter = 'grayscale(100%) sepia(100%)';
    }

    function removeGoldScale() {
        imgBx.style.filter = 'grayscale(0%) sepia(0%)';
    }

    function handleMouseOut() {
        if (!modal.style.display || modal.style.display === 'none') {
            removeGoldScale();
        }
    }

    function handleTouchEnd() {
        if (!modal.style.display || modal.style.display === 'none') {
            removeGoldScale();
        }
    }

    imgBx.addEventListener('click', () => {
        showCustomModal();
    });

    // Modal-related functions
    function showCustomModal() {
        modal.style.display = 'block';
        applyGoldScale(); // Apply grayscale when modal is displayed
    }

    function closeModal() {
        modal.style.display = 'none';
        removeGoldScale(); // Remove grayscale when modal is closed
    }


    window.showCustomModal = showCustomModal;
    window.closeModal = closeModal;
});
