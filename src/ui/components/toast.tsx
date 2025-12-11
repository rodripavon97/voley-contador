import { useEffect, useState } from "react"

interface ToastProps {
    message: string
    show: boolean
    onClose: () => void
    duration?: number
}

export const Toast = ({ message, show, onClose, duration = 3000 }: ToastProps) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (show) {
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false)
                setTimeout(onClose, 300) // Esperar a que termine la animación
            }, duration)

            return () => clearTimeout(timer)
        }
    }, [show, duration, onClose])

    if (!show && !isVisible) return null

    return (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{message}</span>
            </div>
        </div>
    )
}

