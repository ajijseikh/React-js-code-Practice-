 function ReuseComponent(propsDataReceive){
    return (
        <div>
            <span> {propsDataReceive.propsDataSent.name}</span>
            <span> {propsDataReceive.propsDataSent.email}</span>
            <span> {propsDataReceive.propsDataSent.mob}</span>
        </div>
    )
 }
 export default ReuseComponent;