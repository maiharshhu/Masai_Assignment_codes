import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Feedback = {
  name: string
  email: string
  rating: number | ''
  comments: string
}

type FeedbackContextValue = {
  data: Feedback
  update: <K extends keyof Feedback>(key: K, value: Feedback[K]) => void
  reset: () => void
  isValid: () => boolean
  errors: () => Partial<Record<keyof Feedback, string>>
}

const defaultValue: Feedback = { name: '', email: '', rating: '', comments: '' }

const FeedbackContext = createContext<FeedbackContextValue | null>(null)
const STORAGE_KEY = 'feedback-app-state'

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Feedback>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as Feedback) : defaultValue
    } catch { return defaultValue }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const update = <K extends keyof Feedback>(key: K, value: Feedback[K]) =>
    setData(prev => ({ ...prev, [key]: value }))

  const reset = () => setData(defaultValue)

  const validate = (): Partial<Record<keyof Feedback, string>> => {
    const e: Partial<Record<keyof Feedback, string>> = {}
    if (!data.name.trim()) e.name = 'Name is required'
    if (!data.email.trim()) e.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Enter a valid email'
    if (data.rating === '' || data.rating < 1 || data.rating > 5) e.rating = 'Choose a rating 1–5'
    if (data.comments.trim().length < 10) e.comments = 'Comments must be at least 10 characters'
    return e
  }

  const value = useMemo<FeedbackContextValue>(() => ({
    data,
    update,
    reset,
    isValid: () => Object.keys(validate()).length === 0,
    errors: () => validate()
  }), [data])

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>
}

export const useFeedback = () => {
  const ctx = useContext(FeedbackContext)
  if (!ctx) throw new Error('useFeedback must be used within FeedbackProvider')
  return ctx
}
