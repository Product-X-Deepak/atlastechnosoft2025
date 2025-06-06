"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"

function AboutCta() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-[#E84A0E] p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <span>Ready to transform your business?</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Partner with Atlas Technosoft
            </h2>
            
            <p className="mt-4 text-lg text-white/90">
              Let our experts help you navigate your digital transformation journey. Connect with us today to discuss how our solutions can address your specific business challenges.
            </p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-white text-[#E84A0E] hover:bg-white/90 sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                asChild
              >
                <Link href="/solutions">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
// Wrapper component to ensure proper Suspense boundaries for useSearchParams
function AboutCtaWrapper(props: Record<string, never>) {
  return (
    <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/20 rounded-lg" />}>
      <AboutCta {...props} />
    </Suspense>
  );
}

// Modify the export to use the wrapped version
export { AboutCtaWrapper as AboutCta };