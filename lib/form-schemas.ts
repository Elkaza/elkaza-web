import { z } from 'zod';

/**
 * Contact Form Validation Schema
 * Validates:
 * - Name: 2-100 characters
 * - Email: valid email format
 * - Company: 2-100 characters (optional)
 * - Message: 10-2000 characters
 * - Phone: optional, must be valid format if provided
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters')
    .trim()
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .refine(
      (val) => !val || /^[+\d\s\-()]+$/.test(val),
      'Please enter a valid phone number'
    )
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim(),
  service: z.string().optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Newsletter Signup Validation
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  consent: z.boolean().refine((val) => val === true, 'You must agree to receive emails'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

/**
 * Quote Request Form Validation
 */
export const quoteRequestSchema = z.object({
  projectTitle: z
    .string()
    .min(5, 'Project title must be at least 5 characters')
    .max(200, 'Project title must be less than 200 characters'),
  budget: z.enum(['under-5k', '5k-20k', '20k-50k', '50k-plus'], {
    errorMap: () => ({ message: 'Please select a budget range' }),
  }),
  timeline: z.enum(['urgent', '1-3-months', '3-6-months', 'flexible'], {
    errorMap: () => ({ message: 'Please select a timeline' }),
  }),
  description: z
    .string()
    .min(20, 'Please provide more details (at least 20 characters)')
    .max(3000, 'Description must be less than 3000 characters'),
  priority: z
    .enum(['security', 'performance', 'scalability', 'compliance', 'other'])
    .optional(),
  contactName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  contactEmail: z.string().email('Please enter a valid email address'),
  contactPhone: z
    .string()
    .refine(
      (val) => !val || /^[+\d\s\-()]+$/.test(val),
      'Please enter a valid phone number'
    )
    .optional()
    .or(z.literal('')),
});

export type QuoteRequestData = z.infer<typeof quoteRequestSchema>;

/**
 * Form error type for consistent error handling
 */
export interface FormError {
  field: string;
  message: string;
}

/**
 * Parse Zod errors to field-level errors
 */
export function parseZodErrors(error: z.ZodError): FormError[] {
  return error.issues.map((issue) => ({
    field: issue.path.join('.'),
    message: issue.message,
  }));
}
