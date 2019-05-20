import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { fromJS } from 'immutable';

const LAUNCH_QUERY = gql`
  query Launches($flight_number: Int!) {
      launch(flight_number: $flight_number) {
        rocket {
            rocket_id
            rocket_name
            rocket_type
          }
      }
  }
`

export class Launch extends Component {
    render() {
        console.log(this.props);
        let flight_number = parseInt(this.props.match.params.id);

        return (
            <>
                <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error);
                        console.log(fromJS(data));
                        const  rocket_id = fromJS(data).getIn(['launch', 'rocket', 'rocket_id']);
                        return (
                            <div>
                                <h4>{rocket_id}</h4>
                                {/* <h4>{rocket_name}</h4>
                                <h4>{rocket_type}</h4> */}
                                </div>
                        );
                    }}
                </Query>
            </>
        )
    }
}

export default Launch
