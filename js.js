const scholars = [
  {
    name: "Ibn Sina",
    era: "Golden Age",
    category: "Medicine",
    coords: [37.6612, 40.2268],
    bio: "Ibn Sina (Avicenna) was a Persian polymath who wrote 'The Canon of Medicine,' a standard medical text in Europe for centuries.",
    basicFacts: "- Lived: 980–1037 CE\n- Author of 'Canon of Medicine'",
    interestingFact: "He mastered medicine by 16 and treated patients at that age.",
    audio: "audio/ibn-sina.mp3"
  },
  {
    name: "Al-Khwarizmi",
    era: "Golden Age",
    category: "Mathematics",
    coords: [33.3152, 44.3661],
    bio: "Al-Khwarizmi introduced algebra and Hindu-Arabic numerals to the world.",
    basicFacts: "- Lived: 780–850 CE\n- Algorithm named after him",
    interestingFact: "The word 'algorithm' comes from his name!",
    audio: "audio/al-khwarizmi.mp3"
  },
  {
    name: "Ibn al-Haytham",
    era: "Golden Age",
    category: "Physics",
    coords: [30.0444, 31.2357],
    bio: "A pioneer of optics, Ibn al-Haytham explained how we see using experiments.",
    basicFacts: "- Lived: 965–1040 CE\n- Wrote 'Book of Optics'",
    interestingFact: "He faked madness to avoid political pressure and focus on science.",
    audio: "audio/ibn-al-haytham.mp3"
  },
  {
    name: "Al-Razi",
    era: "Golden Age",
    category: "Medicine",
    coords: [35.6892, 51.3890],
    bio: "A leading physician who emphasized observation in diagnosing diseases.",
    basicFacts: "- Lived: 854–925 CE\n- Wrote 'Treatise on Smallpox & Measles'",
    interestingFact: "He identified alcohol as a chemical compound!",
    audio: "audio/al-razi.mp3"
  },
  {
    name: "Al-Zahrawi",
    era: "Golden Age",
    category: "Surgery",
    coords: [37.3891, -5.9845],
    bio: "Al-Zahrawi wrote a 30-volume encyclopedia of medical practices and surgery.",
    basicFacts: "- Lived: 936–1013 CE\n- Wrote 'Kitab al-Tasrif'",
    interestingFact: "His surgery guide was used in Europe for 500 years!",
    audio: "audio/al-zahrawi.mp3"
  },
  {
    name: "Al-Farabi",
    era: "Golden Age",
    category: "Philosophy",
    coords: [49.8206, 73.0853],
    bio: "A philosopher who bridged Greek and Islamic thought.",
    basicFacts: "- Lived: 872–950 CE\n- Known for political philosophy",
    interestingFact: "He was called the 'Second Teacher' after Aristotle.",
    audio: "audio/al-farabi.mp3"
  },
  {
    name: "Ibn Khaldun",
    era: "Golden Age",
    category: "History",
    coords: [36.8065, 10.1815], // Tunis, Tunisia
    bio: "A pioneer in sociology, historiography, and economics, Ibn Khaldun authored the famous 'Muqaddimah' which analyzed the rise and fall of civilizations.",
    basicFacts: "- Lived: 1332–1406 CE\n- Wrote 'Muqaddimah'\n- Considered the father of social sciences",
    interestingFact: "His theories on historical cycles predate modern sociology.",
    audio: "audio/ibn-khaldun.mp3"
  },
  {
    name: "Al-Masudi",
    era: "Golden Age",
    category: "Geography",
    coords: [30.0444, 31.2357], // Cairo, Egypt
    bio: "Known as the Arab Herodotus, Al-Masudi blended geography, history, and science in his writings like 'The Meadows of Gold.'",
    basicFacts: "- Lived: 896–956 CE\n- Historian and geographer\n- Traveled extensively across Asia and Africa",
    interestingFact: "His works contained early theories about climate zones and world geography.",
    audio: "audio/al-masudi.mp3"
  },
  {
    name: "Ahmed Baba al-Timbukti",
    era: "Golden Age",
    category: "Education",
    coords: [16.7666, -3.0026], // Timbuktu, Mali
    bio: "A major figure of the intellectual tradition in West Africa, he was a prolific scholar and teacher at Timbuktu's Sankore University.",
    basicFacts: "- Lived: 1556–1627 CE\n- Wrote over 40 books\n- Expert in Islamic law and theology",
    interestingFact: "He was once imprisoned by Moroccan forces for defending the intellectual autonomy of Timbuktu.",
    audio: "audio/ahmed-baba.mp3"
  },
  {
    name: "Al-Hajj Salim Suware",
    era: "Golden Age",
    category: "Law",
    coords: [10.6172, -10.7086], // Futa Jallon, Guinea
    bio: "A leading West African jurist and Islamic educator who promoted peaceful teaching and the Maliki school of jurisprudence.",
    basicFacts: "- 13th century CE\n- Spread Islamic education throughout Guinea and Mali",
    interestingFact: "He emphasized peace and religious tolerance while building Islamic education networks.",
    audio: "audio/salim-suware.mp3"
  },
  {
    name: "Usman dan Fodio",
    era: "Golden Age",
    category: "Islamic Revival",
    coords: [13.0533, 5.3226], // Sokoto, Nigeria
    bio: "Founder of the Sokoto Caliphate, Usman led a major Islamic revival movement in West Africa that emphasized education and justice.",
    basicFacts: "- Lived: 1754–1817 CE\n- Founded one of the largest African empires\n- Promoted mass literacy",
    interestingFact: "He authored over 100 books and opened schools for both men and women.",
    audio: "audio/usman-dan-fodio.mp3"
  },
  {
    name: "Shaykh Anta Diop",
    era: "Modern",
    category: "History",
    coords: [14.6928, -17.4467], // Dakar, Senegal
    bio: "A modern historian and physicist who advocated for recognizing ancient Egypt as a black African civilization.",
    basicFacts: "- Lived: 1923–1986 CE\n- Trained in nuclear physics\n- Wrote 'The African Origin of Civilization'",
    interestingFact: "He challenged Eurocentric views of history and inspired generations of African scholars.",
    audio: "audio/anta-diop.mp3"
  },
  {
    name: "Al-Tahir ibn Ashur",
    era: "Modern",
    category: "Islamic Law",
    coords: [36.8065, 10.1815], // Tunis, Tunisia
    bio: "A reformist scholar who emphasized the objectives (Maqasid) of Sharia in modern Islamic legal thought.",
    basicFacts: "- Lived: 1879–1973 CE\n- Wrote 'Tafsir al-Tahrir wa al-Tanwir'\n- Promoted renewal in Islamic jurisprudence",
    interestingFact: "He believed Islamic law should adapt to changing times through principles, not just texts.",
    audio: "audio/ibn-ashur.mp3"
  },  
  {
    name: "Al-Jazari",
    era: "Golden Age",
    category: "Engineering",
    coords: [37.8722, 41.1200],
    bio: "Inventor of early robotic machines and water-powered devices.",
    basicFacts: "- Lived: 1136–1206 CE\n- Wrote 'Book of Ingenious Devices'",
    interestingFact: "He built a mechanical elephant clock over 800 years ago.",
    audio: "audio/al-jazari.mp3"
  },
  {
    name: "Al-Kindi",
    era: "Golden Age",
    category: "Philosophy",
    coords: [21.3891, 39.8579],
    bio: "Known as the first Arab philosopher who translated and developed Greek philosophy.",
    basicFacts: "- Lived: 801–873 CE\n- Wrote over 260 books",
    interestingFact: "He tried to mathematically explain music and emotions.",
    audio: "audio/al-kindi.mp3"
  },
  {
    name: "Al-Biruni",
    era: "Golden Age",
    category: "Astronomy",
    coords: [36.5656, 52.6843],
    bio: "Al-Biruni calculated Earth's radius and studied time zones.",
    basicFacts: "- Lived: 973–1048 CE\n- Master of many sciences",
    interestingFact: "He suggested the Earth rotates — centuries before Galileo.",
    audio: "audio/al-biruni.mp3"
  },
  {
    name: "Al-Masudi",
    era: "Golden Age",
    category: "Geography",
    coords: [30.0444, 31.2357],
    bio: "A historian and geographer who described cultures across Asia and Africa.",
    basicFacts: "- Lived: 896–956 CE\n- Wrote 'The Meadows of Gold'",
    interestingFact: "He was nicknamed the 'Herodotus of the Arabs.'",
    audio: "audio/al-masudi.mp3"
  },
  {
    name: "Ibn Battuta",
    era: "Golden Age",
    category: "Travel",
    coords: [31.7917, -7.0926],
    bio: "The most famous Muslim traveler who journeyed over 120,000 km.",
    basicFacts: "- Lived: 1304–1369 CE\n- Traveled for 30 years",
    interestingFact: "He visited more than 40 modern countries!",
    audio: "audio/ibn-battuta.mp3"
  },
  {
    name: "Al-Tusi",
    era: "Golden Age",
    category: "Astronomy",
    coords: [36.2975, 59.6111],
    bio: "Developed advanced models of planetary motion.",
    basicFacts: "- Lived: 1201–1274 CE\n- Wrote the 'Tusi-couple theory'",
    interestingFact: "His work influenced Copernicus’ heliocentric model.",
    audio: "audio/al-tusi.mp3"
  },
  {
    name: "Ibn al-Nafis",
    era: "Golden Age",
    category: "Medicine",
    coords: [31.9632, 35.9304],
    bio: "Discovered pulmonary circulation, disproving Galen's theory.",
    basicFacts: "- Lived: 1213–1288 CE\n- Explained blood circulation",
    interestingFact: "He beat Europe to the discovery by 300 years.",
    audio: "audio/ibn-al-nafis.mp3"
  },
  {
    name: "Ibn Khaldun",
    era: "Golden Age",
    category: "History",
    coords: [33.5899, -7.6039],
    bio: "A sociologist and historian who wrote 'Muqaddimah.'",
    basicFacts: "- Lived: 1332–1406 CE\n- Father of modern sociology",
    interestingFact: "He predicted modern social science centuries ahead.",
    audio: "audio/ibn-khaldun.mp3"
  },
  {
    name: "Al-Farghani",
    era: "Golden Age",
    category: "Astronomy",
    coords: [38.9697, 58.3790],
    bio: "An astronomer whose works were translated and taught in Europe.",
    basicFacts: "- 9th century CE\n- Wrote 'Elements of Astronomy'",
    interestingFact: "His works were used to build sundials in cathedrals.",
    audio: "audio/al-farghani.mp3"
  },
  {
    name: "Malala Yousafzai",
    era: "Modern",
    category: "Education",
    coords: [35.0041, 72.0400],
    bio: "A Pakistani education activist and Nobel Peace Prize winner.",
    basicFacts: "- Born: 1997\n- Youngest Nobel laureate",
    interestingFact: "She survived an assassination attempt at age 15 and kept fighting for girls' education.",
    audio: "audio/malala.mp3"
  },
  {
    name: "Ahmed Zewail",
    era: "Modern",
    category: "Chemistry",
    coords: [30.0444, 31.2357],
    bio: "Nobel laureate who pioneered femtochemistry.",
    basicFacts: "- Lived: 1946–2016\n- Won Nobel Prize in Chemistry",
    interestingFact: "He photographed chemical reactions in femtoseconds!",
    audio: "audio/ahmed-zewail.mp3"
  },
  {
    name: "Maryam Mirzakhani",
    era: "Modern",
    category: "Mathematics",
    coords: [35.6892, 51.3890],
    bio: "First woman to win the Fields Medal in mathematics.",
    basicFacts: "- Lived: 1977–2017\n- Focused on geometry and surfaces",
    interestingFact: "She visualized complex math problems with sketches.",
    audio: "audio/maryam.mp3"
  },
  {
    name: "Nergis Mavalvala",
    era: "Modern",
    category: "Physics",
    coords: [42.3601, -71.0942],
    bio: "Astrophysicist who helped detect gravitational waves.",
    basicFacts: "- Born: 1968\n- MIT professor",
    interestingFact: "She helped prove Einstein’s theory 100 years later.",
    audio: "audio/nergis.mp3"
  },
  {
    name: "Hayat Sindi",
    era: "Modern",
    category: "Biotechnology",
    coords: [21.4858, 39.1925],
    bio: "One of the first female Saudi scientists in biotechnology.",
    basicFacts: "- Born: 1967\n- Harvard researcher",
    interestingFact: "She invented low-cost diagnostics for poor regions.",
    audio: "audio/hayat-sindi.mp3"
  }
];

