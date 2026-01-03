"use client";

import { useState, FormEvent, useMemo } from "react";
import Link from "next/link";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { AuthCard, AuthInput, AuthButton } from "@/components/auth";

/**
 * Register Page
 *
 * Features:
 * - Full name input
 * - Email input with validation
 * - Password with show/hide toggle
 * - Confirm password with matching validation
 * - Password strength indicator (visual)
 * - Link to Login
 */

interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Calculate password strength
  const passwordStrength = useMemo((): PasswordStrength => {
    const { password } = formData;
    if (!password) return { score: 0, label: "", color: "" };

    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^a-zA-Z0-9]/.test(password)) score += 1;

    if (score <= 1) return { score: 1, label: "Weak", color: "bg-error" };
    if (score <= 2) return { score: 2, label: "Fair", color: "bg-warning" };
    if (score <= 3) return { score: 3, label: "Good", color: "bg-primary" };
    return { score: 4, label: "Strong", color: "bg-success" };
  }, [formData.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call - replace with actual auth logic
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    // Handle successful registration
    console.log("Registration submitted:", formData);
  };

  return (
    <AuthCard
      title="Create an account"
      subtitle="Start your journey with us today"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <AuthInput
          label="Full name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          icon={<UserIcon className="w-5 h-5" />}
          autoComplete="name"
        />

        {/* Email Input */}
        <AuthInput
          label="Email address"
          type="email"
          name="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={<EnvelopeIcon className="w-5 h-5" />}
          autoComplete="email"
        />

        {/* Password Input */}
        <div className="space-y-2">
          <AuthInput
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            icon={<LockClosedIcon className="w-5 h-5" />}
            autoComplete="new-password"
          />

          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="space-y-1">
              {/* Strength Bars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`
                      h-1 flex-1 rounded-full transition-colors duration-200
                      ${
                        level <= passwordStrength.score
                          ? passwordStrength.color
                          : "bg-border-soft dark:bg-dark-border"
                      }
                    `}
                  />
                ))}
              </div>
              {/* Strength Label */}
              <p className="text-xs text-text-muted dark:text-dark-text-muted">
                Password strength:{" "}
                <span
                  className={`font-medium ${
                    passwordStrength.score <= 1
                      ? "text-error"
                      : passwordStrength.score <= 2
                      ? "text-warning"
                      : passwordStrength.score <= 3
                      ? "text-primary dark:text-dark-primary-hover"
                      : "text-success"
                  }`}
                >
                  {passwordStrength.label}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Confirm Password Input */}
        <AuthInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          icon={<LockClosedIcon className="w-5 h-5" />}
          autoComplete="new-password"
        />

        {/* Terms & Conditions */}
        <p className="text-sm text-text-muted dark:text-dark-text-muted">
          By creating an account, you agree to our{" "}
          <Link
            href="#"
            className="text-primary dark:text-dark-primary-hover hover:text-primary-hover dark:hover:text-primary hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="text-primary dark:text-dark-primary-hover hover:text-primary-hover dark:hover:text-primary hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* Submit Button */}
        <AuthButton loading={isLoading}>Create account</AuthButton>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-soft dark:border-dark-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white dark:bg-dark-bg-card text-text-muted dark:text-dark-text-muted">
            Already have an account?
          </span>
        </div>
      </div>

      {/* Login Link */}
      <Link href="/login">
        <AuthButton variant="secondary" type="button">
          Sign in instead
        </AuthButton>
      </Link>
    </AuthCard>
  );
}
