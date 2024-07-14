/* eslint-disable react/prop-types */
export default function Toda({toda}){
    const{id,title}=toda
    return(
        <div>
           <h1>listId:{id}</h1>
           <h1>listTitle:{title}</h1>
        </div>
    )
}