let map, markers = [];

function initMap() {
  map = L.map('map').setView([34, 40], 3);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  displayMarkers(scholars);
}

function displayMarkers(data) {
  // Remove old markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  data.forEach(scholar => {
    const marker = L.marker(scholar.coords).addTo(map);

    // Add click listener to open sidebar with scholar details
    marker.on('click', () => {
      showScholarDetails(scholar);
    });

    markers.push(marker);
  });
}


// Search functionality
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("map")) {
    initMap();
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.trim().toLowerCase();
      const filtered = scholars.filter(s =>
        s.name.toLowerCase().includes(term) ||
        s.era.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term)
      );
      displayMarkers(filtered);
    });
  }
});
function showScholarDetails(scholar) {
  const details = document.getElementById('scholarDetails');
  details.classList.remove('hidden');

  // Delay adding active for smooth slide-in transition
  setTimeout(() => details.classList.add('active'), 10);

  document.getElementById('scholarName').textContent = scholar.name;
  document.getElementById('scholarEra').textContent = scholar.era;
  document.getElementById('scholarCategory').textContent = scholar.category;
  document.getElementById('scholarFacts').innerHTML = scholar.basicFacts.replace(/\n/g, '<br>');
  document.getElementById('scholarBio').textContent = scholar.bio;
  document.getElementById('scholarFact').textContent = scholar.interestingFact || "N/A";
  document.getElementById('scholarAudio').src = scholar.audio;
}

