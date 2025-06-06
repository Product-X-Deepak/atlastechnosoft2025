"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Brain, Workflow, Layers, Zap } from "lucide-react"
import { Suspense } from "react"

function RpaSolutionsAgenticAi() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 })
  
  return (
    <section ref={ref} className="py-16 bg-slate-50">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-10 text-center">
          <div className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-100/80 px-4 py-2 text-sm font-medium text-amber-800">
            <span>Next-Generation Platform</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            The <span className="text-[#E84A0E]">Agentic Automation</span> Revolution
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            UiPath combines the power of AI agents with traditional RPA robots to create a new paradigm in enterprise automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-slate-100"
          >
            <Image 
              src="/images/solutions/B6_A.png"
              alt="UiPath Agentic AI Platform"
              fill
              className="object-contain bg-white"
              priority
            />
          </motion.div>
          
          <div>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What Makes Agentic Automation Different?</h3>
              <p className="text-sm text-slate-600">
                Traditional RPA automates specific tasks, but Agentic Automation combines AI agents and robots to understand intent, 
                adapt to new situations, and complete end-to-end processes with minimal human intervention.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {platformComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E84A0E]/10">
                    {component.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{component.title}</h3>
                  <p className="text-xs text-slate-600">{component.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-5 space-y-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + (0.1 * index) }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#E84A0E] mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-slate-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const platformComponents = [
  {
    icon: <Layers className="h-5 w-5 text-[#E84A0E]" />,
    title: "Process Orchestration",
    description: "Model and orchestrate agents, robots, and people for complete end-to-end business process automation."
  },
  {
    icon: <Workflow className="h-5 w-5 text-[#E84A0E]" />,
    title: "Intelligent Workflows",
    description: "Build and deploy automated workflows that connect systems, data, and people across your enterprise."
  },
  {
    icon: <Brain className="h-5 w-5 text-[#E84A0E]" />,
    title: "AI-Enhanced Activities",
    description: "Empower your workflows with specialized AI, natural language understanding, and intelligent decision-making."
  },
  {
    icon: <Zap className="h-5 w-5 text-[#E84A0E]" />,
    title: "Enterprise Foundation",
    description: "Built-in security, governance, and scalability features for mission-critical enterprise automation."
  }
]

const benefits = [
  "Reduce operational costs by 30-50% through intelligent automation",
  "Improve process efficiency with human-AI collaboration",
  "Decrease error rates and enhance compliance with regulatory requirements",
  "Accelerate digital transformation initiatives across your organization"
] 
// Wrapper component to ensure proper Suspense boundaries for useSearchParams
function RpaSolutionsAgenticAiWrapper(props: Record<string, never>) {
  return (
    <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/20 rounded-lg" />}>
      <RpaSolutionsAgenticAi {...props} />
    </Suspense>
  );
}

// Modify the export to use the wrapped version
export { RpaSolutionsAgenticAiWrapper as RpaSolutionsAgenticAi };