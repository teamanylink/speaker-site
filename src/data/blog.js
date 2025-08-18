// Seed blog posts based on the provided Movement Sheet
// Content is simplified to a third-grade reading level and uses only the provided material

export const BLOG_POSTS = [
  {
    slug: 'what-is-a-move',
    title: 'What Is a Move?',
    excerpt:
      'A move is a change. You shift, you decide, and you go. Small moves make big change over time.',
    coverImageUrl: '/assets/movement-leader.jpg',
    publishedAt: '2025-01-01',
    tags: ['Move', 'Start'],
    content: [
      'A move is when you change your place or your path. You shift, you turn, you pick a new way. You make a choice. You take a step.',
      'A move can be big or small. It can be a whisper or a roar. What matters is that you start.',
      'You do not have to stay where you started. You do not have to stop where you are. There is no better time than now. There is no better person than you. Let’s move!'
    ]
  },
  {
    slug: 'why-we-move',
    title: 'Why We Move',
    excerpt:
      'We move for two big reasons: duty or chance. We move from, toward, for, and with. Your why gives your move power.',
    coverImageUrl: '/assets/movement-leader.jpg',
    publishedAt: '2025-01-02',
    tags: ['Why', 'Purpose'],
    content: [
      'People move for two big reasons. Some move because they must. Some move because they can. We move from, we move toward, we move for, and we move with.',
      'Move from what holds you back. Move toward what calls you forward. Move for what matters. Move with the people who help you grow.',
      'This is the human why: we want our lives to count. We want our lives to have meaning. This is called significance.'
    ]
  },
  {
    slug: 'paradox-of-purpose',
    title: 'The Paradox of Purpose',
    excerpt:
      'Purpose is not your job. Purpose is your reason. Who you are should guide what you do, not the other way around.',
    coverImageUrl: '/assets/movement-leader.jpg',
    publishedAt: '2025-01-03',
    tags: ['Purpose', 'Identity'],
    content: [
      'Purpose is not what you do. Purpose is why you were made. Your job can change. Your purpose does not.',
      'Do not let what you do tell you who you are. Let who you are tell you what to do.',
      'Purpose is not what you strive for — it is where you start from.'
    ]
  },
  {
    slug: 'posture-of-purpose',
    title: 'The Posture of Purpose',
    excerpt:
      'Make moves — but do not let your moves make you. Stay true to who you are as you grow.',
    coverImageUrl: '/assets/movement-leader.jpg',
    publishedAt: '2025-01-04',
    tags: ['Purpose', 'Character'],
    content: [
      'Make moves. Try new things. Take brave steps. But do not let your moves make you. Your worth is not your wins.',
      'Keep your heart steady while your hands work. Grow on the inside while you build on the outside.'
    ]
  },
  {
    slug: 'four-moves',
    title: 'Four Moves: Out, Up, Forward, On',
    excerpt:
      'These four simple moves help you grow. Move Out. Move Up. Move Forward. Move On.',
    coverImageUrl: '/assets/movement-leader.jpg',
    publishedAt: '2025-01-05',
    tags: ['Framework', 'Growth'],
    content: [
      'Move Out: Step out of what keeps you small.',
      'Move Up: Learn, improve, and raise your view.',
      'Move Forward: Take the next right step, even if it is small.',
      'Move On: Let go of what you cannot keep. Make room for what is next.'
    ]
  },
  {
    slug: 'anatomy-of-a-movement',
    title: 'The Anatomy of a Movement: Head, Heart, Hands, Habits, Halo',
    excerpt:
      'Change starts inside and spills out. Think it. Feel it. Do it. Repeat it. Share it.',
    coverImageUrl: '/assets/movement-leader.jpg',
    publishedAt: '2025-01-06',
    tags: ['Framework', 'Movement'],
    content: [
      'Head (clarity): What you believe and why it matters. “As a man thinks so is he.”',
      'Heart (conviction): Why you care enough to act when it is hard. “Add value to that which you value, care for that which you claim to care about.”',
      'Hands (practice): The small, repeatable moves.',
      'Habits (cadence): When those moves happen (daily or weekly).',
      'Halo (spillover): How others sense it and join.'
    ]
  },
  {
    slug: 'now-is-the-time',
    title: 'Now Is the Time. You Are the One.',
    excerpt:
      'The tragedy is to move but never see movement. Let today be the day you start your movement.',
    coverImageUrl: '/assets/movement-leader.jpg',
    publishedAt: '2025-01-07',
    tags: ['Action', 'Encouragement'],
    content: [
      'The tragedy of life is to do but not be, to survive but not thrive, to exist but not live, to move but never see a movement take place in your life.',
      'If you want to see a movement take place, you must first move. Now is the time. This is the place. You are the one to be what you were made to be: a movement.'
    ]
  }
]

export function sortPostsByDate(posts = BLOG_POSTS) {
  return [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

