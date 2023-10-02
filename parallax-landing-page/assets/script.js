let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');
let grass = document.getElementById('grass');

function updateParallax() {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  treeLeft.style.left = value * -1.5 + 'px';
  treeRight.style.left = value * 1.5 + 'px';
  gateLeft.style.left = value * 0.5 + 'px';
  gateRight.style.left = value * -0.5 + 'px';
  grass.style.marginTop = value * -1.0 + 'px';
}

window.addEventListener('scroll', () => {
  updateParallax();
});

// // Menambahkan event listener untuk saat window diresize
// window.addEventListener('resize', () => {
//   // Cek ukuran layar saat ini
//   if (window.innerWidth <= 425) {
//     // Jika ukuran layar <= 425px, hapus event listener scroll dan atur parallax ke nilai awal
//     window.removeEventListener('scroll', updateParallax);
//     text.style.marginTop = '0';
//     treeLeft.style.left = '0';
//     treeRight.style.left = '0';
//     gateLeft.style.left = '0';
//     gateRight.style.left = '0';
//     grass.style.marginTop = '0';
//   } else {
//     // Jika ukuran layar > 425px, tambahkan kembali event listener scroll
//     window.addEventListener('scroll', updateParallax);
//   }
// });

// // Panggil fungsi updateParallax saat halaman dimuat
// updateParallax();
