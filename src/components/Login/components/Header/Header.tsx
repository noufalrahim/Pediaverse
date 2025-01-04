
interface HeaderProps {
    children?: React.ReactNode;
    title: string;
    description: string;
}

export default function Header({children, title, description}: HeaderProps) {
    return (
        <div className="font-mulish px-12">
            <h1 className="font-bold text-black text-2xl">{title}</h1>
            <p className="text-secondary-200 text-lg">{description}</p>
            <div className="flex flex-col gap-2 my-5">
                {children}
            </div>
        </div>
    )
}