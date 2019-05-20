import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { fromJS } from 'immutable';
import SingleLaunch from './Single_Launch';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery  {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launches extends Component {
    render() {
        return (
            <>
                <Query query={LAUNCHES_QUERY} >
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error);
                            const i = fromJS(data);
                            console.log(i);
                            return (
                                i.get('launches').map((item, i) => {
                                    return <SingleLaunch key={i} data={item} />
                                })
                            );
                        }
                    }
                </Query>
            </>
        )
    }
}

export default Launches
