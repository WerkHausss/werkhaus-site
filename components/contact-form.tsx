"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = {}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <Card className="bg-gray-900/50 border-orange-500/20">
      <CardContent className="p-8">
        {state.success ? (
          // Success state
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
            <p className="text-gray-300 mb-6">{state.message}</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          // Form state
          <form action={formAction} className="space-y-6">
            {/* Error message */}
            {state.message && !state.success && (
              <div className="flex items-center p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <p className="text-red-400">{state.message}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none text-white transition-colors ${
                    state.errors?.fullName
                      ? "border-red-500 focus:border-red-400"
                      : "border-gray-700 focus:border-orange-500"
                  }`}
                  placeholder="Your full name"
                  disabled={isPending}
                />
                {state.errors?.fullName && <p className="text-red-400 text-sm mt-1">{state.errors.fullName[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none text-white transition-colors ${
                    state.errors?.email
                      ? "border-red-500 focus:border-red-400"
                      : "border-gray-700 focus:border-orange-500"
                  }`}
                  placeholder="your@email.com"
                  disabled={isPending}
                />
                {state.errors?.email && <p className="text-red-400 text-sm mt-1">{state.errors.email[0]}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none text-white transition-colors ${
                  state.errors?.company
                    ? "border-red-500 focus:border-red-400"
                    : "border-gray-700 focus:border-orange-500"
                }`}
                placeholder="Your company name"
                disabled={isPending}
              />
              {state.errors?.company && <p className="text-red-400 text-sm mt-1">{state.errors.company[0]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Type *</label>
              <select
                name="projectType"
                className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none text-white transition-colors ${
                  state.errors?.projectType
                    ? "border-red-500 focus:border-red-400"
                    : "border-gray-700 focus:border-orange-500"
                }`}
                disabled={isPending}
                defaultValue=""
              >
                <option value="">Select a service</option>
                <option value="Modern Website">Modern Website</option>
                <option value="AI Funnels">AI Funnels</option>
                <option value="Automation Tools">Automation Tools</option>
                <option value="Complete Package">Complete Package</option>
              </select>
              {state.errors?.projectType && <p className="text-red-400 text-sm mt-1">{state.errors.projectType[0]}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
              <textarea
                name="projectDetails"
                rows={4}
                className={`w-full px-4 py-3 bg-black border rounded-lg focus:outline-none text-white transition-colors ${
                  state.errors?.projectDetails
                    ? "border-red-500 focus:border-red-400"
                    : "border-gray-700 focus:border-orange-500"
                }`}
                placeholder="Tell us about your project goals and requirements..."
                disabled={isPending}
              ></textarea>
              {state.errors?.projectDetails && (
                <p className="text-red-400 text-sm mt-1">{state.errors.projectDetails[0]}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Get My Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
