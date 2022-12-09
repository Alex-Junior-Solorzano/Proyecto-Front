import React, { Component } from 'react';
import {
    retrieveRickMorty
} from '../redux/slices/tarjeta/cardslice'
import { connect } from 'react-redux';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol
  } from "mdb-react-ui-kit";

class RickMorthyList extends Component {

    constructor(props) {
        super(props);
        this.refreshData = this.refreshData.bind(this);

        this.state = {
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: "",
          };
    }

    refreshData() {
        this.setState({
          currentTutorial: null,
          currentIndex: -1,
        });
      }

 

    componentDidMount() {
        this.props.retrieveRickMorty();
    }

    componentWillReceiveProps(nextProps) {

    }

  
    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {

        const{ rickmortys}=this.props;
        console.log(rickmortys)
        return (
            <div>
            <MDBRow  className="row-cols-1 row-cols-md-3 g-4 ">
            
          {rickmortys.map((card) => (
            <MDBCol key={card.id} sm='6'>
                <MDBCard className='h-100'>
                    <MDBCardImage src={card.image} fluid alt="..."  position='top'/>
                  <MDBCardBody>
                    <MDBCardTitle>{card.name}</MDBCardTitle>
                    <MDBCardText>Especie: {card.species}</MDBCardText>
                    <MDBCardText>Location: {card.location.name}</MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
          
          ))}  </MDBRow>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      rickmortys: state.rickmorty,
    };
  };
  
export default connect(mapStateToProps, {
    retrieveRickMorty
  })(RickMorthyList);