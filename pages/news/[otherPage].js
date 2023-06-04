import { useRouter } from "next/router"
// our-domain.com/news/隨意參數都會導向這頁

const CasualPage=(props)=>{
    // const router = useRouter()
    // console.log('router:', router)

    return <h1>this is casual other page_{props.data}</h1>
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: {otherPage: 'xxx'}},
            {params: {otherPage: 'ooo'}}, 
        ],
        fallback: false
    }
}

export async function getStaticProps(context){
    const data = context.params.otherPage
    return {
        props:{
            data: data
        }
    }
}

export default CasualPage