function showScholarDetails(scholar) {
  document.getElementById('scholarDetails').classList.remove('hidden');
  document.getElementById('scholarName').textContent = scholar.name;
  document.getElementById('scholarEra').textContent = scholar.era;
  document.getElementById('scholarCategory').textContent = scholar.category;
  document.getElementById('scholarFacts').innerHTML = scholar.basicFacts.replace(/\n/g, '<br>');
  document.getElementById('scholarBio').textContent = scholar.bio;
  document.getElementById('scholarFact').textContent = scholar.interestingFact || "N/A";
  document.getElementById('scholarAudio').src = scholar.audio;
}

  async function startQuiz() {
    const scholarName = document.getElementById('scholarName').textContent;
    const bio = document.getElementById('scholarBio').textContent;
    const facts = document.getElementById('scholarFacts').innerText;
    const fullPrompt = `Create a 3-question multiple choice quiz about this Muslim scholar: ${scholarName}.\nBio:\n${bio}\nFacts:\n${facts}\nEach question should have 4 options and clearly indicate the correct answer.`;
  
    // Simulate loading
    alert("Generating quiz...");
  
    // Call AI (replace this later with OpenAI API call)
    const aiQuiz = await mockAiQuiz(fullPrompt);
    
    // Show it in a nicer way
    alert(`📚 Quiz for ${scholarName}\n\n${aiQuiz}`);
  }
  document.getElementById('backBtn').addEventListener('click', () => {
    document.getElementById('scholarDetails').classList.add('hidden');
  });
  function showScholarDetails(scholar) {
    const details = document.getElementById('scholarDetails');
    details.classList.add('active');
    details.classList.remove('hidden');
  
    document.getElementById('scholarName').textContent = scholar.name;
    document.getElementById('scholarEra').textContent = scholar.era;
    document.getElementById('scholarCategory').textContent = scholar.category;
    document.getElementById('scholarFacts').innerHTML = scholar.basicFacts.replace(/\n/g, '<br>');
    document.getElementById('scholarBio').textContent = scholar.bio;
    document.getElementById('scholarFact').textContent = scholar.interestingFact || "N/A";
    document.getElementById('scholarAudio').src = scholar.audio;
  }
  document.getElementById('backBtn').addEventListener('click', () => {
    const details = document.getElementById('scholarDetails');
    // Slide sidebar out
    details.classList.remove('active');
    // After animation, hide completely
    setTimeout(() => details.classList.add('hidden'), 300);
  });

  
  marker.on('click', () => showScholarDetails(scholar));