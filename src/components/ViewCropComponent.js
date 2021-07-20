import React, { Component } from "react";
import CropService from "../Services/CropService";

class ViewCropComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      crop: {},
    };
  }

  componentDidMount() {
    CropService.getCropById(this.state.id).then((res) => {
      this.setState({ crop: res.data });
    });
  }

  goBack(){ 

    this.props.history.push('/crop'); 

} 

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Crop Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Crop Id: </label>
              <div> {this.state.crop.cropId}</div>
            </div>

            <div className="row">
              <label> Farmer Id: </label>
              <div> {this.state.crop.farmerId}</div>
            </div>
            <div className="row">
              <label> Crop Name: </label>
              <div> {this.state.crop.cropName}</div>
            </div>
            <div className="row">
              <label> Farmer Name: </label>
              <div> {this.state.crop.farmerName}</div>
            </div>

            <div className="row">
              <label> Price : </label>
              <div> {this.state.crop.price}</div>
            </div>
          </div>
          <button className="btn btn-danger" onClick={this.goBack.bind(this)} style={{marginLeft: "10px"}}>Back</button> 
        </div>
      </div>
    );
  }
}

export default ViewCropComponent;