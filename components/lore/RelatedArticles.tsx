'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { RelatedArticle } from '@/data/house-kaslana'

interface RelatedArticlesProps {
  articles: RelatedArticle[]
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section
      className="py-20 px-6 lg:px-10"
      style={{
        background: 'linear-gradient(180deg, rgba(250,250,245,0) 0%, rgba(245,245,238,0.8) 100%)',
        borderTop: '1px solid rgba(212,175,55,0.1)',
      }}
    >
      <div className="max-w-7xl 2xl:max-w-[1900px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-5 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/45" />
            <span
              className="font-cinzel text-[0.6rem] tracking-[0.35em] text-gold-600"
              style={{ fontFamily: 'var(--font-cinzel, serif)' }}
            >
              FURTHER READING
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/45" />
          </div>
          <h2
            className="font-cinzel text-2xl lg:text-3xl font-bold text-stone-900"
            style={{ fontFamily: 'var(--font-cinzel, serif)', letterSpacing: '0.06em' }}
          >
            Related Articles
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
            >
              <Link href={article.href} className="group block h-full">
                <div
                  className="h-full rounded-sm p-5 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-card"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(212,175,55,0.14)',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Category badge */}
                  <div className="mb-3">
                    <span
                      className="inline-block font-cinzel text-[0.58rem] tracking-[0.25em] px-2.5 py-0.5"
                      style={{
                        fontFamily: 'var(--font-cinzel, serif)',
                        color: article.color,
                        background: `${article.color}15`,
                        border: `1px solid ${article.color}35`,
                      }}
                    >
                      {article.category.toUpperCase()}
                    </span>
                  </div>

                  <h3
                    className="font-cinzel font-semibold text-stone-900 mb-2 group-hover:text-gold-700 transition-colors"
                    style={{ fontFamily: 'var(--font-cinzel, serif)', fontSize: '0.95rem', letterSpacing: '0.03em' }}
                  >
                    {article.title}
                  </h3>

                  <p className="text-stone-500 text-xs leading-6 mb-4">
                    {article.description}
                  </p>

                  <div
                    className="flex items-center gap-1.5 font-cinzel text-[0.62rem] tracking-[0.15em] text-stone-400 group-hover:text-gold-600 transition-colors"
                    style={{ fontFamily: 'var(--font-cinzel, serif)' }}
                  >
                    READ ARTICLE
                    <ArrowRight
                      size={11}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
