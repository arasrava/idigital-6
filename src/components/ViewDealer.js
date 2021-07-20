import React, {Component} from 'react';
import DealerService from '../Services/DealerService';

class ViewDealer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dealers: []
        }
        this.addDealer = this.addDealer.bind(this);
        this.viewDealer = this.viewDealer.bind(this);
        this.updateDealer = this.updateDealer.bind(this);
        this.deleteDealer = this.deleteDealer.bind(this); 
    }
    deleteDealer(id){ 

        DealerService.deleteDealer(id).then( res => { 

            this.setState({dealer: this.state.dealers.filter(dealer => dealer.dealerId !== id)}); 

        }); 

    } 

    viewDealer(id){
        this.props.history.push('/view-dealer/'+id);
    }
    updateDealer(id) {
        this.props.history.push('/add-dealer/'+id);
    }
    componentDidMount() {
        DealerService.getDealers().then((res) => {
            console.log(res.data);
            this.setState({dealers:res.data});
        });
    }
    addDealer() {
        this.props.history.push('/add-dealer/_add');
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Dealers List </h2>
                {/* <button className="btn btn-primary" onClick={this.addDealer}>Register Dealer</button> */}
                <div className ="row">
                    
                </div>
                <br></br>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        {/* <thread> */}
                            <tr>
                                <th> Dealer Id</th>
                                <th>Dealer Name</th>
                                <th>Dealer Contact Number</th>
                                <th>Dealer Email Id</th>
                                <th> Dealer Password</th>
                                 <th> Action</th> 
                            </tr>
                        {/* </thread> */}
                        <tbody>
                            {
                                this.state.dealers.map(
                                    dealer =>
                                    
                                    <tr key={dealer.dealerId}>
                                        <td>{dealer.dealerId}</td>
                                        <td>{dealer.dealerName}</td>
                                        <td>{dealer.dealerContactNumber}</td>
                                        <td>{dealer.dealerEmailId}</td> 
                                        <td>{dealer.dealerPassword}</td>
                                         <td> 
                                             <button onClick={ () => this.updateDealer(dealer.dealerId)} className="btn btn-info">Update</button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDealer(dealer.dealerId)} className="btn btn-danger">Delete </button> 
                                             <button style={{marginLeft:"10px"}} onClick={ () => this.viewDealer(dealer.dealerId)} className="btn btn-info">View</button> 

                                         </td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
export default ViewDealer;