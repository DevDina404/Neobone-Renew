const faq = (props) => {
    return (
        <div className="faq" id="faq" style={{ paddingBottom: "100px" }}>
            <div className='container'>
                <div className='section-title' style={{ paddingTop: "150px" }}>
                    <h2>FAQ</h2>
                </div>
                <div id="accordion">
                {props.data ?
                        props.data.map((d, i) => (
                    <div class="card">
                        <div class="card-header collapsed" id="headingOne" data-toggle="collapse" data-target={"#" + d.id} aria-expanded="true">
                                <p>{d.question}<span></span></p>
                        </div>

                        <div id={d.id} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                            {d.answer}
                            </div>
                        </div>
                    </div>
                     )) :
                     "Loading..."}
                </div>
            </div>
        </div>
    );
}

export default faq