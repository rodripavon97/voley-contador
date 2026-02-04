import { useNavigate } from "react-router-dom";

export interface TopbarProps {
    title: string;
    showBackButton?: boolean;
}
export const Topbar = ({ title, showBackButton = true }: TopbarProps) => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <div className="relative flex w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden border-b border-white/30">
        <div className="flex items-center p-4 pb-2 justify-between">
            <div className="text-primary flex size-12 shrink-0 items-center justify-start">
                {showBackButton && (
                    <span className="material-symbols-outlined text-[24px] cursor-pointer" onClick={handleBack}>arrow_back_ios</span>
                )}
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">{title}</h2>
            <div className="size-12 shrink-0"></div>
        </div>
</div >
    )
}