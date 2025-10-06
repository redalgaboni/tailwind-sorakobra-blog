interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'القراءة الصوتية للمقالات',
    description: `قراءة المقالات بالذكاء الاصطناعي باستخدام تقنيات تحويل النص إلى الكلام بأصوات رواة مشهورين و حتى بصوتك`,
    imgSrc: '/static/images/fighterjets.png',
    href: 'https://www.sorakobra.com',
  },
  {
    title: 'تلخيص المقالات',
    description: `ليس لديك الوقت لقراءة المقال بأكمله؟
سنوفر قريبا خدمة تلخيص المقالات حتى تربح الوقت و تكون على اطلاع بآخر المقالات `,
    imgSrc: '/static/images/mountainsbattery.png',
    href: 'https://www.sorakobra.com',
  },
]

export default projectsData
