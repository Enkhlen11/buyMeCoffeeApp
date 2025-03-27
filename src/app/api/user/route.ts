export async function GET(){
    return new Response(JSON.stringify({data:"Hello World"}))
}
export async function POST (req:Request){
    const body= await req.json()
    console.log({body})
    return new Response("Hello World")
}
