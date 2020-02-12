const Body = props => {
  return (
    <div className="page-body">
      {props.children}
      <style jsx>{`
        .page-body {
          padding: 16px 0;

          h3:first-of-type {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Body;
