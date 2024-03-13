import "./pageLayout.css"

  // PageLayout er en komponent som brukes rundt hovedseksjonen av sider. Ved å lage en slik komponent kan den gjenbrukes i andre sider slik at layout blir likt.
export const PageLayout = ({children}) => {
    return (
        <main>
            {children}
        </main>
    )
}