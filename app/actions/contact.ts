"use server"

import { z } from "zod"

// Form validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  projectDetails: z.string().min(10, "Please provide more details about your project (minimum 10 characters)"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    fullName?: string[]
    email?: string[]
    company?: string[]
    projectType?: string[]
    projectDetails?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Extract form data
  const rawFormData = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    projectType: formData.get("projectType") as string,
    projectDetails: formData.get("projectDetails") as string,
  }

  // Validate form data
  const validatedFields = contactSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to database
    // 3. Send to CRM like HubSpot or Salesforce
    // 4. Send to Slack/Discord notification

    // Example email content that would be sent
    const emailContent = `
      New lead from Werkhaus website:
      
      Name: ${validatedFields.data.fullName}
      Email: ${validatedFields.data.email}
      Company: ${validatedFields.data.company || "Not provided"}
      Project Type: ${validatedFields.data.projectType}
      
      Project Details:
      ${validatedFields.data.projectDetails}
      
      Submitted at: ${new Date().toISOString()}
    `

    console.log("Email would be sent:", emailContent)

    // For demo purposes, we'll simulate a successful submission
    // In a real app, you'd integrate with your email service here

    return {
      success: true,
      message: "Thank you! We've received your request and will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again or contact us directly.",
    }
  }
}
