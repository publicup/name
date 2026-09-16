const data = {
  brand: {
    warm: [['온기결', '따뜻한 마음이 이어지는 결'], ['다정상점', '다정함을 일상에 담은 이름'], ['느린정원', '천천히 자라는 좋은 취향'], ['포근결', '부드럽고 편안한 경험']],
    clear: [['여백', '덜어낼수록 선명해지는 이름'], ['담담', '담백하고 오래 남는 인상'], ['맑은결', '깨끗한 감각과 자연스러움'], ['온점', '작지만 분명한 하나의 기준']],
    bold: [['결집', '사람과 아이디어가 모이는 곳'], ['선명', '뚜렷한 방향을 가진 이름'], ['파동', '새로운 흐름을 만드는 힘'], ['단단', '믿음을 쌓아가는 브랜드']],
    playful: [['모락', '작은 즐거움이 피어나는 곳'], ['두두', '리듬감 있게 기억되는 이름'], ['오후네시', '기분 좋은 순간을 담은 이름'], ['콩콩', '가볍게 뛰어오르는 에너지']]
  },
  pet: {
    warm: [['호두', '동글동글 다정한 친구'], ['보리', '포근하고 건강한 마음'], ['토리', '작고 사랑스러운 존재'], ['다온', '좋은 일이 다 오는 아이']],
    clear: [['루아', '맑은 달빛처럼 빛나는 아이'], ['소담', '작지만 알차고 사랑스러운'], ['이든', '바르고 편안한 마음'], ['하루', '매일 곁에 있는 기쁨']],
    bold: [['탄이', '씩씩하고 빛나는 친구'], ['로키', '호기심 많고 용감한 아이'], ['마루', '높고 넓은 마음을 가진'], ['태오', '밝고 힘찬 에너지가 있는']],
    playful: [['두부', '말랑하고 귀여운 매력'], ['몽이', '꿈처럼 포근한 친구'], ['치치', '통통 튀는 사랑스러움'], ['젤리', '말랑말랑 기분 좋은 이름']]
  },
  child: {
    warm: [['다온', '좋은 일이 다 오는 아이'], ['서윤', '상서롭고 부드러운 마음'], ['온유', '따뜻하고 너그러운 사람'], ['윤슬', '햇빛에 반짝이는 물결']],
    clear: [['하윤', '맑고 반듯하게 자라는 아이'], ['이든', '바르고 편안한 마음'], ['서아', '고요하고 아름다운 결'], ['로운', '슬기롭고 이로운 사람']],
    bold: [['태오', '밝고 힘찬 에너지를 가진 아이'], ['도윤', '바른 길을 힘 있게 걷는'], ['하람', '큰 뜻을 품고 자라는'], ['유찬', '넉넉하고 빛나는 사람']],
    playful: [['라온', '즐거운 마음으로 살아가는'], ['다솜', '사랑을 듬뿍 받은 아이'], ['초롱', '작은 빛처럼 반짝이는'], ['아인', '사랑스럽고 특별한 존재']]
  }
};

