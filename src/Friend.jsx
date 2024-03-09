export default function Friend({friend}){
    const {id, name, email,address} = friend;
    const {street,suite,city,zipcode,geo}= address;
    return (
        <div className="box">
            <h4>Id : {id}</h4>
            <h4>Name: {name}</h4>
            <h4>email: {email} </h4>
            <h4>Adreess: </h4>
            <p>street: {street}</p>
            <p>suite: {suite} </p>
            <p>city: {city} </p>
            <p>zipcode: {zipcode} </p>
        </div>
    )
}