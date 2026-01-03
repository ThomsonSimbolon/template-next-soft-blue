"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { AuthCard, AuthInput, AuthButton } from "@/components/auth";

/**
 * Login Page
 *
 * Features:
 * - Email input with icon
 * - Password input with show/hide toggle
 * - Remember me checkbox
 * - Links to Register and Forgot Password
 * - Form validation
 */

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

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
    // Handle successful login (redirect, etc.)
    console.log("Login submitted:", formData);
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
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
        <AuthInput
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          icon={<LockClosedIcon className="w-5 h-5" />}
          autoComplete="current-password"
        />

        {/* Remember Me & Forgot Password Row */}
        <div className="flex items-center justify-between">
          {/* Remember Me */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="
                w-4 h-4
                rounded
                border-border-soft dark:border-dark-border
                bg-white dark:bg-dark-bg-surface
                text-primary
                focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-dark-bg-card
                cursor-pointer
              "
            />
            <span className="text-sm text-text-body dark:text-dark-text-body">
              Remember me
            </span>
          </label>

          {/* Forgot Password Link */}
          <Link
            href="/forgot-password"
            className="text-sm text-primary dark:text-dark-primary-hover hover:text-primary-hover dark:hover:text-primary hover:underline transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <AuthButton loading={isLoading}>Sign in</AuthButton>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-soft dark:border-dark-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white dark:bg-dark-bg-card text-text-muted dark:text-dark-text-muted">
            Don&apos;t have an account?
          </span>
        </div>
      </div>

      {/* Register Link */}
      <Link href="/register">
        <AuthButton variant="secondary" type="button">
          Create an account
        </AuthButton>
      </Link>
    </AuthCard>
  );
}