const brandIndustries = {
  cafe: {
    warm: [['온점', '따뜻한 한 잔과 이야기가 머무는 카페'], ['다정다방', '다정한 하루를 건네는 공간'], ['모락커피', '김이 모락모락 피어나는 순간'], ['포근잔', '편안한 휴식을 담은 한 잔']],
    clear: [['여백커피', '비워낸 공간에서 또렷해지는 맛'], ['담담', '담백하고 오래 남는 카페'], ['맑은잔', '깨끗한 재료와 산뜻한 감각'], ['한점', '작지만 분명한 취향을 담은 곳']],
    bold: [['파동커피', '새로운 맛의 흐름을 만드는 카페'], ['선명', '취향이 뚜렷한 한 잔'], ['원두결', '깊은 인상을 남기는 커피'], ['카페온', '하루의 중심을 밝히는 공간']],
    playful: [['콩콩커피', '가볍고 즐거운 에너지가 있는 카페'], ['모락모락', '기분 좋은 향이 피어나는 곳'], ['오후네시', '잠깐의 설렘을 담은 카페'], ['두두잔', '리듬감 있게 기억되는 한 잔']]
  },
  restaurant: {
    warm: [['다정식탁', '정성스러운 한 끼를 나누는 식당'], ['온담', '따뜻한 이야기가 오가는 밥상'], ['소담찬', '소박하고 풍성한 맛을 담은 곳'], ['마실', '편안하게 들러 쉬어가는 식당']],
    clear: [['담백', '재료의 맛을 선명하게 전하는 식당'], ['소반', '정갈한 한 상을 담은 이름'], ['한결식당', '한결같은 맛과 마음'], ['맑은찬', '깨끗하고 산뜻한 음식']],
    bold: [['불꽃식탁', '강렬한 맛의 기억을 남기는 곳'], ['결집키친', '새로운 맛이 모이는 주방'], ['큰입', '대담하고 풍성한 한 끼'], ['식탁파동', '익숙함을 깨우는 새로운 맛']],
    playful: [['냠냠상회', '맛있는 즐거움이 가득한 식당'], ['두두키친', '통통 튀는 메뉴가 있는 곳'], ['한입만', '자꾸 생각나는 귀여운 맛'], ['말랑식탁', '부드럽고 유쾌한 한 끼']]
  },
  beauty: {
    warm: [['윤슬살롱', '햇빛처럼 은은하게 빛나는 아름다움'], ['다정결', '다정한 손길로 가꾸는 시간'], ['온결', '편안한 나를 만나는 뷰티 공간'], ['포근살롱', '긴장을 내려놓는 부드러운 케어']],
    clear: [['맑음', '본연의 아름다움을 깨우는 이름'], ['결살롱', '건강한 결을 가꾸는 공간'], ['여백뷰티', '덜어낼수록 선명해지는 매력'], ['담담스튜디오', '꾸밈없이 오래 남는 아름다움']],
    bold: [['선명뷰티', '나만의 색을 분명하게 표현하는 곳'], ['결정', '새로운 모습으로 나아가는 순간'], ['빛결', '시선을 사로잡는 빛과 결'], ['대담살롱', '나다움을 힘 있게 드러내는 공간']],
    playful: [['반짝살롱', '기분까지 환해지는 뷰티 시간'], ['살랑뷰티', '가볍고 산뜻한 변화를 담은 곳'], ['콩콩네일', '손끝에 통통 튀는 즐거움'], ['초롱스튜디오', '작은 빛처럼 반짝이는 매력']]
  },
  service: {
    warm: [['이음', '사람과 마음을 자연스럽게 연결하는 서비스'], ['다온랩', '좋은 경험이 모두에게 다 오는 곳'], ['온유어스', '부드럽고 편안한 도움을 전하는 브랜드'], ['곁', '필요한 순간에 오래 함께하는 서비스']],
    clear: [['기준', '복잡함을 덜고 본질을 선명하게 전하는 서비스'], ['담담스튜디오', '차분하고 정확한 경험을 만드는 곳'], ['한결', '변함없이 믿을 수 있는 서비스'], ['여백랩', '더 나은 선택을 위한 공간']],
    bold: [['점프업', '새로운 가능성을 힘 있게 여는 서비스'], ['파동랩', '변화를 만들어내는 기술과 아이디어'], ['선명스튜디오', '문제를 뚜렷하게 해결하는 브랜드'], ['단단', '오래 믿고 맡길 수 있는 서비스']],
    playful: [['두두랩', '일상을 더 재미있게 바꾸는 서비스'], ['톡톡', '가볍고 빠르게 닿는 아이디어'], ['모락랩', '작은 영감이 자라나는 브랜드'], ['콩콩스튜디오', '즐거운 변화를 차곡차곡 만드는 곳']]
  },
  retail: {
    warm: [['다정상회', '좋은 물건과 마음을 함께 건네는 가게'], ['온담마켓', '따뜻한 취향을 발견하는 쇼핑 공간'], ['소담상점', '작지만 정성스러운 물건을 담은 곳'], ['곁상점', '일상 가까이 오래 머무는 브랜드']],
    clear: [['여백마켓', '덜어낸 취향을 선명하게 보여주는 가게'], ['담백상점', '꼭 필요한 물건을 고르는 공간'], ['결', '좋은 소재와 감각을 담은 셀렉트숍'], ['한점마켓', '하나의 기준으로 고른 물건들']],
    bold: [['픽온', '취향을 힘 있게 제안하는 스토어'], ['선택의결', '분명한 취향이 모이는 쇼핑 공간'], ['파동마켓', '새로운 라이프스타일을 여는 가게'], ['대담상점', '남다른 물건을 자신 있게 고르는 곳']],
    playful: [['콩콩마켓', '발견하는 재미가 가득한 쇼핑 공간'], ['두두상점', '기분 좋은 물건이 톡톡 튀는 가게'], ['모락스토어', '작은 설렘이 피어나는 곳'], ['알록마켓', '일상을 알록달록 채우는 브랜드']]
  },
  education: {
    warm: [['다온배움', '배움의 기쁨이 모두에게 다 오는 곳'], ['온마음클래스', '아이와 사람을 따뜻하게 성장시키는 수업'], ['곁스쿨', '배움의 길을 오래 함께 걷는 공간'], ['다정공부방', '편안한 마음으로 시작하는 배움']],
    clear: [['한결스쿨', '차분하게 쌓아가는 배움의 시간'], ['여백클래스', '스스로 생각하는 힘을 키우는 수업'], ['바른결', '단단하고 반듯한 성장을 돕는 곳'], ['맑은배움', '핵심을 선명하게 이해하는 교육']],
    bold: [['점프클래스', '가능성을 힘 있게 펼치는 배움'], ['큰숲스쿨', '넓은 시야와 큰 꿈을 키우는 곳'], ['파동교육', '새로운 생각을 깨우는 수업'], ['선명아카데미', '목표를 뚜렷하게 향하는 교육']],
    playful: [['콩콩스쿨', '재미있게 배우며 한 걸음씩 자라는 곳'], ['톡톡클래스', '호기심과 질문이 톡톡 피어나는 수업'], ['두두배움', '리듬감 있게 익히는 즐거운 공부'], ['초롱교실', '작은 발견이 반짝이는 배움']]
  },
  wellness: {
    warm: [['숨결', '몸과 마음이 편안히 쉬어가는 공간'], ['온쉼', '따뜻한 회복의 시간을 건네는 곳'], ['다정요가', '나를 다정하게 돌보는 움직임'], ['곁테라피', '필요한 순간 곁에서 함께하는 케어']],
    clear: [['맑은숨', '호흡과 몸의 균형을 되찾는 공간'], ['여백웰니스', '비워내며 본연의 나를 만나는 시간'], ['한결바디', '꾸준하고 건강한 변화를 돕는 곳'], ['담담테라피', '차분하게 나를 돌보는 케어']],
    bold: [['리셋바디', '새로운 나를 시작하는 웰니스 공간'], ['파동요가', '몸의 흐름을 깨우는 움직임'], ['단단케어', '내면과 몸을 함께 단단하게 만드는 곳'], ['점프웰니스', '활력 있는 일상으로 도약하는 케어']],
    playful: [['살랑요가', '가볍고 즐겁게 움직이는 시간'], ['콩콩바디', '몸과 기분이 함께 튀어 오르는 공간'], ['두두테라피', '작은 리듬으로 시작하는 회복'], ['말랑쉼', '긴장을 말랑하게 풀어주는 곳']]
  },
  studio: {
    warm: [['온작업실', '손길과 이야기가 따뜻하게 머무는 스튜디오'], ['다정공방', '정성스러운 창작을 함께 나누는 곳'], ['곁스튜디오', '좋아하는 일을 오래 이어가는 공간'], ['소담창작소', '작고 소중한 결과물을 만드는 곳']],
    clear: [['여백스튜디오', '본질에 집중한 창작을 담는 공간'], ['결작업실', '소재와 아이디어의 결을 살리는 곳'], ['담담공방', '차분하게 좋은 것을 만드는 시간'], ['맑은창작소', '깨끗한 감각으로 표현하는 스튜디오']],
    bold: [['파동스튜디오', '새로운 영감을 세상에 보내는 창작소'], ['대담공방', '나다운 작품을 힘 있게 만드는 곳'], ['선명작업실', '분명한 시선으로 완성하는 창작'], ['점화스튜디오', '아이디어에 불을 붙이는 공간']],
    playful: [['콩콩공방', '만들고 발견하는 즐거움이 가득한 곳'], ['두두스튜디오', '리듬감 있는 창작이 시작되는 공간'], ['알록작업실', '색과 상상이 자유롭게 피어나는 곳'], ['모락창작소', '작은 아이디어가 자라나는 스튜디오']]
  }
};

