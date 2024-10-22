// Scroll reveal

ScrollReveal({
    //reset: true,
    distance: '50px',
    duration: 1500,
    delay: 100,
});

ScrollReveal().reveal('.hero-image, .about-image, .visi-misi, .curriculum-box, .psb-box, .psb-image, .alur-slurrr', { origin: 'bottom' });

//  kurikulum data

const items = [
    'Ilmu Tauhid', 'Tahgidzul Qur\'an', 'Tafshinul Qur\'an', 'Tahsinul Qur\'an',
    'Ulumul Qur\'an', 'Ushul Fiqh', 'Fiqh Wanita', 'Fiqh Nikah', 'Syarah Hadits',
    'Mustholahul Hadits', 'Hifdzul Hadits', 'Shiroh Nabawiyah', 'Bahasa Arab',
    'Nahwu', 'Shorof', 'Balaghoh', 'Manajemen Imu Pendidikan Islam', 'Mapel Kauniyyah',
    'Bahasa Indonesia - Ipa', 'Komputer - Matematika', 'Bahasa Inggris', 'Berkuda',
    'Memanah', 'Berenang', 'Tata Boga', 'Kaligrafi', 'Kerajinan Tangan',
    'Hidroponik', 'Taekwondo', 'Kewirausahaan'
  ];

  const container = document.getElementById('curriculum-container');
  const toggleButton = document.getElementById('toggle-button');
  let isShowingAll = false;

  // Function to render items based on screen size and toggle status
  function renderItems() {
    // Clear existing content
    container.innerHTML = '';

    // Get screen width to determine how many items to show
    const screenWidth = window.innerWidth;
    let itemsToShow = items.length;

    // For phone size (below 640px), show 6 items by default
    if (screenWidth < 640) {
      toggleButton.classList.remove('hidden'); // Show the "Show More/Less" button
      itemsToShow = isShowingAll ? items.length : 6;
    } else {
      toggleButton.classList.add('hidden');
    }

    items.slice(0, itemsToShow).forEach(item => {
        const div = document.createElement('div');
        div.classList.add('p-2', 'w-full');

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('bg-gray-50', 'shadow-sm', 'rounded-xl', 'flex', 'p-4', 'h-full', 'w-full', 'justify-center', 'items-center', 'text-center', 'hover:bg-secondary','hover:text-white', 'hover:shadow-md', 'transition-all', 'duration-300');

        const span = document.createElement('span');
        span.classList.add('font-medium', 'text-2xl');
        span.textContent = item;

        innerDiv.appendChild(span);
        div.appendChild(innerDiv);
        container.appendChild(div);
      });
  }

  // Event listener for the Show More/Show Less button
  toggleButton.addEventListener('click', () => {
    isShowingAll = !isShowingAll;
    toggleButton.textContent = isShowingAll ? 'Lihat lebih sedikit' : 'Lebih lebih banyak';
    renderItems();
  });

  // Call renderItems on page load
  renderItems();

  // Add event listener to handle screen resize
  window.addEventListener('resize', renderItems);


