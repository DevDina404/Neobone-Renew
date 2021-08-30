const Why = (props) => {

    return (
        <div className='why' id='why' style={{marginBottom:"100px"}} >
            <div className='container'>
                <div className='section-title' style={{ paddingTop: "120px"}}>
                    <h2>Why Neobone ?</h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-4'>
                            <img src={d.icon} alt=" " className="why-icons"/>
                                <div className='desc'>
                                    <h4>{d.title}</h4>
                                    <p>{d.text}</p>
                                   </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    );

}

export default Why