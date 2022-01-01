import React from 'react'
import dynamic from 'next/dynamic'
import { getALLData } from '../../lib/GetApi';
const LogicWheather = dynamic(() => {import('../../components/LogicWheather')})


export async function getStaticProps(context) {
    const data = await getALLData();
    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
                notFound: true
            }
        }
    }
    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}
export default function index({data}) {
    console.log(data);
    return (
        <LogicWheather>
            <h1>ViewAPI</h1>
        </LogicWheather>
    )
}
