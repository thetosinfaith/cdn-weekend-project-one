<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mukta:wght@200;300;400;500;600;700;800&family=Outfit:wght@500&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

function CustomBox(props) {
  const customBoxStyle = {
    height: "250px",
    width: "220px",
    borderRadius: "5px",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  };

  return (
    <div style={customBoxStyle}>
      {props.children}
    </div>
  );
}

function InnerBox(props) {
  const innerBoxStyle = {
    borderRadius: "5px",
    height: "100px",
    width: "220px",
    backgroundColor: "#280034",
    color: "white",
    display: "flex",
    flexDirection: "row",
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: "9px",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "75px",
    gap: "5px",
    padding: "10px",
  };

  return (
    <div style={innerBoxStyle}>
      <h1>{props.text}</h1>
    </div>
  );
}

function App() {
  const mainWrapperStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  };

  const flexContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    padding: "5px",
  };

  const styledContainerStyle = {
    ...flexContainerStyle,
    background: "linear-gradient(to left, #970045, #970045, #970045)",
    color: 'white',
  };

  return (
    <div style={mainWrapperStyle}>
      <div style={styledContainerStyle}>
        <CustomBox>
          <InnerBox 
            text="The Many Media Mutations of Teenage Mutant Ninja Turtles"
          />
        </CustomBox>
        <CustomBox>
          <InnerBox 
            text="A Day in the Life of TMNT's Foot Clan"
          />
        </CustomBox>
        <CustomBox>
          <InnerBox 
            text="Saw X Filmmakers on Going Old School With an Untold Chapter for Jigsaw"
          />
        </CustomBox>
        <CustomBox>
          <InnerBox 
            text="Honest Game Trailers | Final Fantasy XVI"
          />
        </CustomBox>
        <CustomBox>
          <InnerBox 
            text="Captain America Sings! How Disney Made Rogers: The Musical a Reality"
          />
        </CustomBox>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
