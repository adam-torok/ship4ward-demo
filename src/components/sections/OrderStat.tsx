type OrderStatProps = {
    value: string;
    label: string;
    description: string;
}

export const OrderStat = ({ value, label, description }: OrderStatProps) => {
    return (
        <li className="orders--section-stat">
            <span>{value}</span>
            <h3>{label}</h3>
            <p>{description}</p>
        </li>
    );
}