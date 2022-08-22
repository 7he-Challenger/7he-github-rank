import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ListPerson from "../../components/component";

function PageX(props) {
    const router = useRouter()
    const { id } = router.query

    if(id!=1){
        return <>
            <Head>
                <title>7he Github Rank</title>
            </Head>
            <div className="header-main">7he Github Rank</div>
            <ListPerson page={id} />
            <div className="nav-button">
                <button><a href={'/page/' + (parseInt(id)-1)}>{(parseInt(id)-1).toString()}</a></button>
                Page {id}
                <button><a href={'/page/' + (parseInt(id)+1)}>{(parseInt(id)+1).toString()}</a></button>
            </div>
        </>
    }
    else if(id==1){
        return <>
            <Head>
                <title>7he Github Rank</title>
            </Head>
            <div className="header-main">7he Github Rank</div>
            <ListPerson page={1} />
            <div className="nav-button">
                Page {id}
                <button><a href={'/page/' + parseInt(id)+1}>{(parseInt(id)+1).toString()}</a></button>
            </div>
        </>
    }
}


export default PageX;