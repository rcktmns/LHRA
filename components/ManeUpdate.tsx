"use client"

import { useEffect, useState } from "react"

type Update = {
  title: string
  subtitle: string
  content: string
}

export default function ManeUpdate() {
  const [updates, setUpdates] = useState<Update[]>([])

  useEffect(() => {
    fetch("/data/mane-update.json")
      .then((res) => res.json())
      .then((data) => setUpdates(data))
      .catch((err) => console.error("Failed to load Mane Updates:", err))
  }, [])

  if (updates.length === 0) return null

  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-lhra-yellow p-6 space-y-6">
      <h3 className="font-papyrus text-2xl font-bold text-lhra-blue mb-2">The Mane Update</h3>
      {updates.map((update, index) => (
        <div key={index}>
          <h4 className="font-florentia text-lg font-semibold text-lhra-red">{update.title}</h4>
          <p className="font-florentia text-sm text-gray-600">{update.subtitle}</p>
          <p className="font-florentia text-gray-700 mt-1">{update.content}</p>
          {index < updates.length - 1 && <hr className="my-4 border-lhra-yellow" />}
        </div>
      ))}
    </div>
  )
}
