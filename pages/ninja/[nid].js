import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import { getNinja } from '../../lib/api';

const DetailsPage = () => {
  const router = useRouter();
  const { nid } = router.query;
  const [ninja, setNinja] = useState(null);

  useEffect(() => {
    const getSingleNinja = async (id) => {
      const ninja = await getNinja(id);
      setNinja(ninja);
    };

    if (nid) {
      getSingleNinja(nid);
    }
  }, []);

  return (
    <>
      <h1> Details </h1>
      <h4>Ninja Name: {ninja?.name}</h4>
      <Button onClick={() => router.back()}>
        Go back
      </Button>
    </>
  );
};

export default DetailsPage;
