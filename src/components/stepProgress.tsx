interface stepProgressProps {
    steps: string[];
    current: number;
}

export default function StepProgress({ steps, current }: stepProgressProps) {
    return (
        <div className="flex items-center gap-4">
            {steps.map((step, i) => {
                const state = i < current ? "completed" : i === current ? "active" : "upcoming"
                const circle =
                    state === "completed"
                        ? "bg-green-500"
                        : state === "active"
                            ? "bg-blue-500"
                            : "bg-grey-300"
                return (
                    <div key={step} className="flex items-center gap-2">
                        <div className={`w-4 h-8 rounded-full ${circle}`} />
                        <span className={state === "upcoming" ? "text-gray-500" : "text-black font-medium"} >{step}</span>
                        {i < steps.length - 1 && <div className="w-8 h-px bg-gray-300" />}
                    </div>
                )
            })}
        </div>
    )
}