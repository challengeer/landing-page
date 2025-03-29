'use client';
import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

export function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");
      setSuccess(false);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        setError("Invalid email address");
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto">
      {success ? (
        <p className="text-center text-sm">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 h-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary text-white h-12 px-4 rounded-lg hover:bg-primary/80 transition-colors"
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <span>Get Early Access</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          <p className="text-center text-neutral-500 text-sm mt-2">Join our waitlist to be notified when we launch. No spam, ever.</p>
        </form>
      )}
    </div>
  );
} 