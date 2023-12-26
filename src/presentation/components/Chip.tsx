interface ChipProps {
    label: string;
    color: string;
    onClick: () => void;
}
export default function Chip({ label, color, onClick }: ChipProps) {
    return (
        <div onClick={onClick} className={`flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium ${color} cursor-pointer`}>
            {label}
        </div>
    )

}