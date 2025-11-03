// Translation Object
const translations = {
    id: {
        // Navigation
        'nav-home': 'Beranda',
        'nav-services': 'Layanan',
        'nav-about': 'Tentang',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Kontak',
        'cta-btn': 'Mulai Sekarang',
        
        // Hero Section
        'hero-badge': 'Partner Digital Anda',
        'hero-title': 'Transformasikan Bisnis Anda dengan <span>Koneva</span>',
        'hero-description': 'Strategi digital inovatif yang menghasilkan hasil nyata. Kami tidak hanya memasarkan—kami menciptakan pengalaman yang mengkonversi.',
        'feature-1': 'Berbasis Data',
        'feature-2': 'Bertenaga AI',
        'feature-3': 'Fokus Hasil',
        'btn-start': 'Mulai Perjalanan Anda',
        'btn-demo': 'Tonton Demo',
        
        // Stats
        'stat-clients': 'Klien Aktif',
        'stat-growth': 'Pertumbuhan Rata-rata',
        'stat-success': 'Tingkat Kesuksesan',
        'card-growth': 'Pertumbuhan Cepat',
        'card-secure': 'Aman',
        
        // Services Section
        'services-tag': 'Apa Yang Kami Lakukan',
        'services-title': 'Layanan Yang Mendorong <span>Kesuksesan</span>',
        'services-desc': 'Solusi komprehensif yang dirancang untuk meningkatkan merek Anda dan memaksimalkan dampak digital Anda.',
        'tab-marketing': 'Pemasaran',
        'tab-creative': 'Kreatif',
        'tab-technology': 'Teknologi',
        'tab-analytics': 'Analitik',
        
        // Marketing Services
        'service-1-title': 'SEO & Strategi',
        'service-1-desc': 'Dominasi peringkat pencarian dengan strategi SEO berbasis data yang membawa traffic berkualitas.',
        'service-1-item-1': 'Optimasi SEO Teknis',
        'service-1-item-2': 'Strategi Konten',
        'service-1-item-3': 'Pembuatan Link',
        
        'service-2-title': 'Iklan Berbayar',
        'service-2-desc': 'Maksimalkan ROI dengan kampanye tertarget di Google, Meta, dan platform sosial.',
        'service-2-item-1': 'Manajemen Google Ads',
        'service-2-item-2': 'Iklan Media Sosial',
        'service-2-item-3': 'Kampanye Remarketing',
        
        'service-3-title': 'Pertumbuhan Sosial',
        'service-3-desc': 'Bangun komunitas yang engaged dan perkuat suara merek Anda di seluruh saluran sosial.',
        'service-3-item-1': 'Manajemen Komunitas',
        'service-3-item-2': 'Kemitraan Influencer',
        'service-3-item-3': 'Konten Viral',
        
        // Creative Services
        'service-4-title': 'Identitas Merek',
        'service-4-desc': 'Ciptakan merek yang berkesan yang beresonansi dengan audiens Anda dan menonjol.',
        'service-4-item-1': 'Desain Logo & Visual',
        'service-4-item-2': 'Pedoman Merek',
        'service-4-item-3': 'Positioning Merek',
        
        'service-5-title': 'Produksi Video',
        'service-5-desc': 'Pikat audiens dengan konten video profesional yang menceritakan kisah Anda.',
        'service-5-item-1': 'Video Komersial',
        'service-5-item-2': 'Motion Graphics',
        'service-5-item-3': 'Konten Video Sosial',
        
        'service-6-title': 'Pembuatan Konten',
        'service-6-desc': 'Konten menarik yang melibatkan, mendidik, dan mengkonversi audiens Anda.',
        'service-6-item-1': 'Copywriting',
        'service-6-item-2': 'Konten Blog',
        'service-6-item-3': 'Kampanye Email',
        
        // Technology Services
        'service-7-title': 'Pengembangan Web',
        'service-7-desc': 'Website cepat dan indah yang mengkonversi pengunjung menjadi pelanggan.',
        'service-7-item-1': 'Desain Web Kustom',
        'service-7-item-2': 'Solusi E-commerce',
        'service-7-item-3': 'Optimasi Performa',
        
        'service-8-title': 'Solusi AI',
        'service-8-desc': 'Manfaatkan kecerdasan buatan untuk mengotomatisasi dan mengoptimalkan pemasaran Anda.',
        'service-8-item-1': 'Generasi Konten AI',
        'service-8-item-2': 'Pengembangan Chatbot',
        'service-8-item-3': 'Analitik Prediktif',
        
        'service-9-title': 'Pengembangan Aplikasi',
        'service-9-desc': 'Aplikasi native dan cross-platform yang menyenangkan pengguna dan mendorong engagement.',
        'service-9-item-1': 'Aplikasi iOS & Android',
        'service-9-item-2': 'Progressive Web Apps',
        'service-9-item-3': 'Pemeliharaan Aplikasi',
        
        // Analytics Services
        'service-10-title': 'Pelacakan Performa',
        'service-10-desc': 'Wawasan real-time tentang performa pemasaran dan efektivitas kampanye Anda.',
        'service-10-item-1': 'Dashboard Kustom',
        'service-10-item-2': 'Pemantauan KPI',
        'service-10-item-3': 'Pelacakan Konversi',
        
        'service-11-title': 'Analisis Data',
        'service-11-desc': 'Ubah data mentah menjadi wawasan yang dapat ditindaklanjuti untuk mendorong keputusan bisnis.',
        'service-11-item-1': 'Riset Pasar',
        'service-11-item-2': 'Analisis Kompetitor',
        'service-11-item-3': 'Wawasan Pelanggan',
        
        'service-12-title': 'Optimasi',
        'service-12-desc': 'Tingkatkan kampanye secara berkelanjutan melalui A/B testing dan penyempurnaan berbasis data.',
        'service-12-item-1': 'A/B Testing',
        'service-12-item-2': 'Optimasi Conversion Rate',
        'service-12-item-3': 'Analisis Funnel',
        
        // About Section
        'about-tag': 'Cerita Kami',
        'about-title': 'Mengapa Memilih <span>Koneva</span>?',
        'about-intro': 'Kami bukan hanya agensi biasa. Kami adalah partner pertumbuhan Anda, menggabungkan kreativitas dengan teknologi untuk memberikan hasil yang terukur.',
        'milestone-1-title': 'Pendirian',
        'milestone-1-desc': 'Dimulai dengan visi untuk merevolusi digital marketing',
        'milestone-2-title': 'Ekspansi',
        'milestone-2-desc': 'Berkembang melayani 50+ klien di berbagai industri',
        'milestone-3-title': 'Inovasi',
        'milestone-3-desc': 'Meluncurkan solusi marketing bertenaga AI',
        'milestone-4-title': 'Kepemimpinan',
        'milestone-4-desc': 'Diakui sebagai pemimpin industri dalam transformasi digital',
        
        'value-1-title': 'Inovasi Pertama',
        'value-1-desc': 'Selalu di depan tren',
        'value-2-title': 'Berpusat pada Klien',
        'value-2-desc': 'Kesuksesan Anda adalah misi kami',
        'value-3-title': 'Transparansi',
        'value-3-desc': 'Komunikasi jujur selalu',
        'value-4-title': 'Fokus Hasil',
        'value-4-desc': 'ROI adalah prioritas kami',
        
        // Portfolio Section
        'portfolio-tag': 'Studi Kasus',
        'portfolio-title': 'Kisah <span>Sukses</span>',
        'portfolio-desc': 'Hasil nyata untuk bisnis nyata. Lihat bagaimana kami membantu klien mencapai tujuan mereka.',
        
        'portfolio-1-category': 'E-commerce',
        'portfolio-1-result': '+180% Penjualan',
        'portfolio-1-title': 'Transformasi Merek Fashion',
        'portfolio-1-desc': 'Perombakan digital lengkap yang menghasilkan penjualan online rekor',
        'portfolio-1-link': 'Lihat Studi Kasus',
        
        'portfolio-2-category': 'Kesehatan',
        'portfolio-2-result': '+250% Leads',
        'portfolio-2-title': 'Pertumbuhan Praktik Medis',
        'portfolio-2-desc': 'Kampanye SEO strategis dan marketing lokal',
        'portfolio-2-link': 'Lihat Studi Kasus',
        
        'portfolio-3-category': 'Pendidikan',
        'portfolio-3-result': '+300% Engagement',
        'portfolio-3-title': 'Peluncuran Platform EdTech',
        'portfolio-3-desc': 'Kampanye viral media sosial dan kemitraan influencer',
        'portfolio-3-link': 'Lihat Studi Kasus',
        
        'portfolio-4-category': 'Restoran',
        'portfolio-4-result': '+400% Pesanan',
        'portfolio-4-title': 'Ekspansi Digital Chain Restoran',
        'portfolio-4-desc': 'Strategi multi-channel yang mendorong pesanan online dan kunjungan',
        'portfolio-4-link': 'Lihat Studi Kasus',
        
        // Contact Section
        'contact-tag': 'Hubungi Kami',
        'contact-title': 'Mari <span>Bicara</span>',
        'contact-desc': 'Siap meningkatkan strategi digital marketing Anda? Hubungi kami hari ini untuk jadwalkan konsultasi.',
        'contact-address-title': 'Alamat',
        'contact-address-text': '123 Business Street, Suite 100<br>Kota, Provinsi 12345',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Telepon',
        'form-name': 'Nama Anda',
        'form-phone': 'Nomor Telepon',
        'form-email': 'Alamat Email',
        'form-company': 'Nama Perusahaan',
        'form-message': 'Pesan Anda',
        'form-submit': 'Kirim Pesan',
        
        // Footer
        'footer-desc': 'Meningkatkan kehadiran digital Anda melalui solusi marketing inovatif.',
        'footer-quick': 'Tautan Cepat',
        'footer-services-title': 'Layanan',
        'footer-contact-title': 'Kontak',
        'footer-contact-1': 'Hubungi Kami',
        'footer-contact-2': 'Email Kami',
        'footer-contact-3': 'Telepon Kami',
        'footer-copyright': '© 2025 Koneva. Hak cipta dilindungi.',
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'cta-btn': 'Get Started',
        
        // Hero Section
        'hero-badge': 'Your Digital Partner',
        'hero-title': 'Transform Your Business with <span>Koneva</span>',
        'hero-description': 'Innovative digital strategies that drive real results. We don\'t just market—we create experiences that convert.',
        'feature-1': 'Data-Driven',
        'feature-2': 'AI-Powered',
        'feature-3': 'Results-Focused',
        'btn-start': 'Start Your Journey',
        'btn-demo': 'Watch Demo',
        
        // Stats
        'stat-clients': 'Active Clients',
        'stat-growth': 'Avg Growth',
        'stat-success': 'Success Rate',
        'card-growth': 'Fast Growth',
        'card-secure': 'Secure',
        
        // Services Section
        'services-tag': 'What We Do',
        'services-title': 'Services That Drive <span>Success</span>',
        'services-desc': 'Comprehensive solutions designed to elevate your brand and maximize your digital impact.',
        'tab-marketing': 'Marketing',
        'tab-creative': 'Creative',
        'tab-technology': 'Technology',
        'tab-analytics': 'Analytics',
        
        // Marketing Services
        'service-1-title': 'SEO & Strategy',
        'service-1-desc': 'Dominate search rankings with data-driven SEO strategies that bring qualified traffic.',
        'service-1-item-1': 'Technical SEO Optimization',
        'service-1-item-2': 'Content Strategy',
        'service-1-item-3': 'Link Building',
        
        'service-2-title': 'Paid Advertising',
        'service-2-desc': 'Maximize ROI with targeted campaigns across Google, Meta, and social platforms.',
        'service-2-item-1': 'Google Ads Management',
        'service-2-item-2': 'Social Media Ads',
        'service-2-item-3': 'Remarketing Campaigns',
        
        'service-3-title': 'Social Growth',
        'service-3-desc': 'Build engaged communities and amplify your brand voice across social channels.',
        'service-3-item-1': 'Community Management',
        'service-3-item-2': 'Influencer Partnerships',
        'service-3-item-3': 'Viral Content Creation',
        
        // Creative Services
        'service-4-title': 'Brand Identity',
        'service-4-desc': 'Create memorable brands that resonate with your audience and stand out.',
        'service-4-item-1': 'Logo & Visual Design',
        'service-4-item-2': 'Brand Guidelines',
        'service-4-item-3': 'Brand Positioning',
        
        'service-5-title': 'Video Production',
        'service-5-desc': 'Captivate audiences with professional video content that tells your story.',
        'service-5-item-1': 'Commercial Videos',
        'service-5-item-2': 'Motion Graphics',
        'service-5-item-3': 'Social Video Content',
        
        'service-6-title': 'Content Creation',
        'service-6-desc': 'Compelling content that engages, educates, and converts your audience.',
        'service-6-item-1': 'Copywriting',
        'service-6-item-2': 'Blog Content',
        'service-6-item-3': 'Email Campaigns',
        
        // Technology Services
        'service-7-title': 'Web Development',
        'service-7-desc': 'Fast, beautiful websites that convert visitors into customers.',
        'service-7-item-1': 'Custom Web Design',
        'service-7-item-2': 'E-commerce Solutions',
        'service-7-item-3': 'Performance Optimization',
        
        'service-8-title': 'AI Solutions',
        'service-8-desc': 'Leverage artificial intelligence to automate and optimize your marketing.',
        'service-8-item-1': 'AI Content Generation',
        'service-8-item-2': 'Chatbot Development',
        'service-8-item-3': 'Predictive Analytics',
        
        'service-9-title': 'App Development',
        'service-9-desc': 'Native and cross-platform apps that delight users and drive engagement.',
        'service-9-item-1': 'iOS & Android Apps',
        'service-9-item-2': 'Progressive Web Apps',
        'service-9-item-3': 'App Maintenance',
        
        // Analytics Services
        'service-10-title': 'Performance Tracking',
        'service-10-desc': 'Real-time insights into your marketing performance and campaign effectiveness.',
        'service-10-item-1': 'Custom Dashboards',
        'service-10-item-2': 'KPI Monitoring',
        'service-10-item-3': 'Conversion Tracking',
        
        'service-11-title': 'Data Analysis',
        'service-11-desc': 'Turn raw data into actionable insights that drive business decisions.',
        'service-11-item-1': 'Market Research',
        'service-11-item-2': 'Competitor Analysis',
        'service-11-item-3': 'Customer Insights',
        
        'service-12-title': 'Optimization',
        'service-12-desc': 'Continuously improve campaigns through A/B testing and data-driven refinements.',
        'service-12-item-1': 'A/B Testing',
        'service-12-item-2': 'Conversion Rate Optimization',
        'service-12-item-3': 'Funnel Analysis',
        
        // About Section
        'about-tag': 'Our Story',
        'about-title': 'Why Choose <span>Koneva</span>?',
        'about-intro': 'We\'re not just another agency. We\'re your growth partner, combining creativity with technology to deliver measurable results.',
        'milestone-1-title': 'Foundation',
        'milestone-1-desc': 'Started with a vision to revolutionize digital marketing',
        'milestone-2-title': 'Expansion',
        'milestone-2-desc': 'Grew to serve 50+ clients across multiple industries',
        'milestone-3-title': 'Innovation',
        'milestone-3-desc': 'Launched AI-powered marketing solutions',
        'milestone-4-title': 'Leadership',
        'milestone-4-desc': 'Recognized as industry leaders in digital transformation',
        
        'value-1-title': 'Innovation First',
        'value-1-desc': 'Always ahead of trends',
        'value-2-title': 'Client-Centric',
        'value-2-desc': 'Your success is our mission',
        'value-3-title': 'Transparency',
        'value-3-desc': 'Honest communication always',
        'value-4-title': 'Results-Driven',
        'value-4-desc': 'ROI is our priority',
        
        // Portfolio Section
        'portfolio-tag': 'Case Studies',
        'portfolio-title': 'Success <span>Stories</span>',
        'portfolio-desc': 'Real results for real businesses. See how we\'ve helped our clients achieve their goals.',
        
        'portfolio-1-category': 'E-commerce',
        'portfolio-1-result': '+180% Sales',
        'portfolio-1-title': 'Fashion Brand Transformation',
        'portfolio-1-desc': 'Complete digital overhaul leading to record-breaking online sales',
        'portfolio-1-link': 'View Case Study',
        
        'portfolio-2-category': 'Healthcare',
        'portfolio-2-result': '+250% Leads',
        'portfolio-2-title': 'Medical Practice Growth',
        'portfolio-2-desc': 'Strategic SEO and local marketing campaign',
        'portfolio-2-link': 'View Case Study',
        
        'portfolio-3-category': 'Education',
        'portfolio-3-result': '+300% Engagement',
        'portfolio-3-title': 'EdTech Platform Launch',
        'portfolio-3-desc': 'Social media viral campaign and influencer partnerships',
        'portfolio-3-link': 'View Case Study',
        
        'portfolio-4-category': 'Restaurant',
        'portfolio-4-result': '+400% Orders',
        'portfolio-4-title': 'Restaurant Chain Digital Expansion',
        'portfolio-4-desc': 'Multi-channel strategy driving online orders and foot traffic',
        'portfolio-4-link': 'View Case Study',
        
        // Contact Section
        'contact-tag': 'Get In Touch',
        'contact-title': 'Let\'s <span>Talk</span>',
        'contact-desc': 'Ready to elevate your digital marketing strategy? Contact us today to schedule a consultation.',
        'contact-address-title': 'Address',
        'contact-address-text': '123 Business Street, Suite 100<br>City, State 12345',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Phone',
        'form-name': 'Your Name',
        'form-phone': 'Phone Number',
        'form-email': 'Email Address',
        'form-company': 'Company Name',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-desc': 'Elevating your digital presence through innovative marketing solutions.',
        'footer-quick': 'Quick Links',
        'footer-services-title': 'Services',
        'footer-contact-title': 'Contact',
        'footer-contact-1': 'Get In Touch',
        'footer-contact-2': 'Email Us',
        'footer-contact-3': 'Call Us',
        'footer-copyright': '© 2025 Koneva. All rights reserved.',
    }
};
