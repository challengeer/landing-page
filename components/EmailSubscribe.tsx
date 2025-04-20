'use client';
import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function EmailSubscribe() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const verifyEmail = async (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(email));
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
    setSuccess(false);
    verifyEmail(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");
      setSuccess(false);

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
        setError(t('EmailSubscribe.error'));
      }
    } catch (error) {
      setError(t('EmailSubscribe.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {success ? (
        <p className="text-center text-sm">{t('EmailSubscribe.success')}</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-screen-sm mx-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={t('EmailSubscribe.placeholder')}
                className="w-full px-4 h-12 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-0"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={!validEmail || isLoading}
              className={`flex items-center justify-center gap-2 bg-purple-500 text-white h-12 px-4 rounded-lg cursor-pointer relative ${!validEmail || isLoading ? 'opacity-50' : 'hover:opacity-80'}`}
            >
              {isLoading && (
                <Loader2 className="w-6 h-6 animate-spin absolute" />
              )}
              <div className={`flex items-center gap-2 ${isLoading ? 'opacity-0' : ''}`}>
                <span>{t('EmailSubscribe.button')}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
          <p className="text-center text-neutral-500 text-sm mt-2">{t('EmailSubscribe.text')}</p>
        </form>
      )}
    </div>
  );
} 