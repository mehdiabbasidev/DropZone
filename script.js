// script.js
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');

dropZone.addEventListener('click', () => {
    fileInput.click();
});

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.classList.remove('dragover');
    const files = event.dataTransfer.files;
    handleFiles(files);
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    handleFiles(files);
});

function handleFiles(files) {
    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        } else {
            console.log('File not supported:', file.name);
        }
    }
}














// // script.js
// const dropZone = document.getElementById('drop-zone');
// const fileInput = document.getElementById('file-input');
// const preview = document.getElementById('preview');

// dropZone.addEventListener('click', () => {
//     fileInput.click();
// });

// dropZone.addEventListener('dragover', (event) => {
//     event.preventDefault();
//     dropZone.classList.add('dragover');
// });

// dropZone.addEventListener('dragleave', () => {
//     dropZone.classList.remove('dragover');
// });

// dropZone.addEventListener('drop', (event) => {
//     event.preventDefault();
//     dropZone.classList.remove('dragover');
//     const files = event.dataTransfer.files;
//     handleFiles(files);
// });

// fileInput.addEventListener('change', (event) => {
//     const files = event.target.files;
//     handleFiles(files);
// });

// function handleFiles(files) {
//     preview.innerHTML = '';
//     for (let file of files) {
//         if (file.type.startsWith('image/')) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 const img = document.createElement('img');
//                 img.src = e.target.result;
//                 preview.appendChild(img);
//             };
//             reader.readAsDataURL(file);
//         } else {
//             console.log('File not supported:', file.name);
//         }
//     }
// }
