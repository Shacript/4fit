const DashboardPage = () => {
  return (
    <div className="DashboardPage">
      <div className="header">
        <h3>Dashboard</h3>
        <p>Date</p>
        <div className="user-display">
          <div className="user-infomation">
            <p>Name</p>
            <p>Current Rank</p>
          </div>
          <img src="#" alt="" />
        </div>
      </div>
      <div className="Infomation">
        <h4>Infomation</h4>
      </div>
      <div className="Infomation">
        <h4>Daily Tasks</h4>
      </div>
      <div className="Chart">
        <h4>Record Chart</h4>
      </div>
    </div>
  );
};

export default DashboardPage;
