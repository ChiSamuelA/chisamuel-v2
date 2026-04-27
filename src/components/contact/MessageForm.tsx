'use client'

import React, { useState } from 'react'

interface MessageFormProps {
  messages: {
    label: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    project: string
    projectPlaceholder: string
    deliveryInfo: string
    submit: string
  }
}

const MessageForm = ({ messages }: MessageFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const deliveryText = messages.deliveryInfo.replace('{email}', 'me@chisamuel.com')

  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-8">
        {messages.label}
      </h2>

      <div className="bg-[oklch(0.22_0.005_80)] border border-[oklch(0.26_0.005_80)] rounded-md p-6 md:p-10 lg:p-[40px] max-w-[1000px]">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          {/* Grid for Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-8 md:mb-12">
            {/* Name Field */}
            <div className="flex flex-col mb-8 md:mb-0">
              <label 
                htmlFor="name" 
                className="font-mono text-[11px] text-muted uppercase tracking-[1px] mb-4"
              >
                {messages.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={messages.namePlaceholder}
                className="font-serif text-[16px] italic text-paper-dim bg-transparent border-b border-[oklch(0.32_0.005_80)] py-2 focus:border-copper focus:outline-none transition-colors duration-300 placeholder:opacity-30"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label 
                htmlFor="email" 
                className="font-mono text-[11px] text-muted uppercase tracking-[1px] mb-4"
              >
                {messages.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={messages.emailPlaceholder}
                className="font-serif text-[16px] italic text-paper-dim bg-transparent border-b border-[oklch(0.32_0.005_80)] py-2 focus:border-copper focus:outline-none transition-colors duration-300 placeholder:opacity-30"
              />
            </div>
          </div>

          {/* Project Details Field */}
          <div className="flex flex-col mb-10 md:mb-12">
            <label 
              htmlFor="project" 
              className="font-mono text-[11px] text-muted uppercase tracking-[1px] mb-4"
            >
              {messages.project}
            </label>
            <textarea
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder={messages.projectPlaceholder}
              rows={1}
              className="font-serif text-[16px] italic text-paper-dim bg-transparent border-b border-[oklch(0.32_0.005_80)] pt-2 pb-16 focus:border-copper focus:outline-none transition-colors duration-300 placeholder:opacity-30 resize-none overflow-hidden"
            />
          </div>

          {/* Form Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="font-mono text-[11px] text-muted tracking-wide">
              {deliveryText}
            </div>
            
            <button
              type="button"
              onClick={() => {}}
              className="w-full md:w-fit font-mono text-[13px] text-ink-deep bg-copper px-8 py-4 rounded hover:bg-copper-dim transition-all duration-300 tracking-wide font-medium"
            >
              {messages.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default MessageForm
