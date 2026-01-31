type CountrySelectProps = {
    id: string;
    label: string;
    flagSrc: string;
    countryName: string;
    countryCode: string;
    hint: string;
}

export const CountrySelect = ({ id, label, flagSrc, countryName, countryCode, hint }: CountrySelectProps) => {
    return (
        <div className="custom--select">
            <label htmlFor={id}>{label}</label>

            <div className="relative">
                <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 flex h-6 w-[34px] items-center justify-center rounded border border-gray-200 bg-gray-50 p-1.5 mr-2">
                    <img
                        src={flagSrc}
                        alt={countryName}
                        className="h-full w-full object-cover"
                    />
                </div>

                <select id={id} name={id} className="pl-12">
                    <option value={countryCode}>{countryName}</option>
                </select>
            </div>

            <span className="hint">{hint}</span>
        </div>
    );
}