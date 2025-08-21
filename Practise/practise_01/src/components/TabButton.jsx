export default function TabButtons({children, onSelect, isActive}) {
    return (
        <button onClick={onSelect} className={isActive ? "active" : undefined}>{children}</button>
    )
}