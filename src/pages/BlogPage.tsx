import { Link } from 'react-router-dom'
import linotypeImg from '../images/LINOTYPE_Composing_Machine_1889-300x254.jpg'

const posts = [
  {
    image: linotypeImg,
    title: 'The Linotype Machine',
    date: 'February 7, 2024',
    excerpt:
      'The Linotype machine was a revolutionary mechanical typesetting device that played a significant role in the history of printing and publishing newspapers, magazines, and books.',
  },
  {
    title: 'Typesetting yesterday, today, and tomorrow',
    date: 'November 3, 2023',
    excerpt:
      'From its beginnings to the modern digital era, typesetting has made an essential contribution to the dissemination of knowledge, ideas, and culture, and it will continue to do so in the future.',
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-[#1a6b78] sm:text-3xl">Typesetting Explained</h1>
        <p className="mt-1 text-2xl font-bold text-[#1a6b78] sm:text-3xl">The Blog</p>
      </div>

      <h2 className="mb-6 text-xl font-bold text-[#0d2b4e]">Posts:</h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title}>
            {post.image && (
              <img src={post.image} alt={post.title} className="mb-4 w-full max-w-xs rounded" />
            )}
            <Link to="#" className="text-lg font-bold text-[#5b9bd5] hover:underline sm:text-xl">
              {post.title}
            </Link>
            <p className="mt-1 text-xs text-gray-400">{post.date} /// No Comments</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">{post.excerpt}</p>
            <Link to="#" className="mt-3 inline-block text-sm font-bold text-[#c2255c] hover:underline">
              Read More »
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