const categoryLabels = { brand: '브랜드', pet: '반려동물', child: '아이' };
const englishCategoryLabels = { brand: 'brand', pet: 'pet', child: 'baby' };
const industryLabels = { cafe: '카페', restaurant: '음식점', beauty: '뷰티·패션', service: '기술·서비스', retail: '쇼핑·소매', education: '교육·클래스', wellness: '건강·웰니스', studio: '공방·스튜디오' };
const englishIndustryLabels = { cafe: 'cafe', restaurant: 'restaurant', beauty: 'beauty & fashion', service: 'technology & service', retail: 'shopping & retail', education: 'education & classes', wellness: 'health & wellness', studio: 'crafts & studio' };
const toneLabels = { warm: '따뜻한', clear: '맑고 담백한', bold: '선명한', playful: '발랄한' };
const englishToneLabels = { warm: 'warm', clear: 'clear and simple', bold: 'distinctive', playful: 'playful' };
const elementLabels = { 목: '나무', 화: '불', 토: '흙', 금: '금', 수: '물' };
let category = 'brand';
let tone = 'warm';
let industry = 'cafe';
let language = 'ko';
let savedNames = JSON.parse(localStorage.getItem('nameforest-saved') || '[]');

const resultList = document.querySelector('#result-list');
const resultIntro = document.querySelector('#result-intro');
const savedCount = document.querySelector('#saved-count');
const toast = document.querySelector('#toast');
const languageToggle = document.querySelector('#language-toggle');

