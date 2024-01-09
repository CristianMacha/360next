import Atoms from "@/presentation/components/Atoms";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-[16px] md:px-[40px] pt-[84px]">
            <Atoms />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                <div className="col-span-1 lg:col-span-3">
                    {children}
                </div>
                <div className="flex flex-col gap-2">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fblog-8-sencillos-pasos-1.jpg?alt=media&token=1f2cd2eb-3a84-438f-9ac9-3898cf2cf0c7"
                        alt="planificacion"
                        className="w-full" />
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fblog-8-sencillos-pasos-2.jpg?alt=media&token=d2e70229-69e4-43ab-b0bf-a3bef2bd5a29"
                        alt="planificacion"
                        className="w-full" />
                </div>
            </div>
        </div>
    )
}