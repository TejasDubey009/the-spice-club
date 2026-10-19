/**
 * THE SPICE CLUB RESTAURANT - QANAT QUARTIER, THE PEARL DOHA
 * Client-side Application Engine
 * Features:
 * - Realistic 3D Audio-synthesized Flipbook (Heyzine inspired)
 * - Dual Desktop / Single Mobile Adaptive Flipbook Layout
 * - Searchable & Filterable Live Menu with Dietary Flags
 * - Interactive Mobile-First Table Reservation System
 * - One-Tap WhatsApp Concierge & Calendar Integration
 */

// Embedded full menu dataset (67 authentic items extracted from the 15 restaurant menu pages)
const MENU_DATA = [
  {
    category: 'Desi Momos',
    categoryAr: 'المومو الهندي',
    page: 1,
    description: 'Handcrafted Himalayan dumplings filled with aromatic herbs, served with spicy roasted sesame dip.',
    items: [
      { id: 'm1', name: 'Desi Chicken Momo (Steamed)', nameAr: 'مومو دجاج مبخر', price: 28, veg: false, spicy: 1, desc: 'Juicy chicken filling wrapped in delicate dough, steamed to perfection for a light and flavorful bite.' },
      { id: 'm2', name: 'Desi Chicken Momo (Fried)', nameAr: 'مومو دجاج مقلي', price: 30, veg: false, spicy: 2, desc: 'Crispy on the outside, tender spiced chicken filling inside — a bold twist on the classic momo.' },
      { id: 'm3', name: 'Chicken Tandoori Momo', nameAr: 'مومو دجاج تندوري', price: 35, veg: false, spicy: 3, desc: 'Juicy chicken momos coated in a smoky tandoori marinade and charred over live charcoal.', special: true },
      { id: 'm4', name: 'Desi Vegetable Momo (Steamed)', nameAr: 'مومو خضار مبخر', price: 24, veg: true, spicy: 1, desc: 'Finely chopped garden vegetables with Himalayan herbs in delicate steamed wrappers.' },
      { id: 'm5', name: 'Desi Vegetable Momo (Fried)', nameAr: 'مومو خضار مقلي', price: 26, veg: true, spicy: 2, desc: 'Golden crispy dumplings stuffed with seasoned fresh vegetables and ginger.' },
      { id: 'm6', name: 'Vegetable Tandoori Momo', nameAr: 'مومو خضار تندوري', price: 32, veg: true, spicy: 3, desc: 'Crispy vegetable dumplings roasted in tandoor with aromatic spice crust.', special: true }
    ]
  },
  {
    category: 'Royal Biryanis & Rice',
    categoryAr: 'البرياني الملكي والأرز',
    page: 2,
    description: 'Fragrant long-grain aged Basmati rice layered with slow-cooked meats or vegetables, saffron, and Awadhi dum spices.',
    items: [
      { id: 'b1', name: 'The Spice Club Butter Chicken Biryani', nameAr: 'برياني بتر تشيكن الخاص', price: 42, veg: false, spicy: 2, desc: 'Our signature fusion masterpiece — tandoori chicken simmered in rich makhani gravy layered with saffron basmati rice.', special: true },
      { id: 'b2', name: 'Dum Pukht Mutton Biryani', nameAr: 'برياني لحم ضأن دم بخت', price: 48, veg: false, spicy: 2, desc: 'Tender lamb chunks marinated in royal Awadhi spices and slow-cooked in a sealed clay handi.', special: true },
      { id: 'b3', name: 'Chicken Tikka Biryani', nameAr: 'برياني تكا دجاج', price: 38, veg: false, spicy: 2, desc: 'Smoky char-grilled chicken tikka layered with spiced basmati rice, caramelized onions, and fresh mint.' },
      { id: 'b4', name: 'Tandoori Chicken Biryani', nameAr: 'برياني دجاج تندوري', price: 36, veg: false, spicy: 2, desc: 'Classic whole tandoori-spiced chicken pieces tossed with aromatic spiced rice.' },
      { id: 'b5', name: 'Prawns Biryani', nameAr: 'برياني روبيان', price: 48, veg: false, spicy: 2, desc: 'Succulent Arabian Gulf prawns simmered with saffron, crushed spices, and fluffy basmati rice.' },
      { id: 'b6', name: 'Egg Biryani', nameAr: 'برياني بيض', price: 28, veg: false, spicy: 1, desc: 'Golden pan-roasted spiced eggs layered over aromatic herbal basmati rice.' },
      { id: 'b7', name: 'Paneer Tikka Biryani', nameAr: 'برياني بانير تكا', price: 32, veg: true, spicy: 2, desc: 'Char-grilled cottage cheese tikka cubes with mint, saffron, and spiced basmati rice.' },
      { id: 'b8', name: 'Paneer Butter Biryani', nameAr: 'برياني بانير زبدة', price: 30, veg: true, spicy: 1, desc: 'Fragrant basmati rice gently cooked with creamy butter-infused spiced cottage cheese.' },
      { id: 'b9', name: 'Royal Veg Biryani', nameAr: 'برياني خضار ملكي', price: 22, veg: true, spicy: 1, desc: 'Fragrant basmati rice layered with spiced garden vegetables, mint, and toasted saffron.' }
    ]
  },
  {
    category: 'Tandoor & Charcoal Kebabs',
    categoryAr: 'مشاوي وكباب التندور',
    page: 3,
    description: 'Slow-roasted over authentic clay tandoors with signature marinades of hung curd, Kashmiri chilies, and whole ground spices.',
    items: [
      { id: 'k1', name: 'Chicken Seekh Kebab', nameAr: 'كباب دجاج سيخ', price: 35, veg: false, spicy: 2, desc: 'Spiced minced chicken skewers with green chilies, coriander, and royal garam masala grilled to juicy perfection.' },
      { id: 'k2', name: 'Mutton Seekh Kebab', nameAr: 'كباب لحم سيخ', price: 40, veg: false, spicy: 2, desc: 'Prime minced lamb skewers seasoned with aromatic herbs and char-grilled for a rich, smoky essence.' },
      { id: 'k3', name: 'Mutton Galouti Kebab', nameAr: 'كباب جلاوتي لحم لكناوي', price: 40, veg: false, spicy: 1, desc: 'The legendary Lucknowi delicacy — melt-in-the-mouth smoked minced lamb infused with 32 secret spices.', special: true },
      { id: 'k4', name: 'Grand Royal Kebab Platter', nameAr: 'طبق مشاوي مشكل فاخر', price: 75, veg: false, spicy: 2, desc: 'Lavish assortment of Murgh Tikka, Reshmi Kebab, Mutton Seekh, and Tandoori Prawns with mint dip.', special: true },
      { id: 'k5', name: 'Punjabi Chicken Tikka', nameAr: 'تكا دجاج بنجابي', price: 35, veg: false, spicy: 2, desc: 'Boneless chicken cubes marinated in mustard oil, roasted cumin, and pickle spices.' },
      { id: 'k6', name: 'Reshmi Malai Kebab', nameAr: 'كباب رشمي مالاي دجاج', price: 37, veg: false, spicy: 1, desc: 'Tender chicken supreme infused with cashews, heavy cream, cardamom, and white pepper.' },
      { id: 'k7', name: 'Murgh Mint Kebab', nameAr: 'كباب دجاج بالنعناع', price: 35, veg: false, spicy: 2, desc: 'Succulent chicken pieces coated in fresh garden mint, coriander, and zesty lemon glaze.' },
      { id: 'k8', name: 'Classic Tandoori Chicken (Half / Full)', nameAr: 'دجاج تندوري كلاسيكي', price: 45, veg: false, spicy: 2, desc: 'Whole spring chicken marinated overnight in Kashmiri deggi mirch and roasted in glowing clay tandoor.' },
      { id: 'k9', name: 'Chicken Tiranga Kebab', nameAr: 'كباب دجاج تيرانجا ثلاثي', price: 38, veg: false, spicy: 2, desc: 'Tricolor tasting trio combining spicy Tikka, rich Malai Kebab, and fragrant Mint Kebab.', special: true }
    ]
  },
  {
    category: 'Heritage Mutton Curries',
    categoryAr: 'إدامات اللحم التراثية',
    page: 4,
    description: 'Simmered low and slow for hours to extract deep marrow richness and complex spice symphonies.',
    items: [
      { id: 'c1', name: 'Kadai Gosht', nameAr: 'كاداي غوشت لحم', price: 45, veg: false, spicy: 3, desc: 'Tender lamb chunks braised with crushed coriander seeds, bell peppers, and tangy tomato kadai masala.' },
      { id: 'c2', name: 'Keema Matar Masala', nameAr: 'قيمة لحم بالبازلاء', price: 45, veg: false, spicy: 2, desc: 'Rich minced lamb and tender green peas simmered in a robust, caramelized onion-tomato gravy.' },
      { id: 'c3', name: 'Royal Rajasthani Laal Maas', nameAr: 'لال ماس راجستاني حار', price: 45, veg: false, spicy: 3, desc: 'Fierce royal Rajasthani lamb curry prepared with Mathania red chilies, garlic, and smoky ghee.', special: true },
      { id: 'c4', name: 'Awadhi Mutton Rogan Josh', nameAr: 'روغان جوش كشميري', price: 48, veg: false, spicy: 2, desc: 'Traditional Kashmiri slow-cooked lamb in aromatic gravy infused with alkanet root and fennel.' }
    ]
  },
  {
    category: 'Royal Chicken Curries',
    categoryAr: 'إدامات الدجاج الفاخرة',
    page: 8,
    description: 'From decadent creamy makhani to fiery regional curries, prepared with prime boneless chicken.',
    items: [
      { id: 'cc1', name: 'The Spice Club Butter Chicken', nameAr: 'دجاج بالزبدة الفاخر', price: 37, veg: false, spicy: 1, desc: 'Charred tandoori chicken simmered in a velvety sun-ripened tomato, butter, and honey-fenugreek gravy.', special: true },
      { id: 'cc2', name: 'Murgh Tikka Masala', nameAr: 'تكا مسالا دجاج', price: 35, veg: false, spicy: 2, desc: 'Smoky grilled chicken tikka simmered in a creamy, medium-spiced tomato-onion sauce.' },
      { id: 'cc3', name: 'Makhmali Murgh Tikka Masala', nameAr: 'مخملي دجاج تكا مسالا', price: 38, veg: false, spicy: 1, desc: 'Delicate chicken tikka in a mild, silk-smooth buttery gravy with cashew paste.' },
      { id: 'cc4', name: 'Kadai Chicken', nameAr: 'كاداي دجاج', price: 38, veg: false, spicy: 3, desc: 'Chicken tossed with wok-charred capsicum, red onions, and freshly ground kadai spices.' },
      { id: 'cc5', name: 'Dum Ka Murgh', nameAr: 'دم كا دجاج حيدر آبادي', price: 50, veg: false, spicy: 2, desc: 'Tender chicken slow-cooked on dum with rich cashew paste, fried onions, and saffron essence.', special: true },
      { id: 'cc6', name: 'Murgh Musallam', nameAr: 'دجاج مسلم فاخر بالجبن', price: 50, veg: false, spicy: 2, desc: 'Mughlai whole chicken specialty in decadent spiced gravy topped with melted golden cheese.' },
      { id: 'cc7', name: 'Rara Chicken', nameAr: 'رارا دجاج مع مفروم اللحم', price: 40, veg: false, spicy: 3, desc: 'Tender bone-in chicken braised together with minced meat in an intensely rich spiced reduction.' },
      { id: 'cc8', name: 'Chicken Kolhapuri', nameAr: 'دجاج كولهابوري حار', price: 35, veg: false, spicy: 3, desc: 'Fiery Maharashtra-style chicken curry crafted with roasted coconut, sesame, and dried red chilies.' }
    ]
  },
  {
    category: 'Seafood & Coastal Curries',
    categoryAr: 'مأكولات بحرية وإدامات ساحلية',
    page: 9,
    description: 'Fresh Arabian Gulf catch paired with coconut milk, tamarind, and aromatic coastal spices.',
    items: [
      { id: 's1', name: 'Chef Signature Fish Curry', nameAr: 'كاري السمك الخاص بالشيف', price: 40, veg: false, spicy: 2, desc: 'Fresh sea fish simmered in a tangy coastal gravy with tamarind, coconut, and curry leaves.', special: true },
      { id: 's2', name: 'Mahi Fish Tikka Masala', nameAr: 'تكا سمك ماهي مسالا', price: 40, veg: false, spicy: 2, desc: 'Tandoor-charred fish steaks in a velvety, smoky tomato reduction.' },
      { id: 's3', name: 'Kolhapuri Jeenga (Prawns)', nameAr: 'روبيان كولهابوري حار', price: 45, veg: false, spicy: 3, desc: 'Jumbo succulent prawns bathed in fiery roasted spice gravy.' },
      { id: 's4', name: 'Coastal Jeenga Curry', nameAr: 'كاري الروبيان الساحلي', price: 45, veg: false, spicy: 2, desc: 'Fresh Gulf prawns slow-simmered with coconut milk, mustard seeds, and fragrant spices.' }
    ]
  },
  {
    category: 'Vegetarian Specialties & Dal',
    categoryAr: 'أطباق نباتية ودال',
    page: 7,
    description: 'Pure vegetarian delicacies showcasing fresh cottage cheese (paneer), organic lentils, and seasonal vegetables.',
    items: [
      { id: 'v1', name: 'Spice Club Special Dal Makhani', nameAr: 'دال مخاني الخاص بالشيف', price: 35, veg: true, spicy: 1, desc: 'Black lentils and kidney beans slow-simmered for 24 hours over charcoal with churned butter and cream.', special: true },
      { id: 'v2', name: 'Punjabi Dal Tadka', nameAr: 'دال تادكا بنجابي أصفر', price: 28, veg: true, spicy: 2, desc: 'Yellow toor lentils tempered with sizzling garlic, cumin, hing, and dried whole red chilies.' },
      { id: 'v3', name: 'Paneer Lababdar', nameAr: 'بانير لبابدار غني', price: 37, veg: true, spicy: 1, desc: 'Soft cottage cheese cubes in a rich tomato-onion gravy enhanced with crushed spices and hint of sweetness.' },
      { id: 'v4', name: 'Palak Paneer', nameAr: 'بالاك بانير بالسبانخ', price: 37, veg: true, spicy: 1, desc: 'Velvety creamed garden spinach purée blended with fresh paneer cubes and garlic.' },
      { id: 'v5', name: 'Kadai Paneer', nameAr: 'كاداي بانير بالخضار', price: 35, veg: true, spicy: 3, desc: 'Paneer cubes wok-tossed with crisp bell peppers, onions, and coarse pounded kadai spices.' },
      { id: 'v6', name: 'Paneer Makhani', nameAr: 'بانير مخاني بالزبدة', price: 37, veg: true, spicy: 1, desc: 'Soft cottage cheese cubes immersed in rich makhani gravy with butter and kasuri methi.' },
      { id: 'v7', name: 'Hare Pyaz ka Paneer', nameAr: 'بانير بالبصل الأخضر', price: 37, veg: true, spicy: 2, desc: 'Fresh paneer tossed with tender spring onions, ginger juliennes, and ground spices.' },
      { id: 'v8', name: 'Mix Veg Miloni', nameAr: 'مكس خضار ميلوني', price: 30, veg: true, spicy: 1, desc: 'Colorful medley of garden vegetables simmered in a mildly spiced spinach and cashew gravy.' }
    ]
  },
  {
    category: 'Vegetarian Starters & Kebabs',
    categoryAr: 'مقبلات وكباب نباتي',
    page: 10,
    description: 'Crispy rolls, stuffed mushroom tikkas, and tandoori paneer kebabs marinated with herbs and spices.',
    items: [
      { id: 'vs1', name: 'Reshmi Malai Paneer Tikka', nameAr: 'بانير مالاي تكا بالجبن', price: 40, veg: true, spicy: 1, desc: 'Cottage cheese stuffed with cheese and nuts, grilled in creamy cashew and cardamom marinade.', special: true },
      { id: 'vs2', name: 'Paneer Sufiyana', nameAr: 'بانير صوفيانا ناعم', price: 35, veg: true, spicy: 1, desc: 'Melt-in-the-mouth paneer kebabs seasoned with fennel and crushed royal spices.' },
      { id: 'vs3', name: 'Paneer Tiranga', nameAr: 'بانير تيرانجا ثلاثي', price: 35, veg: true, spicy: 2, desc: 'Tasting platter of spicy Tikka, creamy Malai, and refreshing Mint Paneer kebabs.', special: true },
      { id: 'vs4', name: 'Tandoori Paneer Money Bag', nameAr: 'حقائب البانير المقرمشة', price: 25, veg: true, spicy: 2, desc: 'Crispy wonton pouches filled with rich spiced tandoori cottage cheese and herbs.' },
      { id: 'vs5', name: 'Tandoori Paneer Spring Roll', nameAr: 'سبرينغ رول بانير تندوري', price: 25, veg: true, spicy: 2, desc: 'Crispy hand-rolled pastries packed with smoky tandoori paneer and vegetables.' },
      { id: 'vs6', name: 'Hara Bhara Kebab', nameAr: 'كباب هارا بهارا بالسبانخ', price: 35, veg: true, spicy: 1, desc: 'Nutritious golden patties made with spinach, green peas, potatoes, and royal spices.' },
      { id: 'vs7', name: 'Stuffed Mushroom Tikka', nameAr: 'مشروم محشي تكا مشوي', price: 35, veg: true, spicy: 2, desc: 'Plump button mushrooms stuffed with spiced cottage cheese and charred in tandoor.' }
    ]
  },
  {
    category: 'Artisanal Tandoori Breads',
    categoryAr: 'خبز التندور الطازج',
    page: 5,
    description: 'Slapped onto the scorching terracotta walls of our tandoor oven, served piping hot with butter or garlic.',
    items: [
      { id: 'br1', name: 'Garlic Naan', nameAr: 'نان بالثوم والأعشاب', price: 6, veg: true, spicy: 0, desc: 'Clay oven flatbread brushed with garlic butter and fresh cilantro.' },
      { id: 'br2', name: 'Cheese Naan', nameAr: 'نان محشي بالجبن', price: 8, veg: true, spicy: 0, desc: 'Fluffy tandoori bread stuffed with gooey melted cheese.' },
      { id: 'br3', name: 'Butter Naan / Plain Naan', nameAr: 'نان بالزبدة أو سادة', price: 5, veg: true, spicy: 0, desc: 'Classic tear-drop leavened flatbread brushed with golden butter.' },
      { id: 'br4', name: 'Tandoori Roti / Butter Roti', nameAr: 'روتي تندور قمح كامل', price: 5, veg: true, spicy: 0, desc: 'Wholesome whole wheat flatbread baked directly over tandoori embers.' },
      { id: 'br5', name: 'Laccha Paratha', nameAr: 'لاكا باراثا مورقة', price: 7, veg: true, spicy: 0, desc: 'Crispy, multi-layered whole wheat bread brushed with clarified ghee.' }
    ]
  },
  {
    category: 'Salads & Raitas',
    categoryAr: 'السلطات والرايتا والمقبلات',
    page: 11,
    description: 'Refreshing cold accompaniments that complement our bold curries and tandoori grills.',
    items: [
      { id: 'sl1', name: 'Tandoori Chicken Salad', nameAr: 'سلطة دجاج تندوري', price: 25, veg: false, spicy: 1, desc: 'Smoky tandoori chicken slivers tossed with crisp garden greens and lemon dressing.' },
      { id: 'sl2', name: 'Fattoush Salad', nameAr: 'سلطة فتوش طازجة', price: 20, veg: true, spicy: 0, desc: 'Crisp romaine, tomatoes, sumac, cucumbers, and golden toasted pita chips.' },
      { id: 'sl3', name: 'Greek Salad', nameAr: 'سلطة يونانية بالفيتا', price: 25, veg: true, spicy: 0, desc: 'Vine-ripened tomatoes, cucumbers, Kalamata olives, and creamy feta cheese.' },
      { id: 'sl4', name: 'Shirazi Salad', nameAr: 'سلطة شيرازي ناعمة', price: 15, veg: true, spicy: 0, desc: 'Diced cucumber, tomato, and red onions with fresh lemon and extra virgin olive oil.' },
      { id: 'sl5', name: 'Pineapple Raita', nameAr: 'رايتا الأناناس المنعشة', price: 15, veg: true, spicy: 0, desc: 'Thick whipped yogurt infused with sweet pineapple chunks and roasted cumin.' },
      { id: 'sl6', name: 'Boondi Raita', nameAr: 'رايتا بوندي المقرمشة', price: 10, veg: true, spicy: 1, desc: 'Spiced yogurt sprinkled with crisp chickpea droplets and black salt.' },
      { id: 'sl7', name: 'Masala Papad (Fry / Roasted)', nameAr: 'بابادام ماسالا مقرمش', price: 18, veg: true, spicy: 2, desc: 'Crispy lentil crackers topped with spiced chopped onions, tomatoes, and chaat masala.' }
    ]
  }
];

