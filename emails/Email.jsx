import React from 'react';
import { Button, Html } from '@react-email/components';

const Email = () => {
  return (
    <>
      <div>
        <Html>
          <Button
            href="https://example.com"
            style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
          >
            Click meeee
          </Button>
        </Html>
      </div>
    </>
  );
};

export default Email;
