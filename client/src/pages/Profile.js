import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE} from '../utils/queries';

const Profile = () => {


    const { profileId } = useParams();
  
    const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
      variables: { profileId: profileId },
    });
  
    const profile = data?.profile || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div className='flex-row justify-center'>
      <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's is your current profile.."
            />
          )}
        </div>
    </div>
  )
}

export default Profile;
