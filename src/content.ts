// All site text lives here.

export const profile = {
  name: 'Hoang Pham Viet Quang',
  role: { lead: 'Final-year student', place: 'NTU Singapore', status: 'Open to research assistant roles' },
  headline: ['I like taking systems apart to see ', 'where they break.'],
  // Small HTML is allowed here: <a> links, <mark> highlights, and data-mail for the email link.
  story: [
    'I started research through <a href="https://www.ntu.edu.sg/education/undergraduate-research-experience-on-campus-(ureca)">URECA</a>, under <a href="https://personal.ntu.edu.sg/wslin/">Prof. Lin Weisi</a>, to see if I would like it. I picked <mark>machine unlearning</mark> because it <mark>pokes at a neural network from the inside</mark>, and I liked that.',
    'My internship at <a href="https://smart.mit.edu/">SMART</a>, with <a href="https://arunv3rma.github.io/">Dr. Arun Verma</a>, gave me the confidence to commit to this path. I took the same approach to <mark>RAG</mark> systems and mostly found failures, which led me to a question I still care about: <mark>how can models remember things flexibly and put them to use</mark>, as well as people do but at scale?',
    'Now I am looking at <mark>robots</mark> too, for my final year project with <a href="https://mreallab.github.io/">Prof. Zhang Hanwang</a>. I still start from what fails, but I am exploring. I am drawn to the beautiful application of <mark>diffusion models</mark> to robot policies, and how much is still left to improve.',
  ],
  noPubs:
    'I have no publications yet, so the work below is what I can show. I am looking for <mark>research assistant opportunities</mark> in robot learning, agentic memory and continual learning. If that fits your group, <a href="#" data-mail>get in touch</a>.',
  // The email is split so the full address never appears in the page source.
  emailUser: 'quanghpv0212',
  emailDomain: 'gmail.com',
  github: 'https://github.com/QuangHPV',
  linkedin: 'https://www.linkedin.com/in/quang-hoang-pham-viet',
  photo: '/headshot.jpg',
  description:
    'Hoang Pham Viet Quang, a computer science undergraduate at NTU Singapore, doing research on agentic memory, continual learning and robot learning.',
  url: 'https://quanghpv.github.io/',
};

// `current` puts a red dot on the entry. `unpublished` adds the marker after the result.
export const experience = [
  {
    title: 'Final Year Project',
    org: 'NTU',
    orgHref: 'https://www.ntu.edu.sg/',
    advisors: [{ name: 'Prof. Zhang Hanwang', href: 'https://mreallab.github.io/' }],
    dates: '2026 to now',
    current: true,
    body: 'I am stress testing how well dense VLM-based reward models follow the instruction across different environments, as part of training vision-language-action robot policies with RL. A reward that ignores the instruction can reward the wrong behaviour.',
    unpublished: true,
  },
  {
    title: 'Visiting Student, previously Research Intern',
    org: 'SMART',
    orgHref: 'https://smart.mit.edu/',
    advisors: [{ name: 'Dr. Arun Verma', href: 'https://arunv3rma.github.io/' }],
    dates: 'Jul 2025 to now',
    current: true,
    body: 'I am building a parametric memory for LLM and VLM agents, starting with long video. Along the way I found that graph-RAG methods break on smaller models because entity extraction is unstable, not because retrieval is bad. I also built the evaluation pipeline the group now uses, and with it ruled out hierarchical retrieval, which never beat flat retrieval.',
    unpublished: true,
  },
  {
    title: 'Undergraduate Research Student',
    org: 'URECA, NTU',
    orgHref: 'https://www.ntu.edu.sg/education/undergraduate-research-experience-on-campus-(ureca)',
    advisors: [{ name: 'Prof. Lin Weisi', href: 'https://personal.ntu.edu.sg/wslin/' }],
    dates: 'Aug 2024 to Jun 2025',
    current: false,
    body: 'My first project, on machine unlearning in vision models. I implemented the pipelines in PyTorch and tried replacing the random relabeling in saliency-based unlearning with an estimate of the oracle label distribution. The gain was small because the benchmarks are already saturated above 90%.',
    unpublished: true,
  },
];

export const projects = [
  {
    title: 'Analysis of Quantization and Mixed-Precision Kernels',
    date: 'May 2026',
    body: 'I implemented AWQ and GPTQ from scratch and compared them with plain round-to-nearest. On Qwen, AWQ was marginal and sometimes worse than GPTQ. I also extended the Marlin W4A16 CUDA kernel to asymmetric quantization so AWQ checkpoints could run.',
    href: 'https://github.com/QuangHPV/mlsys-awq',
  },
  {
    title: 'Improving the Original NOCS 6D Pose Estimation',
    date: 'May 2026',
    body: 'Changing only the training recipe (GroupNorm and AdamW) beat the published baseline, so I fixed the recipe before crediting any architecture. An MAE-pretrained ViT with a simple feature pyramid then improved 3D IoU further.',
    href: 'https://github.com/QuangHPV/nocs-torch',
  },
];

export const education = [
  {
    title: 'B.Comp. in Computer Science',
    school: 'Nanyang Technological University',
    href: 'https://www.ntu.edu.sg/',
    dates: '2023 to 2027',
    current: true,
    note: 'CGPA 4.86/5, Dean’s List 2025, ASEAN Undergraduate Scholarship',
  },
  {
    title: 'Exchange semester',
    school: 'Tsinghua University, IIIS',
    href: 'https://iiis.tsinghua.edu.cn/en/',
    dates: 'Feb to Jun 2026',
    current: false,
    note: '',
  },
];
