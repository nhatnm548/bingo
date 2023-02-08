import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [result, setResult] = useState({});

  const showList = () => {
    return new Array(10).fill(0).map((_, i) => {
      const min = 10 * i;
      const max = 10 * (i + 1) - 1;

      const list = Object.keys(result)
        .map((number) => {
          if (number >= min && number <= max) {
            return `${number}`;
          }
        })
        .filter(Boolean);
      return (
        <li>
          <b>{`Hàng ${i === 0 ? 'đơn vị' : i}: `}</b>
          {`${list.join(', ')}`}
        </li>
      );
    });
  };

  return (
    <div className="p-3">
      <Button
        variant="primary"
        size="lg"
        disabled={Object.keys(result).length === 90}
        onClick={() => {
          let number;

          do {
            number = 1 + Math.floor(Math.random() * 90);

            if (result[number]) {
              continue;
            }

            break;
          } while (true);

          result[number] = true;

          setResult(result);

          setRandomNumber(number);
        }}
      >
        {Object.keys(result).length === 90
          ? 'Hết xí quách rồi...'
          : 'Lắc cái...'}
      </Button>
      <Button
        className="ms-2"
        variant="danger"
        size="lg"
        onClick={() => {
          setRandomNumber(undefined);
          setResult({});
        }}
      >
        Chơi lại đê...
      </Button>
      <p className="mt-2">
        Con số gì đây con số gì đây: {`${randomNumber ?? ''}`}
      </p>
      <p>Danh sách:</p>
      <ul>{showList()}</ul>
    </div>
  );
}

export default App;
