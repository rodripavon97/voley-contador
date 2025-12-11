import Scoreboard from "../ui/components/scoreBoard";

export default function MatchPage() {
    return (
    <div className="flex flex-col gap-6 ">
    <Scoreboard/>
    <div className="text-sm text-gray-500">Reglas: primero a 25 puntos con diferencia de 2. El último set puede configurarse en 15 si se desea (no implementado aquí).</div>
    </div>
    )
    }