export async function getALLData(){
    const res = await fetch(`https://api.spacexdata.com/v3/launches`);
    return res.json();
}