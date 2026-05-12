"use client"

import { motion } from "framer-motion"

const cards = [
  {
    title: "+12 New Leads",
    subtitle: "Captured Today",
  },
  {
    title: "72% Open Rate",
    subtitle: "Email Automation",
  },
  {
    title: "3 Calls Booked",
    subtitle: "This Week",
  },
  {
    title: "AI Follow-Up Sent",
    subtitle: "Automation Active",
  },
]

export default function HeroDashboard() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-xl">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border border-orange-500/20 bg-black/40 backdrop-blur-xl p-5 shadow-[0_0_30px_rgba(255,115,0,0.15)]"
        >
          <h3 className="text-xl font-bold text-white">
            {card.title}
          </h3>

          <p className="text-sm text-orange-400 mt-2">
            {card.subtitle}
          </p>
        </motion.div>
      ))}
    </div>
  )
}