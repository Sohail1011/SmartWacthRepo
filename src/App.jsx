import Navigation from "./Components/Navigation";
import { Product } from "./Components/Product";
import AppleWatch from './img/SmartWatchApple.png';


export default function App() {
  return (<>
    <Navigation />
    <div className="container">
      <div className="text-intro">
        <h1>Smart Digital <br /> Watch For <br /> Luxurious Life</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dignissimos expedita magnam eos error minus dolorum sapiente quibusdam dolores voluptatibus molestiae totam vero vel reiciendis laudantium voluptates, dolore amet asperiores!</p>
        <button>Buy Products</button>
      </div>
      <img src={AppleWatch} alt="SmartWatch" />
    </div>
    <Product />
  </>
  )
}
