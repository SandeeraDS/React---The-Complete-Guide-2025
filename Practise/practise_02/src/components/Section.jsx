export default function Section({children, title, ...rest}) {
    return (<section {...rest}>
        <h2>{title}</h2>
        {children}
    </section>);
}