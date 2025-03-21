'use client'
import React from 'react'
import { BaseComponentProps } from '../types'
import { smoothScrollTo } from '@/utils/smoothScroll'

interface CtaProps extends BaseComponentProps {}

const Cta: React.FC<CtaProps> = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold tracking-tight mb-4">
            Get Started
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Unlock exclusive features and elevate your experience.
          </p>
          <div className="flex justify-center">
            <a
              href="#banner"
              className="cta-container relative inline-block rounded-full"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('banner');
              }}
            >
              <span className="cta-button relative z-10 bg-white text-black font-semibold px-6 py-3 text-[1rem] rounded-full flex items-center gap-2">
                Learn More
                <svg
                  className="cta-arrow w-5 h-5 transition-transform duration-300 ease-out"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-container {
          position: relative;
          display: inline-block;
          border: 1px solid #d1d5db; /* stone-300 */
          border-radius: 9999px;
          padding: 1px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .cta-container:hover .cta-arrow {
          transform: translateX(5px) rotate(0deg);
        }
        .cta-arrow {
          transform: rotate(-45deg);
        }
      `}</style>
    </section>
  )
}

export default Cta