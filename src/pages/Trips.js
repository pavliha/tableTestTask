import React, {Component} from 'react'
import Layout from '../components/Layout'
import {connect} from 'react-redux'
import TripCard from "../components/TripCard";
import {getTrips} from "../actions/trips.action";
import Spinner from 'react-spinkit';
import {Col} from "reactstrap";
import InfiniteScroll from "react-infinite-scroller"

@connect((store) => store.tripsReducer)
export default class MatchingTripsContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getTrips({$skip: this.props.skip, $limit: this.props.limit}))
    }

    loadFunc(e) {
        this.props.dispatch(getTrips({$skip: this.props.skip + 9, $limit: this.props.limit + 9}))
    }

    render() {
        const {trips, total, loading, skip} = this.props

        const hasMore = (skip <= total)

        return <Layout>
            <section className='container mt-4 '>
                <h4 className='text-muted'>Matching trips</h4>
                <p className='pt-3 pb-2'>{total ? total + ' results' : ''}</p>

                <InfiniteScroll
                    pageStart={0}
                    initialLoad={false}
                    loadMore={this.loadFunc.bind(this)}
                    hasMore={hasMore}
                    className={'row justify-content-start animated ZoomIn'}
                    loader={<Col xs={12} className="d-flex justify-content-center align-items-center"><Spinner
                        name='double-bounce'/></Col>}>
                    {trips.map((trip, key) =>
                        <Col key={key} lg={4} md={6} xs={12} sm={12}>
                            <TripCard style={{}} trip={trip}/>
                        </Col>
                    )}
                    {!hasMore ? <Col xs={12} className={'p-2 pb-4 text-center'}>“That’s all for now. Cooking more trips. Coming soon.” I do not have any designs for this. Feel free to be creative!</Col> : ''}
                </InfiniteScroll>

            </section>
        </Layout>
    }
}