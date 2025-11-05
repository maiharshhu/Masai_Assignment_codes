import { Link } from 'react-router-dom'
import { useFeedback } from '../context/FeedbackContext'

export default function SummaryPage() {
  const { data, reset } = useFeedback()

  return (
    <div className="card grid">
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <h1>Feedback Summary</h1>
          <p className="footer-note">Here is what you entered. You can go back to edit.</p>
        </div>
        <button className="btn secondary" onClick={reset}>Reset</button>
      </header>

      <ul className="clean">
        <li className="kv"><strong>Name</strong> <span>{data.name}</span></li>
        <li className="kv"><strong>Email</strong> <span>{data.email}</span></li>
        <li className="kv"><strong>Rating</strong> <span>{String(data.rating)}</span></li>
        <li className="kv"><strong>Comments</strong> <span>{data.comments}</span></li>
      </ul>

      <div style={{display:'flex', gap:12}}>
        <Link to="/" className="btn">Edit Feedback</Link>
      </div>
    </div>
  )
}
