export const openContactForm = async () => {
    if (window.innerWidth <= 768) {
        // Open the Google Form in a new tab
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSdVtkdvNCKKaduoADF9ioPDTRgag_vOmtbl-Ja_Wn_tu4qNZA/viewform', '_blank');
    } else {
        const Swal = (await import('sweetalert2')).default;

        // Open the Google Form in a SweetAlert popup
        Swal.fire({
            html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdVtkdvNCKKaduoADF9ioPDTRgag_vOmtbl-Ja_Wn_tu4qNZA/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                popup: 'swal-with-iframe',
            },

            width: 750,
            showClass: {
                popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
            },
            hideClass: {
                popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
            }
        });

    }
}