const englishLabels = {
  headerNote: 'Exploring today\'s names',
  heroTitle: 'A good name<br /><em>stays with you.</em>',
  heroDescription: 'We\'ll find a name that holds<br class="mobile-break" /> your taste and story.',
  workspaceLabel: 'Name recommendation settings',
  question: 'What are you naming?',
  categories: [['Brand', 'shop · service'], ['Pet', 'dog · cat'], ['Baby name', 'birth · saju']],
  industry: 'Brand industry',
  industryHint: 'Recommendations reflect both your industry and preferred mood.',
  sajuTitle: 'The season and family\'s story',
  sajuDescription: 'We\'ll consider the parents\' birth details and the baby\'s expected year and month.',
  mother: 'Mother', father: 'Father', childMonth: 'Baby\'s expected year and month',
  firstCharacter: 'Character to include', optional: 'optional', first: 'First', second: 'Second',
  characterHint: 'Try placing a preferred character at the beginning or end.',
  sajuNote: '※ Saju is only a reference for choosing a name.',
  petTitle: 'A name inspired by their season', petDescription: 'We\'ll use your pet\'s birth month to find a name with a fitting seasonal feeling.',
  petMonth: 'Pet\'s birth year and month', petNote: '※ Birth month is used only as a naming reference.',
  mood: 'What feeling do you want?', tones: ['Warm', 'Clear & simple', 'Distinctive', 'Playful'],
  keyword: 'A word to include', keywordPlaceholder: 'e.g. forest, light, slow, sea',
  length: 'Name length', lengths: ['Short', 'No preference', 'Long'],
  find: 'Find names', results: 'Names for you', savedHint: 'Save the names that speak to you.',
  saved: 'Saved names', image: '▧ Save image', reset: 'Reset', copy: 'Copy name', save: 'Save name', refresh: 'Get new recommendations',
  emptySaved: 'You have no saved names yet.', resetEmpty: 'There are no saved names to reset.', resetConfirm: 'Reset all saved names?', resetDone: 'All saved names have been reset.',
  exportDone: 'Your saved names are now an image.', noExport: 'Save a name first.', copied: 'was copied.', savedDone: 'was saved.', unsaved: 'was removed from saved names.', newNames: 'Found new names.'
};

