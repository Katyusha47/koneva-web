# Koneva Website - Full Translation System

## Overview
The website now has a complete bilingual translation system with **Indonesian as the default language** and English as the secondary language.

## Features Implemented

### 1. Translation Architecture
- **Default Language**: Indonesian (ID)
- **Secondary Language**: English (EN)
- **Storage**: Language preference saved in localStorage
- **Files**: 
  - `translations.js` - Complete translation object with all text
  - `script.js` - Translation logic and language switcher
  - `index.html` - All translatable elements marked with data-lang attributes

### 2. Translatable Content

#### Navigation
- Menu items: Beranda, Layanan, Tentang, Portfolio, Kontak
- CTA Button: Mulai Sekarang

#### Hero Section
- Badge: Partner Digital Anda
- Title: Transformasikan Bisnis Anda dengan Koneva
- Description, Features, Buttons, Stats, Cards

#### Services Section (All 12 Services)
- Section header
- 4 tabs: Pemasaran, Kreatif, Teknologi, Analitik
- Each service with title, description, and 3 feature items

#### About Section
- Section tag, title, intro paragraph
- 4 milestones (2020, 2022, 2024, 2025)
- 4 value cards

#### Portfolio Section
- Section header
- 4 case studies with category, result, title, description, link

#### Contact Section
- Section header
- Contact info labels (Alamat, Email, Telepon)
- Form placeholders (all fields)
- Submit button

#### Footer
- Description, column headers
- Quick links, services, contact links
- Copyright

### 3. How It Works

1. **On Page Load**:
   - Checks localStorage for saved language preference
   - Defaults to Indonesian (ID) if no preference found
   - Applies translations to all elements with `data-lang` attributes

2. **Language Toggle**:
   - Click globe icon button to switch between ID and EN
   - Button shows current language (ID or EN)
   - Preference saved to localStorage
   - All text updates instantly

3. **Translation Method**:
   - Regular elements: Uses `innerHTML` (preserves HTML tags like `<span>`)
   - Form inputs/textareas: Uses `placeholder` attribute
   - Elements marked with `data-lang` attribute get text from `translations` object
   - Special handling for placeholders with `data-lang-placeholder`

## File Structure

```
koneva/
├── index.html          # Main HTML with data-lang attributes
├── styles.css          # Styles (unchanged)
├── script.js           # Main JavaScript with translation logic
├── translations.js     # Complete translation object (ID and EN)
└── README.md           # This file
```

## Usage

### To Add New Translatable Content:

1. **In HTML**: Add `data-lang` attribute with unique key
   ```html
   <h2 data-lang="my-heading">Indonesian Text</h2>
   ```

2. **In translations.js**: Add translation to both `id` and `en` objects
   ```javascript
   id: {
       'my-heading': 'Teks Indonesia'
   },
   en: {
       'my-heading': 'English Text'
   }
   ```

### For Form Placeholders:

```html
<input type="text" data-lang-placeholder="form-name" placeholder="Nama Anda">
```

## Browser Compatibility
- Works in all modern browsers
- Uses localStorage for persistence
- Graceful fallback if translations not found

## Testing
1. Open website - should display in Indonesian
2. Click language toggle button (globe icon)
3. Text should switch to English
4. Refresh page - language preference should persist
5. Check all sections for proper translation

## Notes
- Indonesian is the DEFAULT language
- All content displays in Indonesian on first visit
- Language preference persists across sessions
- Smooth animations on language switch
- No page reload required for translation changes
