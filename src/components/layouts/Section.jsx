import React from 'react';

const Section = ({ id, children, className = "" }) => (
    <section
      id={id}
      className={`py-20 scroll-mt-16 ${className}`}
    >
      {children}
    </section>
  );

export default Section;