function applyLanguage() {
  const isEnglish = language === 'en';
  document.documentElement.lang = language === 'en' ? 'en' : 'ko';
  document.title = isEnglish ? 'Nameforest | Find a name that feels like you' : '네임포레스트 | 이름을 찾는 작은 숲';
  languageToggle.textContent = isEnglish ? '한국어' : 'English';
  languageToggle.setAttribute('aria-label', isEnglish ? '한국어로 보기' : '영어로 보기');
  document.querySelector('.header-note').lastChild.textContent = isEnglish ? ` ${englishLabels.headerNote}` : ' 오늘의 이름을 탐색 중';
  document.querySelector('.workspace').setAttribute('aria-label', isEnglish ? englishLabels.workspaceLabel : '이름 추천 설정');
  document.querySelector('.hero-copy h1').innerHTML = isEnglish ? englishLabels.heroTitle : '좋은 이름은<br /><em>오래 머물러요.</em>';
  document.querySelector('.hero-description').innerHTML = isEnglish ? englishLabels.heroDescription : '당신의 취향과 이야기를 담아<br class="mobile-break" /> 오래 기억될 이름을 찾아드릴게요.';
  document.querySelector('.orbit-core span').textContent = isEnglish ? 'Name' : '이름';
  document.querySelector('.panel-heading h2').textContent = isEnglish ? englishLabels.question : '무엇의 이름인가요?';
  document.querySelector('.category-grid').setAttribute('aria-label', isEnglish ? 'Name category' : '이름 카테고리');
  document.querySelectorAll('.category-button').forEach((button, index) => {
    button.querySelector('span:not(.category-icon)').textContent = isEnglish ? englishLabels.categories[index][0] : ['브랜드', '반려동물', '아이 이름'][index];
    button.querySelector('small').textContent = isEnglish ? englishLabels.categories[index][1] : ['가게 · 서비스', '강아지 · 고양이', '사주 · 출생월'][index];
  });
  document.querySelector('#industry-select .expected-label').textContent = isEnglish ? englishLabels.industry : '브랜드 업종';
  document.querySelector('#brand-industry').setAttribute('aria-label', isEnglish ? 'Select brand industry' : '브랜드 업종 선택');
  document.querySelector('#industry-select .saju-note').textContent = isEnglish ? englishLabels.industryHint : '선택한 업종과 이름의 분위기를 함께 반영해요.';
  const industryOptions = isEnglish ? ['Cafe', 'Restaurant', 'Beauty & fashion', 'Technology & service', 'Shopping & retail', 'Education & classes', 'Health & wellness', 'Crafts & studio'] : ['카페', '음식점', '뷰티·패션', '기술·서비스', '쇼핑·소매', '교육·클래스', '건강·웰니스', '공방·스튜디오'];
  document.querySelectorAll('#brand-industry option').forEach((option, index) => { option.textContent = industryOptions[index]; });
  document.querySelector('#saju-fields h3').textContent = isEnglish ? englishLabels.sajuTitle : '아이의 계절과 가족의 결';
  document.querySelector('#saju-fields .saju-description').textContent = isEnglish ? englishLabels.sajuDescription : '부모님의 생년월일시와 아이의 태어날 연·월을 참고해 이름의 오행 균형을 살펴볼게요.';
  document.querySelector('#saju-fields .saju-grid').querySelectorAll('.saju-person-label').forEach((label, index) => { label.textContent = isEnglish ? [englishLabels.mother, englishLabels.father][index] : ['엄마', '아빠'][index]; });
  document.querySelector('#child-month').previousElementSibling.textContent = isEnglish ? englishLabels.childMonth : '아이의 태어날 연·월';
  ['mother-date', 'mother-time', 'father-date', 'father-time', 'child-month'].forEach((id, index) => {
    const koreanLabels = ['엄마 생년월일', '엄마 태어난 시간', '아빠 생년월일', '아빠 태어난 시간', '아이의 태어날 연월'];
    const englishInputLabels = ['Mother\'s birth date', 'Mother\'s birth time', 'Father\'s birth date', 'Father\'s birth time', 'Baby\'s expected year and month'];
    document.querySelector(`#${id}`).setAttribute('aria-label', isEnglish ? englishInputLabels[index] : koreanLabels[index]);
  });
  document.querySelector('.required-name-fields .expected-label').childNodes[0].textContent = isEnglish ? `${englishLabels.firstCharacter} ` : '이름에 넣을 글자 ';
  document.querySelector('.required-name-fields .expected-label span').textContent = isEnglish ? englishLabels.optional : '선택';
  document.querySelector('#first-name-character').placeholder = isEnglish ? englishLabels.first : '첫 글자';
  document.querySelector('#second-name-character').placeholder = isEnglish ? englishLabels.second : '둘째 글자';
  document.querySelector('.character-hint').textContent = isEnglish ? englishLabels.characterHint : '첫 글자 또는 둘째 글자 중 원하는 위치에 넣어보세요.';
  document.querySelector('#saju-fields .saju-note').textContent = isEnglish ? englishLabels.sajuNote : '※ 사주는 이름을 고르는 참고 자료이며, 정확한 풀이를 대신하지 않아요.';
  document.querySelector('#pet-fields h3').textContent = isEnglish ? englishLabels.petTitle : '태어난 계절을 담아볼게요';
  document.querySelector('#pet-fields .saju-description').textContent = isEnglish ? englishLabels.petDescription : '반려동물이 태어난 연·월을 참고해 계절감이 어울리는 이름을 찾아볼게요.';
  document.querySelector('#pet-month').previousElementSibling.textContent = isEnglish ? englishLabels.petMonth : '반려동물이 태어난 연·월';
  document.querySelector('#pet-month').setAttribute('aria-label', isEnglish ? 'Pet\'s birth year and month' : '반려동물이 태어난 연월');
  document.querySelector('#pet-fields .saju-note').textContent = isEnglish ? englishLabels.petNote : '※ 출생 월은 이름을 고르는 참고 자료로만 활용해요.';
  document.querySelector('.block-title h2').textContent = isEnglish ? englishLabels.mood : '어떤 결을 원하나요?';
  document.querySelector('.tone-list').setAttribute('aria-label', isEnglish ? 'Name mood' : '이름 분위기');
  document.querySelectorAll('.tone-chip').forEach((button, index) => { button.childNodes[1].textContent = isEnglish ? englishLabels.tones[index] : ['따뜻한', '맑고 담백한', '선명한', '발랄한'][index]; });
  document.querySelector('#keyword').previousElementSibling.childNodes[0].textContent = isEnglish ? `${englishLabels.keyword} ` : '담고 싶은 단어 ';
  document.querySelector('#keyword').previousElementSibling.querySelector('span').textContent = isEnglish ? englishLabels.optional : '선택';
  document.querySelector('#keyword').placeholder = isEnglish ? englishLabels.keywordPlaceholder : '예: 숲, 빛, 느린, 바다';
  document.querySelector('#keyword').setAttribute('aria-label', isEnglish ? englishLabels.keyword : '담고 싶은 단어');
  document.querySelector('.length-block .field-label').childNodes[0].textContent = isEnglish ? `${englishLabels.length} ` : '이름 길이 ';
  document.querySelectorAll('.range-labels span').forEach((label, index) => { label.textContent = isEnglish ? englishLabels.lengths[[0, 1, 2][index]] : ['짧게', '상관없어요', '길게'][index]; });
  document.querySelector('#length-range').setAttribute('aria-label', isEnglish ? englishLabels.length : '이름 길이');
  document.querySelector('#generate-button span').textContent = isEnglish ? englishLabels.find : '이름 찾기';
  document.querySelector('.results-topline h2').textContent = isEnglish ? englishLabels.results : '당신을 위한 이름';
  document.querySelector('#refresh-button').setAttribute('aria-label', isEnglish ? englishLabels.refresh : '새 추천 받기');
  document.querySelector('#refresh-button').title = isEnglish ? englishLabels.refresh : '새 추천 받기';
  document.querySelector('.results-footer > span').lastChild.textContent = isEnglish ? ` ${englishLabels.savedHint}` : ' 마음에 드는 이름은 저장해두세요.';
  document.querySelector('#saved-toggle').childNodes[0].textContent = isEnglish ? `${englishLabels.saved} ` : '저장한 이름 ';
  document.querySelector('#export-saved').textContent = isEnglish ? englishLabels.image : '▧ 이미지 저장';
  document.querySelector('#reset-saved').textContent = isEnglish ? englishLabels.reset : '초기화';
  renderResults();
}

