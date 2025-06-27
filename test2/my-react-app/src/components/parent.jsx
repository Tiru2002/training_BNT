
import Child from './Child';

function Parent({ message }) {
  return (
    <div>
      <h2>This is Parent</h2>
      <Child message={message} />
    </div>
  );
}

export default Parent;
