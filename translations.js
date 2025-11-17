// Translation Object
const translations = {
    id: {
        // Navigation
        'nav-home': 'Beranda',
        'nav-services': 'Layanan',
        'nav-about': 'Tentang Kami',
        'nav-portfolio': 'Hasil Kerja',
        'nav-contact': 'Hubungi',
        'cta-btn': 'Mulai Konsultasi',
        
        // Hero Section
        'hero-badge': 'Partner Digital Terpercaya',
        'hero-title': 'Kembangkan Bisnis Anda dengan <span>Koneva</span>',
        'hero-description': 'Kami bantu bisnis Anda tumbuh di dunia digital dengan strategi praktis dan terukur.',
        'feature-1': 'Solusi Praktis',
        'feature-2': 'Mudah Diimplementasikan',
        'feature-3': 'Harga Terjangkau',
        'btn-start': 'Konsultasi Gratis',
        'btn-demo': 'Lihat Contoh',
        
        // Stats
        'stat-clients': 'Klien UMKM',
        'stat-growth': 'Peningkatan Omzet',
        'stat-success': 'Tingkat Kepuasan',
        'card-growth': 'Cepat Berkembang',
        'card-secure': 'Terpercaya',
        
        // Services Section
        'services-tag': 'Layanan Kami',
        'services-title': 'Solusi Digital untuk <span>Bisnis Anda</span>',
        'services-desc': 'Paket lengkap untuk membuat bisnis Anda lebih dikenal dan meningkatkan penjualan secara online.',
        'tab-marketing': 'Pemasaran Online',
        'tab-creative': 'Desain & Konten',
        'tab-technology': 'Website & Aplikasi',
        'tab-analytics': 'Analisa Bisnis',
        
        // Marketing Services
        'service-1-title': 'Iklan Google & Instagram',
        'service-1-desc': 'Tampilkan bisnis Anda di halaman pertama Google dan Instagram. Biaya terjangkau, hasil terukur.',
        'service-1-item-1': 'Iklan Google',
        'service-1-item-2': 'Iklan Instagram & Facebook',
        'service-1-item-3': 'Laporan Bulanan',
        
        'service-2-title': 'Media Sosial',
        'service-2-desc': 'Kelola akun Instagram, Facebook, dan TikTok bisnis Anda. Kami yang urus, Anda fokus jualan.',
        'service-2-item-1': 'Posting Rutin',
        'service-2-item-2': 'Balas Komentar & Chat',
        'service-2-item-3': 'Desain Konten Menarik',
        
        'service-3-title': 'Marketplace & E-commerce',
        'service-3-desc': 'Optimalkan toko online Anda di Tokopedia, Shopee, dan marketplace lainnya.',
        'service-3-item-1': 'Setup Toko Online',
        'service-3-item-2': 'Foto Produk Profesional',
        'service-3-item-3': 'Strategi Promosi',
        
        // Creative Services
        'service-4-title': 'Logo & Branding',
        'service-4-desc': 'Buat logo dan identitas bisnis yang menarik dan mudah diingat pelanggan.',
        'service-4-item-1': 'Desain Logo',
        'service-4-item-2': 'Kartu Nama & Stempel',
        'service-4-item-3': 'Desain Kemasan Produk',
        
        'service-5-title': 'Foto & Video Produk',
        'service-5-desc': 'Foto dan video produk berkualitas tinggi untuk toko online dan media sosial Anda.',
        'service-5-item-1': 'Foto Produk',
        'service-5-item-2': 'Video Promosi',
        'service-5-item-3': 'Video Testimoni',
        
        'service-6-title': 'Konten Media Sosial',
        'service-6-desc': 'Konten menarik untuk Instagram, Facebook, dan TikTok yang bikin pelanggan tertarik.',
        'service-6-item-1': 'Desain Poster Digital',
        'service-6-item-2': 'Caption Menarik',
        'service-6-item-3': 'Jadwal Posting',
        
        // Technology Services
        'service-7-title': 'Website Toko Online',
        'service-7-desc': 'Buat website toko online sendiri yang mudah dikelola dan terlihat profesional.',
        'service-7-item-1': 'Website Siap Pakai',
        'service-7-item-2': 'Keranjang Belanja',
        'service-7-item-3': 'Gratis Maintenance 3 Bulan',
        
        'service-8-title': 'Website Profil Usaha',
        'service-8-desc': 'Website company profile untuk memperkenalkan bisnis Anda secara profesional.',
        'service-8-item-1': 'Desain Modern & Responsif',
        'service-8-item-2': 'Gratis Domain & Hosting 1 Tahun',
        'service-8-item-3': 'Mudah Dikelola Sendiri',
        
        'service-9-title': 'Sistem Kasir Digital',
        'service-9-desc': 'Aplikasi kasir dan manajemen stok untuk memudahkan operasional toko Anda.',
        'service-9-item-1': 'Catat Penjualan & Stok',
        'service-9-item-2': 'Laporan Keuangan Otomatis',
        'service-9-item-3': 'Bisa Dipakai di HP & Laptop',
        
        // Analytics Services
        'service-10-title': 'Laporan Penjualan',
        'service-10-desc': 'Dapatkan laporan lengkap penjualan dan performa iklan Anda setiap bulan.',
        'service-10-item-1': 'Laporan Mudah Dipahami',
        'service-10-item-2': 'Grafik Penjualan',
        'service-10-item-3': 'Saran Perbaikan',
        
        'service-11-title': 'Konsultasi Bisnis',
        'service-11-desc': 'Konsultasi gratis untuk membantu mengembangkan strategi bisnis online Anda.',
        'service-11-item-1': 'Analisa Target Market',
        'service-11-item-2': 'Strategi Marketing',
        'service-11-item-3': 'Tips Tingkatkan Omzet',
        
        'service-12-title': 'Pelatihan Digital',
        'service-12-desc': 'Pelatihan praktis cara kelola media sosial dan toko online untuk Anda dan tim.',
        'service-12-item-1': 'Materi Mudah Dipraktekkan',
        'service-12-item-2': 'Sertifikat Pelatihan',
        'service-12-item-3': 'Konsultasi Lanjutan',
        
        // About Section
        'about-tag': 'Tentang Koneva',
        'about-title': 'Kenapa Pilih <span>Koneva</span>?',
        'about-intro': 'Partner digital terpercaya untuk UMKM Indonesia. Solusi praktis dengan investasi terjangkau untuk pertumbuhan bisnis Anda.',
        'milestone-1-title': '2020 - Memulai',
        'milestone-1-desc': 'Dimulai dengan membantu UMKM lokal go online',
        'milestone-2-title': '2022 - Berkembang',
        'milestone-2-desc': 'Melayani 100+ UMKM di seluruh Indonesia',
        'milestone-3-title': '2024 - Berinovasi',
        'milestone-3-desc': 'Menghadirkan solusi digital terjangkau untuk semua',
        'milestone-4-title': '2025 - Terpercaya',
        'milestone-4-desc': 'Menjadi partner digital pilihan UMKM Indonesia',
        
        'value-1-title': 'Solusi Praktis',
        'value-1-desc': 'Strategi digital yang efektif dan efisien',
        'value-2-title': 'Harga Terjangkau',
        'value-2-desc': 'Investasi cerdas untuk pertumbuhan bisnis',
        'value-3-title': 'Tumbuhkan Bisnis',
        'value-3-desc': 'Tingkatkan omzet dan jangkauan pelanggan',
        'value-4-title': 'Dukungan Penuh',
        'value-4-desc': 'Pendampingan bisnis yang konsisten',
        
        // Portfolio Section
        'portfolio-tag': 'Hasil Kerja Kami',
        'portfolio-title': 'Cerita <span>Sukses</span> Klien',
        'portfolio-desc': 'Lihat bagaimana kami membantu UMKM seperti Anda meningkatkan penjualan dan berkembang.',
        
        'portfolio-1-category': 'Fashion & Pakaian',
        'portfolio-1-result': '+180% Penjualan',
        'portfolio-1-title': 'Toko Baju Online',
        'portfolio-1-desc': 'Dari toko offline ke omzet ratusan juta per bulan lewat Instagram dan marketplace',
        'portfolio-1-link': 'Lihat Detail',
        
        'portfolio-2-category': 'Kuliner & Makanan',
        'portfolio-2-result': '+250% Pesanan',
        'portfolio-2-title': 'Usaha Catering & Snack',
        'portfolio-2-desc': 'Meningkatkan pesanan dengan strategi marketing WhatsApp dan Instagram',
        'portfolio-2-link': 'Lihat Detail',
        
        'portfolio-3-category': 'Kecantikan & Salon',
        'portfolio-3-result': '+300% Pelanggan',
        'portfolio-3-title': 'Salon & Klinik Kecantikan',
        'portfolio-3-desc': 'Mendapatkan lebih banyak pelanggan baru melalui Google dan media sosial',
        'portfolio-3-link': 'Lihat Detail',
        
        'portfolio-4-category': 'Produk Rumahan',
        'portfolio-4-result': '+400% Omzet',
        'portfolio-4-title': 'Produk Makanan Rumahan',
        'portfolio-4-desc': 'Dari jualan kecil-kecilan jadi bisnis dengan puluhan reseller',
        'portfolio-4-link': 'Lihat Detail',
        
        // Contact Section
        'contact-tag': 'Hubungi Kami',
        'contact-title': 'Yuk <span>Konsultasi</span> Gratis',
        'contact-desc': 'Mau tanya-tanya dulu? Atau langsung mulai? Hubungi kami sekarang, konsultasi gratis!',
        'contact-address-title': 'Alamat Kantor',
        'contact-address-text': 'Jl. Contoh No. 123<br>Jakarta Selatan 12345',
        'contact-email-title': 'Email',
        'contact-phone-title': 'WhatsApp',
        'form-name': 'Nama Lengkap',
        'form-phone': 'Nomor WhatsApp',
        'form-email': 'Email',
        'form-company': 'Nama Usaha',
        'form-message': 'Ceritakan tentang usaha Anda',
        'form-submit': 'Kirim Pesan',
        
        // Footer
        'footer-desc': 'Partner digital terpercaya untuk UMKM Indonesia. Kami bantu bisnis Anda berkembang.',
        'footer-quick': 'Menu',
        'footer-services-title': 'Layanan Kami',
        'footer-contact-title': 'Hubungi',
        'footer-contact-1': 'Chat WhatsApp',
        'footer-contact-2': 'Kirim Email',
        'footer-contact-3': 'Telepon Kami',
        'footer-copyright': '© 2025 Koneva. Partner Digital UMKM Indonesia.',
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'nav-portfolio': 'Our Work',
        'nav-contact': 'Contact',
        'cta-btn': 'Start Consultation',
        
        // Hero Section
        'hero-badge': 'Trusted Digital Partner',
        'hero-title': 'Grow Your Business with <span>Koneva</span>',
        'hero-description': 'We help your business grow with practical, measurable digital strategies.',
        'feature-1': 'Practical Solutions',
        'feature-2': 'Easy To Implement',
        'feature-3': 'Affordable',
        'btn-start': 'Free Consultation',
        'btn-demo': 'See Examples',
        
        // Stats
        'stat-clients': 'SME Clients',
        'stat-growth': 'Revenue Increase',
        'stat-success': 'Satisfaction Rate',
        'card-growth': 'Fast Growing',
        'card-secure': 'Trusted',
        
        // Services Section
        'services-tag': 'Our Services',
        'services-title': 'Digital Solutions for <span>Your Business</span>',
        'services-desc': 'Complete packages to make your business more visible and increase online sales.',
        'tab-marketing': 'Online Marketing',
        'tab-creative': 'Design & Content',
        'tab-technology': 'Website & Apps',
        'tab-analytics': 'Business Analysis',
        
        // Marketing Services
        'service-1-title': 'Google & Instagram Ads',
        'service-1-desc': 'Show your business on first page of Google and Instagram. Affordable cost, measurable results.',
        'service-1-item-1': 'Google Advertising',
        'service-1-item-2': 'Instagram & Facebook Ads',
        'service-1-item-3': 'Monthly Reports',
        
        'service-2-title': 'Social Media',
        'service-2-desc': 'Manage your Instagram, Facebook, and TikTok business accounts. We handle it, you focus on sales.',
        'service-2-item-1': 'Regular Posting',
        'service-2-item-2': 'Reply Comments & Chats',
        'service-2-item-3': 'Attractive Content Design',
        
        'service-3-title': 'Marketplace & E-commerce',
        'service-3-desc': 'Optimize your online store on Tokopedia, Shopee, and other marketplaces.',
        'service-3-item-1': 'Online Store Setup',
        'service-3-item-2': 'Professional Product Photos',
        'service-3-item-3': 'Promotion Strategy',
        
        // Creative Services
        'service-4-title': 'Logo & Branding',
        'service-4-desc': 'Create attractive and memorable logo and business identity for customers.',
        'service-4-item-1': 'Logo Design',
        'service-4-item-2': 'Business Cards & Stamps',
        'service-4-item-3': 'Product Packaging Design',
        
        'service-5-title': 'Product Photo & Video',
        'service-5-desc': 'High-quality product photos and videos for your online store and social media.',
        'service-5-item-1': 'Product Photography',
        'service-5-item-2': 'Promotional Videos',
        'service-5-item-3': 'Testimonial Videos',
        
        'service-6-title': 'Social Media Content',
        'service-6-desc': 'Attractive content for Instagram, Facebook, and TikTok that engages customers.',
        'service-6-item-1': 'Digital Poster Design',
        'service-6-item-2': 'Engaging Captions',
        'service-6-item-3': 'Posting Schedule',
        
        // Technology Services
        'service-7-title': 'Online Store Website',
        'service-7-desc': 'Create your own online store website that is easy to manage and looks professional.',
        'service-7-item-1': 'Ready-to-Use Website',
        'service-7-item-2': 'Shopping Cart',
        'service-7-item-3': 'Free 3-Month Maintenance',
        
        'service-8-title': 'Business Profile Website',
        'service-8-desc': 'Company profile website to introduce your business professionally.',
        'service-8-item-1': 'Modern & Responsive Design',
        'service-8-item-2': 'Free Domain & Hosting 1 Year',
        'service-8-item-3': 'Easy Self-Management',
        
        'service-9-title': 'Digital POS System',
        'service-9-desc': 'Cashier and stock management app to simplify your store operations.',
        'service-9-item-1': 'Track Sales & Stock',
        'service-9-item-2': 'Automatic Financial Reports',
        'service-9-item-3': 'Works on Phone & Laptop',
        
        // Analytics Services
        'service-10-title': 'Sales Reports',
        'service-10-desc': 'Get complete reports on your sales and ad performance every month.',
        'service-10-item-1': 'Easy-to-Understand Reports',
        'service-10-item-2': 'Sales Charts',
        'service-10-item-3': 'Improvement Suggestions',
        
        'service-11-title': 'Business Consultation',
        'service-11-desc': 'Free consultation to help develop your online business strategy.',
        'service-11-item-1': 'Target Market Analysis',
        'service-11-item-2': 'Marketing Strategy',
        'service-11-item-3': 'Tips to Increase Revenue',
        
        'service-12-title': 'Digital Training',
        'service-12-desc': 'Practical training on how to manage social media and online stores for you and your team.',
        'service-12-item-1': 'Easy-to-Practice Materials',
        'service-12-item-2': 'Training Certificate',
        'service-12-item-3': 'Follow-up Consultation',
        
        // About Section
        'about-tag': 'About Koneva',
        'about-title': 'Why Choose <span>Koneva</span>?',
        'about-intro': 'Trusted digital partner for Indonesian SMEs. Practical solutions with affordable investment for your business growth.',
        'milestone-1-title': '2020 - Starting',
        'milestone-1-desc': 'Started by helping local SMEs go online',
        'milestone-2-title': '2022 - Growing',
        'milestone-2-desc': 'Serving 100+ SMEs across Indonesia',
        'milestone-3-title': '2024 - Innovating',
        'milestone-3-desc': 'Providing affordable digital solutions for all',
        'milestone-4-title': '2025 - Trusted',
        'milestone-4-desc': 'Becoming the preferred digital partner for Indonesian SMEs',
        
        'value-1-title': 'Practical Solutions',
        'value-1-desc': 'Effective and efficient digital strategies',
        'value-2-title': 'Affordable Prices',
        'value-2-desc': 'Smart investment for business growth',
        'value-3-title': 'Grow Your Business',
        'value-3-desc': 'Increase revenue and customer reach',
        'value-4-title': 'Full Support',
        'value-4-desc': 'Consistent business mentoring',
        
        // Portfolio Section
        'portfolio-tag': 'Our Work',
        'portfolio-title': 'Client Success <span>Stories</span>',
        'portfolio-desc': 'See how we help SMEs like you increase sales and grow.',
        
        'portfolio-1-category': 'Fashion & Clothing',
        'portfolio-1-result': '+180% Sales',
        'portfolio-1-title': 'Online Clothing Store',
        'portfolio-1-desc': 'From offline store to hundreds of millions monthly revenue via Instagram and marketplace',
        'portfolio-1-link': 'View Details',
        
        'portfolio-2-category': 'Culinary & Food',
        'portfolio-2-result': '+250% Orders',
        'portfolio-2-title': 'Catering & Snack Business',
        'portfolio-2-desc': 'Increased orders with WhatsApp and Instagram marketing strategy',
        'portfolio-2-link': 'View Details',
        
        'portfolio-3-category': 'Beauty & Salon',
        'portfolio-3-result': '+300% Customers',
        'portfolio-3-title': 'Salon & Beauty Clinic',
        'portfolio-3-desc': 'Getting more new customers through Google and social media',
        'portfolio-3-link': 'View Details',
        
        'portfolio-4-category': 'Home Products',
        'portfolio-4-result': '+400% Revenue',
        'portfolio-4-title': 'Home-Made Food Products',
        'portfolio-4-desc': 'From small sales to business with dozens of resellers',
        'portfolio-4-link': 'View Details',
        
        // Contact Section
        'contact-tag': 'Contact Us',
        'contact-title': 'Let\'s <span>Consult</span> for Free',
        'contact-desc': 'Want to ask first? Or start right away? Contact us now, free consultation!',
        'contact-address-title': 'Office Address',
        'contact-address-text': 'Jl. Example No. 123<br>South Jakarta 12345',
        'contact-email-title': 'Email',
        'contact-phone-title': 'WhatsApp',
        'form-name': 'Full Name',
        'form-phone': 'WhatsApp Number',
        'form-email': 'Email',
        'form-company': 'Business Name',
        'form-message': 'Tell us about your business',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-desc': 'Trusted digital partner for Indonesian SMEs. We help your business grow.',
        'footer-quick': 'Menu',
        'footer-services-title': 'Our Services',
        'footer-contact-title': 'Contact',
        'footer-contact-1': 'Chat WhatsApp',
        'footer-contact-2': 'Send Email',
        'footer-contact-3': 'Call Us',
        'footer-copyright': '© 2025 Koneva. Indonesian SME Digital Partner.',
    }
};