function getNames() {
  const keyword = document.querySelector('#keyword').value.trim();
  let names = category === 'brand' ? [...brandIndustries[industry][tone]] : [...data[category][tone]];
  if (category === 'child') {
    const saju = getSajuProfile();
    names = names.map(([name, meaning]) => [name, `${meaning} · ${elementLabels[saju.balanced]} 기운을 보완하는 이름`]);
    if (saju.month) names = names.map(([name, meaning], index) => index === 0 ? [name, `${meaning} · ${saju.month}월의 계절감까지 참고`] : [name, meaning]);
    const firstCharacter = document.querySelector('#first-name-character')?.value.trim();
    const secondCharacter = document.querySelector('#second-name-character')?.value.trim();
    if (firstCharacter || secondCharacter) {
      names = names.map(([name, meaning], index) => {
        const fallback = name.slice(1) || name;
        const adjustedName = `${firstCharacter || name[0]}${secondCharacter || fallback[0] || name[1] || ''}`;
        return [adjustedName, `${meaning} · ${firstCharacter || secondCharacter} 필수 글자 반영`];
      });
    }
  }
  if (category === 'pet') {
    const petMonth = document.querySelector('#pet-month')?.value.split('-')[1];
    if (petMonth) {
      const month = Number(petMonth);
      names = names.map(([name, meaning], index) => [name, `${meaning} · ${month}월에 태어난 아이의 계절감${index === 0 ? '을 담은 이름' : ''}`]);
      names = [...names.slice(month % names.length), ...names.slice(0, month % names.length)];
    }
  }
  if (keyword) {
    const keywordNames = names.map(([name, meaning]) => [keyword + name, `${keyword}의 감각을 담은 ${meaning}`]);
    names = [...keywordNames.slice(0, 2), ...names.slice(0, 2)];
  }
  const length = Number(document.querySelector('#length-range').value);
  if (length === 1) names = names.sort((a, b) => a[0].length - b[0].length);
  if (length === 2) names = names.sort((a, b) => b[0].length - a[0].length);
  return names.slice(0, 4);
}

