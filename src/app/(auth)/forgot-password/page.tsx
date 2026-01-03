"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  EnvelopeIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { AuthCard, AuthInput, AuthButton } from "@/components/auth";

/**
 * Forgot Password Page
 *
 * Features:
 * - Email input for reset request
 * - Success state after submission
 * - Back to login link
 */

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (): boolean => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail()) return;

    setIsLoading(true);

    // Simulate API call - replace with actual password reset logic
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    console.log("Password reset requested for:", email);
  };

  // Success State
  if (isSubmitted) {
    return (
      <AuthCard
        title="Check your email"
        subtitle="We've sent password reset instructions"
      >
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="
                w-16 h-16
                bg-success/10 dark:bg-success/20
                rounded-full
                flex items-center justify-center
              "
            >
              <CheckCircleIcon className="w-8 h-8 text-success" />
            </div>
          </div>

          {/* Success Message */}
          <p className="text-text-body dark:text-dark-text-body mb-6">
            We&apos;ve sent a password reset link to{" "}
            <span className="font-medium text-text-main dark:text-dark-text-main">
              {email}
            </span>
            . Please check your inbox and follow the instructions.
          </p>

          {/* Hint */}
          <p className="text-sm text-text-muted dark:text-dark-text-muted mb-8">
            Didn&apos;t receive the email? Check your spam folder or{" "}
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
              }}
              className="text-primary dark:text-dark-primary-hover hover:text-primary-hover dark:hover:text-primary hover:underline"
            >
              try again
            </button>
            .
          </p>

          {/* Back to Login */}
          <Link href="/login">
            <AuthButton variant="primary" type="button">
              Back to sign in
            </AuthButton>
          </Link>
        </div>
      </AuthCard>
    );
  }

  // Request Form State
  return (
    <AuthCard
      title="Forgot password?"
      subtitle="Enter your email to reset your password"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <AuthInput
          label="Email address"
          type="email"
          name="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          error={error}
          icon={<EnvelopeIcon className="w-5 h-5" />}
          autoComplete="email"
        />

        {/* Info Message */}
        <p className="text-sm text-text-muted dark:text-dark-text-muted">
          Enter the email address associated with your account and we&apos;ll
          send you a link to reset your password.
        </p>

        {/* Submit Button */}
        <AuthButton loading={isLoading}>Send reset link</AuthButton>
      </form>

      {/* Back to Login Link */}
      <div className="mt-6 text-center">
        <Link
          href="/login"
          className="
            inline-flex items-center gap-2
            text-sm text-text-muted dark:text-dark-text-muted
            hover:text-text-body dark:hover:text-dark-text-body
            transition-colors duration-150
          "
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to sign in
        </Link>
      </div>
    </AuthCard>
  );
}
