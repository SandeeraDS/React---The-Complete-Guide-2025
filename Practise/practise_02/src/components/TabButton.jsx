export default function TabButton({children, isSelected, ...others}) {
    return (
        <li>
            <button className={isSelected ? "active" : undefined}
                    {...others}>
                {children}
            </button>
        </li>
    );
}