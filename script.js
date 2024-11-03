// Scroll reveal

ScrollReveal({
  //reset: true,
  distance: '50px',
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal('.hero-image, .about-image, .visi-misi, .curriculum-box, .psb-box, .psb-image, .alur-slurrr', { origin: 'bottom' });

        // Data dari tiga kategori
    const categories = [
        { 
            name: 'Diniyyah', 
            items: [
                'Ilmu Tauhid', 'Tahgidzul Qur\'an', 'Tafshinul Qur\'an', 
                'Tahsinul Qur\'an', 'Ulumul Qur\'an', 'Ushul Fiqh', 'Fiqh Wanita', 
                'Fiqh Nikah', 'Syarah Hadits', 'Mustholahul Hadits', 'Hifdzul Hadits', 
                'Shiroh Nabawiyah', 'Bahasa Arab', 'Nahwu', 'Shorof', 
                'Balaghoh', 'Manajemen Imu Pendidikan Islam'
            ] 
        },
        { 
            name: 'Kauniyyah', 
            items: [
                'Bahasa Indonesia','Ipa', 'Komputer','Matematika', 
                'Bahasa Inggris'
            ] 
        },
        { 
            name: 'Extrakulikuler', 
            items: [
                'Berkuda', 'Memanah', 'Berenang', 'Tata Boga', 'Kaligrafi', 
                'Kerajinan Tangan', 'Hidroponik', 'Taekwondo', 'Kewirausahaan'
            ] 
        }
    ];
    
// Fungsi untuk menampilkan item dalam kategori
function displayItems(container, items, limit = 4, isExpanded = false) {
    const ul = container.querySelector('ul') || document.createElement('ul');
    ul.className = 'list-none';
    ul.innerHTML = '';

    // Tampilkan item dengan batasan atau semuanya
    const itemsToShow = isExpanded ? items : items.slice(0, limit);
    itemsToShow.forEach(item => {
        const li = document.createElement('li');
        li.className = 'bg-gray-50 shadow-sm rounded-xl p-2 text-center mb-2';

        // Membuat span untuk setiap item
        const span = document.createElement('span');
        span.style.fontSize = '1.8rem'; // Ukuran lebih besar dengan pixel
        span.textContent = item;

        // Memasukkan span ke dalam li
        li.appendChild(span);
        ul.appendChild(li);
    });

    // Tambahkan ul ke dalam container kategori jika belum ada
    if (!container.contains(ul)) {
        container.appendChild(ul);
    }
}

// Tampilkan kategori dengan tombol Show All / Show Less
const curriculumContainer = document.getElementById('curriculum-container');
categories.forEach(category => {
    // Buat div kontainer untuk setiap kategori
    const categoryContainer = document.createElement('div');
    categoryContainer.className = 'w-full md:w-auto md:max-w-xs p-4'; // Menambahkan padding dan jarak di antara kontainer

    // Buat judul untuk kategori
    const title = document.createElement('h3');
    title.className = 'font-semibold mb-2 text-primary font-gilroy-bold'; // Gunakan kelas
    title.style.fontSize = '2rem'; // Memperbesar ukuran judul kategori
    title.textContent = category.name;
    categoryContainer.appendChild(title);

    // Status untuk mengetahui apakah item dalam mode ter-expand atau tidak
    let isExpanded = false;
    
    // Tampilkan item dalam batasan 4 item awal
    displayItems(categoryContainer, category.items);

    // Tambahkan tombol Show All / Show Less
    const button = document.createElement('button');
    button.className = 'mt-2 px-4 py-2 bg-blue-500 text-primary rounded-full hover:bg-blue-600 transition-all'; // Menambahkan warna dan efek hover
    button.textContent = 'Lihat lagi';
    button.onclick = () => {
        isExpanded = !isExpanded;
        displayItems(categoryContainer, category.items, 4, isExpanded);
        button.textContent = isExpanded ? 'Lihat sedikit' : 'Lihat lagi';
    };

    // Tambahkan tombol ke dalam kontainer kategori
    categoryContainer.appendChild(button);

    // Masukkan kontainer kategori ke dalam kontainer utama
    curriculumContainer.appendChild(categoryContainer);
});

