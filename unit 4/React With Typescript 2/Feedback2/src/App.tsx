import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { FeedbackProvider, useFeedback } from './context/FeedbackContext'
import FormPage from './pages/FormPage'
import SummaryPage from './pages/SummaryPage.tsx'

function GuardedSummary() {
  const { isValid } = useFeedback()
  const location = useLocation()
  if (!isValid()) {
    return (
      <Navigate
        to="/"
        replace
        state={{ from: location, error: 'Please complete the form before viewing the summary.' }}
      />
    )
  }
  return <SummaryPage />
}

export default function App() {
  return (
    <FeedbackProvider>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="badge">📝 Feedback Form</Link>
          <span>›</span>
          <Link to="/summary" className="badge">📄 Summary</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/summary" element={<GuardedSummary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </FeedbackProvider>
  )
}
