import { Link, useLocation } from 'react-router-dom'
import { useFeedback } from '../context/FeedbackContext'
import { TextArea, TextInput, Select } from '../components/Input'
import { useMemo } from 'react'

export default function FormPage() {
  const { data, update, errors, isValid } = useFeedback()
  const e = useMemo(() => errors(), [data]) // recompute when data changes
  const loc = useLocation() as any
  const guardMsg = loc?.state?.error as string | undefined

  return (
    <div className="card grid">
      <header>
        <h1>Feedback Form</h1>
        <p className="footer-note">Fill the form and then view the summary. Data persists via Context + localStorage.</p>
        {guardMsg && <div className="error">{guardMsg}</div>}
      </header>

      <div className="row">
        <TextInput
          label="Name"
          placeholder="Your full name"
          value={data.name}
          onChange={e => update('name', e.target.value)}
          error={e.name}
        />
        <TextInput
          label="Email"
          placeholder="you@example.com"
          value={data.email}
          onChange={e => update('email', e.target.value)}
          error={e.email}
        />
      </div>

      <Select
        label="How satisfied are you?"
        value={data.rating === '' ? '' : String(data.rating)}
        onChange={e => update('rating', e.target.value === '' ? '' : Number(e.target.value))}
        error={e.rating}
      >
        <option value="">Select rating</option>
        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
      </Select>

      <TextArea
        label="Comments"
        placeholder="Tell us what we did well or could improve (min 10 chars)"
        value={data.comments}
        onChange={e => update('comments', e.target.value)}
        error={e.comments}
      />

      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <Link to="/summary" className="btn" aria-disabled={!isValid()} onClick={(e)=>{ if(!isValid()){ e.preventDefault() }}}>Review Summary</Link>
        <span className="footer-note">Validation runs before navigating.</span>
      </div>
    </div>
  )
}
