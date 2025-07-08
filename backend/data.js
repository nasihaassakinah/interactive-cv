// backend/data.js

const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2020 - 2022',
    institution: 'MA Sunan Pandanaran',
    major: 'IPA'
  },
  {
    id: 3,
    period: '2016 - 2019',
    institution: 'MTs Perguruan muallimat',
    major: 'SMP'
  },
  {
    id: 4,
    period: '2010 - 2016',
    institution: 'MI AZZEIN',
    major: 'SD'
  },
];


const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Mahir' },

];


const projects = [
  {
    title: 'Jogja-Inside',
    image: 'https://via.placeholder.com/500x300?text=Jogja+Inside',
    description: 'Website rekomendasi destinasi wisata di Yogyakarta dengan fitur login admin, manajemen user & destinasi.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/RamadhanZaki/Jogja_Inside' // atau link deploy kamu
  },

];

module.exports = { educationHistory, skills, projects };
