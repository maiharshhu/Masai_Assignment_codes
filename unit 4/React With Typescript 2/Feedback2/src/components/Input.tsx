import React from 'react'

type BaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const TextInput: React.FC<BaseProps> = ({ label, error, ...props }) => (
  <div>
    <div className="label">{label}</div>
    <input className="input" {...props} />
    {error && <div className="error">{error}</div>}
  </div>
)

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, ...props }) => (
  <div>
    <div className="label">{label}</div>
    <textarea className="textarea" {...props} />
    {error && <div className="error">{error}</div>}
  </div>
)

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  error?: string
}

export const Select: React.FC<SelectProps> = ({ label, error, children, ...props }) => (
  <div>
    <div className="label">{label}</div>
    <select className="select" {...props}>
      {children}
    </select>
    {error && <div className="error">{error}</div>}
  </div>
)
