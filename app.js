<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mukta:wght@200;300;400;500;600;700;800&family=Outfit:wght@500&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

function StyledBox(props) {
  const boxStyle = {
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
    <div style={boxStyle}>
      {props.children}
    </div>
  );
}

function NestedStyledBox(props) {
  const nestedBoxStyle = {
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
    <div style={nestedBoxStyle}>
      <h1>{props.line1}</h1>
    </div>
  );
}

function MyApp() {
  const mainContainer = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    padding: "5px",
  };

  const container1 = {
    ...containerStyle,
    background: "linear-gradient(to left, #970045, #970045, #970045)",
    color: 'white',
  };

  return (
    <div style={mainContainer}>
      <div style={container1}>
        <StyledBox>
          <NestedStyledBox 
            line1="The Many Media Mutations of Teenage Mutant Ninja Turtles"
          />
        </StyledBox>
        <StyledBox>
          <NestedStyledBox 
            line1="A Day in the Life of TMNT's Foot Clan"
          />
        </StyledBox>
        <StyledBox>
          <NestedStyledBox 
            line1="Saw X Filmmakers on Going Old School With an Untold Chapter for Jigsaw"
          />
        </StyledBox>
        <StyledBox>
          <NestedStyledBox 
            line1="Honest Game Trailers | Final Fantasy XVI"
          />
        </StyledBox>
        <StyledBox>
          <NestedStyledBox 
            line1="Captain America Sings! How Disney Made Rogers: The Musical a Reality"
          />
        </StyledBox>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);