function getSajuProfile() {
  const values = ['mother-date', 'mother-time', 'father-date', 'father-time', 'child-month']
    .map(id => document.querySelector(`#${id}`)?.value || '').join('');
  const digits = [...values].filter(char => /\d/.test(char)).map(Number);
  const scores = { 목: 1, 화: 1, 토: 1, 금: 1, 수: 1 };
  const elements = Object.keys(scores);
  digits.forEach((digit, index) => { scores[elements[(digit + index) % elements.length]] += 1; });
  const month = document.querySelector('#child-month')?.value.split('-')[1];
  if (month) scores[elements[(Number(month) + 1) % elements.length]] += 2;
  const balanced = elements.sort((first, second) => scores[first] - scores[second])[0];
  return { balanced, month: month ? Number(month) : null };
}

function renderResults() {
  const names = getNames();
  const categoryDescription = category === 'brand' ? `${industryLabels[industry]} ${categoryLabels[category]}` : categoryLabels[category];
  resultIntro.textContent = language === 'en' ? `${englishToneLabels[tone]} ${category === 'brand' ? `${englishIndustryLabels[industry]} ${englishCategoryLabels[category]}` : englishCategoryLabels[category]} names picked for you.` : `${toneLabels[tone]} 결의 ${categoryDescription} 이름을 골라봤어요.`;
  resultList.innerHTML = names.map(([name, meaning]) => `
    <article class="result-card">
      <div><h3 class="result-name">${name}</h3><p class="result-meaning">${language === 'en' ? `A ${englishToneLabels[tone]} ${englishCategoryLabels[category]} name with a memorable feeling.` : meaning}</p></div>
      <div class="result-actions"><button class="icon-button copy" data-copy="${name}" aria-label="${name} ${language === 'en' ? englishLabels.copy : '복사'}" title="${language === 'en' ? englishLabels.copy : '이름 복사'}">□</button><button class="icon-button ${savedNames.includes(name) ? 'saved' : ''}" data-save="${name}" aria-label="${name} ${language === 'en' ? englishLabels.save : '저장'}" title="${language === 'en' ? englishLabels.save : '이름 저장'}">♡</button></div>
    </article>`).join('');
  bindResultActions();
  updateSavedCount();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('visible'), 1800);
}

function updateSavedCount() {
  savedCount.textContent = savedNames.length;
  localStorage.setItem('nameforest-saved', JSON.stringify(savedNames));
}

function resetSavedNames() {
  if (!savedNames.length) {
    showToast(language === 'en' ? englishLabels.resetEmpty : '초기화할 저장한 이름이 없어요.');
    return;
  }
  if (!window.confirm(language === 'en' ? englishLabels.resetConfirm : '저장한 이름을 모두 초기화할까요?')) return;
  savedNames = [];
  renderResults();
  showToast(language === 'en' ? englishLabels.resetDone : '저장한 이름을 모두 초기화했어요.');
}

