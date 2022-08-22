/**
 * C'est ici qu'on met les pages de routes
 * "pages/index.js" -> '/'
 * "pages/n_importe_quel_nom.js" -> '/n_importe_quel_nom'
 */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ListPerson from "../components/component";

function Page(){
    const [page,setPage] = useState(1)

    return <>
    <Head>
        <title>7he Github Rank</title> 
    </Head>
    <div className="header-main">7he Github Rank</div>
    <ListPerson page={"1"}/>
    <Link href={`/page/${2}`}><button>2</button></Link>
    </>
}

export default Page; // Ne pas oublier d'exporter le composant