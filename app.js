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
      fontSize: "10px",
      justifyContent: "center",
      alignItems: "center", 
      position: "relative", 
      top: "75px",
      gap: "5px", 
    };
  
    return (
      <div style={nestedBoxStyle}>
        <h1>{props.line1}</h1>
        <h1>{props.line2}</h1>
        <h1>{props.line3}</h1>
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
              line1="The Many Media"
              line2="Mutations of Teenage"
              line3="Mutant Ninja Turtles"
            />
          </StyledBox>
          <StyledBox>
            <NestedStyledBox 
              line1="The Many Media"
              line2="Mutations of Teenage"
              line3="Mutant Ninja Turtles"
            />
          </StyledBox>
          <StyledBox>
            <NestedStyledBox 
              line1="The Many Media"
              line2="Mutations of Teenage"
              line3="Mutant Ninja Turtles"
            />
          </StyledBox>
          <StyledBox>
            <NestedStyledBox 
              line1="The Many Media"
              line2="Mutations of Teenage"
              line3="Mutant Ninja Turtles"
            />
          </StyledBox>
          <StyledBox>
            <NestedStyledBox 
              line1="The Many Media"
              line2="Mutations of Teenage"
              line3="Mutant Ninja Turtles"
            />
          </StyledBox>
        </div>
      </div>
    );
  }
  
  ReactDOM.createRoot(document.getElementById('root')).render(<MyApp />);
  