const App = () => (
  <div>
    <Person 
      name="Harry" 
      age={17} 
      hobbies={['quidditch','look for voldemort']}
    />
    <Person 
      name="Ron" 
      age={18} 
      hobbies={['comets','play chess']}
    />
    <Person 
      name="Hermione" 
      age={16} 
      hobbies={['study','advocate for elves']}
      obj={{test:"obj1"}}
    />
  </div>
  
)
  
