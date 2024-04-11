import Link from "../components/Link";

function GlobalStyle(){
    return(
        <style global jsx>{`
            body{
                font-family: sans-serif;
            }
        `}</style>
    )
}

function Title({children, as}){
    const Tag = as;
    return(
        <>
            <Tag>
                {children}
            </Tag>
                <style jsx>{`
                    ${Tag}{
                        color: red;
                    }
                `}</style>
        </>
    )
}

export default function HomePage() {
    return (
        <div>
            <GlobalStyle />
            <Title as="h1">Alura Cases - Home </Title>
            <Link href="/faq">
                Ir para página do FAQ
            </Link>
        </div>
    )
  }