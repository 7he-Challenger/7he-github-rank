/**
 * C'est ici qu'on met les pages de routes
 * "pages/index.js" -> '/'
 * "pages/n_importe_quel_nom.js" -> '/n_importe_quel_nom'
 */

import Head from "next/head";

function Page(){
    return <>
    <Head>
        <title>Titre du page</title> 
    </Head>
    <div>
        <span>Corps du page</span>
    </div>
    </>
}

export default Page; // Ne pas oublier d'exporter le composant