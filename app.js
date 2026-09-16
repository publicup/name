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

const categoryLabels = { brand: '브랜드', pet: '반려동물', child: '아이' };
const toneLabels = { warm: '따뜻한', clear: '맑고 담백한', bold: '선명한', playful: '발랄한' };
const elementLabels = { 목: '나무', 화: '불', 토: '흙', 금: '금', 수: '물' };
let category = 'brand';
let tone = 'warm';
let savedNames = JSON.parse(localStorage.getItem('nameforest-saved') || '[]');

const resultList = document.querySelector('#result-list');
const resultIntro = document.querySelector('#result-intro');
const savedCount = document.querySelector('#saved-count');
const toast = document.querySelector('#toast');

function getNames() {
  const keyword = document.querySelector('#keyword').value.trim();
  let names = [...data[category][tone]];
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
  resultIntro.textContent = `${toneLabels[tone]} 결의 ${categoryLabels[category]} 이름을 골라봤어요.`;
  resultList.innerHTML = names.map(([name, meaning]) => `
    <article class="result-card">
      <div><h3 class="result-name">${name}</h3><p class="result-meaning">${meaning}</p></div>
      <div class="result-actions"><button class="icon-button copy" data-copy="${name}" aria-label="${name} 복사" title="이름 복사">□</button><button class="icon-button ${savedNames.includes(name) ? 'saved' : ''}" data-save="${name}" aria-label="${name} 저장" title="이름 저장">♡</button></div>
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

function exportSavedNames() {
  if (!savedNames.length) {
    showToast('먼저 마음에 드는 이름을 저장해주세요.');
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
  context.fillText('저장해둔 이름', 58, 104);
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
  showToast('저장한 이름을 이미지로 만들었어요.');
}

function bindResultActions() {
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const name = button.dataset.copy;
    try { await navigator.clipboard.writeText(name); } catch { /* clipboard unavailable */ }
    showToast(`'${name}'을(를) 복사했어요.`);
  }));
  document.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => {
    const name = button.dataset.save;
    savedNames = savedNames.includes(name) ? savedNames.filter(item => item !== name) : [...savedNames, name];
    button.classList.toggle('saved', savedNames.includes(name));
    button.textContent = savedNames.includes(name) ? '♥' : '♡';
    updateSavedCount();
    showToast(savedNames.includes(name) ? `'${name}'을(를) 저장했어요.` : '저장에서 뺐어요.');
  }));
}

document.querySelectorAll('.category-button').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.category;
  document.querySelectorAll('.category-button').forEach(item => item.classList.toggle('active', item === button));
  document.querySelector('#saju-fields').hidden = category !== 'child';
  document.querySelector('#pet-fields').hidden = category !== 'pet';
  renderResults();
}));
document.querySelectorAll('.tone-chip').forEach(button => button.addEventListener('click', () => {
  tone = button.dataset.tone;
  document.querySelectorAll('.tone-chip').forEach(item => item.classList.toggle('active', item === button));
  renderResults();
}));
document.querySelector('#generate-button').addEventListener('click', () => { renderResults(); showToast('새로운 이름을 찾았어요.'); });
document.querySelector('#refresh-button').addEventListener('click', renderResults);
document.querySelector('#keyword').addEventListener('input', renderResults);
document.querySelectorAll('#saju-fields input, #pet-fields input').forEach(input => input.addEventListener('input', renderResults));
document.querySelector('#length-range').addEventListener('input', event => {
  const values = ['상관없어요', '짧은 이름', '긴 이름'];
  document.querySelector('#length-value').textContent = values[event.target.value];
  renderResults();
});
document.querySelector('#saved-toggle').addEventListener('click', () => showToast(savedNames.length ? `저장한 이름 ${savedNames.length}개가 있어요.` : '아직 저장한 이름이 없어요.'));
document.querySelector('#export-saved').addEventListener('click', exportSavedNames);

renderResults();
