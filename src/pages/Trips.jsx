import React from 'react'
import Layout from '../components/Layout'
import {connect} from 'react-redux'
import {Container} from "reactstrap";
import Chef from "../containers/Chef";
import TripList from "../containers/TripList";
import {CARD_LOAD_LIMIT} from "../actions/constants";

const Trips = ({limit}) =>
    <Layout>
        <Container className='mt-4'>
            <TripList/>
        </Container>
        {limit >= CARD_LOAD_LIMIT ? <Chef/> : null}
    </Layout>

connect((store) => store.tripsReducer)(Trips)

export default Trips