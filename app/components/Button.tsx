"use client";

interface ButtonProps {
    func: () => void;
    Icon: any;
    iconStyle: string;
    color: string;
}
export default function Button({iconStyle, func, Icon, color}: ButtonProps) {
    return (
        <div className={iconStyle} onClick={func}>
            <Icon style={{height: 65, width: 65, color: color}} />
        </div>
    );
}