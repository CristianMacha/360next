'use client'
import { useState } from "react";
interface PanelProps {
    question: string;
    size: 'small' | 'medium' | 'large';
    answer: string;
}

export default function Panel({ size, question, answer }: PanelProps) {
    const [panelActive, setPanelActive] = useState(false);
    const handlePanelActive = () => setPanelActive(!panelActive);
    return (
        <div className={`panel__expand ${size} ${panelActive ? 'pannel__active' : ''}`}>
            <div className="flex flex-row justify-between font-primary font-normal text-[32px] w-full mt-1 items-center h-[80px]">
                <h2 className="font-primary font-medium text-[18px] leading-normal md:text-[24px] md:leading-[24px]">
                    {question}
                </h2>
                <div>
                    <button onClick={handlePanelActive} className="w-[46px] h-[46px] panel__expand__button"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M19.5607 20.5607C20.113 20.5607 20.5607 20.113 20.5607 19.5607L20.5607 10.5607C20.5607 10.0084 20.113 9.56071 19.5607 9.56071C19.0084 9.56071 18.5607 10.0084 18.5607 10.5607L18.5607 18.5607L10.5607 18.5607C10.0084 18.5607 9.56071 19.0084 9.56071 19.5607C9.56071 20.113 10.0084 20.5607 10.5607 20.5607L19.5607 20.5607ZM0.292893 1.70711L18.8536 20.2678L20.2678 18.8536L1.70711 0.292893L0.292893 1.70711Z" fill="black" />
                    </svg></button>
                </div>
            </div>

            <div className="mt-[12px] md:mt-[24px]">
                <h3 className="font-primary md:text-[20px] md:leading-normal">{answer}</h3>
            </div>
        </div>
    )
}