import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

/**
 * 
 * 
 * @param {*} props 
 * @returns Component
 */
function List(props) {
    return <>
        <div className="component-list">
            <Image className="rounded mg" src={props.src} width="80px" height="80px" />
            <div style={{display:'inline-block'}}>
                <div className="header-name">{props.name}</div>
            </div>
        </div>
    </>
}

/**
 * List all the github users
 * 
 * @param {*} props 
 * @returns Component
 */
function ListPerson(props) {
    var page = props.page;
    if(isNaN(page)) page = 1;
    const { data, error } = useSWR(`http://api.github.com/search/users?page=${page}&q=location%3Amadagascar&per_page=10`, fetcher)

    if (error) return <div>failed to load{error.toString()}</div>
    if (!data) return <div>loading...</div>
    var a = [];
    data.items.forEach(element => {
        a.push(<List name={element.login} key={element.id} src={element.avatar_url}/>)
    });

    return <>{a}</>
}

export default ListPerson;