function exportSavedNames() {
  if (!savedNames.length) {
    showToast(language === 'en' ? englishLabels.noExport : '먼저 마음에 드는 이름을 저장해주세요.');
    return;
  }
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const scale = 2;
  const width = 720;
  const rowHeight = 92;
  const height = 168 + savedNames.length * rowHeight;
  canvas.width = width * scale;
  canvas.height = height * scale;
  context.scale(scale, scale);
  context.fillStyle = '#e8eee8';
  context.fillRect(0, 0, width, height);
  context.fillStyle = '#3f5948';
  context.font = '700 13px DM Sans, sans-serif';
  context.fillText('NAMEFOREST', 58, 55);
  context.fillStyle = '#1d2924';
  context.font = '400 34px Gowun Batang, serif';
  context.fillText(language === 'en' ? 'Saved names' : '저장해둔 이름', 58, 104);
  savedNames.forEach((name, index) => {
    const top = 142 + index * rowHeight;
    context.fillStyle = '#fffdfa';
    context.fillRect(48, top, width - 96, 66);
    context.fillStyle = '#e58f71';
    context.fillRect(48, top, 5, 66);
    context.fillStyle = '#1d2924';
    context.font = '400 24px Gowun Batang, serif';
    context.fillText(name, 76, top + 41);
  });
  const link = document.createElement('a');
  link.download = `nameforest-saved-${new Date().toISOString().slice(0, 10)}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast(language === 'en' ? englishLabels.exportDone : '저장한 이름을 이미지로 만들었어요.');
}

function bindResultActions() {
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const name = button.dataset.copy;
    try { await navigator.clipboard.writeText(name); } catch { /* clipboard unavailable */ }
    showToast(language === 'en' ? `'${name}' ${englishLabels.copied}` : `'${name}'을(를) 복사했어요.`);
  }));
  document.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => {
    const name = button.dataset.save;
    savedNames = savedNames.includes(name) ? savedNames.filter(item => item !== name) : [...savedNames, name];
    button.classList.toggle('saved', savedNames.includes(name));
    button.textContent = savedNames.includes(name) ? '♥' : '♡';
    updateSavedCount();
    showToast(savedNames.includes(name) ? (language === 'en' ? `'${name}' ${englishLabels.savedDone}` : `'${name}'을(를) 저장했어요.`) : (language === 'en' ? englishLabels.unsaved : '저장에서 뺐어요.'));
  }));
}

document.querySelectorAll('.category-button').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.category;
  document.querySelectorAll('.category-button').forEach(item => item.classList.toggle('active', item === button));
  document.querySelector('#saju-fields').hidden = category !== 'child';
  document.querySelector('#pet-fields').hidden = category !== 'pet';
  document.querySelector('#industry-select').hidden = category !== 'brand';
  renderResults();
}));
document.querySelectorAll('.tone-chip').forEach(button => button.addEventListener('click', () => {
  tone = button.dataset.tone;
  document.querySelectorAll('.tone-chip').forEach(item => item.classList.toggle('active', item === button));
  renderResults();
}));
document.querySelector('#generate-button').addEventListener('click', () => { renderResults(); showToast(language === 'en' ? englishLabels.newNames : '새로운 이름을 찾았어요.'); });
document.querySelector('#refresh-button').addEventListener('click', renderResults);
document.querySelector('#keyword').addEventListener('input', renderResults);
document.querySelectorAll('#saju-fields input, #pet-fields input').forEach(input => input.addEventListener('input', renderResults));
document.querySelector('#length-range').addEventListener('input', event => {
  const values = language === 'en' ? ['No preference', 'Short name', 'Long name'] : ['상관없어요', '짧은 이름', '긴 이름'];
  document.querySelector('#length-value').textContent = values[event.target.value];
  renderResults();
});
document.querySelector('#brand-industry').addEventListener('change', event => {
  industry = event.target.value;
  renderResults();
});
document.querySelector('#saved-toggle').addEventListener('click', () => showToast(savedNames.length ? (language === 'en' ? `${englishLabels.saved} ${savedNames.length}` : `저장한 이름 ${savedNames.length}개가 있어요.`) : (language === 'en' ? englishLabels.emptySaved : '아직 저장한 이름이 없어요.')));
document.querySelector('#export-saved').addEventListener('click', exportSavedNames);
document.querySelector('#reset-saved').addEventListener('click', resetSavedNames);
languageToggle.addEventListener('click', () => {
  language = language === 'ko' ? 'en' : 'ko';
  applyLanguage();
});

renderResults();
