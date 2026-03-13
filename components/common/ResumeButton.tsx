"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface ResumeButtonProps {
  variant?: "default" | "outline"
  size?: "sm" | "lg"
}

export function ResumeButton({ variant = "outline", size = "lg" }: ResumeButtonProps) {
  return (
    <Button 
      asChild 
      variant={variant} 
      size={size} 
      className="gap-1.5 font-medium hover:gap-2 transition-all duration-200 group"
    >
      <Link 
        href="/resume/Kartikey_Agarwal_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform duration-200"
      >
        View Resume
        <ExternalLink className="h-4 w-4 group-hover:translate-x-px" />
      </Link>
    </Button>
  )
}

