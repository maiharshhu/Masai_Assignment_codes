import { useState } from "react";
import FeedbackForm, { FeedbackFormData } from "./components/FeedbackForm";

export default function App() {
  const [submitted, setSubmitted] = useState<FeedbackFormData | null>(null);

  return (
    <main className="app">
      <h1>Customer Feedback</h1>

      <FeedbackForm
        onSubmit={(data) => {
          setSubmitted(data);
        }}
      />

      {submitted && (
        <section className="confirmation" role="status" aria-live="polite">
          <h2>Thanks, {submitted.name}! 🎉</h2>
          <p>
            We’ve received your feedback. You rated us <b>{submitted.rating}/5</b>.
          </p>
          <details>
            <summary>Show submitted data</summary>
            <pre>{JSON.stringify(submitted, null, 2)}</pre>
          </details>
        </section>
      )}
    </main>
  );
}
