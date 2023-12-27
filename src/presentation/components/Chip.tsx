interface ChipProps {
    label: string;
    color: string;
}
export default function Chip({ label, color }: ChipProps) {
    return (
        <div className={`flex items-center justify-center rounded-full px-4 py-2 text-[14px] md:text-[16px] font-medium ${color} border border-black`}>
            {label}
        </div>
    )

}