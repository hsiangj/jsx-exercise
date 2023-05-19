const App = () => (
  <div>
    <Tweet 
      username="hp" 
      name="harry" 
      date={new Date().toDateString()}
      message="yay quidditch" 
    />
    <Tweet 
      username="rw" 
      name="ron" 
      date={new Date().toDateString()}
      message="hi" 
    />
    <Tweet 
      username="hg" 
      name="hermione" 
      date={new Date().toDateString()}
      message="wingardium leviosa" 
    />
  </div>
)

