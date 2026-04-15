'use client';

import React from 'react';
import { FieldError } from 'react-hook-form';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  helperText?: string;
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
  helperText?: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: FieldError;
  options: Array<{ value: string; label: string }>;
  helperText?: string;
}

/**
 * Reusable form input component with error handling
 */
export const FormInput = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    const id = props.id || props.name || '';
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm font-medium text-[var(--text)]">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          ref={ref}
          id={id}
          className={`
            px-4 py-2 border rounded-lg
            bg-[var(--surface)] text-[var(--text)]
            border-[var(--border)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent
            transition-colors
            disabled:bg-[var(--surface-muted)] disabled:cursor-not-allowed
            ${hasError ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="text-sm text-red-500" role="alert">
            {error.message}
          </span>
        )}
        {!error && helperText && (
          <span id={`${id}-helper`} className="text-sm text-[var(--text-secondary)]">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

/**
 * Reusable textarea component
 */
export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    const id = props.id || props.name || '';
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm font-medium text-[var(--text)]">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          id={id}
          className={`
            px-4 py-2 border rounded-lg
            bg-[var(--surface)] text-[var(--text)] resize-vertical
            border-[var(--border)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent
            transition-colors
            disabled:bg-[var(--surface-muted)] disabled:cursor-not-allowed
            min-h-24
            ${hasError ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="text-sm text-red-500" role="alert">
            {error.message}
          </span>
        )}
        {!error && helperText && (
          <span id={`${id}-helper`} className="text-sm text-[var(--text-secondary)]">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

/**
 * Reusable select component  
 */
export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, helperText, className = '', ...props }, ref) => {
    const id = props.id || props.name || '';
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-sm font-medium text-[var(--text)]">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <select
          ref={ref}
          id={id}
          className={`
            px-4 py-2 border rounded-lg
            bg-[var(--surface)] text-[var(--text)]
            border-[var(--border)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent
            transition-colors
            disabled:bg-[var(--surface-muted)] disabled:cursor-not-allowed
            ${hasError ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span id={`${id}-error`} className="text-sm text-red-500" role="alert">
            {error.message}
          </span>
        )}
        {!error && helperText && (
          <span id={`${id}-helper`} className="text-sm text-[var(--text-secondary)]">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';
