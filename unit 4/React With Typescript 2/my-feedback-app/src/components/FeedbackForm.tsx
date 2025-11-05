import { useState, ChangeEvent, FormEvent } from "react";

export interface 
FeedbackFormData {
  name: string;
  email: string;
  rating: number; 
  feedback: string;
}

// Error messages keyed by the same fields
type FeedbackFormErrors = Partial<Record<keyof FeedbackFormData, string>>;

// Explicit props for the component
export interface FeedbackFormProps {
  onSubmit?: (data: FeedbackFormData) => void;
}

const initialForm: FeedbackFormData = {
  name: "",
  email: "",
  rating: 0,
  feedback: "",
};

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [form, setForm] = useState<FeedbackFormData>(initialForm);
  const [errors, setErrors] = useState<FeedbackFormErrors>({});

  // Basic, readable email check (not overly strict)
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = (data: FeedbackFormData): FeedbackFormErrors => {
    const next: FeedbackFormErrors = {};

    if (!data.name.trim()) next.name = "Name is required.";
    if (!data.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(data.email)) next.email = "Enter a valid email.";

    if (!Number.isFinite(data.rating)) next.rating = "Rating is required.";
    else if (data.rating < 1 || data.rating > 5)
      next.rating = "Rating must be between 1 and 5.";

    if (!data.feedback.trim()) next.feedback = "Feedback is required.";

    return next;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Handle the number field with proper typing
    if (name === "rating") {
      const numeric = value === "" ? 0 : Number(value);
      setForm((prev) => ({ ...prev, rating: numeric }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onSubmit?.(form);          // lift the data up
      setForm(initialForm);      // clear the form
      // also clear errors so the UI is clean on next entry
      setErrors({});
      // put focus back on the first input (optional enhancement)
      (e.currentTarget.elements.namedItem("name") as HTMLInputElement)?.focus();
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p id="name-error" className="error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="jane@example.com"
        />
        {errors.email && (
          <p id="email-error" className="error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="rating">Rating (1–5)</label>
        <input
          id="rating"
          name="rating"
          type="number"
          min={1}
          max={5}
          step={1}
          value={form.rating || ""}
          onChange={handleChange}
          aria-invalid={!!errors.rating}
          aria-describedby={errors.rating ? "rating-error" : undefined}
          placeholder="5"
        />
        {errors.rating && (
          <p id="rating-error" className="error">
            {errors.rating}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          name="feedback"
          rows={4}
          value={form.feedback}
          onChange={handleChange}
          aria-invalid={!!errors.feedback}
          aria-describedby={errors.feedback ? "feedback-error" : undefined}
          placeholder="Tell us what you liked and what we can improve…"
        />
        {errors.feedback && (
          <p id="feedback-error" className="error">
            {errors.feedback}
          </p>
        )}
      </div>

      <button type="submit" className="primary">Submit</button>
    </form>
  );
}
