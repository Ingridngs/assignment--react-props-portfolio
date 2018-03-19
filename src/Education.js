import React, {Component} from "react";


class EduList extends Component {
	
  render(){
    const allData= this.props.data;

    
		return (
             <section>
                <h4>Education</h4>
                  <div className="degree-list">
                    {allData.map(function(data){
                      return( 
                         <div className="degree">
                            <h5 className="degree__institute"> { data.institute } </h5>
                            <p className="degree__field"> { data.fieldOfStudy }</p>
                            <p className="degree__dates"> { data.dates } </p>
                         </div>
                    )
             })}
                 
                  </div>
            </section>
            
             )
	      }
}

export default EduList;