"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"

const PrimaryButton = ({ children, animate = true, classname, onClick }: { children: React.ReactNode, animate?: boolean, classname?: string, onClick?: () => void }) => {
    const transition = {
        duration: 0.1,
        ease: "easeInOut",
    }
    return (
        <motion.button
            onClick={onClick}
            className={cn("flex gap-2 border-x border-t-2 border-[#6348fc] items-center justify-center bg-gradient-to-b from-[#5728f4] to-[#5100FF] px-5 py-3 rounded-[16px] relative [box-shadow:0px_-2px_0px_-0px_#2c04b1_inset] hover:opacity-90 transition-opacity duration-100 text-white font-medium", classname)}
            transition={animate ? transition : undefined}
        >
            {children}
        </motion.button>
    )
}

export default PrimaryButton
