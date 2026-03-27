"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = {
      name: e.target.fullName.value,
      email: e.target.email.value,
      company: e.target.company.value,
      projectType: e.target.projectType.value,
      details: e.target.projectDetails.value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
      } else {
        setError("Failed to send message")
      }
    } catch (err) {
      console.error(err)
      setError("Something went wrong")
    }

    setLoading(false)
  }

  return (
    <Card className="bg-gray-900/50 border-orange-500/20">
      <CardContent className="p-8">
        {success ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-300 mb-6">
              We’ll get back to you shortly.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-orange-500 to-red-600"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                <p className="text-red-400">{error}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
            />

            <select
              name="projectType"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
            >
              <option value="">Select a service</option>
              <option value="Modern Website">Modern Website</option>
              <option value="AI Funnels">AI Funnels</option>
              <option value="Automation Tools">Automation Tools</option>
              <option value="Complete Package">Complete Package</option>
            </select>

            <textarea
              name="projectDetails"
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
            ></textarea>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4"
            >
              {loading ? "Sending..." : "Get My Free Quote"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}