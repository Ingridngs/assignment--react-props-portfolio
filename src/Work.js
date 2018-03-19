import React, {Component} from "react";

class Work extends Component {
	render(){
    const allData=this.props.data
		return (
             <section>
                <h4>Work Experience</h4>
                <div className="job-timeline">
                { allData.map(function(data){
                    return ( 
                            <div className="job">
                               <div className="job__years">
                                <h6 className="job__end">{data.years.end}</h6>
                                <h6 className="job__start">{data.years.start}</h6>
                               </div>
                               <h5 className="job__title">{data.title}</h5>
                               <h5 className="job__company">{data.company}</h5>
                               <p className="job__description">{data.description}</p>
                            </div>
                          )
                })}
                  
                   </div>
                   </section>
            
             )
	     }
}

export default Work;