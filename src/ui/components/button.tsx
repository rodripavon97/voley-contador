interface buttonProps {
    text : string,
    onClick: () => void,
    buttonClass: string
    disabled?: boolean
}

export const Button = ({ text, onClick, buttonClass, disabled = false }: buttonProps) => {
    return (
        <button 
            className={`px-3 py-1 rounded ${buttonClass} text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`} 
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}