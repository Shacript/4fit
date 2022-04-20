import { useState, useEffect } from "react";

import RecordService from "../../../services/record.service";

const WeightRecords = ({ date }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    RecordService.getUesrRecords("weight_record", date).then(({ data }) =>
      setRecords(data)
    );
  }, [date]);

  return (
    <div className="WeightRecords TaskRecords">
      <div className="table">
        <div className="row">
          <div className="column-left">Saved time</div>
          <div className="column-right">Weight</div>
        </div>
        {records.map((record) => (
          <div className="row" key={record._id}>
            <div className="column-left">
              {new Date(record.timestamp).toLocaleTimeString()}
            </div>
            <div className="column-right">{record.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightRecords;
