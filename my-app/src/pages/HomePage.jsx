
import Button from "/src/components/Button.jsx"

function logCount(count) {
  console.log(count);
}

function LoadPage() {
    return (
    <section>
    <div>
      <h1>Welcome to My Website!</h1>
      <p>There is nothing to see here yet...</p>
      <p>Anyways, here is a button</p>
    </div>
    <Button 
    onClick = {logCount}
    />  
    </section>
  ); 
}

export default LoadPage