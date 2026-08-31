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
    submitting?: string
    success?: string
    error?: string
  }
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const MessageForm = ({ messages }: MessageFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.project.trim()) {
      setStatus('error')
      setErrorMessage(messages.error || 'Please fill in all fields.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', project: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : (messages.error || 'Failed to send message.'))
    }
  }

  const deliveryText = messages.deliveryInfo.replace('{email}', 'chisamuelapeng@gmail.com')

  return (
    <section className="bg-ink-deep px-5 md:px-14 lg:px-[72px] py-16 border-t border-[oklch(0.2_0.005_80)]">
      <h2 className="font-mono text-[11px] text-copper uppercase tracking-[2px] mb-8">
        {messages.label}
      </h2>

      <div className="bg-[oklch(0.22_0.005_80)] border border-[oklch(0.26_0.005_80)] rounded-md p-6 md:p-10 lg:p-[40px] max-w-[1000px]">
        <form onSubmit={handleSubmit} className="flex flex-col">
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
                disabled={status === 'submitting'}
                required
                className="font-serif text-[16px] italic text-paper-dim bg-transparent border-b border-[oklch(0.32_0.005_80)] py-2 focus:border-copper focus:outline-none transition-colors duration-300 placeholder:opacity-30 disabled:opacity-50"
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
                disabled={status === 'submitting'}
                required
                className="font-serif text-[16px] italic text-paper-dim bg-transparent border-b border-[oklch(0.32_0.005_80)] py-2 focus:border-copper focus:outline-none transition-colors duration-300 placeholder:opacity-30 disabled:opacity-50"
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
              disabled={status === 'submitting'}
              required
              className="font-serif text-[16px] italic text-paper-dim bg-transparent border-b border-[oklch(0.32_0.005_80)] pt-2 pb-16 focus:border-copper focus:outline-none transition-colors duration-300 placeholder:opacity-30 resize-none overflow-hidden disabled:opacity-50"
            />
          </div>

          {/* Form Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="font-mono text-[11px] tracking-wide">
              {status === 'success' && (
                <span className="text-copper">{messages.success || 'Message sent — thank you!'}</span>
              )}
              {status === 'error' && (
                <span className="text-red-400">{errorMessage}</span>
              )}
              {status !== 'success' && status !== 'error' && (
                <span className="text-muted">{deliveryText}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full md:w-fit font-mono text-[13px] text-ink-deep bg-copper px-8 py-4 rounded hover:bg-copper-dim transition-all duration-300 tracking-wide font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (messages.submitting || 'Sending...') : messages.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default MessageForm