// Application State
const AppState = {
  currentFlipPage: 1,
  totalFlipPages: 15,
  soundEnabled: true,
  isMobile: window.innerWidth <= 768,
  selectedCategory: 'all',
  dietFilter: 'all',
  searchQuery: '',
  selectedTastingItems: new Set(),
  menuPage: 1,
  itemsPerPage: 9,
  reservation: {
    guests: 2,
    date: '',
    time: '8:00 PM',
    occasion: 'Casual Dinner',
    zone: 'Canal Terrace',
    name: '',
    phone: '',
    email: '',
    notes: ''
  }
};

// Web Audio API Sound Synthesizer (Realistic paper flip rustle & celebration chime)
class SoundFx {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playFlip() {
    if (!AppState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(2400, this.ctx.currentTime + 0.15);
      filter.Q.value = 3.0;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.22, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.17);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    } catch (e) {
      console.warn('Audio flip error:', e);
    }
  }

  playChime() {
    if (!AppState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.09 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.09);
        osc.stop(this.ctx.currentTime + idx * 0.09 + 0.65);
      });
    } catch (e) {
      console.warn('Audio chime error:', e);
    }
  }
}

const soundManager = new SoundFx();

// ==========================================================================
// 3D Flipbook Controller (Enhanced Realistic Page-Turning Engine)
// ==========================================================================
const FlipbookEngine = {
  init() {
    this.stage = document.getElementById('flipbookStage');
    this.book = document.getElementById('flipbookBook');
    this.leftHalfPage = document.getElementById('leftHalfPage');
    this.rightHalfPage = document.getElementById('rightHalfPage');
    this.leftPageImg = document.getElementById('leftPageImg');
    this.rightPageImg = document.getElementById('rightPageImg');
    this.pageIndicator = document.getElementById('pageIndicator');
    this.turningPage = document.getElementById('turningPage');
    this.leafFrontImg = document.getElementById('leafFrontImg');
    this.leafBackImg = document.getElementById('leafBackImg');
    this.isTurning = false;

    this.bindEvents();
    this.goToPage(1);

    // Initial resize listener
    window.addEventListener('resize', () => {
      const wasMobile = AppState.isMobile;
      AppState.isMobile = window.innerWidth <= 768;
      if (wasMobile !== AppState.isMobile) {
        this.goToPage(AppState.currentFlipPage);
      }
    });
  },

  bindEvents() {
    // Navigation buttons
    document.getElementById('prevPageBtn')?.addEventListener('click', () => this.prev());
    document.getElementById('nextPageBtn')?.addEventListener('click', () => this.next());
    document.getElementById('arrowPrevBtn')?.addEventListener('click', () => this.prev());
    document.getElementById('arrowNextBtn')?.addEventListener('click', () => this.next());

    // Direct book click: click left half to go back, right half to go forward
    this.leftHalfPage?.addEventListener('click', (e) => {
      if (e.target.classList.contains('page-img-render')) return; // allow zoom modal
      this.prev();
    });
    this.rightHalfPage?.addEventListener('click', (e) => {
      if (e.target.classList.contains('page-img-render')) return; // allow zoom modal
      this.next();
    });

    // Fullscreen toggle
    document.getElementById('fullscreenBtn')?.addEventListener('click', () => {
      const container = document.getElementById('flipbookOuterWrap');
      if (!document.fullscreenElement) {
        container?.requestFullscreen().catch(err => console.log(err));
      } else {
        document.exitFullscreen();
      }
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        this.next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        this.prev();
      }
    });

    // Touch Swipe Support
    let touchStartX = 0;
    let touchStartY = 0;
    this.stage?.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    this.stage?.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    }, { passive: true });
  },

  next() {
    if (this.isTurning) return;

    if (AppState.isMobile) {
      if (AppState.currentFlipPage < AppState.totalFlipPages) {
        this.turnSinglePage('forward', AppState.currentFlipPage, AppState.currentFlipPage + 1);
      }
    } else {
      const curL = AppState.currentFlipPage % 2 === 0 ? AppState.currentFlipPage - 1 : AppState.currentFlipPage;
      const curR = curL + 1;
      const targetL = curL + 2;
      const targetR = targetL + 1;

      if (targetL <= AppState.totalFlipPages) {
        this.turnSpread('forward', curL, curR, targetL, targetR);
      }
    }
  },

  prev() {
    if (this.isTurning) return;

    if (AppState.isMobile) {
      if (AppState.currentFlipPage > 1) {
        this.turnSinglePage('backward', AppState.currentFlipPage, AppState.currentFlipPage - 1);
      }
    } else {
      const curL = AppState.currentFlipPage % 2 === 0 ? AppState.currentFlipPage - 1 : AppState.currentFlipPage;
      const curR = curL + 1;
      const targetL = curL - 2;
      const targetR = targetL + 1;

      if (targetL >= 1) {
        this.turnSpread('backward', curL, curR, targetL, targetR);
      }
    }
  },

  turnSpread(direction, curL, curR, targetL, targetR) {
    if (!this.turningPage) {
      this.goToPage(targetL);
      return;
    }

    this.isTurning = true;
    soundManager.playFlip();

    if (direction === 'forward') {
      // Leaf front shows the current right page turning
      if (this.leafFrontImg) this.leafFrontImg.src = `assets/menu/page_${curR}.webp`;
      // Leaf back shows the incoming left page landing on the left
      if (this.leafBackImg) this.leafBackImg.src = `assets/menu/page_${targetL}.webp`;
      
      // Pre-position target right page underneath on right
      if (this.rightPageImg) {
        if (targetR <= AppState.totalFlipPages) {
          this.rightPageImg.src = `assets/menu/page_${targetR}.webp`;
          this.rightPageImg.style.visibility = 'visible';
        } else {
          this.rightPageImg.style.visibility = 'hidden';
        }
      }

      this.turningPage.className = 'turning-page turn-forward';

      setTimeout(() => {
        AppState.currentFlipPage = targetL;
        if (this.leftPageImg) this.leftPageImg.src = `assets/menu/page_${targetL}.webp`;
        if (this.turningPage) this.turningPage.className = 'turning-page';
        this.updateIndicator();
        this.isTurning = false;
      }, 580);
    } else {
      // Leaf front shows the current left page turning back
      if (this.leafFrontImg) this.leafFrontImg.src = `assets/menu/page_${curL}.webp`;
      // Leaf back shows the incoming right page landing on right
      if (this.leafBackImg) this.leafBackImg.src = `assets/menu/page_${curR}.webp`;

      // Pre-position target left page underneath on left
      if (this.leftPageImg) {
        this.leftPageImg.src = `assets/menu/page_${targetL}.webp`;
      }

      this.turningPage.className = 'turning-page turn-backward';

      setTimeout(() => {
        AppState.currentFlipPage = targetL;
        if (this.rightPageImg) {
          this.rightPageImg.src = `assets/menu/page_${targetR}.webp`;
          this.rightPageImg.style.visibility = 'visible';
        }
        if (this.turningPage) this.turningPage.className = 'turning-page';
        this.updateIndicator();
        this.isTurning = false;
      }, 580);
    }
  },

  turnSinglePage(direction, curP, targetP) {
    if (!this.turningPage) {
      this.goToPage(targetP);
      return;
    }

    this.isTurning = true;
    soundManager.playFlip();

    if (direction === 'forward') {
      if (this.leafFrontImg) this.leafFrontImg.src = `assets/menu/page_${curP}.webp`;
      if (this.leafBackImg) this.leafBackImg.src = `assets/menu/page_${targetP}.webp`;
      if (this.rightPageImg) this.rightPageImg.src = `assets/menu/page_${targetP}.webp`;

      this.turningPage.className = 'turning-page turn-forward';

      setTimeout(() => {
        AppState.currentFlipPage = targetP;
        if (this.turningPage) this.turningPage.className = 'turning-page';
        this.updateIndicator();
        this.isTurning = false;
      }, 580);
    } else {
      if (this.leafFrontImg) this.leafFrontImg.src = `assets/menu/page_${curP}.webp`;
      if (this.leafBackImg) this.leafBackImg.src = `assets/menu/page_${targetP}.webp`;
      if (this.rightPageImg) this.rightPageImg.src = `assets/menu/page_${targetP}.webp`;

      this.turningPage.className = 'turning-page turn-backward';

      setTimeout(() => {
        AppState.currentFlipPage = targetP;
        if (this.turningPage) this.turningPage.className = 'turning-page';
        this.updateIndicator();
        this.isTurning = false;
      }, 580);
    }
  },

  goToPage(page) {
    if (page < 1) page = 1;
    if (page > AppState.totalFlipPages) page = AppState.totalFlipPages;
    AppState.currentFlipPage = page;

    if (AppState.isMobile) {
      if (this.rightPageImg) {
        this.rightPageImg.src = `assets/menu/page_${page}.webp`;
      }
    } else {
      let leftPageNum = page % 2 === 0 ? page - 1 : page;
      let rightPageNum = leftPageNum + 1;

      if (this.leftPageImg) {
        this.leftPageImg.src = `assets/menu/page_${leftPageNum}.webp`;
      }
      if (this.rightPageImg) {
        if (rightPageNum <= AppState.totalFlipPages) {
          this.rightPageImg.src = `assets/menu/page_${rightPageNum}.webp`;
          this.rightPageImg.style.visibility = 'visible';
        } else {
          this.rightPageImg.style.visibility = 'hidden';
        }
      }
    }

    this.updateIndicator();
  },

  updateIndicator() {
    if (!this.pageIndicator) return;
    if (AppState.isMobile) {
      this.pageIndicator.textContent = `Page ${AppState.currentFlipPage} of ${AppState.totalFlipPages}`;
    } else {
      let leftP = AppState.currentFlipPage % 2 === 0 ? AppState.currentFlipPage - 1 : AppState.currentFlipPage;
      let rightP = Math.min(leftP + 1, AppState.totalFlipPages);
      this.pageIndicator.textContent = `Pages ${leftP}–${rightP} of ${AppState.totalFlipPages}`;
    }
  }
};

