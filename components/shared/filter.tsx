interface Props{
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    return(
        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3">Цена от и до:</p>
            <div className="flex gap-3 mb-5">

            </div>

        </div>
    );
}