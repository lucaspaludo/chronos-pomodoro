import { Heading } from './components/Heading';
import './styles/theme.css'
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {


  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
        voluptatem sed aperiam optio temporibus sequi dolorum sapiente voluptas
        facilis harum eos maxime ipsam, asperiores, vitae nisi! In, dolorem
        fugit. Fugit.
      </p>
    </>
  );
}