// ==========================================================================
// Digital Menu Explorer (Filter, Search, Categorization & Pagination)
// ==========================================================================
const DigitalMenuEngine = {
  init() {
    this.grid = document.getElementById('menuItemsGrid');
    this.tabsScroll = document.getElementById('menuTabsScroll');
    this.searchInput = document.getElementById('menuSearchInput');
    this.paginationWrap = document.getElementById('menuPagination');

    this.renderTabs();
    this.bindEvents();
    this.renderItems();
  },

  renderTabs() {
    if (!this.tabsScroll) return;
    let totalAll = MENU_DATA.reduce((acc, c) => acc + c.items.length, 0);
    let html = `<button class="menu-tab-btn active" data-cat="all">All Specialties (${totalAll})</button>`;
    MENU_DATA.forEach(c => {
      html += `<button class="menu-tab-btn" data-cat="${c.category}">${c.category} (${c.items.length})</button>`;
    });
    this.tabsScroll.innerHTML = html;

    this.tabsScroll.querySelectorAll('.menu-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.tabsScroll.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        AppState.selectedCategory = btn.getAttribute('data-cat');
        AppState.menuPage = 1;
        this.renderItems();
      });
    });
  },

  bindEvents() {
    // Search input
    this.searchInput?.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.toLowerCase().trim();
      AppState.menuPage = 1;
      this.renderItems();
    });
  },

  renderItems() {
    if (!this.grid) return;

    let allItems = [];
    MENU_DATA.forEach(cat => {
      cat.items.forEach(item => {
        allItems.push({ ...item, categoryName: cat.category, menuPage: cat.page });
      });
    });

    // Apply category filter
    if (AppState.selectedCategory !== 'all') {
      allItems = allItems.filter(item => item.categoryName === AppState.selectedCategory);
    }

    // Apply search filter
    if (AppState.searchQuery) {
      allItems = allItems.filter(item => 
        item.name.toLowerCase().includes(AppState.searchQuery) ||
        (item.nameAr && item.nameAr.includes(AppState.searchQuery)) ||
        item.desc.toLowerCase().includes(AppState.searchQuery) ||
        item.categoryName.toLowerCase().includes(AppState.searchQuery)
      );
    }

    if (allItems.length === 0) {
      this.grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p style="font-size: 1.2rem; color: var(--gold-light); margin-bottom: 0.5rem;">No dishes match your criteria</p>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Try searching for another dish or clearing filters</p>
        </div>
      `;
      if (this.paginationWrap) this.paginationWrap.innerHTML = '';
      return;
    }

    const totalItems = allItems.length;
    const itemsPerPage = AppState.itemsPerPage;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    if (AppState.menuPage > totalPages) AppState.menuPage = totalPages;
    if (AppState.menuPage < 1) AppState.menuPage = 1;

    const startIndex = (AppState.menuPage - 1) * itemsPerPage;
    const pageItems = allItems.slice(startIndex, startIndex + itemsPerPage);

    let html = '';
    pageItems.forEach(item => {
      const isSelected = AppState.selectedTastingItems.has(item.id);
      const spiceIcons = '🌶️'.repeat(item.spicy || 0);

      html += `
        <article class="menu-card fade-in" id="dish-${item.id}">
          <div>
            <div class="card-top-row">
              <div class="dish-title-wrap">
                <h3 class="dish-name">
                  <span class="${item.veg ? 'veg-dot' : 'non-veg-dot'}" title="${item.veg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
                  ${item.name}
                </h3>
                ${item.nameAr ? `<div class="dish-name-ar">${item.nameAr}</div>` : ''}
              </div>
              <div class="dish-price">
                ${item.price} <span class="price-currency">QAR</span>
              </div>
            </div>
            <p class="dish-desc">${item.desc}</p>
          </div>

          <div class="card-meta-row">
            <div class="meta-tags">
              ${item.special ? `<span class="crown-badge">👑 Chef's Special</span>` : ''}
              ${item.spicy > 0 ? `<span class="spice-meter" title="Spice level: ${item.spicy}/3">${spiceIcons}</span>` : ''}
              <button class="cat-jump-pill" style="padding: 2px 8px; font-size: 0.7rem;" onclick="FlipbookEngine.goToPage(${item.menuPage}); document.getElementById('flipbook-section')?.scrollIntoView({behavior:'smooth'});" title="View page ${item.menuPage} in Royal Menu">
                📖 Menu p.${item.menuPage}
              </button>
            </div>
            <button class="btn-add-tasting ${isSelected ? 'selected' : ''}" data-item-id="${item.id}" data-item-name="${item.name}">
              ${isSelected ? '✓ Added' : '+ Reserve Dish'}
            </button>
          </div>
        </article>
      `;
    });

    this.grid.innerHTML = html;

    // Render Pagination Controls
    this.renderPagination(totalItems, totalPages, startIndex, pageItems.length);

    // Attach tasting selection buttons
    this.grid.querySelectorAll('.btn-add-tasting').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-item-id');
        const name = btn.getAttribute('data-item-name');
        if (AppState.selectedTastingItems.has(id)) {
          AppState.selectedTastingItems.delete(id);
          btn.classList.remove('selected');
          btn.textContent = '+ Reserve Dish';
          this.updateReservationNotesWithTasting();
          showToast(`Removed ${name}`, '🗑️');
        } else {
          AppState.selectedTastingItems.add(id);
          btn.classList.add('selected');
          btn.textContent = '✓ Added';
          soundManager.playFlip();
          this.updateReservationNotesWithTasting();
          showToast(`Added ${name} to your VIP table reservation!`, '🍛');
        }
      });
    });
  },

  renderPagination(totalItems, totalPages, startIndex, pageCount) {
    if (!this.paginationWrap) return;

    if (totalPages <= 1) {
      this.paginationWrap.innerHTML = `
        <span class="pagination-info">Showing all ${totalItems} dishes</span>
      `;
      return;
    }

    let controlsHtml = `
      <div class="menu-pagination-controls">
        <button class="pagination-btn" id="menuPrevPage" ${AppState.menuPage === 1 ? 'disabled' : ''}>
          ← Prev
        </button>
    `;

    for (let p = 1; p <= totalPages; p++) {
      controlsHtml += `
        <button class="pagination-btn page-num-btn ${p === AppState.menuPage ? 'active' : ''}" data-page="${p}">
          ${p}
        </button>
      `;
    }

    controlsHtml += `
        <button class="pagination-btn" id="menuNextPage" ${AppState.menuPage === totalPages ? 'disabled' : ''}>
          Next →
        </button>
      </div>
      <span class="pagination-info">Showing ${startIndex + 1}–${startIndex + pageCount} of ${totalItems} dishes</span>
    `;

    this.paginationWrap.innerHTML = controlsHtml;

    // Bind Pagination Clicks
    document.getElementById('menuPrevPage')?.addEventListener('click', () => {
      if (AppState.menuPage > 1) {
        AppState.menuPage--;
        this.renderItems();
        this.scrollToMenu();
      }
    });

    document.getElementById('menuNextPage')?.addEventListener('click', () => {
      if (AppState.menuPage < totalPages) {
        AppState.menuPage++;
        this.renderItems();
        this.scrollToMenu();
      }
    });

    this.paginationWrap.querySelectorAll('.page-num-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPage = parseInt(btn.getAttribute('data-page'), 10);
        if (targetPage !== AppState.menuPage) {
          AppState.menuPage = targetPage;
          this.renderItems();
          this.scrollToMenu();
        }
      });
    });
  },

  scrollToMenu() {
    const el = document.getElementById('digital-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  updateReservationNotesWithTasting() {
    const notesInput = document.getElementById('bookingNotes');
    if (!notesInput) return;
    const names = [];
    AppState.selectedTastingItems.forEach(id => {
      for (const cat of MENU_DATA) {
        const found = cat.items.find(i => i.id === id);
        if (found) {
          names.push(found.name);
          break;
        }
      }
    });

    if (names.length > 0) {
      notesInput.value = `Selected Dishes: ${names.join(', ')}`;
    }
  }
};

// ==========================================================================
// Table Reservation Engine (Mobile-First + WhatsApp + Calendar)
// ==========================================================================
const ReservationEngine = {
  init() {
    this.form = document.getElementById('tableBookingForm');
    this.confirmScreen = document.getElementById('bookingConfirmation');
    this.guestChips = document.querySelectorAll('.guest-chip-btn');
    this.zoneChips = document.querySelectorAll('.zone-chip-btn');
    this.timeSlotPills = document.querySelectorAll('.time-slot-pill');
    this.dateInput = document.getElementById('bookingDate');

    this.setupDateInput();
    this.bindEvents();
  },

  setupDateInput() {
    if (!this.dateInput) return;
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${yyyy}-${mm}-${dd}`;
    this.dateInput.min = formattedToday;
    this.dateInput.value = formattedToday;
    AppState.reservation.date = formattedToday;
  },

  bindEvents() {
    // Guest chips
    this.guestChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.guestChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.reservation.guests = parseInt(chip.getAttribute('data-guests'), 10);
        showToast(`Party size: ${AppState.reservation.guests} Guests`, '👥');
      });
    });

    // Dining zone chips
    this.zoneChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.zoneChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.reservation.zone = chip.getAttribute('data-zone');
        showToast(`Preferred zone: ${AppState.reservation.zone}`, '📍');
      });
    });

    // Time slot pills
    this.timeSlotPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.timeSlotPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        AppState.reservation.time = pill.getAttribute('data-time');
        showToast(`Slot chosen: ${AppState.reservation.time}`, '🕒');
      });
    });

    // Date change
    this.dateInput?.addEventListener('change', (e) => {
      AppState.reservation.date = e.target.value;
    });

    // Form submission
    this.form?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.processBooking();
    });

    // New Booking Button on Confirmation
    document.getElementById('newBookingBtn')?.addEventListener('click', () => {
      this.confirmScreen?.classList.remove('active');
      this.form?.classList.remove('fade-in');
      if (this.form) this.form.style.display = 'flex';
      this.form?.reset();
      this.setupDateInput();
    });
  },

  processBooking() {
    const name = document.getElementById('bookingName')?.value.trim();
    const phone = document.getElementById('bookingPhone')?.value.trim();
    const email = document.getElementById('bookingEmail')?.value.trim();
    const occasion = document.getElementById('bookingOccasion')?.value || 'Dinner';
    const notes = document.getElementById('bookingNotes')?.value.trim();
    const zone = AppState.reservation.zone || 'Canal Terrace';

    if (!name || !phone) {
      alert('Please provide your name and phone number for table reservation.');
      return;
    }

    AppState.reservation.name = name;
    AppState.reservation.phone = phone;
    AppState.reservation.email = email;
    AppState.reservation.occasion = occasion;
    AppState.reservation.notes = notes;

    // Generate VIP Reference Number
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingRef = `SC-QTR-${randomCode}`;

    // Play celebration sound
    soundManager.playChime();

    // Populate Voucher
    document.getElementById('voucherBookingRef').textContent = bookingRef;
    document.getElementById('voucherGuestName').textContent = name;
    document.getElementById('voucherGuestCount').textContent = `${AppState.reservation.guests} Guests`;
    document.getElementById('voucherDateTime').textContent = `${AppState.reservation.date} at ${AppState.reservation.time}`;
    
    const occEl = document.getElementById('voucherOccasion');
    if (occEl) occEl.textContent = occasion;
    const zoneEl = document.getElementById('voucherZone');
    if (zoneEl) zoneEl.textContent = zone;

    // Build WhatsApp Deep Link
    const waText = encodeURIComponent(
      `Hello The Spice Club Restaurant (Doha, Qatar),\n\n` +
      `I would like to confirm my Table Reservation:\n` +
      `• VIP Pass Ref: ${bookingRef}\n` +
      `• Guest Name: ${name}\n` +
      `• Party Size: ${AppState.reservation.guests} Persons\n` +
      `• Seating Zone: ${zone}\n` +
      `• Date & Time: ${AppState.reservation.date} at ${AppState.reservation.time}\n` +
      `• Occasion: ${occasion}\n` +
      (notes ? `• Special Requests / Selected Dishes: ${notes}\n` : '') +
      `\nPlease confirm availability for our table at Qanat Quartier, The Pearl Island. Thank you!`
    );

    const waBtn = document.getElementById('voucherWhatsAppBtn');
    if (waBtn) {
      waBtn.href = `https://wa.me/97431227533?text=${waText}`;
    }
    const callBtn = document.getElementById('voucherCallBtn');
    if (callBtn) {
      callBtn.href = 'tel:+97431227533';
    }

    // Attach Calendar Generator
    document.getElementById('voucherCalendarBtn')?.addEventListener('click', () => {
      this.downloadIcsFile(bookingRef, name, AppState.reservation.date, AppState.reservation.time);
    });

    // Hide Form, Show Voucher
    if (this.form) this.form.style.display = 'none';
    this.confirmScreen?.classList.add('active');
    this.confirmScreen?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast('VIP Pass Generated! Tap WhatsApp to confirm', '🎉');
  },

  downloadIcsFile(bookingRef, name, dateStr, timeStr) {
    const [year, month, day] = dateStr.split('-');
    let [hoursStr, minutesPart] = timeStr.split(':');
    let hours = parseInt(hoursStr, 10);
    const minutes = minutesPart.includes('PM') ? parseInt(minutesPart.replace(' PM', ''), 10) : parseInt(minutesPart.replace(' AM', ''), 10);
    if (timeStr.includes('PM') && hours < 12) hours += 12;
    if (timeStr.includes('AM') && hours === 12) hours = 0;

    const start = new Date(Date.UTC(year, month - 1, day, hours - 3, minutes)); // Qatar is UTC+3
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // 2 hour dining reservation

    const formatICSDate = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//The Spice Club Restaurant//Table Reservation//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${bookingRef}@spiceclubqatar.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(start)}
DTEND:${formatICSDate(end)}
SUMMARY:Table Reservation at The Spice Club Restaurant (${bookingRef})
DESCRIPTION:VIP Table reservation for ${name}. Location: Qanat Quartier Unit 112, The Pearl Island, Doha, Qatar. Contact: +974 3122 7533.
LOCATION:The Spice Club Restaurant, Qanat Quartier, The Pearl Island, Doha, Qatar
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `SpiceClub_Reservation_${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

// ==========================================================================
// Micro-Toast Notification System (Pixel 8 Tactile Feedback)
// ==========================================================================
function showToast(message, icon = '✨') {
  const toast = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastText');
  if (!toast) return;
  if (toastText) toastText.innerHTML = `${icon} ${message}`;
  toast.classList.add('active');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 2600);
}

// ==========================================================================
// Pixel 8 Sticky Segmented Navigation Bar Controller
// ==========================================================================
const SegmentedNav = {
  init() {
    this.bar = document.getElementById('mobileSegmentedBar');
    this.buttons = document.querySelectorAll('.segment-tab');
    if (!this.bar || this.buttons.length === 0) return;

    this.buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          this.buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          const headerOffset = 105;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    this.setupScrollSpy();
  },

  setupScrollSpy() {
    const sectionIds = ['flipbook-section', 'digital-menu', 'showcase', 'experience', 'reservation', 'location'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        const scrollPos = window.scrollY + 130;
        for (let i = sections.length - 1; i >= 0; i--) {
          const sec = sections[i];
          if (sec.offsetTop <= scrollPos) {
            const id = sec.id;
            const activeBtn = document.querySelector(`.segment-tab[data-target="${id}"]`);
            if (activeBtn && !activeBtn.classList.contains('active')) {
              this.buttons.forEach(b => b.classList.remove('active'));
              activeBtn.classList.add('active');
              activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
            break;
          }
        }
      }, 50);
    }, { passive: true });
  }
};

// ==========================================================================
// Interactive Ambiance Switcher
// ==========================================================================
const AmbianceSwitcher = {
  init() {
    this.pills = document.querySelectorAll('.ambiance-pill-btn');
    this.mainImg = document.querySelector('.experience-main-img');
    this.badgeTitle = document.querySelector('.badge-number');
    this.badgeLabel = document.querySelector('.badge-label');
    if (!this.pills.length || !this.mainImg) return;

    this.pills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const imgPath = pill.getAttribute('data-img');
        const title = pill.getAttribute('data-title');
        const badge = pill.getAttribute('data-badge');
        const zone = pill.getAttribute('data-zone');

        this.mainImg.style.opacity = '0.35';
        this.mainImg.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
          this.mainImg.src = imgPath;
          if (this.badgeTitle && title) this.badgeTitle.textContent = title;
          if (this.badgeLabel && badge) this.badgeLabel.textContent = badge;
          this.mainImg.style.opacity = '1';
          this.mainImg.style.transform = 'scale(1)';
        }, 180);

        if (zone) {
          const zoneBtn = document.querySelector(`.zone-chip-btn[data-zone="${zone}"]`);
          if (zoneBtn) {
            document.querySelectorAll('.zone-chip-btn').forEach(z => z.classList.remove('active'));
            zoneBtn.classList.add('active');
            AppState.reservation.zone = zone;
          }
          showToast(`Atmosphere set to ${zone}`, '✨');
        }
      });
    });
  }
};

// ==========================================================================
// General Site Enhancements & DOM Ready
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize subsystems
  FlipbookEngine.init();
  DigitalMenuEngine.init();
  ReservationEngine.init();
  SegmentedNav.init();
  AmbianceSwitcher.init();

  // Scroll Header Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileClose = document.getElementById('mobileNavClose');

  mobileToggle?.addEventListener('click', () => {
    mobileDrawer?.classList.add('active');
  });

  mobileClose?.addEventListener('click', () => {
    mobileDrawer?.classList.remove('active');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('active');
    });
  });

  // Modal / Zoom for Menu Pages
  const pageImgs = document.querySelectorAll('.page-img-render');
  pageImgs.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      openImageModal(img.src);
    });
  });

  function openImageModal(src) {
    let modal = document.getElementById('imageZoomModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'imageZoomModal';
      modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 3000;
        display: flex; align-items: center; justify-content: center; padding: 1.5rem;
        cursor: zoom-out; backdrop-filter: blur(8px);
      `;
      modal.innerHTML = `
        <div style="position: relative; max-width: 900px; width: 100%; max-height: 90vh; text-align: center;">
          <button style="position: absolute; top: -40px; right: 0; background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer;">&times;</button>
          <img id="zoomModalImg" src="" style="max-width: 100%; max-height: 85vh; border-radius: 6px; box-shadow: 0 0 40px rgba(0,0,0,0.8); border: 1px solid var(--gold-primary); margin: 0 auto;" />
          <p style="color: var(--gold-light); font-size: 0.85rem; margin-top: 0.75rem; font-family: var(--font-display); letter-spacing: 0.1em;">Tap anywhere to close</p>
        </div>
      `;
      document.body.appendChild(modal);
      modal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
    const zoomImg = modal.querySelector('#zoomModalImg');
    if (zoomImg) zoomImg.src = src;
    modal.style.display = 'flex';
  }

  // ==========================================================================
  // Refero Royal Enhancements: Scroll Reveal & Showcase Preorder
  // ==========================================================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll, .section-header, .showcase-card, .testimonial-card, .location-unified-card').forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
  });

  // Showcase Preorder Actions
  document.querySelectorAll('.showcase-preorder-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dish = btn.getAttribute('data-dish');
      const notesField = document.getElementById('bookingNotes');
      if (notesField) {
        if (!notesField.value.includes(dish)) {
          notesField.value = notesField.value ? `${notesField.value}, ${dish}` : `Chef's Choice: ${dish}`;
        }
      }
      showToast(`Pre-selected: ${dish}`, '👑');
      document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
      if (notesField) {
        notesField.focus();
      }
    });
  });

  // Dish Spec Modal Interactions
  const dishModal = document.getElementById('dishModalBackdrop');
  const dishModalClose = document.getElementById('dishModalClose');
  const modalDishName = document.getElementById('modalDishName');
  const modalDishArabic = document.getElementById('modalDishArabic');
  const modalDishPrice = document.getElementById('modalDishPrice');
  const modalDishDesc = document.getElementById('modalDishDesc');
  const modalDishCategory = document.getElementById('modalDishCategory');
  const modalDietBadge = document.getElementById('modalDietBadge');
  const modalAddToBookingBtn = document.getElementById('modalAddToBookingBtn');

  let currentModalDish = '';

  function openDishModal(item) {
    if (!dishModal) return;
    currentModalDish = item.name;
    if (modalDishName) modalDishName.textContent = item.name;
    if (modalDishArabic) modalDishArabic.textContent = item.nameAr || '';
    if (modalDishPrice) modalDishPrice.textContent = item.price;
    if (modalDishDesc) modalDishDesc.textContent = item.desc;
    if (modalDishCategory) modalDishCategory.textContent = item.categoryName || 'Royal Selection';
    if (modalDietBadge) {
      modalDietBadge.textContent = item.veg ? 'Pure Vegetarian' : 'Halal Meat Prepared';
      modalDietBadge.style.color = item.veg ? '#55ea8d' : '#dfb746';
      modalDietBadge.style.borderColor = item.veg ? 'rgba(37, 211, 102, 0.4)' : 'rgba(212, 175, 55, 0.4)';
    }
    dishModal.classList.add('active');
    dishModal.setAttribute('aria-hidden', 'false');
  }

  function closeDishModal() {
    if (!dishModal) return;
    dishModal.classList.remove('active');
    dishModal.setAttribute('aria-hidden', 'true');
  }

  dishModalClose?.addEventListener('click', closeDishModal);
  dishModal?.addEventListener('click', (e) => {
    if (e.target === dishModal) closeDishModal();
  });

  modalAddToBookingBtn?.addEventListener('click', () => {
    closeDishModal();
    const notesField = document.getElementById('bookingNotes');
    if (notesField && currentModalDish) {
      if (!notesField.value.includes(currentModalDish)) {
        notesField.value = notesField.value ? `${notesField.value}, ${currentModalDish}` : `Selected Special: ${currentModalDish}`;
      }
      showToast(`Added ${currentModalDish} to reservation notes`, '🍽️');
    }
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
    if (notesField) notesField.focus();
  });

  // Attach card click to open dish modal
  document.getElementById('menuItemsGrid')?.addEventListener('click', (e) => {
    if (e.target.closest('.btn-add-tasting') || e.target.closest('.cat-jump-pill')) {
      return;
    }
    const card = e.target.closest('.menu-card');
    if (card) {
      const dishId = card.id.replace('dish-', '');
      let found = null;
      for (const cat of MENU_DATA) {
        found = cat.items.find(i => i.id === dishId);
        if (found) {
          found.categoryName = cat.category;
          break;
        }
      }
      if (found) {
        openDishModal(found);
      }
    }
  });

});
