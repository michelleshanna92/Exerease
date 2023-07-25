import React from 'react';

const Calendar = ({ values }) => {
  if (!values.length) {
    return <h3>There is No data</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {values &&
          values.map((value) => (
            <div key={value} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {value} <br />
                </h4>
            </div>
         </div>
          ))}
      </div>
    </div>
  );
};

export default Calendar;